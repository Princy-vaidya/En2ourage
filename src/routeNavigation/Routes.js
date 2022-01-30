import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  Text,
  Image,
  TouchableOpacity,
  View,
  Linking,
  Platform,
} from 'react-native';
 import AuthStackScreen from './stackContainer/AuthStack'
import {createStackNavigator} from '@react-navigation/stack';
import {
    NavigationContainer,
  } from '@react-navigation/native';
import DrawerUserStack from './stackContainer/DrawerUserStack';
import AuthStackUserScreen from "./stackContainer/AuthStackUser";
// import AnimateStackOnDrawerToggle from "./stackContainer/AnimatedDrawer"
import Drawer from "./navigation/Drawer"



export default function Routes(props) {
  
  
  const RootStack = createStackNavigator();

//   const {auth, state} = useAuth();

  useEffect(() => {
    // setTimeout(() => {
    //   setIsLoading(!isLoading);
    // }, 2000);
  }, []);

  function returnScreens() {
    // if (state.loading) {
    //   return <RootStack.Screen name={'Splash'} component={Splash} />;
    // }
    // return state.user === undefined ? (
    //   <RootStack.Screen name={'AuthStackScreen'} component={AuthStackScreen} />
    // ) : state.user.token && state.user.userType === 'user' ? (
    //   <RootStack.Screen name={'DrawerScreen'}>
    //     {() => <DrawerScreen />}
    //   </RootStack.Screen>
    // ) : (
    //   <RootStack.Screen name={'DrawerTrainerScreen'}>
    //     {() => <DrawerTrainerScreen />}
    //   </RootStack.Screen>
    // );

    return( <RootStack.Screen name={'AuthStackUserScreen'}>
        {() => <AuthStackUserScreen/>}
        </RootStack.Screen>)
  }

  

  return (
      <NavigationContainer
     >
        <RootStack.Navigator
          screenOptions={{
            headerShown: false,
            animationEnabled: false,
          }}>
          {returnScreens()}
        </RootStack.Navigator>
       
      </NavigationContainer>
  );
}
