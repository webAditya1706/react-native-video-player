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

export const OuterLayout = ({ children, style, skeleton, ...props }: any) => {

  return (
    <View style={[OuterLayoutstyle.section, style]}>

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
  },
  container: {
    flex: 1,
  },
  viewStyle: { flex: 1 },
});


