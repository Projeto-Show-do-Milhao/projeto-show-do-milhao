// var admin = require('firebase-admin')
// var axios = require('axios')
// var serviceAccount = require("./banco-perfis-firebase.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://banco-perfis.firebaseio.com"
// });

// var usuarios = 'Usuários'
// var db = ref => admin.database().ref(ref)
// var idUsuario = id => `${usuarios}/${id}`

// function cadastraUsuario(id, nome, foto){   
//   db(idUsuario(id)).push({
//       id: id,
//       nome: nome,
//       foto: foto,
//     }) 
//     console.log('foi')           
//   }
//   function buscaUsuario(id) {
//     var idUsuario = idUsuarioRef(id)

//     idUsuario.set({
//         nome: jogador.nome,
//     })}
//   export {cadastraUsuario}
var firebase = require('firebase')

var firebaseConfig = {
  apiKey: "AIzaSyCtjFUY5xt3GTIt35zxPaUDjJ7brKQr-eY",
  authDomain: "banco-perfis.firebaseapp.com",
  databaseURL: "https://banco-perfis.firebaseio.com",
  projectId: "banco-perfis",
  storageBucket: "banco-perfis.appspot.com",
  messagingSenderId: "26074504438",
  appId: "1:26074504438:web:2c16989d13d5fbab0ca0d7",
  measurementId: "G-G70WCMS0X5"
};

const inicializando = firebase.initializeApp(firebaseConfig)
const firebaseAuth = firebase.auth()
const db = firebase.database()



export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
