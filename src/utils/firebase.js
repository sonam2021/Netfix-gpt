// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChpfL4cN_y-i-VReQ-WCO1fZE1WBQawGE",
  authDomain: "netflixgpt-eec9c.firebaseapp.com",
  projectId: "netflixgpt-eec9c",
  storageBucket: "netflixgpt-eec9c.firebasestorage.app",
  messagingSenderId: "1052867104549",
  appId: "1:1052867104549:web:19f1d34995771e6c1914cc",
  measurementId: "G-RY6Y04D928"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();