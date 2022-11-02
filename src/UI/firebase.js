// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth } from 'firebase/auth'
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsyi7aQZU5i20eTB-gM3EpRmfuI0JY-LI",
  authDomain: "aide-app-navegacion.firebaseapp.com",
  projectId: "aide-app-navegacion",
  storageBucket: "aide-app-navegacion.appspot.com",
  messagingSenderId: "900902538198",
  appId: "1:900902538198:web:337d215d286f37e05c7277",
  measurementId: "G-WZR012WZ9Z"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)