import firebase from "firebase/app";
import  'firebase/firestore'



// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const Config = {
  apiKey: "AIzaSyBbjqzpkyHh_W8bYJJacBF4Frr9Yi8X3w8",
  authDomain: "he-admin-b9e4b.firebaseapp.com",
  databaseURL: "https://he-admin-b9e4b-default-rtdb.firebaseio.com",
  projectId: "he-admin-b9e4b",
  storageBucket: "he-admin-b9e4b.appspot.com",
  messagingSenderId: "16181424960",
  appId: "1:16181424960:web:af44b49ec67a5c147fc0a5",
  measurementId: "G-28R245V9ZC"
};

// Initialize Firebase
firebase.initializeApp(Config)
const db = firebase.firestore();
// const storage = firebase.storage();
export {db, firebase as default};