import { StyleSheet } from "react-native";
import { FontSizeResponsive, HeightResponsive, SpaceResponsive, WidthResponsive } from "../../utils/SizeMatter";

const profileStyle = StyleSheet.create({
	userContainer: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		width: '100%',
		backgroundColor: 'red'
	},
	userImgCont:{
		justifyContent:'center', 
		alignItems:'center'
	},
	userName:{
		textAlign:'center',
		fontWeight:'500',
		fontSize:FontSizeResponsive(20),
		color:'#B13AA1',
		marginTop:SpaceResponsive(15)
	},
	userImg: {
		width: WidthResponsive(85),
		height: WidthResponsive(85),
		borderRadius: 50,
		backgroundColor: '#fff',
		padding: 30,
		marginTop:SpaceResponsive(15)
	},
	userTextDes:{
		fontWeight:'400',
		fontSize:FontSizeResponsive(13),
		textAlign:'center',
		marginTop:SpaceResponsive(5)
	},
	followerContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop:SpaceResponsive(20),
		paddingHorizontal:SpaceResponsive(20),
	},
	follower:{
		fontSize:FontSizeResponsive(12),
		lineHeight:SpaceResponsive(20),
		fontWeight:'400'
	},
	followerColor:{
		fontWeight:'500',
		fontSize:FontSizeResponsive(15),
		textAlign:'center',
		lineHeight:SpaceResponsive(20),
		color:'#5D2E9F'
	},
	TabCont:{
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop:SpaceResponsive(20),
		paddingHorizontal:SpaceResponsive(50),
	},
	TabIconCont:{
		width:WidthResponsive(40),
		height:WidthResponsive(40),
		backgroundColor:'#ddd',
		borderWidth:1,
		borderColor:'#ddd',
		borderRadius:WidthResponsive(40),
		display:'flex',
		justifyContent:'center',
		alignItems:'center'
	},
	TabActiveCont:{
		width:WidthResponsive(40),
		height:WidthResponsive(40),
		borderWidth:1,
		borderRadius:WidthResponsive(40),
		display:'flex',
		justifyContent:'center',
		alignItems:'center',
		backgroundColor:'#402A9F',
		borderColor:'#402A9F',
	},
	TabIcon:{
		width:WidthResponsive(18),
		height:WidthResponsive(18),
	}
})

export default profileStyle;