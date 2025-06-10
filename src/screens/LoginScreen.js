import { View,Text, Button, TextInput } from "react-native";

export default function LoginScreen({navigation}){
    return(
        <View>
            <Text >Tela LoginScreen</Text>
            <Button title="Tela de DesktopScreen" onPress={() => navigation.navigate('DesktopScreen')} />
            <Button title="Tela de CalculoIMCScreen" onPress={() => navigation.navigate('CalculoIMCScreen')} />
            <Button title="Tela de GastoCaloricoScreen" onPress={() => navigation.navigate('GastoCaloricoScreen')} />

        </View>
    )
}