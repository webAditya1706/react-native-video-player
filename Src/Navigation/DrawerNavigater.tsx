import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'
import { View } from 'react-native'
import HomePage from '../Screen/HomePage'
import SignIn from '../Screen/SignIn'
import AppNavigater from './AppNavigater'
import TopHeader from '../ComanComponant/TopHeader'
const Drawer = createDrawerNavigator()

const HomeScreen = ({navigation}:any) => {
return(
	<Drawer.Screen
      name="Home"
      component={HomePage}
      options={{
        header: () => <TopHeader navigation={navigation} />,
      }}
    />
)
}

const DrawerNavigater = () => {
	return (
		<Drawer.Navigator>
			<Drawer.Screen
				name='HomePage'
				component={AppNavigater}
				options={{ header: (props) => <TopHeader /> }}
			/>
			<Drawer.Screen
				name='SignIn'
				component={SignIn}
				options={{ headerShown: false }}
			/>
		</Drawer.Navigator>
	)
}

export default DrawerNavigater;
