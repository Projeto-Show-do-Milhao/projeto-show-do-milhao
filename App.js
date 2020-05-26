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
      initialRouteName="Tela do Fim"
      screenOptions={{ headerShown: false}}>
        <Stack.Screen name="Tela Inicial" component={TelaInicial}/>
        <Stack.Screen name="Tela Lobby" component={TelaLobby} />
        <Stack.Screen name="Questoes" component={TelaQuestoes} />
        <Stack.Screen name="Tela do Perfil" component={TelaPerfil}/>
        <Stack.Screen name="Tela do Fim" component={TelaFinal}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
