import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { SpaceResponsive } from '../utils/SizeMatter'

const TextInputField = ({placeHolder,value, ChangeText, secureText, type}:any) => {
  return (
	<View>
		<TextInput
		placeholder={placeHolder}
		value={value}
		keyboardType={type}
		onChangeText={ChangeText} 
		secureTextEntry={secureText}
		style={styles.inputField}/>
	</View>
  )
}


const styles = StyleSheet.create({
	inputField:{
		width:'100%',
		backgroundColor:'#fff',
		borderWidth:2,
		borderRadius:10,
		borderColor:"#422A9F",
		paddingHorizontal:SpaceResponsive(10)
		
	}
})

export default TextInputField
