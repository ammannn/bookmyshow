import React from 'react';
import {RNCamera} from 'react-native-camera';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from 'react-native';
import ImageScroll from './imageScroll';


export default class HomeStack extends React.Component {
  state = {
    data: [
      {
        url:
          'https://imgd.aeplcdn.com/1280x720/n/cw/ec/38904/mt-15-right-side-view.jpeg?q=80',
        h: '1st sample DAta ',
        p:
          'THIS IS LONG SHOW RTFBK HVGTF VGYU  byudsh iu hgewiu ugi daui sample story bn klan jkf bi',
      },
      {
        url:
          'https://imgd.aeplcdn.com/1280x720/n/cw/ec/38904/mt-15-right-side-view.jpeg?q=80',
        h: '2nd sample DAta ',
        p: 'THIS IS LONG SHOW RTFBK HVGTF VGYU ',
      },
      {
        url:
          'https://imgd.aeplcdn.com/1280x720/n/cw/ec/38904/mt-15-right-side-view.jpeg?q=80',
        h: '3rd sample DAta ',
        p: 'THIS IS LONG SHOW RTFBK HVGTF VGYU ',
      },
      {
        url:
          'https://imgd.aeplcdn.com/1280x720/n/cw/ec/38904/mt-15-right-side-view.jpeg?q=80',
        h: '4th sample DAta ',
        p: 'THIS IS LONG SHOW RTFBK HVGTF VGYU ',
      },
    ],
  };

  componentDidMount(){

  }

  render() {
    return (
      <View>
        <View style={styles.container}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 20,
              width: '95%',
              marginLeft: 10,
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                letterSpacing: 0.5,
              }}>
              Recommended Movies
            </Text>
            <Text style={{
                color:'red'
            }}>See All {'>'}</Text>
          </View>
          <ScrollView
            horizontal
            style={{
              marginTop: 10,
              marginBottom: 10,
            }}
            showsHorizontalScrollIndicator={false}>
            {this.state.data.map((ele, i) => {
              return (
                <ImageScroll
                  ele={ele}
                  key={i}
                  navigation={this.props.navigation}
                />
              );
            })}
          </ScrollView>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(242, 242, 242)',
  },
});
