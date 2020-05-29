import React, { Component, useState } from 'react';
import { View, Image, ImageBackground, Text, ScrollView, TouchableOpacity } from 'react-native'
import estilos from '../../telas/TelaQuestoes/styles';
// import {Jogando} from './subTelaJogando';
import 'react-native-gesture-handler';
import { perguntasListal, perguntasLista2 } from '../../../perguntasNivel1'
import {perguntasLista1Nivel2} from '../../../perguntasNivel2'
import {perguntasLista1Nivel3} from '../../../perguntasNivel3'



function TelaQuestoes({ navigation }) {
  const [pergunta, setPergunta] = useState(perguntasListal);
  const [pulo, setPulo] = useState(3)
  const [premio, setPremio] = useState([0,1000, 5000, 10000, 25000, 50000, 100000, 200000, 300000, 500000, 1000000])
  const [numPergunta, setNumPergunta] = useState(0)
  let premioTotal = premio[numPergunta]
  const numeroAleatorio = BuscaNumeroAleatorio()
  const telaFinal = ()=>{navigation.navigate('TelaDoFim', premioTotal)}

  function mudaPerguntaEpontuacao(){
    setNumPergunta(numPergunta+1)
    if(numPergunta<=2){
      setPergunta(perguntasLista2)
    }else if(numPergunta<=4){
      setPergunta(perguntasLista1Nivel2)
    }else if(numPergunta<=8){
      setPergunta(perguntasLista1Nivel3)
    }else if(numPergunta<=10){
      setPergunta(perguntasLista1Nivel3)
    }else if(numPergunta===11){
      telaFinal()
    }
    
    
    buscaPerguntaAleatoria(pergunta, numeroAleatorio)
  }

  function finalizaJogo(){
    
      telaFinal()
    
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
    let n = Math.floor(Math.random() * 10)
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
      <View style={{
        justifyContent: "space-around",
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginTop: 25
      }}>
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
        <TouchableOpacity onPress={validaRespostaA}>
          <View style={{
            backgroundColor: 'rgba(0, 0, 255, 0.40)',
            width: 340,
            height: 55,
            borderRadius: 15,
            alignSelf: 'center',
            marginTop: 80,
          }}>
            <Text style={{ color: 'yellow', fontSize: 22, margin: 8, textAlign: 'center', }}>
              {buscaAlternativaA(pergunta, numeroAleatorio)}
              {/* {alternativasAleatorias(pergunta, numeroAleatorio)} */}

            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={validaRespostaB}>
          <View style={{
            backgroundColor: 'rgba(0, 0, 255, 0.40)',
            width: 340,
            height: 55,
            borderRadius: 15,
            alignSelf: 'center',
            marginTop: 20
          }} >
            <Text style={{ color: 'yellow', fontSize: 22, margin: 8, textAlign: 'center', }}>
              {buscaAlternativaB(pergunta, numeroAleatorio)}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={validaRespostaC}>
          <View style={{
            backgroundColor: 'rgba(0, 0, 255, 0.40)',
            width: 340,
            height: 55,
            borderRadius: 15,
            alignSelf: 'center',
            marginTop: 20

          }}>
            <Text style={{ color: 'yellow', fontSize: 22, margin: 8, textAlign: 'center', }}>
              {buscaAlternativaC(pergunta, numeroAleatorio)}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={validaRespostaD}>
          <View style={{
            backgroundColor: 'rgba(0, 0, 255, 0.40)',
            width: 340,
            height: 55,
            borderRadius: 15,
            alignSelf: 'center',
            marginTop: 20

          }}>
            <Text style={{ color: 'yellow', fontSize: 22, margin: 8, textAlign: 'center', }}>
              {buscaAlternativaD(pergunta, numeroAleatorio)}
            </Text>
          </View>
        </TouchableOpacity>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>

          <TouchableOpacity onPress={() => navigation.navigate("TelaDoFim", premioTotal/2)}>
            <View style={{
              height: 60,
              width: 100,
              backgroundColor: 'red',
              borderRadius: 15,
              margin: 14,

            }}>
              <Text style={{ fontSize: 22, alignSelf: "center", }}>
                PARAR
            </Text>
            <Text style={{ fontSize: 22, alignSelf: "center", }}>
            </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setPulo}>
            <View style={{
              height: 60,
              width: 100,
              backgroundColor: 'yellow',
              borderRadius: 15,
              margin: 14,

            }}>
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