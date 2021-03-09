import firebase from 'firebase/app';
import 'firebase/firestore' //esto me va a habilitar todas las funcionalidades de firestore

var firebaseConfig = {
    apiKey: "AIzaSyCBCj5rZz2XAZ7AvLhV9c3FHKUAztiFpww",
    authDomain: "sql-demos-e429f.firebaseapp.com",
    projectId: "sql-demos-e429f",
    storageBucket: "sql-demos-e429f.appspot.com",
    messagingSenderId: "1021550232263",
    appId: "1:1021550232263:web:79c9a59c937e32b635f4e2",
    measurementId: "G-GQCXLQQPYQ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  export default firebase.firestore();