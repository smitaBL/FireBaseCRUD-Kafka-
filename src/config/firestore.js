import firebase from 'firebase';
import dotenv from 'dotenv';
dotenv.config();



// AUTHDOMAIN = "fir-4c8ff.firebaseapp.com"

// PROJECT_ID = "fir-4c8ff"

// STOREGE_BUCKET = "fir-4c8ff.appspot.com"

// MSG_SENDER_ID = "862346333854"

// APP_ID = "1:862346333854:web:04eeb0a5442c191092358f"

// MEASUREMENT_ID = "G-ECNFH113TT"

const firebaseConfig = {

    apiKey: process.env.API_KEY,

    authDomain: process.env.AUTHDOMAIN,

    projectId: process.env.PROJECT_ID,

    storageBucket: process.env.STOREGE_BUCKET,

    messagingSenderId: process.env.MSG_SENDER_ID,

    appId: process.env.APP_ID,

    measurementId: process.env.MEASUREMENT_ID,

};


firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const User = db.collection('User')
module.exports = User;

