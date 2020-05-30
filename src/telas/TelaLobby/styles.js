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
    },

    containerRank: {
        flex: 4,
        paddingTop: '35%',
        marginBottom: '5%',
        backgroundColor: 'rgba(0, 0, 255, 0.40)',
        width: 360,
        borderRadius: 15,
        alignSelf: 'center',
        marginTop:-150,
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
            width: 1,
            height: 1
        },
        textShadowColor: 'black',
        textShadowRadius: 1,
        marginTop:-150
        // textDecorationLine: 'underline'
    },
    textoRegrasSub: {
        fontSize: 15,
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