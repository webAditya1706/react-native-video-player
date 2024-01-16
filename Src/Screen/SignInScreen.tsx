import React, { useState } from 'react'
import { Button, Image, ImageBackground, Pressable, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SpaceResponsive } from '../utils/SizeMatter'
import CommanStyle from '../stryle/CommanStyle'
import AuthStyle from '../stryle/AuthStyle'
import { Controller, useForm } from 'react-hook-form'
import TextInputField from '../ComanComponant/TextInputField'
import { hideEye, logoAuth, showEye } from '../utils/Images'
let backgroundImage = '../Images/allImages/backgroundForm.png'
let logo = '../Images/allImages/logo.png'


interface FormData {
	password: string;
	email: string;
}
const SignInScreen = ({ navigation }: any) => {

	const { control, handleSubmit, formState: { errors } } = useForm<FormData>();
	const [isRegistered, setIsRegistered] = useState(false);
	const [showPassword, setShowPassword] = useState(true)
	const onSubmit = (data: FormData) => {
		// Do something with the form data
		console.log('Form data:', data);
	};

	const handleConfimPass = (key: string) => {
		if (key == 'password') {
			setShowPassword(!showPassword)
		}

	}

	return (
		<SafeAreaView>
						<ScrollView style={CommanStyle.ScrollStyle}>
				<View>
					<ImageBackground style={AuthStyle.AuthBG} source={require(backgroundImage)} resizeMode='cover'>
						<Image style={AuthStyle.logoStyle} source={logoAuth} />
					</ImageBackground>
				</View>
				<View style={CommanStyle.sectionPaddingHorigently}>
					<View>
						<Text style={AuthStyle.loginHeading}>Login</Text>
						<Text style={AuthStyle.loginPara}>Welcome to my Video App !</Text>
					</View>

					<View style={{ marginTop: 40 }}>
						<View style={AuthStyle.fieldView}>
							<Text style={AuthStyle.formLabel}>Email/User name</Text>
							<Controller
								control={control}
								name='email'
								render={({ field }) => (
									<TextInputField
										placeHolder={'Example@gmail.com'}
										value={field.value}
										ChangeText={(text: any) => field.onChange(text)}
									/>
								)}
								rules={{ required: 'This field is Required' }}
							/>
							{errors.email && <Text>{errors.email.message}</Text>}
						</View>

						<View style={AuthStyle.fieldView}>
							<Text style={AuthStyle.formLabel}>Password</Text>

							<TouchableOpacity onPress={() => handleConfimPass('password')} style={AuthStyle.EyeStyleCont}>
								{showPassword ?
									<Image
										style={AuthStyle.EyeStyle}
										source={showEye} />
									:
									<Image
										style={AuthStyle.EyeStyle}
										source={hideEye} />}
							</TouchableOpacity>
							<Controller
								control={control}
								render={({ field }) => (
									<TextInputField
										placeHolder={'*******'}
										value={field.value}
										ChangeText={(text: any) => field.onChange(text)}
										secureText={showPassword}
									/>
								)}
								name="password"
								rules={{ required: 'This field is Required' }}
							/>
							{errors.password && <Text>{errors.password.message}</Text>}
						</View>

						<Text style={AuthStyle.forgotText}>Forgot Password?</Text>
						{/* <Button
							title="Login"
							onPress={handleSubmit(onSubmit)}

						/> */}
						<Pressable style={AuthStyle.btnParent} onPress={handleSubmit(onSubmit)}>
							<Text style={AuthStyle.btnText}>Login</Text>
						</Pressable>
						{isRegistered && <Text>Registration successful!</Text>}


						<View style={AuthStyle.bottomLine}>
							<Text style={AuthStyle.dontAccount}>
								don’t have an account?
							</Text>
							<TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
								<Text style={[AuthStyle.touchBtn]}> Sign Up</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</ScrollView>
					</SafeAreaView>
	)
}

export default SignInScreen
