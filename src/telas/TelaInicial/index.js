import React, { Component, useState } from 'react';
import { View, ImageBackground, TouchableHighlight, Alert, Image } from 'react-native'
import estilos from '../../telas/TelaInicial/styles';
import * as Facebook from 'expo-facebook';
import '@expo/vector-icons';
import 'react-native-gesture-handler';
import firebase from 'firebase'


const id = '245579273555466';
const login = async () => {
  await Facebook.initializeAsync(id);

  const { type, token } = await Facebook.logInWithReadPermissionsAsync(id, { permissions: ['public_profile', 'email', 'user_friends'] })

  if (type === 'success') {
    const response = await fetch(
      `https://graph.facebook.com/me?access.token=${token}&fields=id,name,email,about,picture`
    )
    var userObject = await response.json()
    await cadastraUsuario(userObject) 
    return userObject;
  } else {
    throw Error('Falha ao logar ....')
  }
}

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
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var usuarios = 'Usuários'
var idUsuario = id => `${usuarios}/${id}`
function cadastraUsuario(userObject) {
  firebase.database().ref(idUsuario(userObject.id)).set({
    nome: userObject.name,
    foto: userObject.picture.data.url,
    id: userObject.id,
    pontuação: 0,
  });
  console.log('foi')
}

function verificaPontuacao(ranking){
  firebase.database().ref(usuarios).on('value', snapshot =>{
    snapshot.forEach(childSnapshot=>{
      ranking.push(childSnapshot.val())
    })
  })
}
function TelaInicial({navigation}) {
  const ranking = []
  
  const chamarLogin = () => {
    verificaPontuacao(ranking)
    console.log('eu sou o ranking', ranking)
    login()
    .then(user => {
      console.log(user);
      navigation.navigate('TelaLobby', {nome: user.name, foto: user.picture.data.url, id: user.id, ranking, pontuação: user.pontuação})
    })
    .catch(err => Alert.alert('erro ao conectar'))
  }
  return (
    <View style={estilos.containerTelaInicial}>
      <View style={estilos.containerImagemFundoDinheiroTelaInicial}>
        <ImageBackground source={require('../../imagens/dinheiroBackground.png')} style={estilos.imagemDeFundoDinheiroTelaInicial}>
        </ImageBackground>
      </View>
      <View style={estilos.containerImagemDeFundoLogo}>
        <ImageBackground source={require('../../imagens/showDoMilhaoBackground.png')} style={estilos.imagemDeFundoShowDoMilhaoTelaInicial}>
        </ImageBackground>
        <View style={{
          width: 250,
          height: 80,
          borderRadius: 15,
          alignSelf: 'center',
          marginTop: 300
        }}>
         <TouchableHighlight onPress={chamarLogin} >
          <View style={{alignItems: 'center'}} >
          <Image source={require('../../imagens/facebook-login.png')} style={{height: 60, width: 280}}/>
          </View>
         </TouchableHighlight>
          
        </View>
      </View>

    </View>
  )
}

export default TelaInicial;