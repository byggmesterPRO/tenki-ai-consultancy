import {
  initializeApp,
  getApps,
  cert,
  type ServiceAccount,
} from "firebase-admin/app";
import { getFirestore, type Firestore } from "firebase-admin/firestore";

let db: Firestore;

try {
  const serviceAccount: ServiceAccount = {
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  };

  if (!getApps().length) {
    initializeApp({ credential: cert(serviceAccount) });
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
