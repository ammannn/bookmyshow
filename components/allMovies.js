import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  FlatList,
  TextInput,
} from 'react-native';
import ImageScroll from './imageScroll';
import TabMain from './TabMain';
import axios from 'axios';

export default class AllMovie extends React.Component {
  state = {
    data: [],
    filter: [],
  };

  componentDidMount() {
    axios
      .get('https://bookmyshow-clone.herokuapp.com/show')
      .then(response => {
        console.log('recommanded----->', response.data.data);
        this.setState({
          data: response.data.data,
          filter: response.data.data,
        });
      })
      .catch(error => console.log('error hai recomanded me'));
  }

  render() {
    return (
      <View style={{flex: 0.91}}>
        <View style={styles.container}>
          <View
            style={{
              width: '95%',
              height: 50,

              marginTop: 10,
              marginBottom: 15,
            }}>
            <TextInput
              placeholder="search"
              onChangeText={search =>
                this.setState({search: search}, () => {
                  const x = this.state.data.filter(data => {
                    return data.name
                      .toLowerCase()
                      .includes(search.toLowerCase());
                  });
                  this.setState({
                    filter: x,
                  });
                })
              }
              style={styles.inputBox}
            />
          </View>
          <View>
            <FlatList
              data={this.state.filter}
              numColumns={2}
              keyExtractor={item => item.imgLink}
              renderItem={({item}) => {
                return (
                  <ImageScroll ele={item} navigation={this.props.navigation} />
                );
              }}
            />
          </View>
        </View>

        <View style={{flex: 0.09}}>
          <TabMain navigation={this.props.navigation} />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'rgb(242, 242, 242)',
    flexDirection: 'column',
    // justifyContent:'center',
    alignItems: 'center',
  },
});
