import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCzB5jjUpY4tWxt4B3SXegTKIzenszdp7A",
  authDomain: "uvic-37a50.firebaseapp.com",
  projectId: "uvic-37a50",
  storageBucket: "uvic-37a50.appspot.com",
  messagingSenderId: "1034349654230",
  appId: "1:1034349654230:web:9f963063bdc25c0e951977",
  measurementId: "G-2R8HEVDHMC",
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
