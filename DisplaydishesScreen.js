/*import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import {View, Text, ScrollView, Image } from 'react-native';
import { ListItem } from 'react-native-elements';


export default class DisplaydishesScreen extends React.Component {
  render() {
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
}*/



// import React, { Component } from 'react';
// import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
// import { createStackNavigator, createAppContainer, Button } from 'react-navigation';
// import GridView from 'react-native-super-grid';
// import Dialog, { DialogContent } from 'react-native-popup-dialog';





import React, { Component } from "react";
import { Text, TouchableOpacity, View, Button, StyleSheet, Image, FlatList } from "react-native";
import Modal from "react-native-modal";
import Dialog, { DialogContent } from 'react-native-popup-dialog';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import GridView from 'react-native-super-grid';



export default class DisplaydishesScreen extends Component {
  
  constructor(props) {
    super(props);
    this.state = { visible: false };
  }
  _getAddons(dishId){
    this.setState({ visible: true });

    return fetch('http://test.curryheights.com/api/v1/dishes/'+dishId+'/addons')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          dataSource: responseJson.menu_addon_groups,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });

   }

  //  componentDidMount(){
  //   return fetch('https://facebook.github.io/react-native/movies.json')
  //     .then((response) => response.json())
  //     .then((responseJson) => {

  //       this.setState({
  //         dataSource: responseJson.movies,
  //       }, function(){

  //       });

  //     })
  //     .catch((error) =>{
  //       console.error(error);
  //     });
  // }


  state = {};
  render() {
    // Taken from https://flatuicolors.com/
    // const items = [
    //   { name: 'TURQUOISE', code: '#1abc9c' }, { name: 'EMERALD', code: '#2ecc71' },
    //   { name: 'PETER RIVER', code: '#3498db' }, { name: 'AMETHYST', code: '#9b59b6' },
    //   { name: 'WET ASPHALT', code: '#34495e' }, { name: 'GREEN SEA', code: '#16a085' },
    //   { name: 'NEPHRITIS', code: '#27ae60' }, { name: 'BELIZE HOLE', code: '#2980b9' },
    //   { name: 'WISTERIA', code: '#8e44ad' }, { name: 'MIDNIGHT BLUE', code: '#2c3e50' },
    //   { name: 'SUN FLOWER', code: '#f1c40f' }, { name: 'CARROT', code: '#e67e22' },
    //   { name: 'ALIZARIN', code: '#e74c3c' }, { name: 'CLOUDS', code: '#ecf0f1' },
    //   { name: 'CONCRETE', code: '#95a5a6' }, { name: 'ORANGE', code: '#f39c12' },
    //   { name: 'PUMPKIN', code: '#d35400' }, { name: 'POMEGRANATE', code: '#c0392b' },
    //   { name: 'SILVER', code: '#bdc3c7' }, { name: 'ASBESTOS', code: '#7f8c8d' },
    // ];

    return (
      // <View>
      //   <Text onPress={() => this.props.navigation.navigate('Addons')} > hiiiii</Text>
      // </View>
      <GridView
        itemDimension={130}
        items={this.props.navigation.state.params.dishes}
        style={styles.gridView}
        renderItem={item => (
           <TouchableOpacity  onPress={() => {this._getAddons(item.id)}}>
              <View style={[styles.itemContainer, { backgroundColor: '#3498db' }]} >
                <Image  style={{width: 50, height: 50}}
    		          source={{uri: item.image}}
    		        />
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemCode}>{item.desc}</Text>
                <Dialog
                visible={this.state.visible}
                onTouchOutside={() => {
                  this.setState({ visible: false });
                }}
              >
                <DialogContent>
                     <FlatList
                      data={this.state.dataSource}
                      renderItem={({item}) => <Text>{item.name}, min item - {item.min_item}, max item - {item.max_item}</Text>}
                      keyExtractor={(item, index) => index.toString()}
                    />
                      <View style={styles.alternativeLayoutButtonContainer}>
                        <Button
                          onPress={() => {
                            this.setState({ visible: false });
                          }}
                          title="Cancel"
                        />
                        <Button
                          onPress={() => {
                            this.setState({ visible: false });
                          }}
                          title="OK!"
                          color="#841584"
                        />
                      </View>
                </DialogContent>
              </Dialog>

              </View>

             <View>

             
               
             </View>
          </TouchableOpacity>
        )}
      />
    );
  }
}

const styles = StyleSheet.create({
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  gridView: {
    paddingTop: 25,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
});