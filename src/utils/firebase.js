// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2YXFZP7BSpnGG7Vz4-xWGBODefwzbhgU",
  authDomain: "netflixgpt-aaa91.firebaseapp.com",
  projectId: "netflixgpt-aaa91",
  storageBucket: "netflixgpt-aaa91.appspot.com",
  messagingSenderId: "64589041343",
  appId: "1:64589041343:web:12443888c1e7c166af000a",
  measurementId: "G-KZYMSPXL43",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
