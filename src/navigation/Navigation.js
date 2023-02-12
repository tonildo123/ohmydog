import React  from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useSelector } from 'react-redux'
import AppStack from './AppStack';
import InitStack from './InitStack';


const Navigation = () => {
    let state = useSelector((state) => state)
    const Stack = createNativeStackNavigator();
    // console.log('props.....>',JSON.stringify(state, null,3))
    
  return (
    <NavigationContainer> 
      { state.logger.user.logged ? <AppStack/> : <InitStack/> }
    </NavigationContainer>
  )
}

export default Navigation