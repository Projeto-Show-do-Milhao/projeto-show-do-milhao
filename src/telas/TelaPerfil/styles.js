import { StyleSheet } from 'react-native'

const estilos = StyleSheet.create({
    containerTelaPerfil: {
        flex: 1,
        backgroundColor: '#150163',
    },

    imagemDeFundoDinheiroTelaPerfil: {
        flex: 1,
        width: 432,
        height: 507,
        opacity: 0.15
    },

    imagemDeFundoShowDoMilhaoTelaPerfil: {
        marginTop: '10%',
        marginLeft: '5%',
        width: 163.75,
        height: 93.75,
    },

    containerMaiorPontuacao: {
        marginBottom: 10,
        alignSelf: 'center',
        width: 250,
        height: 50,
        backgroundColor: 'rgba(0, 0, 255, 0.40)',
        borderRadius: 20  
    },

    containerUltimaPontuacao: {
        marginBottom: 100,
        alignSelf: 'center',
        width: 250,
        height: 50,
        backgroundColor: 'rgba(0, 0, 255, 0.40)',
        borderRadius: 20 
    },

    containerBotaoLogout: {
        alignSelf: 'center',
        marginBottom: 50,
        width: 150,
        height: 50,
    },

    botaoLogout: {
        width: 150,
        height: 50,
        backgroundColor: 'red',
        borderRadius: 20,
    },

    containerNickName: {
        marginBottom: 105,
        marginLeft: 200,
        width: 150,
        height: 50,
        backgroundColor: 'rgba(0, 0, 255, 0.40)',
        borderRadius: 20  
    },

    nickname: {
        marginTop: 10,
        fontSize: 18,
        color: 'white',
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 20
    },

    maiorPontuacao: {
        marginTop: 10,
        fontSize: 18,
        color: 'white',
        alignSelf: 'center',
        fontWeight: 'bold'
    },

    textoBotaoLogout: {
        marginTop: 10,
        fontSize: 18,
        color: 'white',
        alignSelf: 'center',
        fontWeight: 'bold', 
        fontSize: 25,    
    },

    ultimaPontuacao: {
        marginTop: 10,
        fontSize: 18,
        color: 'white',
        alignSelf: 'center',
        fontWeight: 'bold'
    },

    avatarTelaPerfil: {
        marginTop: '10%',
        marginLeft: '13%',
        width: 100,
        height: 100,
        borderColor: 'white',
        borderRadius: 100,
        borderWidth: 2
    },

    containerLogoEAvatar: {
        // flexDirection: 'row',
        flex: 1,
        // justifyContent: 'space-around',
    },
})

export default estilos;