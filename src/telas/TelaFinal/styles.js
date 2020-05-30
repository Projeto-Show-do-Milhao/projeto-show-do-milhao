import { StyleSheet } from 'react-native'

const estilos = StyleSheet.create({

    containerTelaJogar: {
        flex: 1,
        backgroundColor: '#150163',
    },

    containerImagemFundoTelaJogar: {
        backgroundColor: '#150163',
        alignItems: 'center',
        justifyContent: 'center',
        
    },

    imagemDeFundoDinheiroTelaJogar: {
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
    },

    avatarTelaJogar: {
        width: 100,
        height: 100,
        borderColor: 'white',
        borderRadius: 100,
        borderWidth: 2
    },

  constainerPergunta: {
    backgroundColor: 'rgba(0, 0, 255, 0.40)',
    width: 340,
    height: 160,
    borderRadius: 15,
    alignSelf: 'center',
    marginBottom: 400,
    marginTop: 10
  },

  constainerTelaFinal: {
    backgroundColor: 'rgba(0, 0, 255, 0.40)',
    width: 340,
    height: 300,
    borderRadius: 15,
    alignSelf: 'center',
    marginBottom: 50,
    marginTop: 100
  },

  containerResposta: {
    backgroundColor: 'rgba(0, 0, 255, 0.40)',
    width: 360,
    height: 60,
    borderRadius: 15,
    alignSelf: 'center',
    marginTop: 80
  },

  containerCabecalho: {
    justifyContent: "space-around",
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 25
  },

  textoSair: {
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
  },
  premioFinal: {
    fontSize: 35,
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'white',
    margin: 5,
    textShadowOffset: {
        width: 1,
        height: 1
    },
    textShadowColor: 'black',
    textShadowRadius: 1,
  },
  textoFinal: {
    fontSize: 35,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
    margin: 5,
    marginLeft: 10,
    textShadowOffset: {
        width: 1,
        height: 1
    },
    textShadowColor: 'black',
    textShadowRadius: 1,
  },
  botaoSair: {
    backgroundColor: 'yellow',
    width: 215,
    height: 60,
    paddingBottom: '2%',
    paddingTop: '1%',
    marginBottom: '20%',
    borderRadius: 15,
    alignSelf: 'center',
  }
});

export default estilos;