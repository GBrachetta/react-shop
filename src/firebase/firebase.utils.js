import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBa3MRDLT95xQg-Eo9H--HvinAo17BoP-k",
  authDomain: "react-shop-db-3e340.firebaseapp.com",
  projectId: "react-shop-db-3e340",
  storageBucket: "react-shop-db-3e340.appspot.com",
  messagingSenderId: "729574238052",
  appId: "1:729574238052:web:e709acb75370551b617c71",
  measurementId: "G-BH9FLZK8SJ",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;