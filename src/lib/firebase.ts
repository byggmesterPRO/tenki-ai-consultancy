import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyATVRmWs0Ei6xrFkIYBlcATfjMr1gHuSRs",
  authDomain: "straight-data.firebaseapp.com",
  projectId: "straight-data",
  storageBucket: "straight-data.firebasestorage.app",
  messagingSenderId: "526526702616",
  appId: "1:526526702616:web:bd8448f65140505bdc0f6d",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
export const auth = getAuth(app);
export default app;
