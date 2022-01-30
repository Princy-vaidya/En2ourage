

import React,{Component} from 'react';
import Routes from './src/routeNavigation/Routes';
import {LogBox,Alert,StatusBar,SafeAreaView,TouchableWithoutFeedback} from 'react-native';

const App = () => {
  
  
  return (
	// <TouchableWithoutFeedback 
  // onPress={()=>changeNavigationBarColor('red')}>
       <Routes/> 
  //  </TouchableWithoutFeedback>
  );
};

LogBox.ignoreAllLogs();

export default App;