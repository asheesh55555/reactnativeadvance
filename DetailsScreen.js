import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import {View, Text, FlatList, TouchableOpacity } from 'react-native';
import CheckBox from 'react-native-check-box'

class MyListItem extends React.PureComponent {
  _onPress = () => {
    this.props.onPressItem(this.props.id);
  };

  render() {
    const textColor = this.props.selected ? 'red' : 'black';
    return (
      <TouchableOpacity onPress={this._onPress}>
        <View>
          <Text style={{color: textColor}}>{this.props.title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default class MultiSelectList extends React.PureComponent {
  state = {selected: (new Map(): Map<string, boolean>)};

  _keyExtractor = (item, index) => item.id;

  _onPressItem = (id: string) => {
    // updater functions are preferred for transactional updates
    this.setState((state) => {
      // copy the map rather than modifying state.
      const selected = new Map(state.selected);
      selected.set(id, !selected.get(id)); // toggle
      return {selected};
    });
  };

  _renderItem = ({item}) => (
    <MyListItem
      id={item.id}
      onPressItem={this._onPressItem}
      selected={!!this.state.selected.get(item.id)}
      title={item.title}
    />
  );

  render() {
    return (
      <FlatList
        data={
        	[
            {id: 1,title: 'Devin'},
            {id: 2,title: 'Jackson'},
            {id: 3,title: 'James'},
            {id: 4,title: 'Joel'},
            {id: 5,title: 'John'},
            {id: 6,title: 'Jillian'},
            {id: 7,title: 'Jimmy'},
            {id: 8,title: 'Julie'},
          ]
        }
        extraData={this.state}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    );
  }
}