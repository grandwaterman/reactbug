import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD2dJPZrVPpE1V2BJpndS6qdFZ2wc3EaPw",
    authDomain: "reactbug.firebaseapp.com",
    databaseURL: "https://reactbug.firebaseio.com",
    projectId: "reactbug",
    storageBucket: "reactbug.appspot.com",
    messagingSenderId: "214008777624",
    appId: "1:214008777624:web:54c276e325db0b7756f9ed",
    measurementId: "G-CHN5H3537E"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
