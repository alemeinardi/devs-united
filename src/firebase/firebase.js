import firebase from "firebase/app"
import { firebaseConfig } from "./firebaseConfig"
import "firebase/firestore"
import "firebase/auth"

firebase.initializeApp(firebaseConfig)

export const myfirestore = firebase.firestore()

// el módulo de autenticación
export const auth = firebase.auth();
// el proveedor de autenticación
export const provider = new firebase.auth.GoogleAuthProvider();
// la utilidad para hacer login con el pop-up
export const loginWithGoogle = () => auth.signInWithPopup(provider);
// la utilidad para hacer logout
export const logout = () => auth.signOut();

export default firebase;