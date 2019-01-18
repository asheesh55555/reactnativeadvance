import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import {View, Text,FlatList, ActivityIndicator,ScrollView } from 'react-native';
import { ListItem } from 'react-native-elements';
export default class DisplayMenuScreen extends React.Component {
  /*render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>menues show screen {this.props.navigation.state.params.menus_id}</Text>
      </View>
    );
  }*/

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }
  componentDidMount(){
    return fetch('http://test.curryheights.com/api/v1/menus/'+this.props.navigation.state.params.menus_id)
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.menu_category.sub_categories,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }

  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <ScrollView>
      {
        this.state.dataSource.map((l, i) => (
          <ListItem
            key={i}
            title={l.name}
            subtitle={l.name}
            onPress={() => this.props.navigation.navigate('Displaydishes', {dishes: l.dishes})}
          />
        ))
      }
    </ScrollView>
    );
  }
}