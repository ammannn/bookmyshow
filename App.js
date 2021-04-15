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
import Bell from './components/bell'
import UnderConstruction from './components/underConstruction'
import Detail from './components/detail'
import Allmovie from './components/allMovies'
import Profile from './components/profile'

const Stack = createStackNavigator();


export class App extends Component {
  render() {
    return (
      <NavigationContainer> 
     <Stack.Navigator>
        <Stack.Screen name='Get Started' component={Login} />
        <Stack.Screen name="Login" component={Loginpage} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen options={{headerShown:false}} name="Home" component={Header} />
        <Stack.Screen name="select city" component={SelectCity} />
        <Stack.Screen name="Notification" component={Bell} />
        <Stack.Screen name="under construction" component={UnderConstruction} />
        <Stack.Screen name="detail" component={Detail} />
        <Stack.Screen name="All Movies" component={Allmovie} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="header" component={Header} />

     
      </Stack.Navigator>
     </NavigationContainer>
    
    )
  }
}

export default App
