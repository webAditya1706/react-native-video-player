import { StyleSheet } from "react-native";
import { FontSizeResponsive, HeightResponsive, SpaceResponsive, WidthResponsive } from "../utils/SizeMatter";
import { scale, verticalScale } from "react-native-size-matters";

const styles = StyleSheet.create({
	ScrollView: {
		width: '100%',
		height: 'auto',
		backgroundColor: '#fff',
		position:'relative'
	},

	sectuionContainer: {
		flex: 1,
		paddingHorizontal: 20,
		flexDirection: 'row',
		alignItems: 'center',
		columnGap: 20,
		position: 'relative'
	},
	videoTitle: {
		fontSize: FontSizeResponsive(14),
		fontWeight: "500",
		color: '#402A9F',
		lineHeight: FontSizeResponsive(16)
	},

	videoPara: {
		fontSize: FontSizeResponsive(14),
	},

	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},

	serchPosition: {
		position: 'absolute',
		left: SpaceResponsive(30),
		zIndex: 1,
		// color: 'red'
	},
	serchInput: {
		borderWidth: 1,
		borderColor: '#F6F6F6',
		backgroundColor: '#F6F6F6',
		width: '100%',
		position: 'relative',
		borderRadius: 10,
		paddingLeft: 50
	},
	iconContainer: {
		position: 'absolute',
		zIndex: 1,
		// top: '45%',
		// left: '45%',
		top: SpaceResponsive(130),
		left: SpaceResponsive(170),
		backgroundColor: '#0000006b',
		width: WidthResponsive(40),
		height: HeightResponsive(45),
		borderColor: '#ddd',
		borderRadius: SpaceResponsive(50),
		elevation: 2,
		display: 'flex',
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center'
	},

	playIcon: {
		width: WidthResponsive(20),
		height: HeightResponsive(20),
		marginLeft: SpaceResponsive(5)
	},

	videoContainer: {
		flex: 1,
	},

	thumbnail: {
		width: '100%',
		height: HeightResponsive(300),
	},

	video: {		
		width: '100%',
		height: HeightResponsive(380),
		zIndex:99	
	},

});


export { styles }