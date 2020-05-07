var admin = require("firebase-admin");

var serviceAccount = require("./banco-perguntas-firebase.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://banco-perguntas.firebaseio.com"
});