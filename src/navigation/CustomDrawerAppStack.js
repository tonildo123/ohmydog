import { View, Text, ImageBackground, Image, FlatList, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Drawer } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import { unlogger } from '../redux/reduxLogin/LoginSlice';


const CustomDrawerAppStack = (props) => {

  const distpach = useDispatch();

  let url = '../assets/images/portadapet.jpg';

  const [NestedHome, setNestedHome] = useState(false);
  const [NestedPet, setNestedPet] = useState(false);

  const [focus, setFocus] = useState('1');


  const handleNestedHome = () => { setNestedHome(!NestedHome) }
  const handleNestedPet = () => { setNestedPet(!NestedPet) }

  const handleExit = ()=>{
    distpach(unlogger())
  }

  return (
    <View style={{ flex: 1, }} >
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{
          backgroundColor: '#BA4A00',

        }}
      >
        <ImageBackground
          source={require(url)}
          style={{ padding: 30, }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'column'
            }}
          >
            <View
              style={{
                width: '100%',
                height: '40%',

              }}
            ></View>
            <View
              style={{
                width: '100%',
                height: '10%'
              }}
            ></View>
            <View
              style={{
                width: '100%',
                height: '50%',
                flexDirection: 'row'
              }}
            >
              <View
                style={{
                  width: '50%',
                  height: '100%'
                }}
              >
                <Image
                  source={require('../assets/images/avatar.png')}
                  // source={{ uri: currentUser.user.foto }}
                  style={{
                    height: 90,
                    width: 90,
                    resizeMode: 'cover',
                    borderRadius: 40,
                    marginBottom: 10,
                  }}
                />
              </View>
              <View
                style={{
                  width: '50%',
                  height: '100%'
                }}
              >
                <Text
                  style={{
                    color: '#fff',
                    fontSize: 20,
                    fontFamily: 'Roboto-Medium'
                  }}>
                  Carlos Diaz
                </Text>
              </View>
            </View>
          </View>


        </ImageBackground>
        <View
          style={{
            flex: 1,
            backgroundColor: '#fff',
            paddingTop: 10,
          }}>
          <Drawer.Section>
            <DrawerItem
              label='INICIO'
              focused={focus == 1 ? true : false}
              onPress={handleNestedHome}
              icon={() => (
                <FontAwesome
                  name="home"
                  color='#0E6251'
                  size={20}
                />
              )}/>
              {
              NestedHome == true &&
              <DrawerItem
                label='Completar datos'
                icon={() => (
                  <FontAwesome
                    name="check-square-o"
                    color='#28B463'
                    size={20}
                  />
                )}
                labelStyle={{ color: '#28B463' }}
                onPress={
                  () => { 
                    // props.navigation.navigate('Club') 
                    Alert.alert('Funcionalidad en desarrollo')
                  }}
              />
            }
          </Drawer.Section>
          <Drawer.Section>
            <DrawerItem
              label='Mi Mascota'
              focused={focus == 1 ? true : false}
              onPress={handleNestedPet}
              icon={() => (
                <MaterialIcons
                name="pets"
                color='#28B463'
                size={20}
            />
              )}/>
            {
              NestedPet == true &&
              <DrawerItem
                label='Agregar mascota'
                icon={() => (
                  <FontAwesome
                    name="plus"
                    color='#28B463'
                    size={20}
                  />
                )}
                labelStyle={{ color: '#28B463' }}
                onPress={
                  () => { 
                    // props.navigation.navigate('Club') 
                    Alert.alert('Funcionalidad en desarrollo')
                  }}
              />
            }
            {
              NestedPet == true &&
              <DrawerItem
                label='Editar informacion'
                icon={() => (
                  <FontAwesome
                    name="pencil"
                    color='#28B463'
                    size={20}
                  />
                )}
                labelStyle={{ color: '#28B463' }}
                onPress={
                  () => { 
                    // props.navigation.navigate('Club') 
                    Alert.alert('Funcionalidad en desarrollo')
                  }}
              />
            }
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>

      <View
            style={{
                padding:10,
                borderTopWidth:2,
                borderTopColor:'black',
            }}
        >
            <TouchableOpacity
                onPress={()=>{
                    handleExit();
                    console.log('exit')
                }}
                style={{
                    paddingVertical:5
                }}
            >
            <View
                    style={{
                        flexDirection:'row',
                        alignItems:'center',
                        
                    }}
                >
                <FontAwesome
                        name="power-off"
                        color='black'
                        size={20}
                    />       
                <Text style={{paddingHorizontal:20, color:'black'}}>Salir</Text>
                </View>
            </TouchableOpacity>
            
        </View>

    </View>
  )
}

export default CustomDrawerAppStack