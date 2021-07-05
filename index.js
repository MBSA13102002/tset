// Firebase App (the core Firebase SDK) is always required and must be listed first
const app = require("firebase/app")
const data = require("firebase/database")

// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics


// Add the Firebase products that you want to use

var firebaseConfig = {
    apiKey: "AIzaSyBQUpIYvs0WKfP5IMD4TE2IWTvpb5U34Cc",
    authDomain: "portfoliomanagement-16f09.firebaseapp.com",
    databaseURL: "https://portfoliomanagement-16f09.firebaseio.com",
    projectId: "portfoliomanagement-16f09",
    storageBucket: "portfoliomanagement-16f09.appspot.com",
    messagingSenderId: "505793158040",
    appId: "1:505793158040:web:14b9466a349235ef8b69ed",
    measurementId: "G-MRCWJ4R5RJ"
};
app.initializeApp(firebaseConfig);
setInterval(function(){
  var number = Math.floor(1000 + Math.random() * 9000).toString();
  let formMessage = app.database().ref("FORM DATA");
  formMessage.set({
    age:number,
  });

},10000)