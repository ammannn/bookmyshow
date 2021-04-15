import React, {Component} from 'react';
import {View, Text, StyleSheet, BackHandler} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Homecarousel from './homeCarousel';
import SelectCity from './selectCity';

import Video from 'react-native-video';
import MainRecomainded from './mainRecomainded'
import HomeStack from './homeStack'

export class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cityLoad: false,
      city: 'Bengaluru',
    };
  }

  componentDidMount(){
    BackHandler.addEventListener('hardwareBackPress', function () {
    
      return true;
    });
  }

  selectCityFunction = cityname => {
    this.setState(
      {
        cityLoad: false,
        city: cityname,
      },
      () => console.log(this.state.city),
    );
  };

  render() {
    return (
      <View>
        {this.state.cityLoad ? (
          <SelectCity selectCity={name => this.selectCityFunction(name)} />
        ) : (
          <View>
            {}
            <View style={styles.header}>
              <View>
                <Text style={styles.textNav1}>It All Starts Here</Text>
                <Text
                  onPress={() =>
                    this.setState({
                      cityLoad: true,
                    })
                  }
                  style={styles.textNav}>
                  {this.state.city} {'>'}
                </Text>
              </View>
              <View style={styles.icons}>
                <Icon
                  style={styles.navIcon}
                  name="search"
                  size={25}
                  color="white"
                />
                <Icon
                  onPress={() => this.props.navigation.navigate('Notification')}
                  style={styles.navIcon}
                  name="bell"
                  size={25}
                  color="white"
                />
                <Icon
                  onPress={() =>
                    this.props.navigation.navigate('under construction')
                  }
                  style={styles.navIcon}
                  name="qrcode"
                  size={25}
                  color="white"
                />
              </View>
            </View>
         
            <Homecarousel />

            <View style ={styles.recomanded}>
            <MainRecomainded  />
            <HomeStack navigation={this.props.navigation}/> 
            </View>
          
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'rgb(34 ,37 ,57)',
    width: '100%',
    height: 70,
    flexDirection: 'row',
  },
  textNav1: {
    marginTop: 5,
    marginLeft: 10,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
  },
  textNav: {
    marginTop: 4,
    marginLeft: 10,
    color: 'white',
  },
  icons: {
    flexDirection: 'row',
    width: '50%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  navIcon: {
    width: 30,
    height: 30,
    marginLeft: 20,
  },
  recomanded:{
   marginTop:210
    
   
  }
});

export default Header;
