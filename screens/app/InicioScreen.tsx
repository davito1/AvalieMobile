import { useFocusEffect } from '@react-navigation/native';
import { useState, useRef } from 'react';
import  { View, Text, StyleSheet, FlatList } from 'react-native';
import api from '../../services/api';
import { Modalize } from 'react-native-modalize';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const InicioScreen: React.FC = () => {

    const [ avaliacoes, setAvaliacoes ] = useState<any>([]);
    const [ avaliacao, setAvaliacao ] = useState<any>([]);
    const modalRef = useRef<Modalize>();

    useFocusEffect(() => {
        api.get('/pacientes')
            .then(respostas => {
                console.log(respostas);
                setAvaliacoes(respostas.data);
            })
            .catch(erro => console.log('ERRO', erro))
    })

    const abrirPaciente = (avaliacao:any) => {
        setAvaliacao(avaliacao)
        modalRef.current?.open();
    }

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Avaliações cadastradas</Text>
        <FlatList 
            data={avaliacoes}
            renderItem={({item}) => (
                <TouchableOpacity style={styles.text} onPress={() => abrirPaciente(item)}>
                
                    <Text style={styles.text}>{item.nome_paciente}</Text>
                </TouchableOpacity>
            )}
        />
        <Modalize ref={modalRef} modalTopOffset={200} childrenStyle={{padding: 20}}>
                <Text>Nome: {avaliacao.nome_paciente}</Text>
                <Text>Email: {avaliacao.email_paciente}</Text>
                <Text>Telefone: {avaliacao.telefone_paciente}</Text>
                <Text>Sexo: {avaliacao.sexo}</Text>
                <Text>Idade: {avaliacao.idade_paciente}</Text>
                <Text>Objetivo da pratica: {avaliacao.objetivo_pratica}</Text>
                <Text>Realiza exercicios? {avaliacao.realiza_exercicios}</Text>
                <Text>Duração dos exercícios(em minutos): {avaliacao.duracao_exercicios}</Text>
                <Text>Segunda: {avaliacao.segunda}</Text>
                <Text>Terça: {avaliacao.terca}</Text>
                <Text>Quarta: {avaliacao.quarta}</Text>
                <Text>Quinta: {avaliacao.quinta}</Text>
                <Text>Sexta: {avaliacao.sexta}</Text>
                <Text>Sabado: {avaliacao.sabado}</Text>
                <Text>Domingo: {avaliacao.domingo}</Text>
                <Text>Tem habito de fumar? {avaliacao.habito_fumar}</Text>
                <Text>Usa bebidas alcoolicas? {avaliacao.uso_bebibas}</Text>
                <Text>Tem algum limite na pratica de exercicios? {avaliacao.limitacao_pratica}</Text>
                <Text>Se houver, explique sua limitação: {avaliacao.especifica_limitacao_pratica}</Text>
                <Text>Usa algum medicamento? {avaliacao.uso_medicamentos}</Text>
                <Text>Especifique seu(s) medicamentos: {avaliacao.especifica_uso_medicamentos}</Text>
                <Text>Faz dieta? {avaliacao.faz_dieta}</Text>
                <Text>Especifique sua dieta {avaliacao.especifica_dieta}</Text>
                <Text>Possuiu alergia? {avaliacao.possui_alergia}</Text>
                <Text>Especifique sua alergia: {avaliacao.especifica_alergia}</Text>
                <Text>Peso (em kg): {avaliacao.peso}</Text>
                <Text>Peso ideal (em kg): {avaliacao.peso_ideal}</Text>
                <Text>Estatura (em cm): {avaliacao.estatura}</Text>
                <Text>Cintura (em cm): {avaliacao.cintura}</Text>
                <Text>Abdomen (em cm): {avaliacao.abdomen}</Text>
                <Text>Quadril (em cm): {avaliacao.quadril}</Text>
                <Text>Braço Direito (em cm): {avaliacao.braco_direiro}</Text>
                <Text>Braço Esquerdo (em cm): {avaliacao.braco_esquerdo}</Text>
                <Text>Antebraço Direito (em cm): {avaliacao.antebraco_direiro}</Text>
                <Text>Antebraço Esquerdo (em cm): {avaliacao.antebraco_esquerdo}</Text>
                <Text>Coxa Direita (em cm): {avaliacao.coxa_direita}</Text>
                <Text>Coxa Esquerda (em cm): {avaliacao.coxa_esquerda}</Text>
                <Text>Perna Direita (em cm): {avaliacao.perna_direita}</Text>
                <Text>Perna Esquerda (em cm): {avaliacao.perna_esquerda}</Text>
                <Text>Bicipital (em mm): {avaliacao.bicipital}</Text>
                <Text>Tricipital (em mm): {avaliacao.tricipital}</Text>
                <Text>Peitoral (em mm): {avaliacao.peitoral}</Text>
                <Text>Axilar media (em mm): {avaliacao.axilar_media}</Text>
                <Text>Subescapular (em mm): {avaliacao.subescapular}</Text>
                <Text>Abdominal (em mm): {avaliacao.abdominal}</Text>
                <Text>Supra ilíaca (em mm): {avaliacao.suprailiaca}</Text>
                <Text>Coxa (em mm): {avaliacao.coxa}</Text>
                <Text>Perna (em mm): {avaliacao.perna}</Text>
                <Text>Panturrilha (em mm): {avaliacao.panturrilha}</Text>
                <Text>Força preensão manual (em kg): {avaliacao.forca_preensao_manual}</Text>
                <Text>Flexibilidade: {avaliacao.flexibilidade}</Text>
                <Text>Potencia membros superiores: {avaliacao.potencia_membros_superiores}</Text>
                <Text>Teste agilidade: {avaliacao.teste_agilidade}</Text>
                <Text>V02 maximo: {avaliacao.v02_maximo}</Text>
                <Text>Flexão: {avaliacao.flexao}</Text>
                <Text>Flexão abdominal: {avaliacao.flexao_abdominal}</Text>
        </Modalize>
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
},
text:{
    backgroundColor: '#1e90ff',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
    width: 400,
    

}
});