import React, { Component, useState, useEffect } from 'react';
import { View, Image, ImageBackground, Text, ScrollView, TouchableOpacity, Alert, ToastAndroid } from 'react-native'
import estilos from '../../telas/TelaQuestoes/styles';
import 'react-native-gesture-handler';
import { perguntasListal, perguntasLista2, perguntasLista3} from '../../../perguntasNivel1'
import {perguntasLista1Nivel2, perguntasLista2Nivel2, perguntasLista3Nivel2} from '../../../perguntasNivel2'
import {perguntasLista1Nivel3, perguntasLista2Nivel3, perguntasLista3Nivel3} from '../../../perguntasNivel3'
import {perguntasListaMilho} from '../../../perguntasDoMilho'
import firebase from 'firebase'

function TelaQuestoes({route, navigation}) {
  const {nome} = route.params
  const {foto} = route.params
  const {id} = route.params
  const [pergunta, setPergunta] = useState(perguntasListal);
  const [pulo, setPulo] = useState(3)
  const [premio, setPremio] = useState([0, 1000, 5000, 10000, 25000, 50000, 100000, 200000, 300000, 500000, 1000000])
  const [numPergunta, setNumPergunta] = useState(0)
  let premioTotal = premio[numPergunta]
  //const [premioTotal, setPremioTotal] = useState
  const [numerosSorteados, setNumerosSorteados] = useState({})
  const numeroAleatorio = BuscaNumeroAleatorio(numerosSorteados) 
  const telaFinal = ()=>{navigation.navigate('TelaDoFim', premioTotal); registraPontuacaoErro(nome, id, foto, premioTotal)}
  const telaCampea = ()=>{navigation.navigate('TelaDoFim', premio[10]); registraPontuacao(nome, id, foto, premioTotal);}
  var usuarios = 'Usuários'
  var idUsuario = id => `${usuarios}/${id}`
  function registraPontuacaoErro(nome, id, foto, pontuacao){
    firebase.database().ref(idUsuario(id)).set({
      nome,
      id,
      foto,
      pontuação: pontuacao,
    })
  }  

  function registraPontuacao(nome, id, foto, pontuacao){
    firebase.database().ref(idUsuario(id)).set({
      nome,
      id,
      foto,
      pontuação: 1000000,
    })
  }
 
  // function buscaPontuacaoTotal(id, pontuacao){
  //   firebase.database().ref(id).on('value',(snapshot)=>{
  //     const pontuacaoAcumulada = snapshot.val().pontuação + pontuacao
  //     console.log(pontuacaoAcumulada)
  //     return pontuacaoAcumulada
  //   })
  // }
  function registraPontuacaoParar(nome, id, foto, pontuacao){
    const pontuacaoNova = pontuacao/2
    firebase.database().ref(idUsuario(id)).set({
      nome,
      id,
      foto,
      pontuação: pontuacaoNova,
    })
  }
  function mudaPerguntaEpontuacao(){
    setNumPergunta(numPergunta+1)
    setNumerosSorteados({})
    if(numPergunta==0){
      console.log(numPergunta)
      setPergunta(perguntasLista2)
    }else if(numPergunta==1){
			console.log(numPergunta)
      setPergunta(perguntasLista3)
    }else if(numPergunta==2){
			console.log(numPergunta)
      setPergunta(perguntasLista1Nivel2)
    }else if(numPergunta==3){
			console.log(numPergunta)
      setPergunta(perguntasLista2Nivel2)
    }else if(numPergunta==4){
      console.log(numPergunta)
      setPergunta(perguntasLista3Nivel2)
    }else if(numPergunta==5){
      console.log(numPergunta)
			setPergunta(perguntasLista1Nivel3)
    }else if(numPergunta==6){
      console.log(numPergunta)
			setPergunta(perguntasLista2Nivel3)
    }else if(numPergunta==7){
      console.log(numPergunta)
			setPergunta(perguntasLista3Nivel3)
    }else if(numPergunta==8){
      console.log(numPergunta)
			setPergunta(perguntasListaMilho)
    }else if(numPergunta==9){
      console.log(numPergunta)
      telaCampea()
    }
    buscaPerguntaAleatoria(pergunta, numeroAleatorio)
  }

	function pular(){
    if(pulo>0){
      setPulo(pulo-1)
      buscaPerguntaAleatoria(pergunta, numeroAleatorio)
    }else{
      ToastAndroid.show("Você não tem mais pulos!", ToastAndroid.SHORT)
    }
	}

  function validaRespostaA() {
    const respostaCerta = buscaResposta(pergunta, numeroAleatorio)
    const respostaSelecionada = buscaAlternativaA(pergunta, numeroAleatorio)
    if(respostaCerta === respostaSelecionada){
      console.log('vc acertou')
			mudaPerguntaEpontuacao()
    }else{
      console.log('errou')
      setPergunta(perguntasListal)
      setNumPergunta(0)
      premioTotal=0
      telaFinal()
    }
  }

  function validaRespostaB() {
    const respostaCerta = buscaResposta(pergunta, numeroAleatorio)
    const respostaSelecionada = buscaAlternativaB(pergunta, numeroAleatorio)
    if(respostaCerta === respostaSelecionada){
			console.log('vc acertou')
      mudaPerguntaEpontuacao()
    }else{
      console.log('vc errou')
			setPergunta(perguntasListal)
			setNumPergunta(numPergunta+1)
      setNumPergunta(0)
      premioTotal=0
      telaFinal()
    }
  }

  function validaRespostaC() {
    const respostaCerta = buscaResposta(pergunta, numeroAleatorio)
    const respostaSelecionada = buscaAlternativaC(pergunta, numeroAleatorio)
    if(respostaCerta === respostaSelecionada){
			console.log('vc acertou')
      mudaPerguntaEpontuacao()
    }else{
      console.log('vc errou')
      setPergunta(perguntasListal)
      setNumPergunta(0)
      premioTotal=0
      telaFinal()
    }
  }
  
  function validaRespostaD() {
    const respostaCerta = buscaResposta(pergunta, numeroAleatorio)
    const respostaSelecionada = buscaAlternativaD(pergunta, numeroAleatorio)
    if(respostaCerta === respostaSelecionada){
			console.log('vc acertou')
      mudaPerguntaEpontuacao()
    }else{
      console.log('vc errou')
      setPergunta(perguntasListal)
      setNumPergunta(0)
      premioTotal=0
      telaFinal()
    }
  }
 
  function BuscaNumeroAleatorio(numerosSorteados){
    let n = Math.floor(Math.random() * 15)
    //verifica se n tá no objeto
    if(numerosSorteados[n]){
      return BuscaNumeroAleatorio(numerosSorteados);
    }else{
      numerosSorteados[n]=n;
      return n
    }
  }
  function alerta(validacao){
    Alert.alert(
      'Você tem certeza disso?',
      'Posso perguntar?',
      [

        {text: 'Não tenho', onPress: () => {}},
        {text: 'Tenho', onPress: () => validacao()},
      ],
      { cancelable: false }
    )}

  function buscaPerguntaAleatoria(pergunta, numeroAleatorio) {
    return pergunta[numeroAleatorio].pergunta
  }
  
  function buscaAlternativaA(pergunta, numeroAleatorio) {
    return pergunta[numeroAleatorio].alternativas.a
  }
  function buscaAlternativaB(pergunta, numeroAleatorio) {
    return pergunta[numeroAleatorio].alternativas.b
  }
  function buscaAlternativaC(pergunta, numeroAleatorio) {
    return pergunta[numeroAleatorio].alternativas.c
  }
  function buscaAlternativaD(pergunta, numeroAleatorio) {
    return pergunta[numeroAleatorio].alternativas.d
  }
  function buscaResposta(pergunta, numeroAleatorio) {
    return pergunta[numeroAleatorio].resposta
  }

  return (
    <View style={estilos.containerTelaJogar}>
      <View style={estilos.containerImagemFundoTelaJogar}>
        <ImageBackground source={
          require('../../imagens/dinheiroBackground.png')}
          style={estilos.imagemDeFundoDinheiroTelaJogar}>
        </ImageBackground>
      </View>
      <View style={estilos.containerCabecalho}>
        <ImageBackground source={
          require('../../imagens/showDoMilhaoBackground.png')}
          style={estilos.imagemDeFundoShowDoMilhaoTelaJogar}>
        </ImageBackground>
        <View>
          <Image source={{uri: foto}}
            style={estilos.avatarTelaJogar}>
          </Image>
        </View>
      </View>
      <View style={{
        justifyContent: 'space-around',
        flexDirection: 'row'
      }}>
        <Text style={{color: 'yellow'}}>
          Prêmio Total: R${premioTotal}
        </Text>
        <Text style={{color: 'yellow'}}>
          Pergunta {(numPergunta+1)}/10
        </Text>
      </View>
      <View style={estilos.containerPergunta}>
        <View style={{ justifyContent: "center", alignItems: 'center' }}>
          <Text style={{ color: 'yellow', fontSize: 22, margin: 5, textAlign: 'center', }}>
            {buscaPerguntaAleatoria(pergunta, numeroAleatorio)}
          </Text>
          </View>
        </View>
        <TouchableOpacity onPress={()=>alerta(validaRespostaA)}>
          <View style={estilos.containerResposta}>
            <Text style={{ color: 'yellow', fontSize: 22, margin: 8, textAlign: 'center', }}>
              {buscaAlternativaA(pergunta, numeroAleatorio)}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>alerta(validaRespostaB)}>
          <View style={estilos.containerResposta} >
            <Text style={{ color: 'yellow', fontSize: 22, margin: 8, textAlign: 'center', }}>
              {buscaAlternativaB(pergunta, numeroAleatorio)}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>alerta(validaRespostaC)}>
          <View style={estilos.containerResposta}>
            <Text style={{ color: 'yellow', fontSize: 22, margin: 8, textAlign: 'center', }}>
              {buscaAlternativaC(pergunta, numeroAleatorio)}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>alerta(validaRespostaD)}>
          <View style={estilos.containerResposta}>
            <Text style={{ color: 'yellow', fontSize: 22, margin: 8, textAlign: 'center', }}>
              {buscaAlternativaD(pergunta, numeroAleatorio)}
            </Text>
          </View>
        </TouchableOpacity>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>

          <TouchableOpacity onPress={() => {registraPontuacaoParar(nome, id, foto, premioTotal); navigation.navigate("TelaDoFim", premioTotal/2)}}>
            <View style={estilos.botaoParar}>
            <Text style={{ fontSize: 22, alignSelf: "center", }}>
                PARAR
            </Text>
						<Text style={{ fontSize: 16, alignSelf: "center", }}>
                R${premioTotal/2}
            </Text>
            <Text style={{ fontSize: 22, alignSelf: "center", }}>
            </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => pular()}>
            <View style={estilos.botaoPular}>
              <Text style={{ fontSize: 22, alignSelf: "center", }}>
                PULAR
            </Text>
              <Text style={{ fontSize: 22, alignSelf: "center", }}>
                {pulo}/3
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>


   
  )
}

export default TelaQuestoes;