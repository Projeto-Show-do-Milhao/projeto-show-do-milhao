import 'react-native-gesture-handler';
import React, { Component, useState } from 'react';
import { View, Image, ImageBackground, Text, ScrollView, TouchableHighlight, Alert, } from 'react-native'
import estilos from '../../telas/TelaLobby/styles';
import firebase from 'firebase'

function Usuario({usuario}){
  return (
  <View style={{flexDirection: 'row', margin: 10}}>
    <Image source={{uri: usuario.foto}}/>
    <Text style={{margin: 5, fontSize: 15, color: 'yellow'}}>
      {usuario.nome}
    </Text>
    <Text style={{margin: 5, fontSize: 15, color: 'yellow'}}>
      ................... R${usuario.pontuação},00
    </Text>
  </View>
  )
}

function ListaDeusuarios({usuarios}){
  return(
    <View style={estilos.containerRank}>
      <ScrollView>
        {usuarios.map((usuario)=>{<Usuario usuario={usuario}/>, console.log(usuario)})}
      </ScrollView>
      </View>
  
  )
}

function TelaLobby({route, navigation}) {
  const {nome} = route.params
  const {foto} = route.params
  const {id} = route.params
  let {ranking} = route.params
  let {premioTotal} = route.params
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
        <TouchableHighlight onPress={()=> navigation.navigate('TelaDoPerfil', {nome, foto, premioTotal} )}>
          <Image source={{uri: foto}} style={estilos.avatarTelaJogar}>
          </Image>
          </TouchableHighlight>
        </View>
      </View>
      <View style={estilos.containerRank}>
        <Text style={{alignSelf:'center', fontSize: 20, fontWeight: 'bold', color: 'yellow', marginBottom: 20}}>
         Última pontuação dos Jogadores
        </Text>
      <ScrollView>
        <View style={{flexDirection: 'row', margin: 12}}>
          <Image source={{uri: ranking[0].foto}}/>
          <Text style={{margin: 5, fontSize: 15, color: 'yellow'}}>
            {ranking[0].nome}
          </Text>
          <Text style={{margin: 5, fontSize: 15, color: 'yellow'}}>
          ................... R${ranking[0].pontuação},00
          </Text>
      </View>
      <View style={{flexDirection: 'row', margin: 12}}>
          <Image source={{uri: ranking[1].foto}}/>
          <Text style={{margin: 5, fontSize: 15, color: 'yellow'}}>
            {ranking[1].nome}
          </Text>
          <Text style={{margin: 5, fontSize: 15, color: 'yellow'}}>
          ................... R${ranking[1].pontuação},00
          </Text>
      </View>
      <View style={{flexDirection: 'row', margin: 12}}>
        <Image source={{uri: ranking[2].foto}}/>
        <Text style={{margin: 5, fontSize: 15, color: 'yellow'}}>
          {ranking[2].nome}
        </Text>
        <Text style={{margin: 5, fontSize: 15, color: 'yellow'}}>
        ................... R${ranking[2].pontuação},00
        </Text>
      </View>
      <View style={{flexDirection: 'row', margin: 12}}>
        <Image source={{uri: ranking[3].foto}}/>
        <Text style={{margin: 5, fontSize: 15, color: 'yellow'}}>
          {ranking[3].nome}
        </Text>
        <Text style={{margin: 5, fontSize: 15, color: 'yellow'}}>
        ................... R${ranking[3].pontuação},00
        </Text>
      </View>
      </ScrollView>
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