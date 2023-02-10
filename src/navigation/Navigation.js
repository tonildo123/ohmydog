import React , {useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/login/LoginScreen';
import RegisterScreen from '../screens/login/RegisterScreen';
import HomeScreen from '../screens/home/HomeScreen';
import { useSelector } from 'react-redux'
// import AppStack from './AppStack';


const Navigation = () => {
    let state = useSelector((state) => state)
    const Stack = createNativeStackNavigator();
    // console.log('props.....>',JSON.stringify(state, null,3))
    
  return (
    <NavigationContainer>
      <Stack.Navigator>

        {
          state.logger.user.logged ?
          <Stack.Screen name="Home" component={HomeScreen} options={{
            headerTitle: '',
            headerStyle: { backgroundColor: '#BA4A00',},}}/>
          // <AppStack/>
          :
        <Stack.Screen name="Login" component={LoginScreen} options={{
            headerTitle: '',
            headerStyle: {
                backgroundColor: '#BA4A00',
              },
          }}/>

        }
        
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
          
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation