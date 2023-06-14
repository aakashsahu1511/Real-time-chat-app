// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0p8mrRD8iMQqiya9DQzmAMA8CejeDDxA",
  authDomain: "chatapp-49596.firebaseapp.com",
  projectId: "chatapp-49596",
  storageBucket: "chatapp-49596.appspot.com",
  messagingSenderId: "100649334658",
  appId: "1:100649334658:web:1ee6c5c8147f7a5d59419b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();