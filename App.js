import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json
import { AppContainer } from './navigation/AppNavigator';


export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
