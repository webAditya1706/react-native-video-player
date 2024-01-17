import React from 'react'
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import HeaderStyle from '../stryle/HeaderStyle'
import CommanStyle from '../stryle/CommanStyle'
import { DrawerIcon, UserIcon } from '../utils/Images'

import { HeightResponsive, SpaceResponsive } from '../utils/SizeMatter'

const TopHeader = ({navigation,
	screenName,}:any) => {

	return (
		<View style={Styles.headerContainer}>
			<TouchableOpacity onPress={() => {
				navigation.toggleDrawer()
			}}>
			<Image style={[HeaderStyle.nemuIcon,]} source={DrawerIcon} />
			</TouchableOpacity>
			{/* <View> */}
			<Image style={HeaderStyle.userImage} source={{ uri: UserIcon }} />
			{/* </View> */}
		</View>
	)
}



const Styles = StyleSheet.create({
	headerContainer:{
		height:HeightResponsive(50),
		display:'flex',
		flexDirection:'row',
		justifyContent:'space-between',
		alignItems:'center',
		paddingHorizontal:SpaceResponsive(20),
		backgroundColor:'#fff'
	}
})

export default TopHeader
