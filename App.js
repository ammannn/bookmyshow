import React, { Component } from 'react'
import {View,Text} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//components
import Login from './components/Login'
import Loginpage from './components/loginPage'
import SignUp from './components/signUp'
import Header from './components/Header'
import SelectCity from './components/selectCity'
const Stack = createStackNavigator();

export class App extends Component {
  render() {
    return (
      <NavigationContainer> 
     <Stack.Navigator>
        <Stack.Screen name='Get Started' component={Login} />
        <Stack.Screen name="Login" component={Loginpage} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Home" component={Header} />
        <Stack.Screen name="select city" component={SelectCity} />
      </Stack.Navigator>
     </NavigationContainer>
    
    )
  }
}

export default App
