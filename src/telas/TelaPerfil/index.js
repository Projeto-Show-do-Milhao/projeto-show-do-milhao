import React from 'react';
import { View, Text, ImageBackground, Image } from 'react-native';
import estilos from './styles'
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';

function TelaPerfil({route , navigation}) {
    const {nome} = route.params
    const {foto} = route.params
  return (
      <View style={estilos.containerTelaPerfil}>
          <Text>Oi</Text>
          <View style={estilos.containerImagemFundoTelaPerfil}>
              <ImageBackground source={
                  require('../../imagens/dinheiroBackground.png')} 
                  style={estilos.imagemDeFundoDinheiroTelaPerfil}
              />
          </View>
          <View style={estilos.containerLogoEAvatar}>
              <TouchableOpacity onPress={()=> navigation.navigate("TelaLobby")}>
              <Image source={require('../../imagens/showDoMilhaoBackground.png')} 
                style={estilos.imagemDeFundoShowDoMilhaoTelaPerfil} 
              />
              </TouchableOpacity>
              <Image source={{uri: foto}} style={estilos.avatarTelaPerfil} />
          </View>
          <View style={estilos.containerNickName}>
              <Text style={estilos.nickname}>{nome}</Text>
          </View>
          <View style={estilos.containerMaiorPontuacao}>
              <Text style={estilos.maiorPontuacao}>Maior Pontuacao</Text>
          </View>
          <View style={estilos.containerUltimaPontuacao}>
              <Text style={estilos.ultimaPontuacao}>Ultima Pontuacao</Text>
          </View>
          <View style={estilos.containerBotaoLogout}>
              <TouchableHighlight style={estilos.botaoLogout} onPress={()=> navigation.navigate('TelaInicial')}>
              <Text style={estilos.textoBotaoLogout}>Logout</Text>
              </TouchableHighlight>
          </View>
      </View>
  )
}

export default TelaPerfil;