import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAEB1hras2udhWJlxneUp7UHV7PJQrY2MA",
  authDomain: "discord-clone-c1edc.firebaseapp.com",
  databaseURL: "https://discord-clone-c1edc.firebaseio.com",
  projectId: "discord-clone-c1edc",
  storageBucket: "discord-clone-c1edc.appspot.com",
  messagingSenderId: "261806538620",
  appId: "1:261806538620:web:d7d2e869c80f984a876ef9",
  measurementId: "G-F9G3975WEB",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
