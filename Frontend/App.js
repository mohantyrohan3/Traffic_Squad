import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import Login from './components/Login/Login';
import { PaperProvider } from 'react-native-paper';
import Register from './components/Register/Register';
import Challans from './components/Challans/Challans';
import HomeUser from './components/HomeUser/HomeUser';

const App = () => {
  return (
    <PaperProvider>
        <HomeUser />
    </PaperProvider>
  );
}


export default App;
