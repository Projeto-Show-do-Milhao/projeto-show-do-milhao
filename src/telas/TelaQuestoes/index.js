import React, { Component } from 'react';
import { View, Image, ImageBackground, Text, ScrollView, TouchableHighlight } from 'react-native'
import estilos from '../../telas/TelaQuestoes/styles';

function TelaQuestoes() {
  return (
    <View style={estilos.containerTelaJogar}>
      <View style={estilos.containerImagemFundoTelaJogar}>
        <ImageBackground source={require('../../imagens/dinheiroBackground.png')} style={estilos.imagemDeFundoDinheiroTelaJogar}>
        </ImageBackground>
      </View>
      <View style={{
          justifyContent: "space-around",
          flexDirection: 'row',
          alignItems: 'flex-start',
          flex: 10,
      }}>
        <ImageBackground source={require('../../imagens/showDoMilhaoBackground.png')} style={estilos.imagemDeFundoShowDoMilhaoTelaJogar}>
        </ImageBackground>
        <View>
          <Image source={require('../../imagens/chico1.png')} style={estilos.avatarTelaJogar}>
          </Image>
        </View>
      </View>
      <View style={estilos.constainerPergunta}>
          <View>
          <Text style={{color: 'yellow', margin: 10, fontSize: 22}}>
            Onde foi conduzida a vitória das forças aliadas na Segunda Guerra Mundial?
          </Text>
          </View>
          <View style={{
              backgroundColor: 'rgba(0, 0, 255, 0.40)',
              width: 360,
              height: 60,
              borderRadius: 15,
              alignSelf: 'center',
              marginTop: 80
          }}>

          </View>
          <View style={{
              backgroundColor: 'rgba(0, 0, 255, 0.40)',
              width: 360,
              height: 60,
              borderRadius: 15,
              alignSelf: 'center',
              marginTop: 20

          }} >
              
          </View>
          <View style={{
              backgroundColor: 'rgba(0, 0, 255, 0.40)',
              width: 360,
              height: 60,
              borderRadius: 15,
              alignSelf: 'center',
              marginTop: 20

          }}>
              
          </View>
          <View style={{
              backgroundColor: 'rgba(0, 0, 255, 0.40)',
              width: 360,
              height: 60,
              borderRadius: 15,
              alignSelf: 'center',
              marginTop: 20

          }}>
              
          </View>
      </View>
    

    </View>
  )
}

export default TelaQuestoes;