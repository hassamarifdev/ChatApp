import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCusUNk6AVM1oy9tJXZaH9BYKpPPd-QPVI",
  authDomain: "chatapp-6ecf1.firebaseapp.com",
  projectId: "chatapp-6ecf1",
  storageBucket: "chatapp-6ecf1.appspot.com",
  messagingSenderId: "492656593755",
  appId: "1:492656593755:web:90bca908088d7bbc05e87e",
  measurementId: "G-ZM999V8EFG",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const database = getFirestore();
