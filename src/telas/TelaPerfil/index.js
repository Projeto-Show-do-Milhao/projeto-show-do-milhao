import React from 'react';
import { View, Text, ImageBackground, Image } from 'react-native';
import estilos from './styles'
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import firebase from 'firebase'

var usuarios = 'Usuários'
var idUsuario = id => `${usuarios}/${id}`
function chamaPontuacao (id, pontos) {firebase.database().ref(idUsuario(id)).on('value', snapshot =>{ 
     pontos.push(snapshot.val().pontuação)
})}
function TelaPerfil({route , navigation}) {
    const {nome} = route.params
    const {foto} = route.params
    const {id} = route.params
    const pontos = []
    chamaPontuacao (id, pontos)
    console.log(pontos)
  return (
      <View style={estilos.containerTelaPerfil}>
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
              <Text style={estilos.nickname}>{nome}</Text>
          </View>
          <View style={estilos.containerUltimaPontuacao}>
              <Text style={estilos.ultimaPontuacao}>Última Pontuação</Text>
          </View>
          <View style={estilos.containerUltimaPontuacao}>
              <Text style={estilos.ultimaPontuacao}>R${pontos[0]},00</Text>
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