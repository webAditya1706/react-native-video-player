import HomePage from "../Screen/HomePage";
import SignIn from "../Screen/SignIn";
import SignUp from "../Screen/SignUp";

const screenRouter = {
	home:{
		name:'Home',
		component:HomePage
	},
	signIn:{
		name:'SignIn',
		component:SignIn
	},
	signUp:{
		name:'SignUp',
		component:SignUp
	},

}

export default screenRouter;