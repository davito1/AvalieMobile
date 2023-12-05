import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen: React.FC = () => {
    const navigation = useNavigation();

    const handleLoginPress = () => {
        navigation.navigate('Login');
    };

    const handleCadastroPress = () => {
        navigation.navigate('Cadastro');
    };

    return (
            <View style={styles.container}>
                <Image
                    source={require('../src/assets_pictures/background.png')} // Substitua pelo caminho do logo do seu aplicativo
                    style={styles.logo}
                />
                <Text style={styles.title}>Bem-vindo ao AvalieApp</Text>
                <Text style={styles.subtitle}>Sua plataforma para avaliações físicas.</Text>

                <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonOutline} onPress={handleCadastroPress}>
                    <Text style={styles.buttonOutlineText}>Criar Conta</Text>
                </TouchableOpacity>
            </View>
    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // cover ou stretch
    },
    backgroundImageStyle: {
        opacity: 0.4,
    },
    container: {
        flex: 1,
        backgroundColor: 'rgba(240, 248, 255, 0.6)',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        width: 150,
        height: 150,
        marginBottom: 20,
        borderRadius: 55, 
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#1e90ff',
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 20,
        color: '#555',
    },
    button: {
        backgroundColor: '#1e90ff',
        padding: 15,
        borderRadius: 10,
        width: '80%',
        marginBottom: 15,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16,
    },
    buttonOutline: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        width: '80%',
        borderWidth: 1,
        borderColor: '#1e90ff',
    },
    buttonOutlineText: {
        color: '#1e90ff',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16,
    },
});

export default HomeScreen;
