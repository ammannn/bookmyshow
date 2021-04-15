import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeStack from './homeStack';
import Detail from './detail'
const AuthSack = createStackNavigator()

export default class MainRecomainded extends React.Component {

  render() {
    return (
   
        <AuthSack.Navigator>
          <AuthSack.Screen name="home" component={HomeStack} />
          <AuthSack.Screen name="detail" component={Detail} />
        </AuthSack.Navigator>
 
    );
  }
}