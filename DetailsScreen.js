import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import {View, Text } from 'react-native';
import CheckBox from 'react-native-check-box'

export default class DetailsScreen extends React.Component {

	constructor(props) {
    super(props);
    this.state = { isChecked: false,
                   isChecked1: false,
                   isChecked2: false,  
                                   };
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <CheckBox
				    style={{flex: 1, padding: 10}}
				    onClick={()=>{
				      this.setState({
				          isChecked:!this.state.isChecked
				      })
				    }}
				    isChecked={this.state.isChecked}
				    leftText={"CheckBox"}
				/>

				<CheckBox
				    style={{flex: 1, padding: 10}}
				    onClick={()=>{
				      this.setState({
				          isChecked1:!this.state.isChecked1
				      })
				    }}
				    isChecked={this.state.isChecked1}
				    leftText={"CheckBox"}
				/>
				<CheckBox
				    style={{flex: 1, padding: 10}}
				    onClick={()=>{
				      this.setState({
				          isChecked2:!this.state.isChecked2
				      })
				    }}
				    isChecked={this.state.isChecked2}
				    leftText={"CheckBox"}
				/>
      </View>
    );
  }
}