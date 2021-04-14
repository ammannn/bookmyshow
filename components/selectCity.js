import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {color} from 'react-native-reanimated';

export class SelectCity extends Component {
  render() {
    return (
      <View>
          <Text>POPULAR CITIES</Text>
        <View style={styles.mainCity}>
          <View style={styles.cityView}>
            <Image
              style={styles.cityImage}
              source={require('./images/cities/mumbai.png')}
            />
            <Text style={styles.city}>Mumbai</Text>
          </View>
          <View style={styles.cityView}>
            <Image
              style={styles.cityImage}
              source={require('./images/cities/mumbai.png')}
            />
            <Text style={styles.city}>Mumbai</Text>
          </View>
          <View style={styles.cityView}>
            <Image
              style={styles.cityImage}
              source={require('./images/cities/mumbai.png')}
            />
            <Text style={styles.city}>Mumbai</Text>
          </View>
          <View style={styles.cityView}>
            <Image
              style={styles.cityImage}
              source={require('./images/cities/mumbai.png')}
            />
            <Text style={styles.city}>Mumbai</Text>
          </View>
          <View style={styles.cityView}>
            <Image
              style={styles.cityImage}
              source={require('./images/cities/mumbai.png')}
            />
            <Text style={styles.city}>Mumbai</Text>
          </View>
          <View style={styles.cityView}>
            <Image
              style={styles.cityImage}
              source={require('./images/cities/mumbai.png')}
            />
            <Text style={styles.city}>Mumbai</Text>
          </View>
          <View style={styles.cityView}>
            <Image
              style={styles.cityImage}
              source={require('./images/cities/mumbai.png')}
            />
            <Text style={styles.city}>Mumbai</Text>
          </View>
          <View style={styles.cityView}>
            <Image
              style={styles.cityImage}
              source={require('./images/cities/mumbai.png')}
            />
            <Text style={styles.city}>Mumbai</Text>
          </View>
          <View style={styles.cityView}>
            <Image
              style={styles.cityImage}
              source={require('./images/cities/mumbai.png')}
            />
            <Text style={styles.city}>Mumbai</Text>
          </View>
          <View style={styles.cityView}>
            <Image
              style={styles.cityImage}
              source={require('./images/cities/mumbai.png')}
            />
            <Text style={styles.city}>Mumbai</Text>
          </View>
          <View style={styles.cityView}>
            <Image
              style={styles.cityImage}
              source={require('./images/cities/mumbai.png')}
            />
            <Text style={styles.city}>Mumbai</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainCity: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    // justifyContent:'center'
  },
  cityView: {
    margin: 2,
    width: 90,
    height: 90,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
  cityImage: {
    width: 50,
    height: 50,
  },
});
export default SelectCity;
