import React from 'react';

import { AppRegistry, StyleSheet, Text, TouchableOpacity, View, Image, ScrollView } from 'react-native';


export default class Detail extends React.Component {

  render() {
    const {data}=this.props.route.params
    console.log(data)
    return (
      <View >
       <Text>Movie name ---{'-->   '}{data.name}</Text>
       <Text>Description -----{'>  '}{data.description}</Text>
       <Text>Price -----{'>  '}{data.price}</Text>
       <Text>Trailer Link -----{'>  '}{data.trailerLink}</Text>
       <Text>Type -----{'>  '}{data.type}</Text>

      </View>
    );
  }
}
const styles = StyleSheet.create({

});