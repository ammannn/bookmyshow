import React from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

export default class Detail extends React.Component {
  render() {
    const {data} = this.props.route.params;
    const youtube = data.trailerLink.split('/');
    const youtubeLink = youtube[youtube.length - 1];
    console.log('youtube array--->', youtubeLink);

    // console.log(data)
    return (
      <View
        style={{
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: '95%',
            marginTop: 20,
            overflow: 'hidden',
            borderRadius: 7,
          }}>
          <YoutubePlayer
            height={209}
            loop
            mute={true}
            play={false}
            videoId={youtubeLink}
          />
          <View
            style={{
              width: '100%',
              height: 20,
              backgroundColor: 'black',
              flexDirection:'row',
              justifyContent:'center'
            }}>
            <Text
              style={{
                color: 'white',
              }}>
              In cinemas
            </Text>
          </View>
        </View>

        <Text>
          Movie name ---{'-->   '}
          {data.name}
        </Text>
        <Text>
          Description -----{'>  '}
          {data.description}
        </Text>
        <Text>
          Price -----{'>  '}
          {data.price}
        </Text>
        <Text>
          Trailer Link -----{'>  '}
          {data.trailerLink}
        </Text>
        <Text>
          Type -----{'>  '}
          {data.type}
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({});
