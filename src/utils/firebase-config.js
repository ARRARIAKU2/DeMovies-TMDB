import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyALE4vbtjziAUJaLy8kbxTKXFu1YRNvv4I",
  authDomain: "react-demovies-8d5d9.firebaseapp.com",
  projectId: "react-demovies-8d5d9",
  storageBucket: "react-demovies-8d5d9.appspot.com",
  messagingSenderId: "328642318538",
  appId: "1:328642318538:web:3de4aa8c27d29c065e2433",
  measurementId: "G-RF79P1B16T"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);