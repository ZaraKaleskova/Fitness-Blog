import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';



var config = {
    // apiKey: "AIzaSyCkOWGUNBDtcAYxa-gue9zNKL89xeZqvPM",
    // authDomain: "fitness-68351.firebaseapp.com",
    // projectId: "fitness-68351",
    // storageBucket: "fitness-68351.appspot.com",
    // messagingSenderId: "127190678162",
    // appId: "1:127190678162:web:2cab0ad32bc0bf5101444b",
    // measurementId: "G-BBFHEZM15Z"


    apiKey: "AIzaSyCkOWGUNBDtcAYxa-gue9zNKL89xeZqvPM",
    authDomain: "fitness-68351.firebaseapp.com",
    projectId: "fitness-68351",
    storageBucket: "fitness-68351.appspot.com",
    messagingSenderId: "127190678162",
    appId: "1:127190678162:web:2cab0ad32bc0bf5101444b",
    measurementId: "G-BBFHEZM15Z"

  };

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true});



export default firebase;


