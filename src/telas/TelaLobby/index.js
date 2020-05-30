import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { View, Image, ImageBackground, Text, ScrollView, TouchableHighlight } from 'react-native'
import estilos from '../../telas/TelaLobby/styles';

function TelaLobby({ navigation }) {
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
        <TouchableHighlight onPress={()=> navigation.navigate("TelaDoPerfil")}>
          <Image source={require('../../imagens/chico1.png')} style={estilos.avatarTelaJogar}>
          </Image>
          </TouchableHighlight>
        </View>
      </View>
      <View style={estilos.containerRank}>
        <Text style={estilos.textoRegrasPrincipal}>
          Regras do Jogo
        </Text>
        <Text style={estilos.textoRegrasSub}>
          - Cada questão tem quatro alternativas e apenas uma correta
        </Text>
        <Text style={estilos.textoRegrasSub}>
          - As questões são separadas em quatro niveis:
          
        </Text>
        <Text style={estilos.textoRegrasSub}>
          - Facil
        </Text>
        <Text style={estilos.textoRegrasSub}>
          - Medio
        </Text>
        <Text style={estilos.textoRegrasSub}>
          - Dificil
        </Text>
        <Text style={estilos.textoRegrasSub}>
          - Pergunta do milhão
        </Text>
        <Text style={estilos.textoRegrasSub}>
          - Você pode pular 3 vezes
        </Text>
        <Text style={estilos.textoRegrasSub}>
          - Caso você queira parar recebe metade do valor acumulado durante a partida
        </Text>
        <Text style={estilos.textoRegrasSub}>
          -  Caso erre a pergunta você perde tudo
        </Text>
        

      </View>
      <View style={estilos.botaoJogar}>
        <TouchableHighlight onPress={()=> navigation.navigate("Questoes")}>
          <Text style={estilos.textoJogar}>Jogar</Text>
        </TouchableHighlight>
      </View>

    </View>
  )
}

export default TelaLobby;