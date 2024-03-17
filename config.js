import firebase from "firebase/compat/app"
import {getDatabase} from "firebase/database"

import "firebase/compat/storage"
import 'firebase/compat/auth'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyCSp6BD-GyeyjKxxTgVGeW3NrKAHz8GFYM",
    authDomain: "juhudisacco001.firebaseapp.com",
    databaseURL: "https://juhudisacco001-default-rtdb.firebaseio.com",
    projectId: "juhudisacco001",
    storageBucket: "juhudisacco001.appspot.com",
    messagingSenderId: "534931425738",
    appId: "1:534931425738:web:71bc11f8b83851aa9a6733",
    measurementId: "G-E5L1BT7PSK"
  };

// Initialize Firebase
if (firebase.apps.length===0){
    firebase.initializeApp(firebaseConfig)
}

const db = getDatabase();


export {db}

export {firebase}