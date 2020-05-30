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

  containerPergunta: {
    backgroundColor: 'rgba(0, 0, 255, 0.40)',
    width: 340,
    height: 120,
    borderRadius: 15,
    alignSelf: 'center',
    marginBottom: 5,
    marginTop: 10
  },
  containerResposta: {
    backgroundColor: 'rgba(0, 0, 255, 0.40)',
    width: 340,
    height: 55,
    borderRadius: 15,
    alignSelf: 'center',
    marginTop: 20,
  },
  botaoParar:{
    height: 60,
    width: 100,
    backgroundColor: 'red',
    borderRadius: 15,
    margin: 14,
  },
  botaoPular: {
    height: 60,
    width: 100,
    backgroundColor: 'yellow',
    borderRadius: 15,
    margin: 14,
  }
});

export default estilos;