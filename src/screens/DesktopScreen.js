import { View,Text, Button, TextInput } from "react-native";

export default function DesktopScreen({navigation}){
    return(
        <View>
            <Text >Tela DesktopScreen</Text>

            <Button
                title="álculo IMC"
                onPress={() => navigation.navigate('CalculoIMCScreen')}
            />
        </View>
    )
}