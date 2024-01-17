import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Image, ImageBackground, StyleSheet, View } from "react-native";
import { CrossIcon, drawerBg } from "../utils/Images";
import { FontSizeResponsive, HeightResponsive, SpaceResponsive } from "../utils/SizeMatter";
import screenRouter from "../utils/routes";
import { useRoute } from '@react-navigation/native';
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const CustomDrawerContent =  ({ navigation, state }:any) => {
	const [token, setToken] = useState()
	const route = useRoute();
	console.log(route.name,"---------------route");
	
	const isScreenActive = (routeName:any) => state.routeNames.includes(routeName);
console.log(isScreenActive(),'============isScreenActive');

 
 const getToken = async () => {
	const Token =  await AsyncStorage.getItem('UserLoginToken')
	console.log(Token,'--------11-----Token');
 }
useEffect(() => {
getToken()
},[token])

	return (
	  <DrawerContentScrollView>
		{/* Custom Header */}
		<View style={{position:'absolute',}}>
			<Image source={CrossIcon} width={100} height={100} />
		</View>
		<View>
			<ImageBackground style={Styles.bgImage} source={drawerBg} />
		</View>
		  
		<DrawerItem
		  label="Home"
		  icon={() => ''}
		  onPress={() => navigation.navigate(screenRouter.home.name)}
		  activeTintColor='#FFFFFF'
		  activeBackgroundColor= '#5D2E9F'
		  inactiveTintColor ='#402A9F'
		  labelStyle={Styles.menuItem}
		  style={{
			padding: 0,
			backgroundColor: isScreenActive(screenRouter.home.name) ? '#5D2E9F' : '#FFF',
		  }}
		/>
		<DrawerItem
		  label="Sign In"
		  icon={() => ''}
		  
		  onPress={() => navigation.navigate(screenRouter.signIn.name)}
		  activeTintColor='#FFFFFF'
		  activeBackgroundColor= '#5D2E9F'
		  inactiveTintColor ='#402A9F'
		  labelStyle={Styles.menuItem}
		  style={{
			padding: 0,
			backgroundColor: isScreenActive(screenRouter.signIn.name) ? '#5D2E9F' : '#FFF',
		  }}
		/>
		<DrawerItem
		  label="Sign Up"
		  icon={() => ''}
		  onPress={() => navigation.navigate(screenRouter.signUp.name)}
		  activeTintColor='#FFFFFF'
		  activeBackgroundColor= '#5D2E9F'
		  inactiveTintColor ='#402A9F'
		  labelStyle={Styles.menuItem}
		/>
		<DrawerItem
		  label="Profile"
		  icon={() => ''}
		  onPress={() => navigation.navigate(screenRouter.profileScreen.name)}
		  activeTintColor='#FFFFFF'
		  activeBackgroundColor= '#5D2E9F'
		  inactiveTintColor ='#402A9F'
		  labelStyle={Styles.menuItem}
		/>
	  </DrawerContentScrollView>
	);
  };

  export default CustomDrawerContent;





  const Styles = StyleSheet.create({
	bgImage:{
		width:'100%',
		height:HeightResponsive(150),
		resizeMode:'cover',
		marginTop:SpaceResponsive(-20)
	},
	menuItem:{
		fontWeight:'400',
		fontSize:FontSizeResponsive(16)
	}
  })