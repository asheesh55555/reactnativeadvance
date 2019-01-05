import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import {View, Text, ScrollView, Image } from 'react-native';
import { ListItem } from 'react-native-elements';


export default class DisplaydishesScreen extends React.Component {
  render() {
   /* return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>dishes Screen {this.props.navigation.state.params.dishes[0].name}</Text>
      </View>
    );*/

    return(
      <ScrollView>
      {
        this.props.navigation.state.params.dishes.map((l, i) => (
        	<ScrollView>
          <ListItem
            key={i}
            title={l.name}
            subtitle={l.desc}
          />
          <Image
          style={{width: 50, height: 50}}
          source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
        />
        </ScrollView>
        ))
      }
    </ScrollView>
    );
  }
}