// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mean-estate.firebaseapp.com",
  projectId: "mean-estate",
  storageBucket: "mean-estate.appspot.com",
  messagingSenderId: "597948102817",
  appId: "1:597948102817:web:62585fd0f646c8e5c398e0",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
