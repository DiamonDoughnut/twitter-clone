// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiRcvqdgwFOpEm7JzoWHT66En35e5_mYM",
  authDomain: "twitter-clone-de548.firebaseapp.com",
  projectId: "twitter-clone-de548",
  storageBucket: "twitter-clone-de548.firebasestorage.app",
  messagingSenderId: "182266908294",
  appId: "1:182266908294:web:6ce60a35f7b4d346490b07",
  measurementId: "G-0G2Q2YGDVY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
export const storage = getStorage()
