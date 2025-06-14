import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, } from "react-native";

export default function CalculoIMCScreen({ navigation }) {

  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [sexo, setSexo] = useState(null);
  const [imc, setImc] = useState("");
  const [condicao, setCondicao] = useState("");

  const calcularIMC = () => {

    const pesoNum = parseFloat(peso);
    const alturaNum = parseFloat(altura.replace(",", "."));

    if (!pesoNum || !alturaNum || alturaNum === 0 || !sexo) {
      setImc("");
      setCondicao("Preencha todos os campos corretamente.");
      return;
    }

    const imcCalculado = pesoNum / (alturaNum * alturaNum);
    const imcValue = imcCalculado.toFixed(2);
    setImc(imcValue);

    let resultado;

    if (imcCalculado < 18.5) {
      if (imcCalculado < 17) {
        if (imcCalculado < 16) {
          resultado = "Magreza grave";
        } else {
          resultado = "Magreza moderada";
        }
      } else {
        resultado = "Magreza leve";
      }
    } else {
      if (imcCalculado <= 24.9) {
        resultado = "Peso ideal";
      } else if (imcCalculado <= 29.9) {
        resultado = "Sobrepeso";
      } else if (imcCalculado <= 34.9) {
        resultado = "Obesidade grau I";
      } else if (imcCalculado <= 39.9) {
        resultado = "Obesidade grau II";
      } else {
        resultado = "Obesidade grau III ou mórbida";
      }
    }

    setCondicao(resultado);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.usuario}>Usuário: Admin</Text>

        <Text style={styles.label}>Peso:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={peso}
          onChangeText={setPeso}
        />

        <Text style={styles.label}>Altura:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={altura}
          onChangeText={setAltura}
        />

        <Text style={styles.label}>Sexo:</Text>
        <View style={styles.radioGroup}>
          <TouchableOpacity
            onPress={() => setSexo("masculino")}
            style={styles.radioOption}
          >
            <Text>{sexo === "masculino" ? "◉" : "○"} Masculino</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSexo("feminino")}
            style={styles.radioOption}
          >
            <Text>{sexo === "feminino" ? "◉" : "○"} Feminino</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.button}>
          <Button title="Calcular" onPress={calcularIMC} />
        </View>

        <Text style={styles.label}>IMC:</Text>
        <TextInput style={styles.input} value={imc} editable={false} />

        <Text style={styles.label}>Condição:</Text>
        <TextInput style={styles.input} value={condicao} editable={false} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

  },
  container: {
    padding: 20,
    width: "90%",
    maxWidth: 400,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  usuario: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginTop: 10,
  },
  input: {
    borderWidth: 2,
    borderRadius: 2,
    padding: 10,
    marginTop: 4,
  },
  radioGroup: {
    marginTop: 10,
    marginBottom: 20,
  },
  radioOption: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  button: {
    marginVertical: 10,
    alignSelf: "flex-start",
  },
});
