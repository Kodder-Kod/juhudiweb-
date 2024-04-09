import firebase from "firebase/compat/app"
import {getDatabase} from "firebase/database"

import "firebase/compat/storage"
import 'firebase/compat/auth'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNCIQGxJd2DhsMTSwj1VViL2VR0Mrh1io",
  authDomain: "juhudu002.firebaseapp.com",
  databaseURL: "https://juhudu002-default-rtdb.firebaseio.com",
  projectId: "juhudu002",
  storageBucket: "juhudu002.appspot.com",
  messagingSenderId: "679500460854",
  appId: "1:679500460854:web:16bc38914f23ef20cef997",
  measurementId: "G-EKK5LL930E"
};

// Initialize Firebase
if (firebase.apps.length===0){
    firebase.initializeApp(firebaseConfig)
}

const db = getDatabase();


export {db}

export {firebase}