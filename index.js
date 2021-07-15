// Firebase App (the core Firebase SDK) is always required and must be listed first
const app = require("firebase/app")
const data = require("firebase/database")
const http = require('http');
const fs = require('fs');
const { time } = require("console");
const port = process.env.PORT || 3000;
const hostname = '127.0.0.1';
// const port = 3000;
// var firebaseConfig = {
//   apiKey: "AIzaSyAEsTEpMxEcx0psMjrETclmll8XqdMtLlw",
//   authDomain: "cloud-notification-32655.firebaseapp.com",
//   databaseURL: "https://cloud-notification-32655-default-rtdb.firebaseio.com",
//   projectId: "cloud-notification-32655",
//   storageBucket: "cloud-notification-32655.appspot.com",
//   messagingSenderId: "602486732316",
//   appId: "1:602486732316:web:2ba2ebf2d2733adb7491d9",
//   measurementId: "G-327MXCH15B"
// };
  var firebaseConfig = {
    apiKey: "AIzaSyBASO7i-hKMq7lJs7b7KVQqUWXuwICIruo",
    authDomain: "hackilo-edutech-traffic.firebaseapp.com",
    databaseURL: "https://hackilo-edutech-traffic-default-rtdb.firebaseio.com",
    projectId: "hackilo-edutech-traffic",
    storageBucket: "hackilo-edutech-traffic.appspot.com",
    messagingSenderId: "943999356770",
    appId: "1:943999356770:web:83d61c9cc23037468ae63b",
    measurementId: "G-3MWH1TC61L"
  };



app.initializeApp(firebaseConfig);
// setInterval(function () {
//   var number = Math.floor(1000 + Math.random() * 9000).toString();
//   let formMessage = app.database().ref("Faltu");
//   formMessage.set({
//     accha: number,
//   });

// }, 20000)
setInterval(function () {
  const d = new Date();
  var dates = d.getDate().toString()+"-"+d.getMonth().toString()+"-"+d.getFullYear().toString()
  var times = d.getHours().toString()+":"+d.getMinutes().toString()+":"+d.getSeconds().toString()
  var number = Math.floor(1000 + Math.random() * 9000).toString();
  let formMessage = app.database().ref("noti");
  formMessage.push({
    changingNode: number,
    date:dates,
    time:times
  });

}, 3600000)
const home = fs.readFileSync('index.html')
const server = http.createServer((req, res) => {
  console.log(req.url);
  url = req.url;

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  if (url == '/') {
    res.end(home);
  }
})
server.listen(port, () => {
  // console.log(`Server running at http://${hostname}:${port}/`);
  // console.log(port)
});
