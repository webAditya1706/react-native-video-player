import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
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
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default AppNavigater
