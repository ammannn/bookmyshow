import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export class Booknow extends Component {
  render() {
    return (
      <View style={{backgroundColor: '#f2f2f2;'}}>
        <View style={{flexDirection: 'column', alignItems: 'center'}}>
          <View
            style={{
              marginTop: 30,
              backgroundColor: 'white',
              width: '92%',
              height: 150,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 4,
              },
              shadowOpacity: 0.3,
              shadowRadius: 4.65,
              elevation: 8,
              borderRadius: 5,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-evenly',
              }}>
              <Icon
                style={{marginLeft: 10, marginTop: 25}}
                name="heart"
                size={30}
                color="red"
              />
              <Text
                style={{
                  marginTop: 20,
                  fontSize: 20,
                  fontWeight: 'bold',
                  letterSpacing: 0.5,
                }}>
                PVR: Phoenix Marketcity Mall
              </Text>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-around'}}>

              <TouchableOpacity onPress={()=>this.props.navigation.navigate('Select Seats')}>
                <View
                  style={{
                    marginTop: 25,
                    backgroundColor: 'white',
                    width: 90,
                    height: 40,
                    borderWidth: 0.5,
                    borderColor: 'grey',
                    borderRadius: 2,
                    shadowColor: '#000',
                    shadowOpacity: 0.23,
                    shadowRadius: 2.62,
                    elevation: 5,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{color: '#f84464', fontWeight: 'bold'}}>
                    02.50 PM
                  </Text>
                </View>
              </TouchableOpacity>
              <View
                style={{
                  marginTop: 25,
                  backgroundColor: 'white',
                  width: 90,
                  height: 40,
                  borderWidth: 0.5,
                  borderColor: 'grey',
                  borderRadius: 2,
                  shadowColor: '#000',
                  shadowOpacity: 0.23,
                  shadowRadius: 2.62,
                  elevation: 5,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{color: '#f84464', fontWeight: 'bold'}}>
                  02.50 PM
                </Text>
              </View>
              <View
                style={{
                  marginTop: 25,
                  backgroundColor: 'white',
                  width: 90,
                  height: 40,
                  borderWidth: 0.5,
                  borderColor: 'grey',
                  borderRadius: 2,
                  shadowColor: '#000',
                  shadowOpacity: 0.23,
                  shadowRadius: 2.62,
                  elevation: 5,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{color: '#f84464', fontWeight: 'bold'}}>
                  02.50 PM
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default Booknow;
