import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaInicial from './src/telas/TelaInicial/index';
import TelaLobby from './src/telas/TelaLobby/index';
import TelaQuestoes from './src/telas/TelaQuestoes/index';
import TelaPerfil from './src/telas/TelaPerfil/index';
import TelaFinal from './src/telas/TelaFinal/index'


const Stack = createStackNavigator();

export default function App() {
  console.disableYellowBox = true;
  return (
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName="TelaDoFim"
      screenOptions={{ headerShown: false}}>
        <Stack.Screen name="TelaInicial" component={TelaInicial}/>
        <Stack.Screen name="TelaLobby" component={TelaLobby} />
        <Stack.Screen name="Questoes" component={TelaQuestoes} />
        <Stack.Screen name="TelaDoPerfil" component={TelaPerfil}/>
        <Stack.Screen name="TelaDoFim" component={TelaFinal}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}