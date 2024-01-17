import React, { useState } from 'react'
import { Button, Image, ImageBackground, Pressable, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'

import { SpaceResponsive } from '../utils/SizeMatter'
import CommanStyle from '../stryle/CommanStyle'
import AuthStyle from '../stryle/AuthStyle'
import { Controller, useForm } from 'react-hook-form'
import TextInputField from '../ComanComponant/TextInputField'
import { hideEye, showEye } from '../utils/Images'
import axios from 'axios'
import { API_URL } from '../../config'
import Toast from 'react-native-toast-message'
import screenRouter from '../utils/routes'
let backgroundImage = '../Images/allImages/backgroundForm.png'
let logo = '../Images/allImages/logo.png'


interface FormData {
  fullName: string;
  email: string;
  phoneNumber: number;
  password: string;
  confirmPassword: string;
}
const SignUpScreen = ({ navigation }: any) => {
  // start Screen
  const { control, handleSubmit, formState: { errors } } = useForm<FormData>();

  const [isRegistered, setIsRegistered] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(true);
  const [showPassword, setShowPassword] = useState(true)
  const onSubmit = async (data: FormData) => {
    // Do something with the form data
    
    // data.phoneNumber= parseInt(data.phoneNumber)
    console.log(data.phoneNumber,'-------phoneNumber');

    console.log(data.phoneNumber.toString().length,'-------------22');
   
    
    await axios.post(`${API_URL}/users/register`,data)
      .then((res) => {
        console.log(res.data, 'res-------------');
        if(res.data)
        Toast.show({
          type:'success',
          text1:'User Ragistration',
          text2:res.data.message || res.data.error,
          autoHide:true
        })
        navigation.navigate(screenRouter.signIn.name)
      }).catch((err) => {
        
        console.log( err.response.data,'errr------11-------');
        Toast.show({
          type:'error',
          text1:'User Ragistration',
          text2:err.response.data.message || err.response.data.error,
          autoHide:true
        })
      })
  };

  const handleConfimPass = (key: string) => {
    if (key == 'confirmPassword') {
      setShowConfirmPass(!showConfirmPass)
    }
    if (key == 'password') {
      setShowPassword(!showPassword)
    }
  }

  return (
      <ScrollView style={{backgroundColor:'#fff'}}>
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
                rules={{
                  required: 'This field is Required',
                  minLength: {
                    value: 6,
                    message: 'This field should have at least 6 characters',
                  },
                }}
              />
              {errors.fullName && <Text style={CommanStyle.errorText}>{errors.fullName.message}</Text>}
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
                rules={{
                  required: 'This field is Required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address',
                  },
                }}
              />
              {errors.email && <Text style={CommanStyle.errorText}>{errors.email.message}</Text>}
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
                rules={{
                  required: 'This field is Required',
                  minLength: {
                    value: 10,
                    message: 'This Number Is not exists'
                  },
                  maxLength: {
                    value: 10,
                    message: 'This Number Is not exists'
                  }
                }}
              />
              {errors.phoneNumber && <Text style={CommanStyle.errorText}>{errors.phoneNumber.message}</Text>}
            </View>

            <View style={AuthStyle.fieldView}>
              <Text style={AuthStyle.formLabel}>password</Text>
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
                rules={{
                  required: 'This field is Required',
                  minLength: {
                    value: 6,
                    message: 'This field should have at least 6 characters'
                  },
                  maxLength: {
                    value: 16,
                    message: 'This field should have maximum 16 characters'
                  }
                }}
              />
              {errors.password && <Text style={CommanStyle.errorText}>{errors.password.message}</Text>}
            </View>


            <View style={AuthStyle.fieldView}>

              <Text style={AuthStyle.formLabel}>Confirm password</Text>
              <TouchableOpacity onPress={() => handleConfimPass('confirmPassword')} style={AuthStyle.EyeStyleCont}>
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
                name="confirmPassword"
                rules={{
                  required: 'This field is Required',
                  validate: (value) =>
                    value === control._formValues.password || 'Passwords do not match'
                }}
              />
              {errors.confirmPassword && <Text style={CommanStyle.errorText}>{errors.confirmPassword.message}</Text>}
            </View>

            {/* <Text style={AuthStyle.forgotText}>Forgot Password?</Text> */}
            {/* <Button
							title="Login"
							onPress={handleSubmit(onSubmit)}

						/> */}
            <Pressable style={[AuthStyle.btnParent, { marginTop: 20 }]} onPress={handleSubmit(onSubmit)}>
              <Text style={[AuthStyle.btnText]}>Sign Up</Text>
            </Pressable>
            {isRegistered && <Text>Registration successful!</Text>}

            <View style={AuthStyle.bottomLine}>
              <Text style={AuthStyle.dontAccount}>
                Already have an account?
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate(screenRouter.signIn.name)}>
                <Text style={[AuthStyle.touchBtn]}> Login</Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>
      </ScrollView>
  )
}

export default SignUpScreen
