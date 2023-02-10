import React, { useState, useEffect } from 'react';
import {
    View, Text
    , StatusBar
    , ScrollView
    , TextInput
    , TouchableOpacity,
    Alert,
    ActivityIndicator
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { LoginScreenStyle } from '../../styles/loginStyle/LoginScreenStyle';
import NetInfo from "@react-native-community/netinfo";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { loggearme } from '../../redux/reduxLogin/LoginSlice';



const LoginScreen = ({ navigation }) => {


    const distpach = useDispatch()

    const [text, onChangeText] = useState("");
    const [number, onChangeNumber] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loadingData, setLoadingData] = useState(false);
    const [hayInternet, setHayInternet] = useState(false);

    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener(state => {
            console.log("Connection type", state.type);
            console.log("Is connected?", state.isConnected);
            setHayInternet(state.isConnected)
        });

        // Unsubscribe
        unsubscribe();
    }, [])


    const handleLogin = () => {

        setLoadingData(true)

        const body = {
            email: text,
            password: number
        }

        // console.log('body', JSON.stringify(body, null, 4))

        axios.post('https://be-production-3d6c.up.railway.app/api/login', body)
            .then((resp) => {
                console.log('respuesta', JSON.stringify(resp.data.data, null, 4))

                setLoadingData(false)
                let obj  = {
                    email: text,
                    password: number,
                    id: resp.data.data._id                    
                }   

                distpach(loggearme(obj))
                console.log('datos ...>', JSON.stringify(resp.data.data, null, 4))
                
            })
            .catch(
                (err) => {
                    console.log('error en la solicitud', err)
                    setLoadingData(false)
                    Alert.alert('error en el login')
                }
            )

    }


    const handleRegister = () => {
        props.navigation.navigate('Register')
    }

    return (
        <View style={LoginScreenStyle.container}>
            <StatusBar backgroundColor='#BA4A00' barStyle="light-content" />
            <View style={LoginScreenStyle.header}>
                <View
                    style={{
                        flexDirection: 'row',
                    }}
                >
                    <View
                        style={{
                            width: '80%'
                        }}
                    >
                        <Text style={LoginScreenStyle.text_header}>Bienvenido</Text>
                        <Text style={LoginScreenStyle.text_header}>a TuMascota</Text>
                    </View>
                    <View
                        style={{
                            width: '20%'
                        }}
                    >
                        {/* <Animatable.Image
              animation="bounceIn"
              duraton="1500"
              source = {require('../../assets/images/h6.jpg')}
              style={LoginScreenStyle.logo}
              resizeMode="stretch"
            /> */}
                        <MaterialIcons
                            name="pets"
                            color='white'
                            size={80}
                        />
                    </View>
                </View>

            </View>

            <Animatable.View
                animation="fadeInUpBig"
                style={[LoginScreenStyle.footer, {
                    backgroundColor: 'white',
                }]}
            >
                <ScrollView>
                    <Text style={[LoginScreenStyle.text_footer, {
                        color: 'grey'
                    }]}>Iniciar Sesión</Text>
                    <View style={LoginScreenStyle.action}>
                        <FontAwesome
                            name="user-o"
                            color='grey'
                            size={20}
                        />
                        <TextInput
                            placeholder="Email"
                            placeholderTextColor="#666666"
                            style={[LoginScreenStyle.textInput, {
                                color: 'black'
                            }]}
                            autoCapitalize="none"
                            onChangeText={onChangeText}
                            value={text}
                        />

                    </View>
                    <Text style={[LoginScreenStyle.text_footer, {
                        color: 'grey',
                        marginTop: 35
                    }]}>Contraseña</Text>
                    <View style={LoginScreenStyle.action}>
                        <Feather
                            name="lock"
                            color='grey'
                            size={20}
                        />
                        <TextInput
                            placeholder="Ingresar contraseña"
                            placeholderTextColor="#666666"
                            onChangeText={onChangeNumber}
                            value={number}
                            secureTextEntry={showPassword ? false : true}
                            style={[LoginScreenStyle.textInput, {
                                color: 'black'
                            }]}
                            autoCapitalize="none"

                        />
                        <TouchableOpacity
                            onPress={() => { setShowPassword(!showPassword); }}
                        >

                            {showPassword
                                ? <Feather
                                    name="eye"
                                    color='grey'
                                    size={20}
                                />
                                : <Feather
                                    name="eye-off"
                                    color="gray"
                                    size={20}
                                />

                            }

                        </TouchableOpacity>
                    </View>
                    <View
                        style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}
                    >
                        <TouchableOpacity
                            onPress={() => {
                                // navigation.navigate('recuperarPassword') 
                                Alert.alert('Seccion en mantenimiento!');
                            }}>
                            <Text style={{
                                color: 'red',
                                marginTop: 15
                            }}
                            >
                                ¿Olvidó su contraseña?
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => { handleRegister() }}>
                            <Text style={{
                                color: 'red',
                                marginTop: 15
                            }}
                            >
                                Registrarme
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={LoginScreenStyle.button}>
                        <TouchableOpacity
                            style={LoginScreenStyle.signIn}
                            onPress={() => {
                                hayInternet
                                    ? handleLogin()
                                    : Alert.alert('Sin conexion a intenet')
                            }}

                        >
                            <LinearGradient
                                colors={['#BA4A00', '#E67E22']}
                                style={LoginScreenStyle.signIn}
                            >
                                {loadingData
                                    ? <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                        <ActivityIndicator size="large" color='white' />
                                    </View>
                                    :
                                    <Text style={[LoginScreenStyle.textSign, { color: 'black' }]}>Ingresar</Text>
                                }
                            </LinearGradient>

                        </TouchableOpacity>


                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            alignItems: 'center',
                            marginTop: 30
                        }}
                    >
                        <MaterialIcons
                            name="apps"
                            color='grey'
                            size={50}
                        />

                        <MaterialIcons
                            name="fingerprint"
                            color='grey'
                            size={50}
                        />

                        <Feather
                            name="camera"
                            color="gray"
                            size={50}
                        />
                    </View>
                </ScrollView>
            </Animatable.View>


        </View>
    )
}

export default LoginScreen