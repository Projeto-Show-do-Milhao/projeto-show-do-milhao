import React, { Component } from 'react';
import { View, ImageBackground, Button, Alert } from 'react-native'
import estilos from '../../telas/TelaInicial/styles';
import * as Facebook from 'expo-facebook';
import '@expo/vector-icons';

const id = '245579273555466';

const login = async () => {
  try {
    await Facebook.initializeAsync(id);

    const { type, token } = await Facebook.logInWithReadPermissionsAsync(id, { permissions: ['public_profile', 'email', 'user_friends'] })

    if (type === 'success') {

      const response = await fetch(
        `https://graph.facebook.com/me?access.token=${token}&fields=id,name,email,about,picture`
      )
        const userObject = await response.json()
        console.log(userObject)
        Alert.alert(JSON.stringify({userObject}))
      
    } else {
      Alert.alert(type);
    }
  } catch (e) {
    console.log(e.message)
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
        <View style={{
        width: 250,
        height: 60,
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 300
      }}>
        <Button
          onPress={login}
          styles={{
            margin: 20
          }}
          title='Login com Facebook'
        />
      </View>
      </View>
      
    </View>
  )
}

export default TelaInicial;