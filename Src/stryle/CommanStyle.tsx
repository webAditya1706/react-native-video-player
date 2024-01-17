import { StyleSheet } from "react-native";
import { SpaceResponsive } from "../utils/SizeMatter";

const CommanStyle = StyleSheet.create({
	
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
		margin: 0,
	},
	sectionPaddingHorigently: {
		width: '100%',
		paddingHorizontal: SpaceResponsive(20),
	},
	errorText: {
		color: 'red',
		fontWeight: '400',
		marginTop: SpaceResponsive(5)
	}
})

export default CommanStyle;