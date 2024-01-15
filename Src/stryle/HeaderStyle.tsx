import { StyleSheet } from "react-native";
import { HeightResponsive, SpaceResponsive, WidthResponsive } from "../utils/SizeMatter";



const HeaderStyle = StyleSheet.create({
	headerContainer:{
		marginBottom:SpaceResponsive(10)
	},
	userImageContainer:{
		width:'50%',
		display:'flex',
		flexDirection:'row',
		justifyContent:'flex-end'
	},
	userImage:{
		width:50, 
		height:50, 
		borderRadius:50,
		// textAlign:'left',
		marginRight:SpaceResponsive(30)
	},
	nemuIcon:{
		width:WidthResponsive(20),
		height:HeightResponsive(20)
	}
})

export default HeaderStyle