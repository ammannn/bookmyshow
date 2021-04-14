import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';

export class LoginPage extends Component {
  render() {
    return (
  
      <View>
        <View>
          <Text style={styles.headerText}>Login With Mobile Number</Text>

        </View>

        <Text style={styles.mobileNumber}>Email</Text>
        <View style={styles.Input}>
          <TextInput style={styles.inputBox}  />
        </View>

        <View>
          <Text style={styles.mobileNumber}>Password</Text>
          <View style={styles.Input}>
          <TextInput style={styles.password} secureTextEntry={true} />
          </View>
        </View>

        <View style={styles.continueBtnView}>
          <Button color="red" style={styles.continueBtn} title="Continue" />
        </View>

        <View style={styles.signup}>
          <Text style={styles.sign}>---- OR don't have a account?</Text>
          <Text
            onPress={() => this.props.navigation.navigate('SignUp')}
            style={styles.signupText}>
            {' '}
            SignUp
          </Text>
          <Text style={styles.sign}> ----</Text>
        </View>
      </View>

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
    marginLeft:22,
    marginBottom: 5,
    color: 'grey',

  },

  Input: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputBox: {
   
    width: '90%',
    height: 55,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 4,
  },
  password: {
      
    width: '90%',
    height: 55,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 4,
  },
  continueBtnView: {
    position: 'absolute',
    width: '90%',
    height: '45%',
    left: '5%',
    height: 70,
    top: '160%',
  },
  continueBtn: {
    height: '45%',
    backgroundColor: 'red',
  },
  signup: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signupText: {
    color: 'blue',
  },
  sign: {
    color: 'grey',
  },
});

export default LoginPage;
