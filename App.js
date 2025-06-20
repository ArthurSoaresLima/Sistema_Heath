import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { UserProvider } from './src/context/UserContext'; // ADICIONADO POR DAMARIS

import LoginScreen from './src/screens/LoginScreen';
import DesktopScreen from './src/screens/DesktopScreen';
import CalculoIMCScreen from './src/screens/CalculoIMCScreen';
import GastoCaloricoScreen from './src/screens/GastoCaloricoScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <UserProvider>{/* ADICIONADO POR DAMARIS */}
      
      <NavigationContainer>
        <Stack.Navigator initialRouteName='LoginScreen'>
          <Stack.Screen name='LoginScreen' component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name='DesktopScreen' component={DesktopScreen}  />
          <Stack.Screen name='CalculoIMCScreen' component={CalculoIMCScreen} />
          <Stack.Screen name='GastoCaloricoScreen' component={GastoCaloricoScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      
    </UserProvider>
  );
}
