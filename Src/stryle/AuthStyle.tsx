import { StyleSheet } from "react-native";
import { FontSizeResponsive, HeightResponsive, SpaceResponsive, WidthResponsive } from "../utils/SizeMatter";

const AuthStyle = StyleSheet.create({
	authCOntainer: {
		fontSize: 10
	},
	AuthBG: {
		width: '100%',
		height: HeightResponsive(240),
		borderWidth: 1,
		overflow: 'hidden',
		borderColor: 'transparent',
		backgroundColor: '#fff',
		// borderTopRightRadius: SpaceResponsive(30),
		// borderTopLeftRadius: SpaceResponsive(30),
		display: 'flex',
		justifyContent: 'center',
		//  alignItems:'center'
	},
	logoStyle: {
		width: WidthResponsive(132),
		height: HeightResponsive(107),
		marginLeft: SpaceResponsive(20),
		marginTop: SpaceResponsive(-50)
	},
	loginHeading: {
		fontSize: FontSizeResponsive(32),
		textAlign: 'right',
		color:'#B33AA1',
		fontWeight:'700',
		lineHeight:FontSizeResponsive(46)
	},
	loginPara:{
		fontSize: FontSizeResponsive(18),
		textAlign: 'right',
		color:'#28168A',
		fontWeight:'400',
		lineHeight:FontSizeResponsive(26)
	},
	formLabel:{
		fontSize:FontSizeResponsive(16),
		fontWeight:'400',
		lineHeight:SpaceResponsive(23),
		color:'#402A9F',
		marginBottom:SpaceResponsive(8)
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
		alignContent:'center'
	},
	btnText:{
		fontSize:FontSizeResponsive(20),
		fontWeight:'700',
		lineHeight:SpaceResponsive(30),
		color:"#FFF"
	},
	dontAccount:{
		marginTop:SpaceResponsive(20),
		textAlign:'center',
		fontSize:FontSizeResponsive(16),
		marginBottom: SpaceResponsive(25),
		fontWeight:'400'
	}
})

export default AuthStyle;