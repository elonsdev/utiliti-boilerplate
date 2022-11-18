import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDfjfIRndy_5E8JN53D4kTbEyQr_VnJDio",
  authDomain: "utiliti-boilerplate.firebaseapp.com",
  projectId: "utiliti-boilerplate",
  storageBucket: "utiliti-boilerplate.appspot.com",
  messagingSenderId: "891154419421",
  appId: "1:891154419421:web:80628f53768ab21b74d534",
  measurementId: "G-8TSCC1K63B",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
