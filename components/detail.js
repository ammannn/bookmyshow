import React from 'react';

import { AppRegistry, StyleSheet, Text, TouchableOpacity, View, Image, ScrollView } from 'react-native';


export default class Detail extends React.Component {

  render() {
    const {data}=this.props.route.params
    console.log(data)
    return (
      <View >
       <Text>{data.h}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({

});