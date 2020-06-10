var admin = require('firebase-admin')

var axios = require('axios')

var serviceAccount = require("./banco-perfis-firebase.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://banco-perfis.firebaseio.com"
});

var usuarios = 'Usuários'
var db = ref => admin.database().ref(ref)
var idUsuario = id => `${usuarios}/${id}`

function cadastraUsuario(id, nome, foto){   
          db(idUsuario(id)).push({
              id: id,
              nome: nome,
              foto: foto,
            })        
  }
  function buscaUsuario(id) {
    var idUsuario = idUsuarioRef(id)

    idUsuario.set({
        nome: jogador.nome,
    })}
  export {cadastraUsuario}
