import firebase from 'firebase';


  var firebaseConfig = {
    apiKey: "AIzaSyCktVfWWu_vrHw1bcs0-snDtBx8cty841s",
    authDomain: "login-e579a.firebaseapp.com",
    projectId: "login-e579a",
    storageBucket: "login-e579a.appspot.com",
    messagingSenderId: "823490620369",
    appId: "1:823490620369:web:eefd3d4aec0e5020b5cef0"
  };

 const fire = firebase.initializeApp(firebaseConfig);

 export default fire;