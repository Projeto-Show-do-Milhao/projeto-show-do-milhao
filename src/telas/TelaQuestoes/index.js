import React, { Component, useState, useEffect } from 'react';
import { View, Image, ImageBackground, Text, ScrollView, TouchableOpacity, Alert } from 'react-native'
import estilos from '../../telas/TelaQuestoes/styles';
import 'react-native-gesture-handler';
import { perguntasListal} from '../../../perguntasNivel1'
import {perguntasLista1Nivel2} from '../../../perguntasNivel2'
import {perguntasLista1Nivel3} from '../../../perguntasNivel3'



function TelaQuestoes({ navigation }) {
  const [pergunta, setPergunta] = useState(perguntasListal);
  const [pulo, setPulo] = useState(3)
  const [premio, setPremio] = useState([0, 1000, 5000, 10000, 25000, 50000, 100000, 200000, 300000, 500000, 1000000])
  const [numPergunta, setNumPergunta] = useState(0)
  let premioTotal = premio[numPergunta]
  const numeroAleatorio = BuscaNumeroAleatorio()
  const telaFinal = ()=>{navigation.navigate('TelaDoFim', premioTotal)}
  const telaCampea = ()=>{navigation.navigate('TelaDoFim', premio[10])}
  
  function mudaPerguntaEpontuacao(){
    setNumPergunta(numPergunta+1)
    if(numPergunta<=1){
			console.log(numPergunta)
      setPergunta(perguntasListal)
    }else if(numPergunta<=2){
			console.log(numPergunta)
      setPergunta(perguntasLista1Nivel2)
    }else if(numPergunta<=5){
			console.log(numPergunta)
      setPergunta(perguntasLista1Nivel3)
    }else if(numPergunta<=8){
      console.log(numPergunta)
    }else if(numPergunta==9){
			console.log('chegou no final')
			telaCampea()
    }
    buscaPerguntaAleatoria(pergunta, numeroAleatorio)
  }

	function pular(){
		if(pulo>0){
      setPulo(pulo-1)
			buscaPerguntaAleatoria(pergunta, numeroAleatorio)
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
 
  function BuscaNumeroAleatorio() {
    let n = Math.floor(Math.random() * 50)
    return n
  }

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
          <Image source={
            require('../../imagens/chico1.png')}
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
        <TouchableOpacity onPress={()=>{alerta(validaRespostaA)}}>
          <View style={estilos.containerResposta}>
            <Text style={{ color: 'yellow', fontSize: 22, margin: 8, textAlign: 'center', }}>
              {buscaAlternativaA(pergunta, numeroAleatorio)}
              {/* {alternativasAleatorias(pergunta, numeroAleatorio)} */}

            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{alerta(validaRespostaB)}}>
          <View style={estilos.containerResposta} >
            <Text style={{ color: 'yellow', fontSize: 22, margin: 8, textAlign: 'center', }}>
              {buscaAlternativaB(pergunta, numeroAleatorio)}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{alerta(validaRespostaC)}}>
          <View style={estilos.containerResposta}>
            <Text style={{ color: 'yellow', fontSize: 22, margin: 8, textAlign: 'center', }}>
              {buscaAlternativaC(pergunta, numeroAleatorio)}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{alerta(validaRespostaD)}}>
          <View style={estilos.containerResposta}>
            <Text style={{ color: 'yellow', fontSize: 22, margin: 8, textAlign: 'center', }}>
              {buscaAlternativaD(pergunta, numeroAleatorio)}
            </Text>
          </View>
        </TouchableOpacity>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>

          <TouchableOpacity onPress={() => navigation.navigate("TelaDoFim", premioTotal/2)}>
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