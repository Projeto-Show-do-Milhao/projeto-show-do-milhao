import 'react-native-gesture-handler';
import React, { Component, useState } from 'react';
import { View, Image, ImageBackground, Text, ScrollView, TouchableOpacity } from 'react-native';
import estilos from '../../telas/TelaFinal/styles';

function TelaFinal({ navigation }) {
    const [pergunta, setPergunta] = useState({});
    const [resposta, setResposta] = useState('');

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
                marginTop: 25
            }}>
                <ImageBackground source={require('../../imagens/showDoMilhaoBackground.png')} style={estilos.imagemDeFundoShowDoMilhaoTelaJogar}>
                </ImageBackground>
                <View>
                    <Image source={require('../../imagens/chico1.png')} style={estilos.avatarTelaJogar}>
                    </Image>
                </View>
            </View>
            <View style={estilos.constainerTelaFinal}>
                <View style={{
                    alignItems: 'center',
                    marginTop: 350
                }}>
                    <TouchableOpacity onPress={() => navigation.navigate('TelaLobby')}>
                        <View style={{
                            height: 60,
                            width: 150,
                            backgroundColor: 'yellow',
                            borderRadius: 15,
                            margin: 14,
                            justifyContent: 'center',
                        }}>
                            <Text style={{ fontSize: 22, alignSelf: "center", }}>
                                SAIR
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default TelaFinal;