import { DrawerContentScrollView, DrawerItem, createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'

import screenRouter from '../utils/routes'
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
		  initialRouteName={screenRouter.home.name}
	>
			<Drawer.Screen
				name={'homeStackNavigater'}
				component={homeStackNavigation}
			/>
			
		</Drawer.Navigator>
	)
}

export default DrawerNavigater;
