import React, { useState } from 'react'
import { OuterLayout } from '../../ComanComponant/OuterLayouts'
import screenRouter from '../../utils/routes'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import CommanStyle from '../../stryle/CommanStyle'
import { UserEdit, UserGrid, UserIcon1, UserIcon2, UserImage, UserSetField, UserWhiteEdit, UserWhiteGrid, UserWhiteSetField } from '../../utils/Images'
import Divider from '../../ComanComponant/Divider'
import profileStyle from './profileStyle'
import GridPortrait from '../../Constants/profile/GridPortrait'
import GridLandScap from '../../Constants/profile/GridLandScap'

const ProfileScreen = (props: any) => {
	const [showComponent, setShowComponent] = useState('Edit')
	return (
		<OuterLayout
			screenName={screenRouter.profileScreen.name}
			{...props}
			style={{ elevation: 5 }}>
			<ScrollView>
				<View>
					<View style={profileStyle.userImgCont}>
						<Image style={profileStyle.userImg} source={UserImage} />
					</View>
					<Text style={profileStyle.userName}>John Morthan</Text>
					<Text style={profileStyle.userTextDes}>Video and content creator The term "content creator" only became popular in the past five years or so. Before that, it was not a thing.</Text>
				</View>
				<View style={profileStyle.followerContainer}>
					<View>
						<Text style={profileStyle.follower}>Following</Text>
						<Text style={profileStyle.followerColor}>58526</Text>
					</View>
					<View>
						<Text style={profileStyle.follower}>Following</Text>
						<Text style={profileStyle.followerColor}>58526</Text>
					</View>
					<View>
						<Text style={profileStyle.follower}>Following</Text>
						<Text style={profileStyle.followerColor}>58526</Text>
					</View>
				</View>
				<Divider topSpace={15} />

				<View style={profileStyle.TabCont}>
					<TouchableOpacity onPress={() => setShowComponent('Edit')}>
						<View style={showComponent == 'Edit'
							? profileStyle.TabActiveCont
							: profileStyle.TabIconCont}>

							<Image
								style={profileStyle.TabIcon} 
								source={showComponent == 'Edit' ? UserWhiteEdit : UserEdit}/>
						</View>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => setShowComponent('Portrait')}>
						<View style={showComponent == 'Portrait'
							? profileStyle.TabActiveCont
							: profileStyle.TabIconCont}>

							<Image
								style={profileStyle.TabIcon}
								source={showComponent == 'Portrait' ? UserWhiteGrid : UserGrid} />
						</View>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => setShowComponent('Landscap')}>
						<View style={showComponent == 'Landscap'
							? profileStyle.TabActiveCont
							: profileStyle.TabIconCont}>

							<Image
								style={profileStyle.TabIcon}
								source={showComponent == 'Landscap' ? UserWhiteSetField : UserSetField} />
						</View>
					</TouchableOpacity>
				</View>
				{
					showComponent == 'Edit'
					&&
					<View>
						<Text 
						style={{fontSize:25,
						fontWeight:'500',
						color:'#B73BA1',
						marginTop:10}}>
							Edit
						</Text>
					</View>
				}

				{showComponent == 'Portrait' && <GridPortrait gridType='Portrait' />}

				{showComponent == 'Landscap' && <GridPortrait gridType='Landscap' />}
			</ScrollView>
		</OuterLayout>
	)
}

export default ProfileScreen
