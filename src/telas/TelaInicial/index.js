import React, { Component } from 'react';
import { View, ImageBackground } from 'react-native'
import estilos from '../../telas/TelaInicial/styles';

function TelaInicial() {
  return (
    <View style={estilos.containerTelaInicial}>
      <View style={estilos.containerImagemFundoDinheiroTelaInicial}>
        <ImageBackground source={require('../../imagens/dinheiroBackground.png')} style={estilos.imagemDeFundoDinheiroTelaInicial}>
        </ImageBackground>
      </View>
      <View style={estilos.containerImagemDeFundoLogo}>
        <ImageBackground source={require('../../imagens/showDoMilhaoBackground.png')} style={estilos.imagemDeFundoShowDoMilhaoTelaInicial}>
        </ImageBackground>
      </View>
    </View>
  )
}

export default TelaInicial;