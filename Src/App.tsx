import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppNavigater from './Navigation/AppNavigater';
import DrawerNavigater from './Navigation/DrawerNavigater';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <DrawerNavigater />
      {/* <AppNavigater /> */}
    </NavigationContainer>
  )
}

export default App
