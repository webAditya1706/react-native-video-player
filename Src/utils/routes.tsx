import HomePageScreen from "../Screen/HomePageScreen";
import ProfileScreen from "../Screen/ProfileScreen";
import SignInScreen from "../Screen/SignInScreen";
import SignUpScreen from "../Screen/SignUpScreen";

const screenRouter = {
	home:{
		name:'HomeScreen',
		component:HomePageScreen
	},
	signIn:{
		name:'SignInScreen',
		component:SignInScreen
	},
	signUp:{
		name:'SignUpScreen',
		component:SignUpScreen
	},
	profileScreen:{
		name:'ProfileScreen',
		component:ProfileScreen
	}
}

export default screenRouter;