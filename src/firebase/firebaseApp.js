import "firebase/analytics";

var firebase = require('firebase');

/* REPLACE YOUR FIREBASE CONFIG HERE */
const firebaseConfig = {
  apiKey: "AIzaSyB8G59PgQoNl27E-han2GvE876_0coFJvE",
  authDomain: "todo-board-5e8d2.firebaseapp.com",
  projectId: "todo-board-5e8d2",
  storageBucket: "todo-board-5e8d2.appspot.com",
  messagingSenderId: "344228027031",
  appId: "1:344228027031:web:3513cefc5b21190ee8e7d2",
  measurementId: "G-C8JS6ZZ0ZX"
};

export var app = firebase.default.initializeApp(firebaseConfig);
export const analytics = firebase.default.analytics();
