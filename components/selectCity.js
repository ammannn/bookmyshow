import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {color} from 'react-native-reanimated';

export class SelectCity extends Component {
  render() {
    return (
      <View style={styles.SelectCity}>
        <View style={styles.popularCitiesTextView}>
          <Text style={styles.popularCitiesText}>POPULAR CITIES</Text>
        </View>

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
  SelectCity: {
      backgroundColor:'rgb(242 ,242 ,242)',
      width:'100%',
      height:'100%'
  },

  mainCity: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    marginLeft:8,
    backgroundColor:'rgb(242 ,242 ,242)',


    // justifyContent:'center'
  },
  cityView: {
    margin: 2,
    width: 90,
    height: 90,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',

  },
  cityImage: {
    width: 50,
    height: 50,
  },
  popularCitiesTextView: {
    marginTop: 20,
    height: 50,
    marginLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },

  popularCitiesText: {},
});
export default SelectCity;
