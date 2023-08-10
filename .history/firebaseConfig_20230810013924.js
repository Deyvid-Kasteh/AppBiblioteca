// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCiTstc0fuHYW3iJs-j8CqQVH0QWiTvFRo",
  authDomain: "signin-a77d8.firebaseapp.com",
  projectId: "signin-a77d8",
  storageBucket: "signin-a77d8.appspot.com",
  messagingSenderId: "744407928857",
  appId: "1:744407928857:web:21ba471174a43d8137da88",
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);


// android: 426033460224-jj43m9je8i0hia6a156c3qhliaa74ni7.apps.googleusercontent.com
// npx @react-native-community/cli doctor