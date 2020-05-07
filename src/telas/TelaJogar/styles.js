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
        marginTop: '50%',
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

    containerRank: {
        flex: 4,
        paddingTop: '35%',
        marginBottom: '5%',
        backgroundColor: 'blue',
        width: 360,
        borderRadius: 15,
        opacity: 0.15,
        alignSelf: 'center'
    },

    botaoJogar: {
        flex: 1,
        backgroundColor: 'yellow',
        width: 215,
        height: 60,
        paddingTop: '5%',
        marginBottom: '20%',
        borderRadius: 15,
        alignSelf: 'center',
        paddingBottom: '3%'
    },
    textoJogar: {
        fontSize: 20,
        alignSelf: 'center',
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