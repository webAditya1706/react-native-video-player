import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import GridImages from '../../utils/Grid'
import { SpaceResponsive } from '../../utils/SizeMatter'

const GridPortrait = ({gridType}:any) => {
	console.log(gridType,'---------gridType');
	
  return (
	<View style={Styles.parent}>
		{
			GridImages.map((item,key) => {
				return(
					<View key={key} 
					style={ gridType == 'Portrait' ?Styles.imagePortriat:Styles.imageLandscape} >
						<View>
							<Image 
							style={Styles.gridImage} 
							source={item} />
						</View>
					</View>
				)
			})
		}
	</View>
  )
}
const Styles = StyleSheet.create({
	parent:{
		display:'flex',
		flexDirection:'row',
		gap:SpaceResponsive(10),
		flexWrap: 'wrap',
		marginTop:SpaceResponsive(30),
	},

	imagePortriat:{
		width:'48%',
		height:200
	},
	imageLandscape:{
		width:'100%',
		height:200,
		marginBottom:SpaceResponsive(10)
	},
	gridImage:{
		width:'100%', 
		height:'100%',
		borderWidth:1,
		borderColor:'transparent',
		borderRadius:SpaceResponsive(10)
	}
})
export default GridPortrait
