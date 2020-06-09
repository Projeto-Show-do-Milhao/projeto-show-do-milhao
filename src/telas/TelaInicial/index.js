import React, { Component } from 'react';
import { View, ImageBackground, Button, Alert } from 'react-native'
import estilos from '../../telas/TelaInicial/styles';
import * as Facebook from 'expo-facebook';
import '@expo/vector-icons';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCtjFUY5xt3GTIt35zxPaUDjJ7brKQr-eY",
  authDomain: "banco-perfis.firebaseapp.com",
  databaseURL: "https://banco-perfis.firebaseio.com",
  projectId: "banco-perfis",
  storageBucket: "banco-perfis.appspot.com",
  messagingSenderId: "26074504438",
  appId: "1:26074504438:web:2c16989d13d5fbab0ca0d7",
  measurementId: "G-G70WCMS0X5"
};

// firebase.initializeApp(firebaseConfig);
const id = '248425269594978';
login = async () => {
  try {
    await Facebook.initializeAsync(id);

    const { type, token } = await Facebook.logInWithReadPermissionsAsync(id, { permissions: ['public_profile', 'email', 'user_friends'] })

    if (type === 'success') {

      const response = await fetch(
        `https://graph.facebook.com/me?access.token=${token}&fields=id,name,email,about,picture`
      )

      const userObject = await response.json();
      console.log(userObject)
      Alert.alert(JSON.stringify(userObject))

    } else {
      Alert.alert(type);
    }
  } catch (e) {
    Alert.alert(e.message)
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
      <Button
        onPress={login}
        styles={{
          margin: 20
        }}
        title='Login com Facebook'
      >

      </Button>
    </View>
  )
}

export default TelaInicial;