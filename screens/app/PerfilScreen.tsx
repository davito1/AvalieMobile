import  { View, Text, StyleSheet } from 'react-native';


export const PerfilScreen: React.FC = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Perfil do Usuário</Text>
        {}
      </View>
    );
  };

const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f8ff', 
},
title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#4682b4', 
}});