import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppNavigater from './Navigation/AppNavigater';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <AppNavigater />
    </NavigationContainer>
  )
}

export default App
