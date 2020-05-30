import 'react-native-gesture-handler';
import React, { Component, useState } from 'react';
import { View, Image, ImageBackground, Text, TouchableOpacity, Button } from 'react-native';
import estilos from '../../telas/TelaFinal/styles';

function TelaFinal({route , navigation }) {

const premioTotal = route.params

let resposta = ''
if(premioTotal == 0){
resposta = 'Infelizmente você perdeu Tudo!\n🤬😭🥺'
}else if(premioTotal <= 100000){
resposta = 'Você não tá rico mas pode comprar um Kinder Ovo\n🥳🥳🥳'
}else if(premioTotal <= 500000){
resposta = 'Não tá milionário mas tá rico já!\n🤩🤩🤩'
}else if(premioTotal > 500000){
resposta = '👑\nParabéns!\nVocê agora é um Milionário!!!\n🤑🤑🤑🤑'
}
return (
<View style={estilos.containerTelaJogar}>
	<View style={estilos.containerImagemFundoTelaJogar}>
			<ImageBackground source={require('../../imagens/dinheiroBackground.png')} 
				style={estilos.imagemDeFundoDinheiroTelaJogar}
			>
			</ImageBackground>
	</View>
	<View style={estilos.containerCabecalho}>
			<ImageBackground source={require('../../imagens/showDoMilhaoBackground.png')}
			 	style={estilos.imagemDeFundoShowDoMilhaoTelaJogar}
			>
			</ImageBackground>
			<View>
					<Image source={require('../../imagens/chico1.png')} style={estilos.avatarTelaJogar}>
					</Image>
			</View>
	</View>
	<View style={estilos.constainerTelaFinal}>
		<Text style={estilos.textoFinal}>
				{resposta}
		</Text>
				<Text style={estilos.premioFinal}>
					R${premioTotal} {console.log(premioTotal)}
					</Text>
	</View>
			<View style={{
					alignItems: 'center',
					marginTop: 50
			}}>
				
	</View>

				<TouchableOpacity 
				onPress={()=> navigation.navigate("TelaLobby")}
				style={estilos.botaoSair}
				>
					<Text style={estilos.textoSair}>
							SAIR
					</Text>
				</TouchableOpacity>
</View>
)
}

export default TelaFinal;