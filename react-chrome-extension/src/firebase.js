import * as firebase from 'firebase';

let firebaseConfig = {
  apiKey: "AIzaSyAXLZRCJb7YTB-l6yqJAGZGOaIn9zSDPJQ",
  authDomain: "reflect-me-mhacks.firebaseapp.com",
  databaseURL: "https://reflect-me-mhacks.firebaseio.com",
  projectId: "reflect-me-mhacks",
  storageBucket: "reflect-me-mhacks.appspot.com",
  messagingSenderId: "170827625182",
  appId: "1:170827625182:web:e9b87fea2dcbaa4b57084f"
};

let db;

firebase.initializeApp(firebaseConfig);
db = firebase.database();

export { db };

