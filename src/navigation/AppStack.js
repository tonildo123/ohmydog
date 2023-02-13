import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/home/HomeScreen';
import CustomDrawerAppStack from './CustomDrawerAppStack';

const Drawer = createDrawerNavigator();

const AppStack = () => {

  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerAppStack {...props}/>}
    >
        <Drawer.Screen name="Home" component={HomeScreen} />
        
    </Drawer.Navigator>
  )
}

export default AppStack