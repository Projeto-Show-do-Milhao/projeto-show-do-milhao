import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { View, Image, ImageBackground, Text, ScrollView, TouchableHighlight, Alert } from 'react-native'
import estilos from '../../telas/TelaLobby/styles';

function TelaLobby({route , navigation}) {
  const {nome} = route.params
  const {foto} = route.params
  console.log(route)
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
        <TouchableHighlight onPress={()=> navigation.navigate('TelaDoPerfil', )}>
          <Image source={{uri: foto}} style={estilos.avatarTelaJogar}>
          </Image>
          </TouchableHighlight>
        </View>
      </View>
      <View style={estilos.containerRank}>
        <Text style={estilos.textoRegrasPrincipal}>
          Regras do Jogo
        </Text>
        <Text style={estilos.textoRegrasSub}>
          Cada questão tem quatro alternativas com apenas uma correta.
        </Text>
        <Text style={estilos.textoRegrasSub}>
          Pressione a alternativa correta para avançar e aumentar seu prêmio!
        </Text>
        <Text style={estilos.textoRegrasSub}>
          Você pode pular de pergunta até três vezes;
        </Text>
        <Text style={estilos.textoRegrasSub}>
          Ou arregar pela metade do prêmio.
        </Text>
        <Text style={estilos.textoRegrasSub}>
         Mas se errar...
        </Text>
        <Text style={estilos.textoRegrasSubFinal}>
         PERDE TUDO!!!
        </Text>
      </View>
        <TouchableHighlight onPress={()=> navigation.navigate("Questoes")}>
      <View style={estilos.botaoJogar}>
          <Text style={estilos.textoJogar}>Jogar</Text>
      </View>
        </TouchableHighlight>

    </View>
  )
}

export default TelaLobby;