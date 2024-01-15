import { StyleSheet } from "react-native";
import { SpaceResponsive } from "../utils/SizeMatter";

const CommanStyle = StyleSheet.create({
	ScrollStyle: {
		width: '100%',
		backgroundColor: "#fff",
		height: '100%'
	},
	justifyBetween: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	sectionPadding: {
		width: '100%',
		// paddingHorizontal:SpaceResponsive(20),
		paddingVertical: SpaceResponsive(10),
		backgroundColor: '#fff',
		margin: 0,

	},
	sectionPaddingHorigently:{
		width: '100%',
		// paddingHorizontal:SpaceResponsive(20),
		paddingHorizontal: SpaceResponsive(30),
		marginTop: -30,
	}
})

export default CommanStyle;