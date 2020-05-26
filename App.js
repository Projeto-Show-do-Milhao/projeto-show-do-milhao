import React, { Component } from 'react';
import { Text, View, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaInicial from './src/telas/TelaInicial/index';
import TelaJogar from './src/telas/TelaJogar/index';
import TelaQuestoes from './src/telas/TelaQuestoes/index';

const Stack = createStackNavigator();

export default function App() {
  console.disableYellowBox = true;
  return (
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName="Questoes"
      screenOptions={{ headerShown: false}}>
        <Stack.Screen name="Tela Inicial" component={TelaInicial}/>
        <Stack.Screen name="Jogar" component={TelaJogar} />
        <Stack.Screen name="Questoes" component={TelaQuestoes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}