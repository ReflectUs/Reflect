// import * as firebase from 'firebase';
import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

let firebaseConfig = {
  apiKey: "AIzaSyAXLZRCJb7YTB-l6yqJAGZGOaIn9zSDPJQ",
  authDomain: "reflect-me-mhacks.firebaseapp.com",
  databaseURL: "https://reflect-me-mhacks.firebaseio.com",
  projectId: "reflect-me-mhacks",
  storageBucket: "reflect-me-mhacks.appspot.com",
  messagingSenderId: "170827625182",
  appId: "1:170827625182:web:e9b87fea2dcbaa4b57084f",
  scopes: ["email", "profile", "https://www.googleapis.com/auth/calendar.events.readonly"]
};

let db, auth, authFunc;

firebase.initializeApp(firebaseConfig);
db = firebase.database();
auth = firebase.auth();
authFunc = firebase.auth;
const GoogleAuthProvider = new firebase.auth.GoogleAuthProvider();

GoogleAuthProvider.addScope(
  "https://www.googleapis.com/auth/calendar.events.readonly"
);

// "https://www.googleapis.com/auth/calendar.events.readonly"
// GoogleAuthProvider.addScope(
//   "https://www.googleapis.com/auth/gmail.readonly"
// )


export { db, auth, authFunc, GoogleAuthProvider };

