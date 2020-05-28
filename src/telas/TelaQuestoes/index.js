import React, { Component, useState } from 'react';
import { View, Image, ImageBackground, Text, ScrollView, TouchableOpacity } from 'react-native'
import estilos from '../../telas/TelaQuestoes/styles';
// import {Jogando} from './subTelaJogando';
import 'react-native-gesture-handler';
import {perguntasListal} from '../../../perguntasNivel1'



function TelaQuestoes({ navigation }) {
  const [pergunta, setPergunta] = useState(perguntasListal);
  const [resposta, setResposta] = useState('');
  const [pulo, setPulo] = useState(3)
  const [alternativaSelecionada, setAlternativaSelecionada] = useState('')

  
  const numeroAleatorio = BuscaNumeroAleatorio()

  function BuscaNumeroAleatorio(){
    let n = Math.floor(Math.random() * 10)
    return n
  } 
  

  function buscaPerguntaAleatoria(pergunta,numeroAleatorio){
    return pergunta[numeroAleatorio].pergunta  
  }
  // function alternativasAleatorias(pergunta, numeroAleatorio){
  //   return pergunta[numeroAleatorio].alternativas.a, pergunta[numeroAleatorio].pergunta   
  // }
  
  function buscaAlternativaA(pergunta,numeroAleatorio){
    return pergunta[numeroAleatorio].alternativas.a
  }
  function buscaAlternativaB(pergunta,numeroAleatorio){
    return pergunta[numeroAleatorio].alternativas.b
  }
  function buscaAlternativaC(pergunta,numeroAleatorio){
    return pergunta[numeroAleatorio].alternativas.c
  }
  function buscaAlternativaD(pergunta,numeroAleatorio){
    return pergunta[numeroAleatorio].alternativas.d
  }

  return(
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
    <View style={estilos.constainerPergunta}>
      <View style={{justifyContent: "center", alignItems:'center'}}>
        <Text style={{color: 'yellow', fontSize: 22, margin: 5, textAlign: 'center', }}>
          {buscaPerguntaAleatoria(pergunta,numeroAleatorio)}
        </Text>
        
      </View>
      <TouchableOpacity onPress={()=> setAlternativaSelecionada}>
      <View style={{
        backgroundColor: 'rgba(0, 0, 255, 0.40)',
        width: 340,
        height: 55,
        borderRadius: 15,
        alignSelf: 'center',
        marginTop: 120,
      }}>
        <Text style={{color: 'yellow', fontSize: 22, margin: 8, textAlign: 'center', }}>
          {buscaAlternativaA(pergunta,numeroAleatorio)}
          {/* {alternativasAleatorias(pergunta, numeroAleatorio)} */}
        
        </Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> setAlternativaSelecionada}>
      <View style={{
        backgroundColor: 'rgba(0, 0, 255, 0.40)',
        width: 340,
        height: 55,
        borderRadius: 15,
        alignSelf: 'center',
        marginTop: 20

      }} >
        <Text style={{color: 'yellow', fontSize: 22, margin: 8, textAlign: 'center', }}>
        {buscaAlternativaB(pergunta,numeroAleatorio)}
        </Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> setAlternativaSelecionada}>
      <View style={{
        backgroundColor: 'rgba(0, 0, 255, 0.40)',
        width: 340,
        height: 55,
        borderRadius: 15,
        alignSelf: 'center',
        marginTop: 20

      }}>
                <Text style={{color: 'yellow', fontSize: 22, margin: 8, textAlign: 'center', }}>
        {buscaAlternativaC(pergunta,numeroAleatorio)}
        </Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> setAlternativaSelecionada}>
      <View style={{
        backgroundColor: 'rgba(0, 0, 255, 0.40)',
        width: 340,
        height: 55,
        borderRadius: 15,
        alignSelf: 'center',
        marginTop: 20

      }}>
        <Text style={{color: 'yellow', fontSize: 22, margin: 8, textAlign: 'center', }}>
        {buscaAlternativaD(pergunta,numeroAleatorio)}
        </Text>
      </View>
      </TouchableOpacity>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>

        <TouchableOpacity onPress={()=> navigation.navigate("TelaDoFim")}>
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
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> setPulo}>
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
            <Text style={{ fontSize: 22, alignSelf: "center",}}>
            {pulo}/3
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>


  </View>
  )
}

export default TelaQuestoes;