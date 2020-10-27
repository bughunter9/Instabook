// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
require('dotenv').config()
const firebaseConfig = {
    apiKey: "AIzaSyDndw-nnRq5JLmX2Y7KlUmGh4Ob7kWhZmw",
    authDomain: "social-media-2d410.firebaseapp.com",
    databaseURL: "https://social-media-2d410.firebaseio.com",
    projectId: "social-media-2d410",
    storageBucket: "social-media-2d410.appspot.com",
    messagingSenderId: "654371084495",
    appId: "1:654371084495:web:f0a145fda6abc52979bfba",
    measurementId: "G-37X0KCSDCD"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const provider2 = new firebase.auth.FacebookAuthProvider();

export { auth, provider, provider2 };
export default db;