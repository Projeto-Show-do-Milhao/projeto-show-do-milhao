import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaInicial from './src/telas/TelaInicial/index';
import TelaJogar from './src/telas/TelaJogar/index';
import TelaPerfil from './src/telas/TelaPerfil/index'


const Stack = createStackNavigator();

export default function App() {
  console.disableYellowBox = true;
  return (
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName="Tela Perfil"
      screenOptions={{ headerShown: false}}>
        <Stack.Screen name="Tela Inicial" component={TelaInicial}/>
        <Stack.Screen name="Jogar" component={TelaJogar} />
        <Stack.Screen name="Tela Perfil" component={TelaPerfil}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}