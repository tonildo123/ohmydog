
import React, {useEffect} from 'react';
import axios from 'axios';
import LoginScreen from './src/screens/login/LoginScreen';


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
    <LoginScreen/>
  );
};

export default App;
