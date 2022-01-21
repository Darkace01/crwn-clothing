import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyBYPA1M5mqqLJwMjZIzt371XidqSQCZv20",
  authDomain: "crwn-db-6fbf7.firebaseapp.com",
  projectId: "crwn-db-6fbf7",
  storageBucket: "crwn-db-6fbf7.appspot.com",
  messagingSenderId: "948678235474",
  appId: "1:948678235474:web:be5742cc912f447b81168b",
  measurementId: "G-T132VZH0C2",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
