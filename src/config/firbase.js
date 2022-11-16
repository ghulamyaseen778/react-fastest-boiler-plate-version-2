// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBPXKb_L_nLkTZnqOTSwz4P6TL15OHDoOA",
  authDomain: "test-project-7c900.firebaseapp.com",
  projectId: "test-project-7c900",
  storageBucket: "test-project-7c900.appspot.com",
  messagingSenderId: "896210806748",
  appId: "1:896210806748:web:d50f02f8f5773552069119"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {db,auth}