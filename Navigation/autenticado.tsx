import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { InicioScreen } from '../screens/app/InicioScreen';
import CadastroClienteScreen from '../screens/app/CadastroClienteScreen';
import { PerfilScreen } from '../screens/app/PerfilScreen';

const Tab = createBottomTabNavigator();

const AutenticadoNavigation: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#4682b4', 
        tabBarInactiveTintColor: '#a9a9a9',
      }}
    >
      <Tab.Screen
        name="Inicio"
        component={InicioScreen}
        options={{
          tabBarLabel: 'Início',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Cadastrar Cliente"
        component={CadastroClienteScreen}
        options={{
          tabBarLabel: 'Cadastrar Cliente',
          tabBarIcon: ({ color, size }) => (
            <Icon name="user-plus" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={PerfilScreen} 
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};


export default AutenticadoNavigation;
