import 'react-native-gesture-handler';
import React from 'react';
import Navigation from './src/navigation/Navigation';
// redux
import { Provider } from 'react-redux'
import { store } from './src/redux/reduxLogin/store';

const App = () => {  
  
  return (
    <Provider store={store}>
      <Navigation/>
    </Provider>
  );
};

export default App;
