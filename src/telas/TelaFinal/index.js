import 'react-native-gesture-handler';
import React, { Component, useState } from 'react';
import { View, Image, ImageBackground, Text, TouchableOpacity, Button } from 'react-native';
import estilos from '../../telas/TelaFinal/styles';

function TelaFinal({ navigation }) {
	const [pergunta, setPergunta] = useState({});
	const [resposta, setResposta] = useState('');
	const mudaTela = () => {
		
	}


	return (
		<View style={estilos.containerTelaJogar}>
				<View style={estilos.containerImagemFundoTelaJogar}>
						<ImageBackground source={require('../../imagens/dinheiroBackground.png')} style={estilos.imagemDeFundoDinheiroTelaJogar}>
						</ImageBackground>
				</View>
				<View style={estilos.containerCabecalho}>
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
							<TouchableOpacity 
							onPress={()=> navigation.navigate("TelaLobby")}
							style={{
								backgroundColor: 'yellow',
								width: 215,
								paddingBottom: '2%',
								paddingTop: '1%',
								marginBottom: '20%',
								borderRadius: 15,
								alignSelf: 'center',
							}}
							>
								<Text>
										SAIR
								</Text>
							</TouchableOpacity>
						</View>
				</View>
		</View>
	)
}

export default TelaFinal;