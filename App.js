import React, { Component } from 'react';
import {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

export default class App extends Component {
  render(){
    return (
      <View>
        <Image source={'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'} style={{width:193,height:110}}/>
      </View>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => App);
