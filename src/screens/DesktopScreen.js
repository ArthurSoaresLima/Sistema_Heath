
import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { UserContext } from '../context/UserContext'; 

export default function DesktopScreen({navigation}) {
  
  const { username } = useContext(UserContext); 

  return (
    <View style={styles.container}> 
      <Text style={styles.titulo}>Sistema Health</Text> 
      <Text style={styles.usuario}>Usuário: {username}</Text> 

      <View style={styles.grid}> 
        <TouchableOpacity
          style={styles.botao}
          onPress={() => navigation.navigate('CalculoIMCScreen')}>
          <Text style={styles.botaoTexto}>Cálculo{'\n'}IMC</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => navigation.navigate('GastoCaloricoScreen')}>
          <Text style={styles.botaoTexto}>Gasto{'\n'}Calórico</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao}>
          <Text style={styles.botaoTexto}>Guia{'\n'}Nutricional</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao}>
          <Text style={styles.botaoTexto}>Meditação</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  usuario: {
    fontSize: 16,
    marginBottom: 30,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  botao: {
    width: 120,
    height: 80,
    margin: 10,
    borderWidth: 1,
    borderColor: '#2196F3',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
  botaoTexto: {
    textAlign: 'center',
    fontSize: 16,
  },
});
