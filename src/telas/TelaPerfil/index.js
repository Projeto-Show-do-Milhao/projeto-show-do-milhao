import React from 'react';
import { View, Text, ImageBackground, Image } from 'react-native';
import estilos from './styles'
import { TouchableHighlight } from 'react-native-gesture-handler';

function TelaPerfil() {
    return (
        <View style={estilos.containerTelaPerfil}>
            <Text>Oi</Text>
            <View style={estilos.containerImagemFundoTelaPerfil}>
                <ImageBackground source={require('../../imagens/dinheiroBackground.png')} style={estilos.imagemDeFundoDinheiroTelaPerfil} />
            </View>
            <View style={estilos.containerLogoEAvatar}>
                <Image source={require('../../imagens/showDoMilhaoBackground.png')} style={estilos.imagemDeFundoShowDoMilhaoTelaPerfil} />
                <Image source={require('../../imagens/chico1.png')} style={estilos.avatarTelaPerfil} />
            </View>
            <View style={estilos.containerNickName}>
                <Text style={estilos.nickname}>NickName</Text>
            </View>
            <View style={estilos.containerMaiorPontuacao}>
                <Text style={estilos.maiorPontuacao}>Maior Pontuacao</Text>
            </View>
            <View style={estilos.containerUltimaPontuacao}>
                <Text style={estilos.ultimaPontuacao}>Ultima Pontuacao</Text>
            </View>
            <View style={estilos.containerBotaoLogout}>
                <TouchableHighlight style={estilos.botaoLogout}>
                <Text style={estilos.textoBotaoLogout}>Logout</Text>
                </TouchableHighlight>
            </View>
        </View>
    )
}

export default TelaPerfil;