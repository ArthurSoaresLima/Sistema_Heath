import { View, Text, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import { UserContext } from "../context/UserContext";
import React, { useState, useContext } from 'react';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function GastoCaloricoScreen() {
    const  {username} = useContext(UserContext)
    const [idade, setIdade] = useState("")
    const [peso, setPeso] = useState("")
    const [basal, setBasal] = useState(0)
    const [gasto, setGasto] = useState(0)
    const [aviso, setAviso] = useState("")
    
    //Genero
    const opcoes = [
        'Masculino',
        'Feminino'
    ];

    const [selecionado, setSelecionado] = useState(null);

    // NOVOS ESTADOS
    const [atividadeFisica, setAtividadeFisica] = useState(null);
    const [isFocusAtividade, setIsFocusAtividade] = useState(false);

    // DADOS DO DROPDOWN
    const atividadeData = [
        { label: 'nada (ex: desempregado)', value: 'nada' },
        { label: 'Leve (ex: escritório)', value: 'leve' },
        { label: 'Moderada (ex: professor, vendedor)', value: 'moderada' },
        { label: 'Intensa (ex: construção, agricultura)', value: 'intensa' },
    ];

    // NOVOS ESTADOS
    const [exercicioFisica, setExercicioFisica] = useState(null);
    const [isFocusExercicio, setIsFocusExercicio] = useState(false);

    // DADOS DO DROPDOWN2
    const exercicioData = [
        { label: '0 horas', value: '0 horas' },
        { label: '1 hora', value: '1 hora' },
        { label: '2 horas', value: '2 horas' },
        { label: '3 horas', value: '3 horas' },
        { label: '4 horas', value: '4 horas' },
        { label: '5 horas', value: '5 horas' },
        { label: '6 horas', value: '6 horas' },
        { label: '7 horas', value: '7 horas' },
        { label: '8 horas', value: '8 horas' },
        { label: '9 horas', value: '9 horas' },
        { label: '10 horas', value: '10 horas' },
        { label: '11 horas', value: '11 horas' },
        { label: '12 horas', value: '12 horas' },
        { label: '13 horas', value: '13 horas' },
        { label: '14 horas', value: '14 horas' }
    ];
    

    const Calcular = () => {

        

        let novoBasal = 0;
       
        if (selecionado == "Feminino" ){
            if (peso >= "0" && idade >= "0"){
                if (gasto <= "0" || basal <= "0"){
                    setAviso("Não avacalhe o sistema");
                }else{
                
                    if (idade >= "1" && idade <= "3") {
                        novoBasal = (peso * 58.317) - 31.1;
                    } else if (idade > "3" && idade <= "10") {
                        novoBasal = (peso * 20.315) + 485.9;
                    } else if (idade > "10" && idade <= "18") {
                        novoBasal = (peso * 13.384) + 692.6;
                    } else if (idade > "18" && idade <= "30") {
                        novoBasal = (peso * 14.818) + 486.6;
                    } else if (idade > "30" && idade <= "60") {
                        novoBasal = (peso * 8.126) + 845.6;
                    } else if (idade > "60") {
                        novoBasal = (peso * 9.082) + 658.5;
                    }
                    setAviso("");
                }
                
                
                
                
                

            }else{
                setAviso("Preencha todas as informações corretamente.");
            }

        } else if (selecionado == "Masculino") {
            if (peso >= "0" && idade >= "0"){
                if (gasto <= "0" || basal <= "0"){
                    setAviso("Não avacalhe o sistema");
                }else{
                    if (idade >= "0" && idade <= "3") {
                        novoBasal = (peso * 59.512) - 30.4;
                    } else if (idade > "3" && idade <= "10") {
                        novoBasal = (peso * 22.706) + 504.3;
                    } else if (idade > "10" && idade <= "18") {
                        novoBasal = (peso * 17.686) + 658.2;
                    } else if (idade > "18" && idade <= "30") {
                        novoBasal = (peso * 15.057) + 692.2;
                    } else if (idade > "30" && idade <= "60") {
                        novoBasal = (peso * 11.472) + 873.1;
                    } else if (idade > "60") {
                        novoBasal = (peso * 11.711) + 587.7;
                    }
                    setAviso("");
                }
                
            }else{
                setAviso("Preencha todas as informações corretamente.");
            }
        }else if (peso >= 0 || idade >= 0){
            setAviso("Coloque um Genero");
        }

        setBasal(novoBasal);
        

        // calcular gasto com base na atividade
        let fator = 1;
        if (atividadeFisica === 'nada') fator = 1; 
        else if (atividadeFisica === 'leve') fator = 1.55;
        else if (atividadeFisica === 'moderada') fator = 1.84;
        else if (atividadeFisica === 'intensa') fator = 2.2;
        
        let gastoBase = novoBasal * fator; // com base na atividade física
        
        
        // definir o gasto antes de exercício
        
        

       
        // Se atividade física for diferente de "nada", calcular com base em gastoBase
        if (atividadeFisica !== 'nada' && atividadeFisica !== null) {
            let fator2 = 0;

            if (exercicioFisica === '1 hora') fator2 = (60 / 7) * 6;
            else if (exercicioFisica === '2 horas') fator2 = (120 / 7) * 6;
            else if (exercicioFisica === '3 horas') fator2 = (180 / 7) * 6;
            else if (exercicioFisica === '4 horas') fator2 = (240 / 7) * 6;
            else if (exercicioFisica === '5 horas') fator2 = (300 / 7) * 6;
            else if (exercicioFisica === '6 horas') fator2 = (360 / 7) * 6;
            else if (exercicioFisica === '7 horas') fator2 = (420 / 7) * 6;
            else if (exercicioFisica === '8 horas') fator2 = (480 / 7) * 6;
            else if (exercicioFisica === '9 horas') fator2 = (540 / 7) * 6;
            else if (exercicioFisica === '10 horas') fator2 = (600 / 7) * 6;
            else if (exercicioFisica === '11 horas') fator2 = (660 / 7) * 6;
            else if (exercicioFisica === '12 horas') fator2 = (720 / 7) * 6;
            else if (exercicioFisica === '13 horas') fator2 = (780 / 7) * 6;
            else if (exercicioFisica === '14 horas') fator2 = (840 / 7) * 6;

            setGasto(gastoBase + fator2);


  
        } else {
            let fator3 = 0;

            if (exercicioFisica === '1 hora') fator3 = (60 / 7) * 6;
            else if (exercicioFisica === '2 horas') fator3 = (120 / 7) * 6;
            else if (exercicioFisica === '3 horas') fator3 = (180 / 7) * 6;
            else if (exercicioFisica === '4 horas') fator3 = (240 / 7) * 6;
            else if (exercicioFisica === '5 horas') fator3 = (300 / 7) * 6;
            else if (exercicioFisica === '6 horas') fator3 = (360 / 7) * 6;
            else if (exercicioFisica === '7 horas') fator3 = (420 / 7) * 6;
            else if (exercicioFisica === '8 horas') fator3 = (480 / 7) * 6;
            else if (exercicioFisica === '9 horas') fator3 = (540 / 7) * 6;
            else if (exercicioFisica === '10 horas') fator3 = (600 / 7) * 6;
            else if (exercicioFisica === '11 horas') fator3 = (660 / 7) * 6;
            else if (exercicioFisica === '12 horas') fator3 = (720 / 7) * 6;
            else if (exercicioFisica === '13 horas') fator3 = (780 / 7) * 6;
            else if (exercicioFisica === '14 horas') fator3 = (840 / 7) * 6;

            setGasto(novoBasal + fator3);

            
        }
        
        
    }   

    return (
        <View style={styles.areaTotal}>
            <Text style={styles.titulo}>Gasto Calorico</Text>
            <View style={styles.formContainer}>
                <Text style={styles.fonte}>Usuário: {username}</Text>

                <Text style={styles.fonte}>Sexo:</Text>
                {opcoes.map((opcao, index) => (
                    <TouchableOpacity key={index} onPress={() => setSelecionado(opcao)} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5, marginLeft:30}}>
                        <View style={{
                            marginTop:5,
                            height: 10, width: 10, borderRadius: 5,
                            borderWidth: 1, borderColor: 'black',
                            alignItems: 'center', justifyContent: 'center', marginRight: 8}}>
                            {selecionado === opcao && (
                                <View style={{
                                    
                                    height: 10, width: 10, borderRadius: 5,
                                    backgroundColor: 'black'
                                }} />
                            )}
                        </View>
                        <Text >{opcao}</Text>
                    </TouchableOpacity>
                ))}


                <Text style={styles.fonteAviso}>{aviso}</Text>
                <Text style={styles.fonte}>
                    Idade: 
                </Text>
                <TextInput style={styles.inputPadrao} keyboardType="numeric" value={idade} onChangeText={(v1) => setIdade(v1)} ></TextInput>

                <Text style={styles.fonte}>
                    Peso: 
                </Text>
                <TextInput style={styles.inputPadrao} keyboardType="numeric" value={peso} onChangeText={(v1) => setPeso(v1)}></TextInput>



                <Text style={styles.fonte}>Atividade Física no Trabalho:</Text>
                <Dropdown
                    style={[styles.dropdown, isFocusAtividade && { borderColor: 'blue' }]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={atividadeData}
                    search
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={!isFocusAtividade ? "Selecione..." : "..."}
                    searchPlaceholder="Buscar..."
                    value={atividadeFisica}
                    onFocus={() => setIsFocusAtividade(true)}
                    onBlur={() => setIsFocusAtividade(false)}
                    onChange={item => {
                        setAtividadeFisica(item.value);
                        setIsFocusAtividade(false);
                    }}
                    renderLeftIcon={() => (
                        <AntDesign
                            style={styles.icon}
                            color={isFocusAtividade ? 'blue' : 'black'}
                            name="down"
                            size={20}
                        />
                    )}
                />
                <Text style={styles.fonte}>Exercicio Fisisco Semanal:</Text>
                <Dropdown
                    style={[styles.dropdown, isFocusExercicio && { borderColor: 'blue' }]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={exercicioData}
                    search
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={!isFocusExercicio ? "Selecione..." : "..."}
                    searchPlaceholder="Buscar..."
                    value={exercicioFisica}
                    onFocus={() => setIsFocusExercicio(true)}
                    onBlur={() => setIsFocusExercicio(false)}
                    onChange={item => {
                        setExercicioFisica(item.value);
                        setIsFocusExercicio(false);
                    }}
                    renderLeftIcon={() => (
                        <AntDesign
                            style={styles.icon}
                            color={isFocusExercicio ? 'blue' : 'black'}
                            name="down"
                            size={20}
                        />
                    )}
                />


            
            

                <TouchableOpacity style={styles.botao} onPress={Calcular}>
                    <Text style={{fontSize:20}}>Calcular</Text>
                </TouchableOpacity>
                

                <View >
                    <Text style={styles.fonte}>Gasto Basal:</Text>
                    <Text style={styles.caixaT2}>{basal}</Text>
                    
                </View>
                <View>
                    <Text style={styles.fonte}>Gasto Total Diário:</Text>
                    <Text style={styles.caixaT2}>{gasto}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    formContainer: {
        width: '110%',
        maxWidth: 350,
        alignItems: 'flex-start',
    },

    fonte: {
        fontSize: 18,
        marginBottom: 5,
    },
    fonteAviso:{
        color:'red',
        marginTop:10,
        fontSize: 20,
    },
    aviso: {
        color: 'red',
    },
    areaTotal: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#f2f2f2',
        padding: 20,
    },
    inputPadrao: {
        borderWidth: 2,
        padding: 10,
        width: 350,
        fontSize: 18,
        marginBottom: 10,
    },
    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign:'center',
        marginLeft:30
    },

    caixaT2: {
        borderWidth: 2,
        padding: 10,
        width: 350,
        fontSize: 20,
        marginBottom: 10,
    },
    botao: {
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'blue',
        marginTop: 15,
        padding: 10,
        alignSelf: 'center',
    },
    dropdown: {
        height: 50,
        borderWidth: 0.5,
        borderColor: 'gray',
        paddingHorizontal: 8,
        borderRadius: 8,
        width: 350,
        marginBottom: 10,
    },
    icon: {
        marginRight: 5,
    },
    placeholderStyle: {
        fontSize: 16,
        color: 'gray',
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },





})