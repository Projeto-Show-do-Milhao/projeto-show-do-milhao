import 'react-native-gesture-handler';
import React, { Component, useState } from 'react';
import { View, Image, ImageBackground, Text, ScrollView, TouchableHighlight, Alert, } from 'react-native'
import estilos from '../../telas/TelaLobby/styles';
import firebase from 'firebase'

function Usuario({usuario}){
  console.log('EU SOU O USUARIO', usuario)
  return (
  <View style={{margin: 10, borderBottomWidth:2, borderColor: 'yellow'}}>
    <Text style={{margin: 5,  fontSize: 15, color: 'yellow', alignSelf: 'center'}}>
      👑
    </Text>
    <Image source={{uri: usuario.foto}} style={{height: 50, width: 50, borderRadius: 100, alignSelf: 'center'}}/>
    <Text style={{margin: 5, fontSize: 18, color: 'white', alignSelf: 'center'}}>
      {usuario.nome}
    </Text>
    <Text style={{margin: 5, marginBottom: 10, fontSize: 18,color: 'white', alignSelf: 'center'}}>
      R${usuario.pontuação},00
    </Text>
    <Text style={{margin: 5, marginBottom: 10, fontSize: 18,color: 'white', alignSelf: 'center'}}>
      {usuario.troféus}x 🏆
    </Text>
  </View>
  )
}


function ListaDeusuarios({usuarios}){
  return(
    <ScrollView>
      {usuarios.sort((a,b)=>b.pontuação - a.pontuação)
        .map((usuario, index)=> <Usuario usuario={usuario} key={index}/>)}
    </ScrollView>
  )
}

function TelaLobby({route, navigation}) {
  const {nome} = route.params
  const {foto} = route.params
  const {id} = route.params
  let {ranking} = route.params
  const {pontuação} = route.params
  console.log(ranking)

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
        <TouchableHighlight onPress={()=> navigation.navigate('TelaDoPerfil', {nome, foto, pontuação})}>
          <Image source={{uri: foto}} style={estilos.avatarTelaJogar}>
          </Image>
          </TouchableHighlight>
        </View>
      </View>
      <View style={estilos.containerRank}>
        <Text style={{alignSelf:'center', fontSize: 20, fontWeight: 'bold', color: 'yellow', marginBottom: 20}}>
         Última pontuação dos Jogadores
        </Text>
        <ListaDeusuarios usuarios={ranking}/>
      </View>
        <TouchableHighlight onPress={()=> navigation.navigate("Questoes", {nome, foto, id })}>
      <View style={estilos.botaoJogar}>
          <Text style={estilos.textoJogar}>Jogar</Text>
      </View>
        </TouchableHighlight>

    </View>
  )
}

export default TelaLobby;