// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// console.log('inside Firebase config', import.meta.env.VITE_PASS)
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: "react-dragon-news-auth-b79f0.firebaseapp.com",
  projectId: "react-dragon-news-auth-b79f0",
  storageBucket: "react-dragon-news-auth-b79f0.appspot.com",
  messagingSenderId: "559171718000",
  appId: "1:559171718000:web:6d5e80f2e088fff25a5db5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;