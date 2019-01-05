import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Button, View, Text } from 'react-native';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details1234"
          onPress={() => this.props.navigation.navigate('Details')}
        />
        <Button 
          title="Restaurant Menus"
          onPress={() => this.props.navigation.navigate('ApiCall')}
        />
      </View>
    );
  }
}