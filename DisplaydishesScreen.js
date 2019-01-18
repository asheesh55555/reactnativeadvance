import React, { Component } from "react";
import { Text, TouchableOpacity, View, Button, StyleSheet, Image, FlatList, ScrollView, Modal,TouchableHighlight,Alert,  } from "react-native";
import Dialog, { DialogContent } from 'react-native-popup-dialog';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import GridView from 'react-native-super-grid';
import CheckBox from 'react-native-check-box'
import { ListItem } from 'react-native-elements';



export default class DisplaydishesScreen extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state={
        modalVisible: false,
        selectedLists: [],
    }
  }
   
  isIconCheckedOrNot = (addonParent, item, index) => {
    let selectedLists11 = this.state.selectedLists;
    let index1 = selectedLists11.indexOf(addonParent.id+':'+item.id)
    if(selectedLists11.includes(addonParent.id+':'+item.id)){
      selectedLists11.splice(index1, 1);
      this.setState({selectedLists: selectedLists11})
    }else {

      var count_addons = 0; 
      selectedLists11.forEach(function(list) {
          if (parseInt(list.split(":")[0]) == addonParent.id) {
            count_addons = count_addons + 1
          } 
      });

      if (count_addons < addonParent.max_item) {
        selectedLists11.push(addonParent.id+':'+item.id)
        this.setState({selectedLists: selectedLists11})
      } else {
        Alert.alert("You can select only "+ addonParent.max_item + " addons from this group")
      }


      
    }
    console.log(this.state.selectedLists, 'selected lists')
  }

  finishAddonSelection = (addonsParents) => {
    // this.setModalVisible(!this.state.modalVisible)
    let selectedLists22 = this.state.selectedLists;
    var displayAlert = false; 
    for (var i = 0; i < addonsParents.length; i++) { 
      
      // if (addonsParents[i].min_item < ) {} else {}
      console.log('min_item:'+addonsParents[i].min_item, 'max_item:'+addonsParents[i].max_item)

        if (addonsParents[i].min_item != null && addonsParents[i].max_item != null) {
            var count_addons = 0; 
            selectedLists22.forEach(function(list) {
                if (parseInt(list.split(":")[0]) == addonsParents[i].id) {
                  count_addons = count_addons + 1
                } 
            });
            if (count_addons < addonsParents[i].min_item ||  count_addons > addonsParents[i].max_item) {
              displayAlert = true;
            } else {
              // this.setModalVisible(!this.state.modalVisible)
              // console.log('adoons added successfully')
            }
        } else if (addonsParents[i].min_item == null && addonsParents[i].max_item != null) {

        } else if (addonsParents[i].min_item != null && addonsParents[i].max_item == null) {

        } else if (addonsParents[i].min_item == null && addonsParents[i].max_item == null) {

        } 
    }

    if (displayAlert) {
      Alert.alert("Please select addons")
    } else {
      this.setModalVisible(!this.state.modalVisible)
    }
    // console.log(addonsParents.map(x => x.id), 'aaaaaaaaaaaaaaa')
  }



  _renderListItem = (parentData, {item,index}) => {
    return(            
      <View >
          <CheckBox
              isChecked={this.state.selectedLists.includes(parentData.id+':'+item.id)}
              onClick={() => this.isIconCheckedOrNot(parentData, item,index)}
          />
          <Text> 
           {item.name}
          </Text>
      </View>
    )
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
 
  
  _getAddons(dishId){
    this.setModalVisible(true)

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

  

  render() {
    return (
      <ScrollView>
        {
          this.props.navigation.state.params.dishes.map((dish, i) => (
            <ListItem
              key={i}
              title={dish.name}
              subtitle={dish.desc}
              onPress={() =>{ this._getAddons(dish.id)} }
            />
          ))
        }
        <ScrollView>
          <Modal
            style={{ margin: 10 }}
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
            }}>
            <View style={styles.modalContainer}>
              <ScrollView>
                <Text>Hello asheesh  World!</Text>


                


                <FlatList
                  data={this.state.dataSource}
                  extraData={this.state}
                  renderItem={({item}) => 

                    <View>
                      <Text style={styles.bigblue} >{item.name}</Text>  
                      <FlatList
                          data={item.items}
                          renderItem={this._renderListItem.bind(this, item)}
                          keyExtractor={(item,index) => item+index}
                          showsVerticalScrollIndicator={false}
                          alwaysBounceVertical
                          extraData={this.state}
                      />

                      
                    </View>
                    
                  }
                  keyExtractor={(item, index) => index.toString()}
                />

                <Button
                  onPress={() => { this.finishAddonSelection(this.state.dataSource)}}
                  title="OK"
                  color="#841584"
                  accessibilityLabel="Learn more about this purple button"
                />


                <Button
                  onPress={() => { this.setModalVisible(!this.state.modalVisible)}}
                  title="cancel"
                  color="red"
                  accessibilityLabel="Learn more about this purple button"
                />

              </ScrollView>
            </View>
          </Modal>
        </ScrollView>
        
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
   modalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#DCDCDC",
    borderRadius: 4,
    borderColor: "#C0C0C0",
  },
   addonmargin: {
    margin: 10
   },
   bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 15,
  },
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