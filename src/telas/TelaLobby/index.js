import 'react-native-gesture-handler';
import React, { Component, useState } from 'react';
import { View, Image, ImageBackground, Text, ScrollView, TouchableHighlight, Alert, } from 'react-native'
import estilos from '../../telas/TelaLobby/styles';
import firebase from 'firebase'




function TelaLobby({route, navigation}) {
  const {nome} = route.params
  const {foto} = route.params
  const {id} = route.params
  
  const[ranking, setRanking] = useState([])
  var usuarios = 'Usuários'
  var idUsuario = id => `${usuarios}/${id}`
  function verificaPontuacao(){
    firebase.database().ref(usuarios).on('value', snapshot =>{
      snapshot.forEach(childSnapshot=>{
        console.log(childSnapshot.val())
      })
    })
  }
  return (
    <View style={estilos.containerTelaJogar}>
      <View style={estilos.containerImagemFundoTelaJogar}>
        <ImageBackground source={require('../../imagens/dinheiroBackground.png')}
          style={estilos.imagemDeFundoDinheiroTelaJogar}
        >
        </ImageBackground>
      </View>
      <View style={estilos.containerLogoEAvatar}>
        <ImageBackground source={require('../../imagens/showDoMilhaoBackground.png')}
          style={estilos.imagemDeFundoShowDoMilhaoTelaJogar}
        >
        </ImageBackground>
        <View>
        <TouchableHighlight onPress={()=> navigation.navigate('TelaDoPerfil', {nome, foto} )}>
          <Image source={{uri: foto}} style={estilos.avatarTelaJogar}>
          </Image>
          </TouchableHighlight>
        </View>
      </View>
      <TouchableHighlight onPress={verificaPontuacao}>
      <View style={estilos.containerRank}>
        <ScrollView>
          {console.log(ranking)}

        </ScrollView>
      </View>
      </TouchableHighlight>
        <TouchableHighlight onPress={()=> navigation.navigate("Questoes", {nome, foto, id })}>
      <View style={estilos.botaoJogar}>
          <Text style={estilos.textoJogar}>Jogar</Text>
      </View>
        </TouchableHighlight>

    </View>
  )
}

export default TelaLobby;