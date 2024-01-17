import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppNavigater from './Navigation/AppNavigater';
import DrawerNavigater from './Navigation/DrawerNavigater';
import { StatusBar, View } from 'react-native';
import Toast from 'react-native-toast-message';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <>
    <StatusBar />
      <AppNavigater />
      <Toast />
    </>
  )
}

export default App
