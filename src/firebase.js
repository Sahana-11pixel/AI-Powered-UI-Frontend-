
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDJGfGtD4gp0CcjPSYOUTbrUSKddhEY9Ws",
    authDomain: "ai-powered-uicodegen.vercel.app",
    projectId: "ai-powered-uicodegen",
    storageBucket: "ai-powered-uicodegen.firebasestorage.app",
    messagingSenderId: "452849444466",
    appId: "1:452849444466:web:759a4480bb4220384dc4eb",
    measurementId: "G-4V81WN9W3J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export auth instance for use in signup/login pages
export const auth = getAuth(app);

// Set Firebase auth to persist user session across page reloads
auth.setPersistence = () => {
    // Use local persistence by default
    return Promise.resolve();
};

// Custom action URL for email verification and password reset
export const authActionUrl = "https://ai-powered-uicodegen.vercel.app/auth-action";

export default app;




