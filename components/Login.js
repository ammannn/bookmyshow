import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Input} from 'react-native';

export class Login extends Component {
  render() {
    return (
  
      <View>
       
        <View style={styles.socailContainer}>
          <View  style={styles.facebook}>
            <Image
              style={styles.facebookLogo}
              source={require('./images/facebook.png')}
            />
            <Text onPress={()=>this.props.navigation.navigate('SignUp')} style={styles.facebookText}>Continue with Facebook</Text>
          </View>


          <View style={styles.google}>
            <Image
              style={styles.facebookLogo}
              source={require('./images/google.png')}
            />
            <Text onPress={()=>this.props.navigation.navigate('SignUp')} style={styles.facebookText}> Continue with Google</Text>
          </View>


          <View style={styles.email}>
            <Image
              style={styles.facebookLogo}
              source={require('./images/email.png')}
            />
            <Text onPress={()=>this.props.navigation.navigate('SignUp')} style={styles.facebookText}>   Continue with Email</Text>
          </View>

        </View>

        <View style={styles.orView}>
          <Text style={styles.OR}>OR</Text>
        </View>


        <View style={styles.loginBoxView}>

       
        <View  style={styles.loginBox}>
        <Text onPress={()=>this.props.navigation.navigate('Login')} style={styles.loginBoxText}>Login with Email</Text>
        </View>

        </View>

        <View style={styles.agree}>
          <Text style={styles.agreeText}>I agree to the Terms {'&'} conditions and Privacy Policy</Text>
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
  text: {
    fontWeight: 'bold',
  },
  socailContainer: {
    flexDirection: 'column',

    alignItems: 'center',
  },
  facebook: {
    flexDirection: 'row',
    width: '90%',
    marginTop: 25,
    height: 50,
    // backgroundColor: 'black',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 4,
  },
  facebookLogo: {
    width: 32,
    height: 32,
    alignSelf: 'center',
    marginLeft: 7,
  },
  facebookText: {
    marginLeft: 60,
    color: 'grey',
    alignSelf: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
  },

  google: {
    flexDirection: 'row',
    width: '90%',
    marginTop: 10,
    height: 50,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 4,
  },
  email: {
    flexDirection: 'row',
    width: '90%',
    marginTop: 10,
    height: 50,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 4,
  },
  orView: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  OR: {
    justifyContent: 'center',
    color: 'grey',
    fontWeight: 'bold',
  },
  loginBoxView:{
    flexDirection:'row',
    justifyContent:'center',
    flexDirection:'row',
    alignItems:'center',
    marginTop:30
  },

  


  loginBox:{
    // marginTop:15,
    width:'90%',
    height:45,
    marginTop:-15,
    borderBottomWidth:1,
    borderBottomColor:'grey',
    flexDirection:'row',
    alignItems:'flex-end',
    // justifyContent:'center'
  },
  loginBoxText:{
    color:'grey',
    marginBottom:3,
    fontSize:15
  },
  agree:{
   
    position:'absolute',
    top:'210%',
    left:30,
    color:'grey'
   
  },
  agreeText:{
    color:'grey'
  }
});

export default Login;
