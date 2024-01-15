import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'
import { View } from 'react-native'
import HomePage from '../Screen/HomePage'
import SignIn from '../Screen/SignIn'
import AppNavigater from './AppNavigater'
import TopHeader from '../ComanComponant/TopHeader'
import SignUp from '../Screen/SignUp'
import screenRouter from '../utils/routes'

const Drawer = createDrawerNavigator()
const DrawerNavigater = () => {
	return (
		<Drawer.Navigator
		screenOptions={{
			header: ({ navigation }) => <TopHeader navigation={navigation} />,
		  }}
		  initialRouteName='HomePage'
	>
			<Drawer.Screen
				name={screenRouter.home.name}
				component={screenRouter.home.component}
			/>
			<Drawer.Screen
				name={screenRouter.signIn.name}
				component={screenRouter.signIn.component}
				options={{ headerShown: false }}
			/>
			<Drawer.Screen
				name={screenRouter.signUp.name}
				component={screenRouter.signUp.component}
				options={{ headerShown: false }}
			/>
		</Drawer.Navigator>
	)
}

export default DrawerNavigater;
