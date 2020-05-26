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
    marginBottom: 400
  },
  containerResposta: {
    backgroundColor: 'rgba(0, 0, 255, 0.40)',
    width: 360,
    height: 60,
    borderRadius: 15,
    alignSelf: 'center',
    marginTop: 80
  }
});

export default estilos;