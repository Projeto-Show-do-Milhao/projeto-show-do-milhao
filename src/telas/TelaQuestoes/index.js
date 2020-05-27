import React, { Component, useState } from 'react';
import { View, Image, ImageBackground, Text, ScrollView, TouchableOpacity } from 'react-native'
import estilos from '../../telas/TelaQuestoes/styles';
import {Jogando} from './subTelaJogando'

function TelaQuestoes() {
  const [pergunta, setPergunta] = useState({});
  const [resposta, setResposta] = useState('');

  return <Jogando/>
}

export default TelaQuestoes;