import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { View } from 'react-native'
import screenRouter from '../utils/routes'

const Stack = createStackNavigator()

const homeStackNavigation = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name={screenRouter.home.name}
				component={screenRouter.home.component}
				options={{ headerShown: false }} />
				
			<Stack.Screen
				name={screenRouter.signIn.name}
				component={screenRouter.signIn.component}
				options={{ headerShown: false }} />

			<Stack.Screen
				name={screenRouter.signUp.name}
				component={screenRouter.signUp.component}
				options={{ headerShown: false }} />


			<Stack.Screen
				name={screenRouter.profileScreen.name}
				component={screenRouter.profileScreen.component}
				options={{ headerShown: false }} />
				
		</Stack.Navigator>
	)
}

export default homeStackNavigation;
