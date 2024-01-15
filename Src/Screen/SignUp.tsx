import React, { useState } from 'react'
import { Button, Image, ImageBackground, Pressable, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SpaceResponsive } from '../utils/SizeMatter'
import CommanStyle from '../stryle/CommanStyle'
import AuthStyle from '../stryle/AuthStyle'
import { Controller, useForm } from 'react-hook-form'
import TextInputField from '../ComanComponant/TextInputField'
import { hideEye, showEye } from '../utils/Images'
let backgroundImage = '../Images/allImages/backgroundForm.png'
let logo = '../Images/allImages/logo.png'


interface FormData {
  fullName: string;
  email: string;
  phoneNumber: number;
  password: string;
  confirmPasword: string;
}
const SignIn = ({ navigation }: any) => {

  const { control, handleSubmit, formState: { errors } } = useForm<FormData>();
  const [isRegistered, setIsRegistered] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(true);
  const [showPassword, setShowPassword] = useState(true)
  const onSubmit = (data: FormData) => {
    // Do something with the form data
    console.log('Form data:', data);
  };

  const handleConfimPass = (key: string) => {
    if (key == 'confirmPass') {
      setShowConfirmPass(!showConfirmPass)
    }
    if (key == 'password') {
      setShowPassword(!showPassword)
    }

  }

  return (
    <SafeAreaView>
      <ScrollView style={CommanStyle.ScrollStyle}>
        <View>
          <ImageBackground style={AuthStyle.AuthBG} source={require(backgroundImage)} resizeMode='cover'>
            <Image style={AuthStyle.logoStyle} source={require(logo)} />
          </ImageBackground>
        </View>
        <View style={CommanStyle.sectionPaddingHorigently}>
          <View>
            <Text style={AuthStyle.loginHeading}>Sign Up!</Text>
            <Text style={[AuthStyle.loginPara]}>Fill All details & create your Account !</Text>
          </View>

          <View style={{ marginTop: 40 }}>
            <View style={AuthStyle.fieldView}>
              <Text style={AuthStyle.formLabel}>Full Name</Text>
              <Controller
                control={control}
                name='fullName'
                render={({ field }) => (
                  <TextInputField
                    placeHolder={'Jhon Morthan'}
                    value={field.value}
                    ChangeText={(text: any) => field.onChange(text)}
                  />
                )}
                rules={{ required: 'This field is Required' }}
              />
              {errors.fullName && <Text>{errors.fullName.message}</Text>}
            </View>
            <View style={AuthStyle.fieldView}>
              <Text style={AuthStyle.formLabel}>Email</Text>
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
              <Text style={AuthStyle.formLabel}>Phone Number</Text>
              <Controller
                control={control}
                name='phoneNumber'
                render={({ field }) => (
                  <TextInputField
                    placeHolder={'1234567890'}
                    value={field.value}
                    ChangeText={(text: any) => field.onChange(text)}
                    type={'numeric'}
                  />
                )}
                rules={{ required: 'This field is Required' }}
              />
              {errors.phoneNumber && <Text>{errors.phoneNumber.message}</Text>}
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


            <View style={AuthStyle.fieldView}>

              <Text style={AuthStyle.formLabel}>Confirm Password</Text>
              <TouchableOpacity onPress={() => handleConfimPass('confirmPass')} style={AuthStyle.EyeStyleCont}>
                {showConfirmPass ?
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
                    secureText={showConfirmPass}
                  />
                )}
                name="confirmPasword"
                rules={{ required: 'This field is Required' }}
              />
              {errors.confirmPasword && <Text>{errors.confirmPasword.message}</Text>}
            </View>

            {/* <Text style={AuthStyle.forgotText}>Forgot Password?</Text> */}
            {/* <Button
							title="Login"
							onPress={handleSubmit(onSubmit)}

						/> */}
            <Pressable style={[AuthStyle.btnParent,{marginTop:20}]} onPress={handleSubmit(onSubmit)}>
              <Text style={[AuthStyle.btnText]}>Sign Up</Text>
            </Pressable>
            {isRegistered && <Text>Registration successful!</Text>}

            <View style={AuthStyle.bottomLine}>
              <Text style={AuthStyle.dontAccount}>
              Already have an account?            
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                  <Text style={[AuthStyle.touchBtn]}> Login</Text>
                </TouchableOpacity>
            </View>

          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn
