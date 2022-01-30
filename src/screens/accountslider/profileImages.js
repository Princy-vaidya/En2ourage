

// import React,{Component} from 'react';
// import Routes from './src/routeNavigation/Routes';
// import {LogBox,Alert,StatusBar,SafeAreaView,TouchableWithoutFeedback} from 'react-native';

// const App = () => {
  
  
//   return (
// 	// <TouchableWithoutFeedback 
//   // onPress={()=>changeNavigationBarColor('red')}>
//        <Routes/> 
//   //  </TouchableWithoutFeedback>
//   );
// };

// LogBox.ignoreAllLogs();

// export default App;
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View ,SafeAreaView } from 'react-native'
import MovieHome from './index'


export default class ProfileImages extends Component {
  render() {
    return (
      <SafeAreaView style={{flex:1}}>
        <MovieHome movies={this.props.movies}/>
      </SafeAreaView>
    );
  }
}