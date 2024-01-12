import React from 'react'
import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native'
import HeaderStyle from '../stryle/HeaderStyle'
import CommanStyle from '../stryle/CommanStyle'

const TopHeader = () => {
	return (
		<SafeAreaView>
			<ScrollView>
				<View style={[CommanStyle.sectionPadding, CommanStyle.justifyBetween, HeaderStyle.headerContainer,]}>
				<Image style={[HeaderStyle.nemuIcon, ]} source={require('../Images/homeImage/menu.png')} />
				<View>
					<Image style={HeaderStyle.userImage} source={{uri:'https://cdn-icons-png.flaticon.com/512/219/219983.png'}} />
				</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}

export default TopHeader
