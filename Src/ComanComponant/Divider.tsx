import React from 'react'
import { StyleSheet, View } from 'react-native'
import { HeightResponsive, SpaceResponsive } from '../utils/SizeMatter'

const Divider = ({topSpace}:any) => {
	console.log(topSpace,'===========topSpace');
	

	const styles = StyleSheet.create({
		conatiner:{
			width:'100%',
			height:HeightResponsive(2),
			backgroundColor:'#ddd',
			marginTop:SpaceResponsive(topSpace)
		}
	})

  return (
	<View style= {styles.conatiner}>

	</View>
  )
}

export default Divider
