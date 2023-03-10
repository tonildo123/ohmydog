// In App.js in a new project

import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/login/LoginScreen';
import RegisterScreen from '../screens/login/RegisterScreen';
import RecuperarPass from '../screens/login/RecuperarPass';

const Stack = createNativeStackNavigator();

function InitStack() {
return (
    
    <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{
            headerTitle: '',
            headerStyle: {
                backgroundColor: '#BA4A00',
            },
        }}/>
        <Stack.Screen name="Register" component={RegisterScreen} options={{
            headerTitle: '',
            headerStyle: {
                backgroundColor: '#BA4A00',
            },
        }}/>
        <Stack.Screen name="Recupero" component={RecuperarPass} options={{
            headerTitle: '',
            headerStyle: {
                backgroundColor: '#BA4A00',
            },
        }}/>
    </Stack.Navigator>
    
);
}

export default InitStack;