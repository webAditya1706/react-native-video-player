import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import HomePage from '../Screen/HomePage';
import SignIn from '../Screen/SignIn';
import SignUp from '../Screen/SignUp';
import TopHeader from '../ComanComponant/TopHeader';


const AppNavigater = () => {

	const Stack = createNativeStackNavigator();
	return (
		<Stack.Navigator initialRouteName='Home'>
			<Stack.Screen name="Home" component={HomePage} options={{ headerTitle: (props) => <TopHeader /> }}/>
			<Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
			<Stack.Screen name="SignUp" component={SignUp} />
		</Stack.Navigator>
	)
}

export default AppNavigater
