
import React, {useEffect} from 'react';
import {
  View, Text
} from 'react-native';
import axios from 'axios';



const App = () => {  

  useEffect(() => {
    axios.get('https://be-production-3d6c.up.railway.app/api/users')
    .then((resp)=>{
      console.log('datos', JSON.stringify(resp.data.data, null, 4))
    })
    .catch(
      (err)=>{
        console.log(err)
      }
    )
  }, [])
  

  return (
    <View>
      <Text>App js</Text>
    </View>
  );
};

export default App;
