import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Image, ImageBackground, StyleSheet, View } from "react-native";
import { CrossIcon, drawerBg } from "../utils/Images";
import { FontSizeResponsive, HeightResponsive, SpaceResponsive } from "../utils/SizeMatter";

const CustomDrawerContent = ({ navigation, state }:any) => {

	const isScreenActive = (routeName:any) => state.routeNames.includes(routeName);
console.log(isScreenActive(),'============isScreenActive');

	return (
	  <DrawerContentScrollView>
		{/* Custom Header */}
		<View style={{position:'absolute',}}>
			<Image source={CrossIcon} width={100} height={100} />
		</View>
		<View>
			<ImageBackground style={Styles.bgImage} source={drawerBg} />
		</View>
		  
		{/* Standard Drawer Items */}


		<DrawerItem
		  label="HomePage"
		  icon={() => ''}
		  onPress={() => navigation.navigate('HomePage')}
		  activeTintColor='#FFFFFF'
		  activeBackgroundColor= '#5D2E9F'
		  inactiveTintColor ='#402A9F'
		  labelStyle={Styles.menuItem}
		  style={{
			padding: 0,
			backgroundColor: isScreenActive('HomePage') ? '#5D2E9F' : '#FFF',
		  }}
		/>
		<DrawerItem
		  label="Sign In"
		  icon={() => ''}
		  
		  onPress={() => navigation.navigate('SignIn')}
		  activeTintColor='#FFFFFF'
		  activeBackgroundColor= '#5D2E9F'
		  inactiveTintColor ='#402A9F'
		  labelStyle={Styles.menuItem}
		  style={{
			padding: 0,
			backgroundColor: isScreenActive('HomePage') ? '#5D2E9F' : '#FFF',
		  }}
		/>
		<DrawerItem
		  label="Sign Up"
		  icon={() => ''}
		  onPress={() => navigation.navigate('SignUp')}
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