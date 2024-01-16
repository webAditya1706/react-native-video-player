import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import HomePage from '../Screen/HomePage';
import SignIn from '../Screen/SignIn';
import SignUp from '../Screen/SignUp';
import TopHeader from '../ComanComponant/TopHeader';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigater from './DrawerNavigater';


const AppNavigater = () => {

	const Stack = createNativeStackNavigator();
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="DrawerTabNavigation"
				component={DrawerNavigater}
				options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="SignIn"
					component={SignIn} 
					options={{ headerShown: false }} />
				<Stack.Screen
					name="SignUp"
					component={SignUp}
					options={{ headerShown: false }} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default AppNavigater
