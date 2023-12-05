import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import api from '../services/api';

const LoginScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    api.post('/login', { email, senha })
      .then((response) => {
        console.log(response.data);
        navigation.navigate('Autenticado');
      })
      .catch(() => {
        Alert.alert('Usuário ou senha incorreta');
      });
  };

  const handleNavigateToCadastro = () => {
    navigation.navigate('Cadastro');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={setEmail}
            placeholderTextColor="#000"  // Cor do placeholder
          />
        </View>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Senha"
            secureTextEntry
            onChangeText={setSenha}
            placeholderTextColor="#000"  // Cor do placeholder
          />
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.link} onPress={handleNavigateToCadastro}>
        <Text style={styles.linkText}>Criar uma conta</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',  // Fundo branco
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#000',  // Cor do título
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  inputWrapper: {
    marginBottom: 10,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#080808',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    color: '#080808',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  button: {
    backgroundColor: '#1e90ff',
    padding: 15,
    borderRadius: 10,
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
  link: {
    marginTop: 10,
  },
  linkText: {
    color: '#080808',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
