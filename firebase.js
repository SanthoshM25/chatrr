import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBsy_K7ZlBe5m5EojF-1097r6byCvdjoQk",
  authDomain: "chatr-f5d3d.firebaseapp.com",
  projectId: "chatr-f5d3d",
  storageBucket: "chatr-f5d3d.appspot.com",
  messagingSenderId: "572293913996",
  appId: "1:572293913996:web:050a294557a2efe45ccaa9",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
