var admin = require("firebase-admin");

var serviceAccount = require("./banco-perfis-firebase.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://banco-perfis.firebaseio.com"
});