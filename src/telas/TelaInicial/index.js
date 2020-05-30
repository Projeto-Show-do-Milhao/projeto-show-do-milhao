import React, { Component } from 'react';
import { View, ImageBackground } from 'react-native'
import estilos from '../../telas/TelaInicial/styles';
import * as Facebook from 'expo-facebook';

const id = '248425269594978'

login = async () => {

  await Facebook.initializeAsync('248425269594978');

  const {type, token} = await Facebook.logInWithReadPermissionsAsync(id, {permissions: ['public_profile', 'email', 'user_friends']})

  if (type === 'success') {

    const response = await fetch(
      'https://graph.facebook.com/me?access.token=$[token]&fields=id,name,email,about,picture'

      )
      console.log('resposta:', response)

      const json = await response.json()

      console.log('USER_INFO', json)

      firebase.auth().signInWithCredential(token)

  } else {
    alert(type);
  }
}

function TelaInicial() {
  return (
    <View style={estilos.containerTelaInicial}>
      <View style={estilos.containerImagemFundoDinheiroTelaInicial}>
        <ImageBackground source={require('../../imagens/dinheiroBackground.png')} style={estilos.imagemDeFundoDinheiroTelaInicial}>
        </ImageBackground>
      </View>
      <View style={estilos.containerImagemDeFundoLogo}>
        <ImageBackground source={require('../../imagens/showDoMilhaoBackground.png')} style={estilos.imagemDeFundoShowDoMilhaoTelaInicial}>
        </ImageBackground>
      </View>
    </View>
  )
}

export default TelaInicial;