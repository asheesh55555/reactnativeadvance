import React from 'react';
import { FlatList, ActivityIndicator, Text, View, ScrollView  } from 'react-native';
import { ListItem } from 'react-native-elements';
import { createStackNavigator, createAppContainer } from 'react-navigation';


const list = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  }
]

export default class FetchExample extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    return fetch('http://test.curryheights.com/api/v1/menus')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.menu_categories,
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
            leftAvatar={{ source: { uri: l.image } }}
            title={l.name}
            subtitle={l.short_name}
            onPress={() => this.props.navigation.navigate('DisplayMenu', {menus_id: l.id})}
          />
        ))
      }
    </ScrollView>
    );


    /*return(
     <View style={{flex: 1, paddingTop:100}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <Text>{item.id}, {item.name}</Text>}
          keyExtractor={({id}, index) => id}
        />
      </View>

    );*/

  }
}
