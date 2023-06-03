import firebase from 'firebase';

const firebaseConfig = {

    apiKey: "AIzaSyAh2g6VWPFNhljAvoU901HgP0PkjDI5sNU",

    authDomain: "fir-4c8ff.firebaseapp.com",

    projectId: "fir-4c8ff",

    storageBucket: "fir-4c8ff.appspot.com",

    messagingSenderId: "862346333854",

    appId: "1:862346333854:web:04eeb0a5442c191092358f",

    measurementId: "G-ECNFH113TT"

};


firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const User = db.collection('User')
module.exports = User;

