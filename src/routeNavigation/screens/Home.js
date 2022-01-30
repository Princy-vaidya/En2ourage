import React, {Component} from 'react';
import {Text, StyleSheet, View,Pressable} from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.Container}>
        <Pressable
         onPress={this.props.navigation.openDrawer}>
           <Text>Menu</Text>
         </Pressable>
        <Text style={styles.txt}> Home Screen </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#03dffc',
  },
  txt: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Helvetica',
  },
});
