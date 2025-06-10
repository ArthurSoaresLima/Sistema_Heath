import React from "react";
import { View,Text, Button, TextInput, StyleSheet, TouchableOpacity } from "react-native";

import { useState } from "react";




export default function LoginScreen({navigation}){
    const [Login, setLogin] = useState()
    const [Senha, setSenha] = useState()
    const [Aviso, setAviso] = useState()

    const entrada = () => {
        if(Login == "admin" && Senha == "123456"){
            navigation.navigate ("DesktopScreen");
        }else{
            setAviso("Login ou senha inválidos!!")
        }
    }
    return(
        <View style={styles.areaTotal}>
            <View style={styles.areaTI}>
            <Text style={styles.titulo}>Sistema Health</Text>
            <Text style={styles}>{Aviso}</Text>
            </View>

            <View style={styles.item2}>
                <Text style={styles.fonte}>Login:</Text>
                <TextInput style={styles.caixaT} value={Login} onChangeText={(v1) => setLogin(v1)} />
                <Text style={styles.fonte}>Senha:</Text>
                <TextInput style={styles.caixaT} value={Senha} onChangeText={(v2) => setSenha(v2)} />
                <View style={styles.aspa}>
                <TouchableOpacity style={styles.botao} onPress={entrada}>
                    <Text style={styles.fonte}>Entrar</Text>
                </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    areaTotal: {
        alignItems: 'center',     // centraliza horizontalmente
        backgroundColor: '#f2f2f2',
        
        marginLeft: 'auto',
        marginRight: 'auto',
        height: '100%',
        width: 300,
    },
    titulo:{
        fontSize: 40,
    },
    areaTI:{
        
        marginBottom: 70,
        margin: 'auto',
    },
    fonte:{
        fontSize: 20,
    },
    botao:{
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'blue',
        margin: 'auto',
        padding: 5,
        width: 100,
    },
    aspa:{
        padding: 15,
    },
    caixaT:{
        borderWidth: 2,
        padding: 10,
    },
    item2:{
        margin: 'auto',
        width: '100%',
        gap: 4,
        padding: 14,
    },

})