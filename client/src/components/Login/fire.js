import firebase from 'firebase';
import 'firebase/auth';


  var firebaseConfig = {
    apiKey: "AIzaSyCktVfWWu_vrHw1bcs0-snDtBx8cty841s",
    authDomain: "login-e579a.firebaseapp.com",
    projectId: "login-e579a",
    storageBucket: "login-e579a.appspot.com",
    messagingSenderId: "823490620369",
    appId: "1:823490620369:web:eefd3d4aec0e5020b5cef0"
  };

 const fire = firebase.initializeApp(firebaseConfig);
 //  const store = firebase.firestore();
 const db = firebase.firestore();
 
 export const auth = firebase.auth();

 export default fire;