// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7Qfd75GcWhLAJqaUTaUtedKbDDmN4WhU",
  authDomain: "appbiblioteca-afa10.firebaseapp.com",
  projectId: "appbiblioteca-afa10",
  storageBucket: "appbiblioteca-afa10.appspot.com",
  messagingSenderId: "222273696743",
  appId: "1:222273696743:web:1d3db88f54d18c56784342",
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);


// android: 222273696743-cfo2t0ghcqh0b6nau71ql0scusl0m8cr.apps.googleusercontent.com
// npx @react-native-community/cli doctor