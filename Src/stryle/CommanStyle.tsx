import { StyleSheet } from "react-native";
import { SpaceResponsive } from "../utils/SizeMatter";

const CommanStyle = StyleSheet.create({
	justifyBetween:{
		display:'flex',
		flexDirection:'row',
		justifyContent:'space-between',
		alignItems:'center',
	},
	sectionPadding:{
		paddingHorizontal:SpaceResponsive(20),
		paddingVertical:SpaceResponsive(10),
		backgroundColor:'#fff',
		elevation:5,
		margin:0
	}
})

export default CommanStyle;