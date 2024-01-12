import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	ScrollView: {
		width: '100%',
		height: 'auto',
		backgroundColor: '#fff',
		paddingTop: 20
	},

	sectuionContainer: {
		flex: 1,
		paddingHorizontal: 20,
		flexDirection: 'row',
		alignItems: 'center',
		columnGap: 20
	},
	videoTitle: {
		fontSize: 20,
		fontWeight: "600",
		color: 'green'
	},

	videoPara: {
		fontSize: 14,
		fontWeight: "400",
	},

	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},

	iconContainer: {
		position: 'absolute',
		top: '40%',
		zIndex: 1,
		left: '40%',
		backgroundColor: '#0000006b',
		width: 80,
		height: 80,
		borderWidth: 8,
		borderColor: '#ddd',
		borderRadius: 50,
		elevation: 2
	},

	videoContainer: {
		flex: 1,
	},

	thumbnail: {
		width: '100%',
		height: 300,
	},

	video: {
		flex: 1,
		width: '100%',
		height: 300,
	},

});


export { styles }