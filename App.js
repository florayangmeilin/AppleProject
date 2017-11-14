/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  render() {
      let pic= {url:'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg' }
    return (
      <View style={styles.container}>
        <Greeting name='World'/>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
            <Image source={pic} style={{width:193,height:110}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3179b5',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color:'white',
  },
  instructions: {
    textAlign: 'center',
    color: 'white',
    marginBottom: 5,
  },
});
// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => App);
