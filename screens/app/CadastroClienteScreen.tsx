import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import RNPickerSelect from "react-native-picker-select";
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';
export type cadastroItem = {
  nome_paciente: string,
    email_paciente: string,
    telefone_paciente: string,
    sexo: string,
    idade_paciente: string,
    objetivo_pratica: string,
    realiza_exercicios: string,
    duracao_exercicios: string,
    segunda: string,
    terca: string,
    quarta: string,
    quinta: string,
    sexta: string,
    sabado: string,
    domingo: string,
    habito_fumar: string,
    uso_bebibas: string,
    limitacao_pratica: string,
    especifica_limitacao_pratica: string,
    uso_medicamentos: string,
    especifica_uso_medicamentos: string,
    faz_dieta: string,
    especifica_dieta: string,
    possui_alergia: string,
    especifica_alergia: string,
    peso: string,
    peso_ideal: string,
    porcentagem_gordura: string,
    massa_magra: string,
    estatura: string,
    torax: string,
    cintura: string,
    abdomen: string,
    quadril: string,
    braco_direiro: string,
    braco_esquerdo: string,
    antebraco_direiro: string,
    antebraco_esquerdo: string,
    coxa_direita: string,
    coxa_esquerda: string,
    perna_direita: string,
    perna_esquerda: string,
    bicipital: string,
    tricipital: string,
    peitoral: string,
    axilar_media: string,
    subescapular: string,
    abdominal: string,
    suprailiaca: string,
    coxa: string,
    perna: string,
    panturrilha: string,
    forca_preensao_manual: string,
    flexibilidade: string,
    potencia_membros_superiores: string,
    teste_agilidade: string,
    v02_maximo: string,
    flexao: string,
    flexao_abdominal: string,
}

