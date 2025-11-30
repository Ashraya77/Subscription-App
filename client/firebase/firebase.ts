// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHreEoJSG7k6vUKGP_YkLPqCNlTemV6hc",
  authDomain: "subscription-app-9c406.firebaseapp.com",
  projectId: "subscription-app-9c406",
  storageBucket: "subscription-app-9c406.firebasestorage.app",
  messagingSenderId: "644184101016",
  appId: "1:644184101016:web:e7ec9368e5b55352ae00ed",
  measurementId: "G-95NGKQHMZ3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)