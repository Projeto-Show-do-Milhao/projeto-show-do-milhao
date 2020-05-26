import React, { Component } from 'react';
import { View, Image, ImageBackground, Text, ScrollView, TouchableHighlight } from 'react-native'
import estilos from '../../telas/TelaLobby/styles';

function TelaLobby() {
  return (
    <View style={estilos.containerTelaJogar}>
      <View style={estilos.containerImagemFundoTelaJogar}>
        <ImageBackground source={require('../../imagens/dinheiroBackground.png')} style={estilos.imagemDeFundoDinheiroTelaJogar}>
        </ImageBackground>
      </View>
      <View style={estilos.containerLogoEAvatar}>
        <ImageBackground source={require('../../imagens/showDoMilhaoBackground.png')} style={estilos.imagemDeFundoShowDoMilhaoTelaJogar}>
        </ImageBackground>
        <View>
          <Image source={require('../../imagens/chico1.png')} style={estilos.avatarTelaJogar}>
          </Image>
        </View>
      </View>
      <View style={estilos.containerRank}>
        <ScrollView>

        </ScrollView>

      </View>
      <View style={estilos.botaoJogar}>
        <TouchableHighlight>
          <Text style={estilos.textoJogar}>Jogar</Text>
        </TouchableHighlight>
      </View>

    </View>
  )
}

export default TelaLobby;