const CadastroClienteScreen: React.FC = () => {
  const [formData, setFormData] = useState<cadastroItem[]>([]);

  const navigation = useNavigation();

  const handleCadastro = () => {

      //console.log(formData);
    api.post('/pacientes', formData)
      .then(response => {
        Alert.alert('Cadastrado com sucesso');
        navigation.navigate('Inicio');
      }).catch(err => {
        
          console.error("Axios request failed", err.response?.data, err.toJSON());
        
      })
  };

  return (
    <ScrollView style={styles.container}>
      <Text>Nome</Text>
      <TextInput
        style={styles.input}
        placeholder=""
        value={formData.nome_paciente}
        onChangeText={(text) => setFormData({ ...formData, nome_paciente: text })}
      />
      <Text>Email</Text>
      <TextInput
        style={styles.input}
        placeholder=""
        value={formData.email_paciente}
        onChangeText={(text) => setFormData({ ...formData, email_paciente: text })}
      />
      <Text>Telefone</Text>
      <TextInput
        style={styles.input}
        placeholder=""
        value={formData.telefone_paciente}
        onChangeText={(text) => setFormData({ ...formData, telefone_paciente: text })}
      />
      <Text>Sexo</Text>
      <View style={styles.select}>
      <RNPickerSelect
      placeholder=""          
      onValueChange={(text) => setFormData({ ...formData, sexo: text })}
      items={[
      { label: "Masculino", value: "Masculino" },
      { label: "Feminino", value: "Feminino" },
      ]}
      />
      </View>
      <Text>Idade</Text>
      <TextInput
        style={styles.input}
        placeholder=""
        value={formData.idade_paciente}
        onChangeText={(text) => setFormData({ ...formData, idade_paciente: text })}
      />
      <Text>Objetido da pratica de exercícios</Text>
      <TextInput
        style={styles.input}
        placeholder=""
        value={formData.objetivo_pratica}
        onChangeText={(text) => setFormData({ ...formData, objetivo_pratica: text })}
      />
      <Text>Realiza Exercicios Fisicos?</Text>
      <View style={styles.select}>
      <RNPickerSelect
      placeholder=""          
      onValueChange={(text) => setFormData({ ...formData, realiza_exercicios: text })}
      items={[
      { label: "Sim", value: "1" },
      { label: "Não", value: "0" },
      ]}

      />
      </View>
      <Text>Duração dos exercícios fisicos(em minutos)</Text>
      <TextInput
        style={styles.input}
        placeholder=""
        value={formData.duracao_exercicios}
        onChangeText={(text) => setFormData({ ...formData, duracao_exercicios: text })}
      />
      <Text style={styles.text}>Quais dias da semana você pratica exercicios?</Text> 
      <View style={styles.select}>  
      <Text>
        Segunda-Feira
      </Text>
      <RNPickerSelect
      placeholder=""          
      onValueChange={(text) => setFormData({ ...formData, segunda: text })}
      items={[
      { label: "Sim", value: "1" },
      { label: "Não", value: "0" },
      ]}
      />
      </View>
      <View style={styles.select}>
      <Text>
        Terça-Feira
      </Text>
      <RNPickerSelect
      placeholder=""          
      onValueChange={(text) => setFormData({ ...formData, terca: text })}
      items={[
      { label: "Sim", value: "1" },
      { label: "Não", value: "0" },
      ]}
      />
      </View>
      <View style={styles.select}>
      <Text>
        Quarta-Feira
      </Text>
      <RNPickerSelect
      placeholder=""          
      onValueChange={(text) => setFormData({ ...formData, quarta: text })}
      items={[
      { label: "Sim", value: "1" },
      { label: "Não", value: "0" },
      ]}
      />
      </View>
      <View style={styles.select}>
      <Text>
        Quinta-Feira
      </Text>
      <RNPickerSelect
      placeholder=""          
      onValueChange={(text) => setFormData({ ...formData, quinta: text })}
      items={[
      { label: "Sim", value: "1" },
      { label: "Não", value: "0" },
      ]}
      />
      </View>
      <View style={styles.select}>
      <Text>
        Sexta-Feira
      </Text>
      <RNPickerSelect
      placeholder=""          
      onValueChange={(text) => setFormData({ ...formData, sexta: text })}
      items={[
      { label: "Sim", value: "1" },
      { label: "Não", value: "0" },
      ]}
      />
      </View>
      <View style={styles.select}>
      <Text>
        Sábado
      </Text>
      <RNPickerSelect
      placeholder=""          
      onValueChange={(text) => setFormData({ ...formData, sabado: text })}
      items={[
      { label: "Sim", value: "1" },
      { label: "Não", value: "0" },
      ]}
      />
      </View>
      <View style={styles.select}>
      <Text>
        Domingo
      </Text>
      <RNPickerSelect
      placeholder=""          
      onValueChange={(text) => setFormData({ ...formData, domingo: text })}
      items={[
      { label: "Sim", value: "1" },
      { label: "Não", value: "0" },
      ]}
      />
      </View>
      <Text>Tem hábito de fumar?</Text>
      <View style={styles.select}>
      <RNPickerSelect
      placeholder=""          
      onValueChange={(text) => setFormData({ ...formData, habito_fumar: text })}
      items={[
      { label: "Sim", value: "1" },
      { label: "Não", value: "0" },
      ]}
      />
      </View>
      <Text>Faz o uso de bebidas alcoolicas?</Text>
      <View style={styles.select}>
      <RNPickerSelect
      placeholder=""          
      onValueChange={(text) => setFormData({ ...formData, uso_bebibas: text })}
      items={[
      { label: "Sim", value: "1" },
      { label: "Não", value: "0" },
      ]}
      />
      </View>
      <Text>Tem alguma limitação na pratica de exercicios fisicos?</Text>
      <View style={styles.select}>
      <RNPickerSelect
      placeholder=""          
      onValueChange={(text) => setFormData({ ...formData, limitacao_pratica: text })}
      items={[
      { label: "Sim", value: "1" },
      { label: "Não", value: "0" },
      ]}
      />
      </View>
      <Text>Se sim, especifique essa limitação</Text>
      <TextInput
        style={styles.input}
        placeholder=""
        value={formData.especifica_limitacao_pratica}
        onChangeText={(text) => setFormData({ ...formData, especifica_limitacao_pratica: text })}
      />
      <Text>Faz o uso de algum medicamento diariamente?</Text>
      <View style={styles.select}>
      <RNPickerSelect
      placeholder=""          
      onValueChange={(text) => setFormData({ ...formData, uso_medicamentos: text })}
      items={[
      { label: "Sim", value: "1" },
      { label: "Não", value: "0" },
      ]}
      />
      </View>
      <Text>Se sim, especifique essa medicação</Text>
      <TextInput
        style={styles.input}
        placeholder=""
        value={formData.especifica_uso_medicamentos}
        onChangeText={(text) => setFormData({ ...formData, especifica_uso_medicamentos: text })}
      />
      <Text>Faz alguma dieta?</Text>
      <View style={styles.select}>
      <RNPickerSelect
      placeholder=""          
      onValueChange={(text) => setFormData({ ...formData, faz_dieta: text })}
      items={[
      { label: "Sim", value: "1" },
      { label: "Não", value: "0" },
      ]}
      />
      </View>
      <Text>Se sim, especifique essa dieta</Text>
      <TextInput
        style={styles.input}
        placeholder=""
        value={formData.especifica_dieta}
        onChangeText={(text) => setFormData({ ...formData, especifica_dieta: text })}
      />
      <Text>Possui alguma alergia?</Text>
      <View style={styles.select}>
      <RNPickerSelect
      placeholder=""          
      onValueChange={(text) => setFormData({ ...formData, possui_alergia: text })}
      items={[
      { label: "Sim", value: "1" },
      { label: "Não", value: "0" },
      ]}
      />
      </View>
      <Text>Se sim, especifique essa alergia</Text>
      <TextInput
        style={styles.input}
        placeholder=""
        value={formData.especifica_alergia}
        onChangeText={(text) => setFormData({ ...formData, especifica_alergia: text })}
      />
      <Text>Peso</Text>
      <TextInput
        style={styles.input}
        placeholder=""
        value={formData.peso}
        onChangeText={(text) => setFormData({ ...formData, peso: text })}
      />
      <Text>Peso Ideal</Text>
      <TextInput
        style={styles.input}
        placeholder=""
        value={formData.peso_ideal}
        onChangeText={(text) => setFormData({ ...formData, peso_ideal: text })}
      />
      <Text>Porcentagem de gordura</Text>
      <TextInput
        style={styles.input}
        placeholder=""
        value={formData.porcentagem_gordura}
        onChangeText={(text) => setFormData({ ...formData, porcentagem_gordura: text })}
      />
      <Text>Massa Magra</Text>
      <TextInput
        style={styles.input}
        placeholder=""
        value={formData.massa_magra}
        onChangeText={(text) => setFormData({ ...formData, massa_magra: text })}
      />
      <Text>Estatura(em cm)</Text>
      <TextInput
        style={styles.input}
        placeholder=""
        value={formData.estatura}
        onChangeText={(text) => setFormData({ ...formData, estatura: text })}
      />
      <Text>Torax(em cm)</Text>
      <TextInput
        style={styles.input}
        placeholder=""
        value={formData.torax}
        onChangeText={(text) => setFormData({ ...formData, torax: text })}
      />
      <Text>Cintura(em cm)</Text>
      <TextInput
        style={styles.input}
        placeholder=""
        value={formData.cintura}
        onChangeText={(text) => setFormData({ ...formData, cintura: text })}
      />
      <Text>Abdomen(em cm)</Text>
      <TextInput
        style={styles.input}
        placeholder=""
        value={formData.abdomen}
        onChangeText={(text) => setFormData({ ...formData, abdomen: text })}
      />
      <Text>Quadril(em cm)</Text>
      <TextInput
        style={styles.input}
        placeholder=""
        value={formData.quadril}
        onChangeText={(text) => setFormData({ ...formData, quadril: text })}
      />
      <Text>Braço Direito(em cm)</Text>
      <TextInput
        style={styles.input}
        placeholder=""
        value={formData.braco_direiro}
        onChangeText={(text) => setFormData({ ...formData, braco_direiro: text })}
      />
      <Text>Braço Esquerdo(em cm)</Text>
      <TextInput
        style={styles.input}
        placeholder=""
        value={formData.braco_esquerdo}
        onChangeText={(text) => setFormData({ ...formData, braco_esquerdo: text })}
      />
      <Text>Antebraço Direito(em cm)</Text>
      <TextInput
        style={styles.input}
        placeholder=""
        value={formData.antebraco_direiro}
        onChangeText={(text) => setFormData({ ...formData, antebraco_direiro: text })}
      />
      <Text>Antebraço Esquerdo(em cm)</Text>
      <TextInput
        style={styles.input}
        placeholder=""
        value={formData.antebraco_esquerdo}
        onChangeText={(text) => setFormData({ ...formData, antebraco_esquerdo: text })}
      />
      <Text>Coxa Direita(em cm)</Text>
      <TextInput
        style={styles.input}
        placeholder=""
        value={formData.coxa_direita}
        onChangeText={(text) => setFormData({ ...formData, coxa_direita: text })}
      />
      <Text>Coxa Esquerda(em cm)</Text>
      <TextInput
        style={styles.input}
        placeholder=""
        value={formData.coxa_esquerda}
        onChangeText={(text) => setFormData({ ...formData, coxa_esquerda: text })}
      />
      <Text>Perna Direita(em cm)</Text>
      <TextInput
        style={styles.input}
        placeholder=""
        value={formData.perna_direita}
        onChangeText={(text) => setFormData({ ...formData, perna_direita: text })}
      />
      <Text>Perna Esquerda(em cm)</Text>
      <TextInput
        style={styles.input}
        placeholder=""
        value={formData.perna_esquerda}
        onChangeText={(text) => setFormData({ ...formData, perna_esquerda: text })}
      />
      <Text>Bicipital(em mm)</Text>
      <TextInput
        style={styles.input}
        placeholder=""
        value={formData.bicipital}
        onChangeText={(text) => setFormData({ ...formData, bicipital: text })}
      />
      <Text>Tricipital(em mm)</Text>
      <TextInput
        style={styles.input}
        placeholder=""
        value={formData.tricipital}
        onChangeText={(text) => setFormData({ ...formData, tricipital: text })}
      />
      <Text>Peitoral(em mm)</Text>
      <TextInput
        style={styles.input}
        placeholder=""
        value={formData.peitoral}
        onChangeText={(text) => setFormData({ ...formData, peitoral: text })}
      />
      <Text>Axilar Média(em mm)</Text>
      <TextInput
        style={styles.input}
        placeholder=""
        value={formData.axilar_media}
        onChangeText={(text) => setFormData({ ...formData, axilar_media: text })}
      />
      <Text>Subescapular(em mm)</Text>
      <TextInput
        style={styles.input}
        placeholder=""
        value={formData.subescapular}
        onChangeText={(text) => setFormData({ ...formData, subescapular: text })}
      />
      <Text>Abdominal(em mm)</Text>
      <TextInput
        style={styles.input}
        placeholder=""
        value={formData.abdominal}
        onChangeText={(text) => setFormData({ ...formData, abdominal: text })}
      />
      <Text>Supra ilíaca(em mm)</Text>
      <TextInput
        style={styles.input}
        placeholder=""
        value={formData.suprailiaca}
        onChangeText={(text) => setFormData({ ...formData, suprailiaca: text })}
      />
      <Text>Coxa(em mm)</Text>
      <TextInput
        style={styles.input}
        placeholder=""
        value={formData.coxa}
        onChangeText={(text) => setFormData({ ...formData, coxa: text })}
      />
      <Text>Perna(em mm)</Text>
      <TextInput
        style={styles.input}
        placeholder=""
        value={formData.perna}
        onChangeText={(text) => setFormData({ ...formData, perna: text })}
      />
      <Text>Panturrilha(em mm)</Text>
      <TextInput
        style={styles.input}
        placeholder=""
        value={formData.panturrilha}
        onChangeText={(text) => setFormData({ ...formData, panturrilha: text })}
      />
      <Text>Força de preensão manual(em kg)</Text>
      <TextInput
        style={styles.input}
        placeholder=""
        value={formData.forca_preensao_manual}
        onChangeText={(text) => setFormData({ ...formData, forca_preensao_manual: text })}
      />
      <Text>Flexibilidade</Text>
      <TextInput
        style={styles.input}
        placeholder=""
        value={formData.flexibilidade}
        onChangeText={(text) => setFormData({ ...formData, flexibilidade: text })}
      /> 
      <Text>Potência dos membros superiores</Text>
      <TextInput
        style={styles.input}
        placeholder=""
        value={formData.potencia_membros_superiores}
        onChangeText={(text) => setFormData({ ...formData, potencia_membros_superiores: text })}
      />
      <Text>Teste agilidade</Text>
      <TextInput
        style={styles.input}
        placeholder=""
        value={formData.teste_agilidade}
        onChangeText={(text) => setFormData({ ...formData, teste_agilidade: text })}
      />
      <Text>V02 Máximo</Text>
      <TextInput
        style={styles.input}
        placeholder=""
        value={formData.v02_maximo}
        onChangeText={(text) => setFormData({ ...formData, v02_maximo: text })}
      />
      <Text>Flexão</Text>
      <TextInput
        style={styles.input}
        placeholder=""
        value={formData.flexao}
        onChangeText={(text) => setFormData({ ...formData, flexao: text })}
      />
      <Text>Flexão Abdominal</Text>
      <TextInput
        style={styles.input}
        placeholder=""
        value={formData.flexao_abdominal}
        onChangeText={(text) => setFormData({ ...formData, flexao_abdominal: text })}
      />
      <TouchableOpacity style={styles.button} onPress={handleCadastro}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff',
    padding: 20,
  },
  select:{
    height: 40,
    borderColor: '#87ceeb',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
    placeholderTextColor: '#000000',
  },
  text:{
    padding: 10
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#4682b4',
  },
  input: {
    height: 40,
    borderColor: '#87ceeb',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
    placeholderTextColor: '#000000',
  },
  button: {
    backgroundColor: '#1e90ff',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
    paddingBotton: 60
  },
});

export default CadastroClienteScreen;
