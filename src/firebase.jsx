import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClUw5NqUVyvgBEg5VqTQjySO8zJLmY71k",
  authDomain: "pantry-tracker-ccc0d.firebaseapp.com",
  projectId: "pantry-tracker-ccc0d",
  storageBucket: "pantry-tracker-ccc0d.appspot.com",
  messagingSenderId: "6220089834",
  appId: "1:6220089834:web:00f37b86055f0dd1d90a93",
  measurementId: "G-N53Y1BQBHG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);