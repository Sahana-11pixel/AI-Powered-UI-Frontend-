
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJGfGtD4gp0CcjPSYOUTbrUSKddhEY9Ws",
  authDomain: "ai-powered-uicodegen.firebaseapp.com",
  projectId: "ai-powered-uicodegen",
  storageBucket: "ai-powered-uicodegen.firebasestorage.app",
  messagingSenderId: "452849444466",
  appId: "1:452849444466:web:759a4480bb4220384dc4eb",
  measurementId: "G-4V81WN9W3J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


