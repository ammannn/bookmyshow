import React, { Component } from 'react'
import {View,Text,StyleSheet} from 'react-native'

export class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
      <View>
        <Text>It All Starts Here</Text>
        <Text>Bengluru </Text>
      </View>
      <View>

      </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  header:{
    backgroundColor:'rgb(34 ,37 ,57)',
    width:'100%',
    height:'27%'
  }
})

export default Header
