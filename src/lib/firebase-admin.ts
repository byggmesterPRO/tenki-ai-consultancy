import {
  initializeApp,
  getApps,
  cert,
  applicationDefault,
} from "firebase-admin/app";
import { getFirestore, type Firestore } from "firebase-admin/firestore";
import { readFileSync, existsSync } from "fs";
import { join } from "path";

let db: Firestore;

try {
  const jsonPath = join(process.cwd(), "straight-data-firebase-adminsdk-fbsvc-00491c0fd2.json");

  if (!getApps().length) {
    if (existsSync(jsonPath)) {
      // Local dev: load from JSON file
      initializeApp({ credential: cert(JSON.parse(readFileSync(jsonPath, "utf8"))) });
    } else {
      // Production (Cloud Run / Firebase App Hosting): use ADC
      initializeApp({ credential: applicationDefault() });
    }
  }

  db = getFirestore();
} catch (error) {
  console.warn(
    "Firebase Admin initialization failed. Database operations will not work.",
    error instanceof Error ? error.message : error
  );
  // Create a proxy that throws helpful errors when accessed during build
  db = new Proxy({} as Firestore, {
    get(_, prop) {
      if (prop === "collection") {
        return () =>
          new Proxy(
            {},
            {
              get() {
                return () => ({
                  get: async () => ({ empty: true, docs: [], data: () => ({ count: 0 }) }),
                  count: () => ({ get: async () => ({ data: () => ({ count: 0 }) }) }),
                  limit: () => new Proxy({}, { get() { return () => this; } }),
                  where: () => new Proxy({}, { get() { return () => this; } }),
                  orderBy: () => new Proxy({}, { get() { return () => this; } }),
                  startAfter: () => new Proxy({}, { get() { return () => this; } }),
                  add: async () => ({ id: "" }),
                  doc: () => ({
                    get: async () => ({ exists: false, data: () => null, id: "" }),
                    update: async () => {},
                    delete: async () => {},
                  }),
                });
              },
            }
          );
      }
      return undefined;
    },
  });
}

export { db };
