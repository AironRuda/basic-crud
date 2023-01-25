import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAfu0fL8OlWWTGXfxoYHZiP1KKqM-Pw-Qs",
  authDomain: "chat-app-38e3a.firebaseapp.com",
  projectId: "chat-app-38e3a",
  storageBucket: "chat-app-38e3a.appspot.com",
  messagingSenderId: "1083301476020",
  appId: "1:1083301476020:web:3ce11d618db888f79a09e1",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
