import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { firebaseConfig } from "./FireConfig";

export const app = initializeApp(firebaseConfig);
export const Storage = getStorage(app);