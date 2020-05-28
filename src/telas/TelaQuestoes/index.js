import React, { Component, useState } from 'react';
import { View, Image, ImageBackground, Text, ScrollView, TouchableOpacity } from 'react-native'
import estilos from '../../telas/TelaQuestoes/styles';
// import {Jogando} from './subTelaJogando';
import 'react-native-gesture-handler';


function TelaQuestoes({ navigation }) {
  const [pergunta, setPergunta] = useState({});
  const [resposta, setResposta] = useState('');

  return(
    <View style={estilos.containerTelaJogar}>
    <View style={estilos.containerImagemFundoTelaJogar}>
      <ImageBackground source={
        require('../../imagens/dinheiroBackground.png')} 
        style={estilos.imagemDeFundoDinheiroTelaJogar}>
      </ImageBackground>
    </View>
    <View style={{
      justifyContent: "space-around",
      flexDirection: 'row',
      alignItems: 'flex-start',
      marginTop: 25
    }}>
      <ImageBackground source={
        require('../../imagens/showDoMilhaoBackground.png')} 
        style={estilos.imagemDeFundoShowDoMilhaoTelaJogar}>
      </ImageBackground>
      <View>
        <Image source={
          require('../../imagens/chico1.png')} 
          style={estilos.avatarTelaJogar}>
        </Image>
      </View>
    </View>
    <View style={estilos.constainerPergunta}>
      <View>
        <Text style={{ color: 'yellow', margin: 10, fontSize: 22 }}>
          {/* {perguntas[0].pergunta} */}
        </Text>
      </View>
      <View style={{
        backgroundColor: 'rgba(0, 0, 255, 0.40)',
        width: 340,
        height: 55,
        borderRadius: 15,
        alignSelf: 'center',
        marginTop: 130,
      }}>
        <Text>
        </Text>
      </View>
      <View style={{
        backgroundColor: 'rgba(0, 0, 255, 0.40)',
        width: 340,
        height: 55,
        borderRadius: 15,
        alignSelf: 'center',
        marginTop: 20

      }} >

      </View>
      <View style={{
        backgroundColor: 'rgba(0, 0, 255, 0.40)',
        width: 340,
        height: 55,
        borderRadius: 15,
        alignSelf: 'center',
        marginTop: 20

      }}>

      </View>
      <View style={{
        backgroundColor: 'rgba(0, 0, 255, 0.40)',
        width: 340,
        height: 55,
        borderRadius: 15,
        alignSelf: 'center',
        marginTop: 20

      }}>

      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>

        <TouchableOpacity onPress={()=> navigation.navigate("TelaDoFim")}>
          <View style={{
            height: 60,
            width: 100,
            backgroundColor: 'red',
            borderRadius: 15,
            margin: 14,

          }}>
            <Text style={{ fontSize: 22, alignSelf: "center", }}>
              PARAR
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={{
            height: 60,
            width: 100,
            backgroundColor: 'yellow',
            borderRadius: 15,
            margin: 14,

          }}>
            <Text style={{ fontSize: 22, alignSelf: "center", }}>
              PULAR
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>


  </View>
  )
}

export default TelaQuestoes;