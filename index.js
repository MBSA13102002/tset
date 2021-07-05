// Firebase App (the core Firebase SDK) is always required and must be listed first
const app = require("firebase/app")
const data = require("firebase/database")


  var firebaseConfig = {
    apiKey: "AIzaSyAEsTEpMxEcx0psMjrETclmll8XqdMtLlw",
    authDomain: "cloud-notification-32655.firebaseapp.com",
    databaseURL: "https://cloud-notification-32655-default-rtdb.firebaseio.com",
    projectId: "cloud-notification-32655",
    storageBucket: "cloud-notification-32655.appspot.com",
    messagingSenderId: "602486732316",
    appId: "1:602486732316:web:2ba2ebf2d2733adb7491d9",
    measurementId: "G-327MXCH15B"
  };
 


app.initializeApp(firebaseConfig);
setInterval(function(){
  var number = Math.floor(1000 + Math.random() * 9000).toString();
  let formMessage = app.database().ref("noti");
  formMessage.set({
    changingNode:number,
  });

},50000)