import React from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import TopHeader from './TopHeader';
import { SpaceResponsive } from '../utils/SizeMatter';

export const OuterLayout = ({ children, style, skeleton, ...props }: any) => {

  return (
    <View style={[OuterLayoutstyle.section, style, {backgroundColor:'#fff'}]}>

      <SafeAreaView style={OuterLayoutstyle.container}>
        <KeyboardAvoidingView
          // behavior={Platform.OS === 'ios' ? 'padding' : null}
          style={OuterLayoutstyle.container}>
          <TouchableWithoutFeedback
            onPress={() => {
              Keyboard.dismiss();
            }}>
            <>
              <TopHeader
                screenName={props?.screenName}
                {...props} />
              {/* <ScrollView> */}
              {props?.screenName === 'komePage' ? (
                <View >{children}</View>
              ) : (
                <View style={OuterLayoutstyle.viewStyle}>{children}</View>
              )}
              {/* </ScrollView> */}
            </>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </SafeAreaView>

    </View>
  );
};




const OuterLayoutstyle = StyleSheet.create({
  section: {
    flex: 1,
    backgroundColor: 'white',
    width:'100%'
  },
  container: {
    flex: 1,
  },
		
    viewStyle: { flex: 1 ,
      paddingHorizontal: SpaceResponsive(20),
		paddingVertical: SpaceResponsive(10),
    width:'100%',
		backgroundColor: '#fff',
		margin:0,
  },
});


