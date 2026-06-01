
// // Import Firebase SDK functions
// import { initializeApp } from "firebase/app";
// import { getAuth, setPersistence, browserLocalPersistence } from "firebase/auth";

// // Firebase configuration (use default firebaseapp.com domain)
// const firebaseConfig = {
//   apiKey: "AIzaSyDJGfGtD4gp0CcjPSYOUTbrUSKddhEY9Ws",
//   authDomain: "ai-powered-uicodegen.firebaseapp.com",
//   projectId: "ai-powered-uicodegen",
//   storageBucket: "ai-powered-uicodegen.firebasestorage.app",
//   messagingSenderId: "452849444466",
//   appId: "1:452849444466:web:759a4480bb4220384dc4eb",
//   measurementId: "G-4V81WN9W3J"
// };

// // Initialize Firebase app
// const app = initializeApp(firebaseConfig);

// // Export Auth instance
// export const auth = getAuth(app);

// // Persist auth across page reloads (local persistence)
// setPersistence(auth, browserLocalPersistence).catch(err =>
//   console.error('Persistence error:', err)
// );

// // Custom action URL for email verification and password reset
// export const authActionUrl = "https://ai-powered-uicodegen.vercel.app/auth-action";

// export default app;
// -----
// Firebase SDK initialization
// Docs: https://firebase.google.com/docs/web/setup
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

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

// Export auth instance for use in signup/login pages
export const auth = getAuth(app);
export default app;