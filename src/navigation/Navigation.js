import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/login/LoginScreen';
import RegisterScreen from '../screens/login/RegisterScreen';
import HomeScreen from '../screens/home/HomeScreen';


const Navigation = () => {
    const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{
            headerTitle: '',
            headerStyle: {
                backgroundColor: '#BA4A00',
              },
          }}/>
        <Stack.Screen name="Register" component={RegisterScreen} 
        options={{
            headerTitle: '',
            headerStyle: {
                backgroundColor: '#BA4A00',
              },
            // headerRight: () => (
            //   <Button
            //     onPress={() => alert('This is a button!')}
            //     title="Info"
            //     color="#fff"
            //   />
            // ),
          }}
          />
          <Stack.Screen name="Home" component={HomeScreen} options={{
            headerTitle: '',
            headerStyle: { backgroundColor: '#BA4A00',},}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation