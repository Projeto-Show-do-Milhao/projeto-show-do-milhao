import 'react-native-gesture-handler';
import React, { Component, useState } from 'react';
import { View, Image, ImageBackground, Text, TouchableOpacity, Button } from 'react-native';
import estilos from '../../telas/TelaFinal/styles';

function TelaFinal({route , navigation }) {

const premioTotal = route.params
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
			<Text style={estilos.textoSair}>
							{premioTotal}
						</Text>
					<View style={{
							alignItems: 'center',
							marginTop: 350
					}}>
						
			</View>

						<TouchableOpacity 
						onPress={()=> navigation.navigate("TelaLobby")}
						style={{
							backgroundColor: 'yellow',
							width: 215,
							height: 60,
							paddingBottom: '2%',
							paddingTop: '1%',
							marginBottom: '20%',
							borderRadius: 15,
							alignSelf: 'center',
						}}
						>
							<Text style={estilos.textoSair}>
									SAIR
							</Text>
						</TouchableOpacity>
					</View>
	</View>
)
}

export default TelaFinal;