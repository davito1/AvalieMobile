import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import CadastroScreen from '../screens/CadastroScreen';
import CadastroClienteScreen from '../screens/app/CadastroClienteScreen';
import AutenticadoNavigation from './autenticado';

const Stack = createStackNavigator();

const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
        <Stack.Screen name="CadastroCliente" component={CadastroClienteScreen} />
        <Stack.Screen name="Autenticado" component={AutenticadoNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
