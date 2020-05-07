var admin = require("firebase-admin");

var serviceAccount = require("./banco-imagens-firebase.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://banco-imagens-3f26d.firebaseio.com"
});