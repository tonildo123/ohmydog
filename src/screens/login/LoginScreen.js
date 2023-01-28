import React, {useState} from 'react';
import {
  View, Text
  , StatusBar
  , ScrollView
  , TextInput
  , TouchableOpacity
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { LoginScreenStyle } from '../../styles/loginStyle/LoginScreenStyle';


const LoginScreen = () => {  

  const [text, onChangeText] = useState("");
  const [number, onChangeNumber] = useState('');
  const [validateUser, setValidateUser] = useState(false)
  const [validatePassword, setValidatePassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loadingData, setLoadingData] = useState(false);
  const [hayInternet, setHayInternet] = useState(false);

  const handleLogin =()=>{
    
  }
  
  return (
    <View style={LoginScreenStyle.container}>
        <StatusBar backgroundColor='#000000' barStyle="light-content" />
        <View style={LoginScreenStyle.header}>
            <Text style={LoginScreenStyle.text_header}>Bienvenido</Text>         
            <Text style={LoginScreenStyle.text_header}>a TuMascota</Text>
        </View>
        <Animatable.View
            animation="fadeInUpBig"
            style={[LoginScreenStyle.footer, {
                backgroundColor: 'white',
                    }]}
        >
        <ScrollView>
        <Text style={[LoginScreenStyle.text_footer, {
                    color:'grey'
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
         onPress={()=>{setShowPassword(!showPassword);}}
    >
       
        {showPassword 
            ?<Feather
            name="eye"
            color='grey'
            size={20}
            />
            :<Feather
            name="eye-off"
            color="gray"
            size={20}
            />  
                      
        }
        
    </TouchableOpacity>
</View>
<View
style={{flexDirection:'row',justifyContent:'space-evenly'}}
>
<TouchableOpacity
   onPress={() => { 
    // navigation.navigate('recuperarPassword') 
    Alert.alert('Seccion en mantenimiento!');
    }}>
    <Text style={{ 
      color: 'red' ,
      marginTop: 15 
                }}
    >
        ¿Olvidó su contraseña?
    </Text>
</TouchableOpacity>
<TouchableOpacity
   onPress={() => { handleRegister() }}>
    <Text style={{ 
      color: 'red' ,
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
            colors={['#0E6251', '#28B463']}
            style={LoginScreenStyle.signIn}
        >
            {loadingData
                ? <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator size="large" color='white' />
                  </View> 
                : 
                <Text style={[LoginScreenStyle.textSign, { color: 'black'}]}>Ingresar</Text>
                }
        </LinearGradient>

    </TouchableOpacity>

</View>

        </ScrollView>
         </Animatable.View>

        
    </View>
  )
}

export default LoginScreen