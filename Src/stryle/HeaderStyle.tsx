import { StyleSheet } from "react-native";
import { HeightResponsive, SpaceResponsive, WidthResponsive } from "../utils/SizeMatter";



const HeaderStyle = StyleSheet.create({
	headerContainer:{
		marginBottom:SpaceResponsive(10)
	},
	userImage:{
		width:50, 
		height:50, 
		borderRadius:50
	},
	nemuIcon:{
		width:WidthResponsive(20),
		height:HeightResponsive(20)
	}
})

export default HeaderStyle