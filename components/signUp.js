import { forModalPresentationIOS } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/CardStyleInterpolators';
import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'

export class SignUp extends Component {
  render() {
    return (
        <KeyboardAwareScrollView
        style={{flex:1}}
        >

      <View>


        <View>
          <Text style={styles.mobileNumber}>Email</Text>
          <View style={styles.Input}>
          <TextInput style={styles.password}  />
          </View>
        </View>

        <View>
          <Text style={styles.mobileNumber}>Password</Text>
          <View style={styles.Input}>
          <TextInput style={styles.password} secureTextEntry={true} />
          </View>
        </View>

        <View>
          <Text style={styles.mobileNumber}>Confirm Password</Text>
          <View style={styles.Input}>
          <TextInput style={styles.password} secureTextEntry={true} />
          </View>
        </View>

        <View style={styles.continueBtnView}>
          <Button   color="red" style={styles.continueBtn} title="Register" />
        </View>


      </View>
      </KeyboardAwareScrollView>
    );
  }
}

const styles = StyleSheet.create({
  headerText: {
    marginTop: 30,
    marginLeft: 10,
    fontSize: 25,
    fontWeight: 'bold',
  },
  mobileNumber: {
    marginTop: 40,
    marginLeft: 22,
    marginBottom: 5,
    color: 'grey',
  },
  startNum: {
    fontSize: 20,
  },

  Input: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
  password: {
    width: '90%',
    height: 55,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 4,
  },
  continueBtnView: {
    
    width: '90%',
    height:'45%',
    left:'5%',
    height: 70,
    marginTop:"50%"
 
  },
  continueBtn:{
    height:'45%',
    backgroundColor:'red',
   
  }
  
});

export default SignUp;
