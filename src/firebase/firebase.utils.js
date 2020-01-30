import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDl2LK16EKcJs7EwWcdJt3YZ__kJiWBqkw",
  authDomain: "react-ecommerce-95a7b.firebaseapp.com",
  databaseURL: "https://react-ecommerce-95a7b.firebaseio.com",
  projectId: "react-ecommerce-95a7b",
  storageBucket: "react-ecommerce-95a7b.appspot.com",
  messagingSenderId: "157195751989",
  appId: "1:157195751989:web:17c7a43903a6ce9d6e177c",
  measurementId: "G-YTSP6S0PYH"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`/users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (e) {
      console.log("error creating user", e.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
