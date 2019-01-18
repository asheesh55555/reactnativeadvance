import React, { Component } from "react";
import { Text, TouchableOpacity, View, Button, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import Dialog, { DialogContent } from 'react-native-popup-dialog';

export default class ModalTester extends Component {

	 state = {};


  render() {
    return (
      <View >
			  <Button
			    title="Show Dialog"
			    onPress={() => {
			      this.setState({ visible: true });
			    }}
			  />
			  <Dialog
			    visible={this.state.visible}
			    onTouchOutside={() => {
			      this.setState({ visible: false });
			    }}
			  >
			    <DialogContent>
					     <Text>hellohello hello hello hello hello</Text>
					     <Text>hellohello hello hello hello hello</Text>
					     <Text>hellohello hello hello hello hello</Text>
					     <Text>hellohello hello hello hello hello</Text>
					     <Text>hellohello hello hello hello hello</Text>
					     <Text>hellohello hello hello hello hello</Text>
					     <Text>hellohello hello hello hello hello</Text>
				        <View style={styles.alternativeLayoutButtonContainer}>
				          <Button
				            onPress={() => {
								      this.setState({ visible: false });
								    }}
				            title="This looks great!"
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
    );
  }
}


const styles = StyleSheet.create({
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});