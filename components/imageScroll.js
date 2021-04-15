import React from 'react';

import { AppRegistry, StyleSheet, Text, TouchableOpacity, View, Image, ScrollView } from 'react-native';


export default class ImageScroll extends React.Component {

  fun = () => {
    console.log("hello")
  }
  render() {
    return (
      <View style={{
        marginLeft:7,
       
      }}>
        <TouchableOpacity onPress={()=>this.props.navigation.push("detail",{data:this.props.ele})}>
        <View style={{
          width: 155,
          height: 250,
          flexDirection: "column",
          justifyContent: "center",
          // objectFit: 'cover',
          // overflow: 'hidden'
        }}>
          <Image source={{ uri: this.props.ele.url }} style={{
            width: "100%",
            height: "90%",
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,

          }} />
          <Text style={{
            fontSize: 15,
            backgroundColor: "black",
            color: "white",
            width: "100%",
            borderBottomLeftRadius: 5,
            borderBottomRightRadius: 5,
            textAlign: 'center'
          }}>Thu, 15 Apr onwards</Text>
        </View>
        </TouchableOpacity>
        <View style={{
          flexDirection: "row",
          width: 155,
          flexDirection:'row',
        //   justifyContent:'center'
        }}>
          <Text style={{
              marginTop:4,
            fontSize: 13,
            // fontWeight: 'bold',
            
           


          }}>{this.props.ele.h.length < 45 ? this.props.ele.h : this.props.ele.h.slice(0, 45) + "..."}</Text>

        </View>

      

      </View>
    );
  }
}
const styles = StyleSheet.create({

});