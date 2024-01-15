import React from 'react'
import { Image, SafeAreaView, ScrollView, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import HeaderStyle from '../stryle/HeaderStyle'
import CommanStyle from '../stryle/CommanStyle'
import { DrawerIcon, UserIcon } from '../utils/Images'
import { useNavigation } from '@react-navigation/native'

const TopHeader = (props:any) => {
const navigation = useNavigation();
	console.log(props,"-----------------props");
	
	return (
		<View
			style={[
				CommanStyle.sectionPadding,
				CommanStyle.justifyBetween,
			]}
		>
			<TouchableOpacity onPress={() =>{}}>
			<Image style={[HeaderStyle.nemuIcon,]} source={DrawerIcon} />
			</TouchableOpacity>
			{/* <View> */}
			<Image style={HeaderStyle.userImage} source={{ uri: UserIcon }} />
			{/* </View> */}
		</View>
	)
}

export default TopHeader
