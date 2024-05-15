import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./FireConfig";
import { getStorage } from "firebase/storage";

export const app = initializeApp(firebaseConfig);
export const Storage = getStorage(app);