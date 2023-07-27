// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYkRvg4h_Ka65SzwvMd7vERpKliXPm_6I",
  authDomain: "journalapp-6dd8b.firebaseapp.com",
  projectId: "journalapp-6dd8b",
  storageBucket: "journalapp-6dd8b.appspot.com",
  messagingSenderId: "720600697404",
  appId: "1:720600697404:web:474a1ba8473804cae39139"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(firebaseApp);
export const firebaseDB = getFirestore(firebaseApp);