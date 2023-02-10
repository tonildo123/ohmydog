import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/home/HomeScreen';

const Drawer = createDrawerNavigator();

const AppStack = () => {

  return (
    <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
    </Drawer.Navigator>
  )
}

export default AppStack