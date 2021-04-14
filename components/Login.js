import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Input} from 'react-native';

export class Login extends Component {
  render() {
    return (
      <View>
        <View style={styles.bookmyshow}>
          <Image
            style={styles.bookmyshowlogo}
            source={require('./images/bookmyshow.png')}
          />
        </View>

        <View style={styles.loginBoxView}>
          <View style={styles.loginBox}>
            <Text
              onPress={() => this.props.navigation.navigate('Login')}
              style={styles.loginBoxText}>
              Login with Email
            </Text>
          </View>
        </View>
        <Image
          source={{
            uri:
              'https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/lead-in-v3-collection-202102040828.png',
              width:'100%',
              height:35
          }}
        />

        <View style={styles.agree}>
          <Text style={styles.agreeText}>
            I agree to the Terms {'&'} conditions and Privacy Policy
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
    width: '100%',
    height: 50,
    elevation: 4,
  },
  bookmyshow: {
    marginTop: 100,
    marginBottom: 50,
  },
  bookmyshowlogo: {
    width: '100%',
    height: 80,
  },

  text: {
    fontWeight: 'bold',
  },

  loginBoxView: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
  },

  loginBox: {
    marginTop: 105,
    width: '90%',
    height: 45,
    marginTop: -15,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    flexDirection: 'row',
    alignItems: 'flex-end',
    // justifyContent:'center'
  },
  loginBoxText: {
    color: 'grey',
    marginBottom: 3,
    fontSize: 15,
    marginLeft: 4,
  },
  agree: {
    position: 'absolute',
    top: '210%',
    left: 30,
    color: 'grey',
  },
  agreeText: {
    color: 'grey',
  },
});

export default Login;
