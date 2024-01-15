import { StyleSheet } from "react-native";
import { FontSizeResponsive, HeightResponsive, SpaceResponsive, WidthResponsive } from "../utils/SizeMatter";

const AuthStyle = StyleSheet.create({
	authCOntainer: {
		fontSize: 10
	},
	AuthBG: {
		width: '100%',
		height: HeightResponsive(220),
		overflow: 'hidden',
		backgroundColor: '#fff',
		display: 'flex',
		justifyContent: 'center',
		//  alignItems:'center'
		marginTop:SpaceResponsive(-10)
	},
	fieldView:{
		marginBottom:SpaceResponsive(15),
		position:'relative'
	},
	logoStyle: {
		width: WidthResponsive(110),
		height: HeightResponsive(95),
		marginLeft: SpaceResponsive(20),
	},
	loginHeading: {
		fontSize: FontSizeResponsive(32),
		textAlign: 'right',
		color:'#B33AA1',
		fontWeight:'700',
		lineHeight:FontSizeResponsive(46),
		marginTop:SpaceResponsive(-30)
	},
	loginPara:{
		fontSize: FontSizeResponsive(16),
		textAlign: 'right',
		color:'#28168A',
		fontWeight:'400',
		lineHeight:FontSizeResponsive(26),
	},
	formLabel:{
		fontSize:FontSizeResponsive(16),
		fontWeight:'400',
		lineHeight:SpaceResponsive(23),
		color:'#402A9F',
		marginBottom:SpaceResponsive(8)
	},
	EyeStyleCont:{
		position:'absolute',
		right:SpaceResponsive(15),
		top:SpaceResponsive(45),
		zIndex:2,
	},
	EyeStyle:{
		width:WidthResponsive(22),
		height:HeightResponsive(18)
	},
	forgotText:{
		fontSize:FontSizeResponsive(16),
		fontWeight:'400',
		lineHeight:SpaceResponsive(23),
		color:'#AD39A1',
		marginBottom:SpaceResponsive(30),
		textAlign:'right'
	},
	FormButton:{
		backgroundColor:'#AD39A1'
	},
	btnParent:{
		width:'100%',
		height:HeightResponsive(52),
		backgroundColor:'#AD39A1',
		borderRadius:SpaceResponsive(10),
		display:'flex',
		justifyContent:'center',
		alignItems:'center',
		alignContent:'center',
		marginTop:SpaceResponsive(8)
	},
	btnText:{
		fontSize:FontSizeResponsive(20),
		fontWeight:'700',
		lineHeight:SpaceResponsive(30),
		color:"#FFF"
	},
	dontAccount:{
		textAlign:'center',
		fontSize:FontSizeResponsive(16),
		fontWeight:'400'
	},
	bottomLine:{
		width:'100%',
		display:'flex',
		flexDirection:'row',
		justifyContent:'center',
		alignContent:'center',
		marginTop:SpaceResponsive(15),
		marginBottom:SpaceResponsive(35)
	},
	touchBtn:{
		color: "#AD39A1",
		fontWeight:'400',
		fontSize:FontSizeResponsive(16)
	}
})

export default AuthStyle;