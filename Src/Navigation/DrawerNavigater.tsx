import { DrawerContentScrollView, DrawerItem, createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import HomePage from '../Screen/HomePage'
import SignIn from '../Screen/SignIn'
import AppNavigater from './AppNavigater'
import TopHeader from '../ComanComponant/TopHeader'
import SignUp from '../Screen/SignUp'
import screenRouter from '../utils/routes'
import { DrawerIcon } from '../utils/Images'
import CustomDrawerContent from '../Constants/CustomDrawerContent'
import homeStackNavigation from './homeStackNavigation'


const Drawer = createDrawerNavigator()
const DrawerNavigater = () => {
	return (
		<Drawer.Navigator
		drawerContent={(props) => <CustomDrawerContent {...props} />}

		screenOptions={{
			headerShown: false,
		  }}
		  initialRouteName='HomePage'
	>
			<Drawer.Screen
				name={'homeStackNavigater'}
				component={homeStackNavigation}
			/>
			
		</Drawer.Navigator>
	)
}

export default DrawerNavigater;
