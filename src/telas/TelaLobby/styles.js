	import { StyleSheet } from 'react-native'

	const estilos = StyleSheet.create({

		containerTelaJogar: {
				flex: 1,
				backgroundColor: '#150163',
		},

		containerImagemFundoTelaJogar: {
				flex: 1,
				backgroundColor: '#150163',
				alignItems: 'center',
				justifyContent: 'center',
				
		},

		imagemDeFundoDinheiroTelaJogar: {
				marginTop: '90%',
				flex: 1,
				width: 432,
				height: 507,
				opacity: 0.15
		},

		imagemDeFundoShowDoMilhaoTelaJogar: {
				width: 163.75,
				height: 93.75,
		},
		containerLogoEAvatar: {
				flexDirection: 'row',
				flex: 3,
                justifyContent: 'space-around',
                marginTop:-80
		},

		containerRank: {
				// flex: 4,
				height:400,
				paddingTop: '35%',
				marginBottom: 10,
				backgroundColor: 'rgba(0, 0, 255, 0.40)',
				width: 360,
				borderRadius: 15,
				alignSelf: 'center',
				marginTop:-245,
		},

		botaoJogar: {
				// flex: 1,
				height:75,
				backgroundColor: 'yellow',
				width: 215,
				paddingBottom: '2%',
				paddingTop: '1%',
				marginBottom: '20%',
				borderRadius: 15,
				alignSelf: 'center',
		},
		textoJogar: {
				fontSize: 35,
				alignSelf: 'center',
				fontWeight: 'bold',
				color: 'white',
				textShadowOffset: {
						width: 1,
						height: 1
				},
				textShadowColor: 'black',
				textShadowRadius: 1,
				// textDecorationLine: 'underline'
		},
		textoRegrasPrincipal: {
				fontSize: 35,
				alignSelf: 'center',
				fontWeight: 'bold',
				color: 'white',
				textShadowOffset: {
						width: 3,
						height: 3
				},
				textShadowColor: 'black',
				textShadowRadius: 1,
				marginTop:-110,
				marginBottom:30
				// textDecorationLine: 'underline'
		},
		textoRegrasSub: {
				fontSize: 18,
				margin:15,
				alignSelf: 'center',
				fontWeight: 'bold',
				color: 'yellow',
				textShadowOffset: {
						width: 1,
						height: 1
				},
				textShadowColor: 'black',
				textShadowRadius: 1,
				textAlign:'center',
				marginBottom:-2,
				// textDecorationLine: 'underline'
		},
		textoRegrasSubFinal: {
				fontSize: 22,
				margin:20,
				alignSelf: 'center',
				fontWeight: 'bold',
				color: 'yellow',
				textShadowOffset: {
						width: 1,
						height: 1
				},
				textShadowColor: 'black',
				textShadowRadius: 1,
				textAlign:'center',
				marginBottom:-2,
				// textDecorationLine: 'underline'
		},

		avatarTelaJogar: {
				width: 100,
				height: 100,
				borderColor: 'white',
				borderRadius: 100,
				borderWidth: 2
		}
	});

	export default estilos;