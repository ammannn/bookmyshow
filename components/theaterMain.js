import React, {Component} from 'react';
import {View, Text} from 'react-native';

import NumberSeats from './numberSeats';

export class TheaterMain extends Component {
  constructor(props) {
    super(props);

    this.state = {
      seats: true,
    };
  }
  numberDisable = () => {

     this.setState({
         seats:false
     })
  };

  render() {
    return (
      <View>
        {this.state.seats ? (
          <NumberSeats numberD ={this.numberDisable} />
        ) : (
          <View>
            {/* left section */}
            <View></View>

            {/* middle section */}
            <View></View>

            {/* preimium section */}
          </View>
        )}
      </View>
    );
  }
}

export default TheaterMain;
