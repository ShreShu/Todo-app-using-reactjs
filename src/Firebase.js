// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJ81e-h94ClncL6C37mCKez9hJryyawXk",
  authDomain: "todo-app-f2202.firebaseapp.com",
  projectId: "todo-app-f2202",
  storageBucket: "todo-app-f2202.appspot.com",
  messagingSenderId: "20860019924",
  appId: "1:20860019924:web:a78b9baefd7f266be90741",
  measurementId: "G-TB05CSKVXZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
