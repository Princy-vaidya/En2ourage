import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  Pressable
  // Button
} from 'react-native';
import AppColors from '../../utils/AppColors';
import AppStyles from '../../utils/AppStyles';
import Button from '../../components/atoms/button/Button';
import SettingMenu from '../../components/atoms/button/SettingMenu';
import AppImages from '../../utils/AppImages';
import SettingHeader from "../../components/atoms/header/SettingHeader";
import AppFonts from '../../utils/AppFonts';

const {width, height} = Dimensions.get('window');

// const SettingScreen = props => {
//   /****************************************************************************/

//   /****************************************************************************/

//   /****************************************************************************/

//   /****************************************************************************/

//   return (
//     <SafeAreaView style={AppStyles.container}>
//       <StatusBar
//         barStyle="light-content"
//         backgroundColor={AppColors.Theme_Background}
//       />
//       <ImageBackground source={AppImages.setting} style={{width:width,height:140,marginTop:5}}
//       resizeMode="contain">
//              <SettingHeader title="Settings" onPress={()=>props.navigation.goBack()}/>
//         </ImageBackground>
//       <View style={{width: '90%', alignSelf: 'center'}}>
//         <SettingMenu title="Accounts" onPress={()=>props.navigation.navigate('Account')}/>
//         <SettingMenu title="Help and Support" onPress={()=>props.navigation.navigate('HelpSupport')}/>
//         <SettingMenu title="Privacy and Security" onPress={()=>props.navigation.navigate('PrivacySecurity')} />
//         {/* <SettingMenu title="Subscription" onPress={()=>props.navigation.navigate('Subscription')}/> */}
//         <SettingMenu title="About" onPress={()=>props.navigation.navigate('About')}/>

//       </View>
//     </SafeAreaView>
//   );
// };

// /****************************************************************************/

// export default SettingScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#323232',
//   },
//   menu: {
//     margin: '10%',
//     marginTop: '20%',
//     borderBottomWidth: 2,
//     borderColor: AppColors.Theme_Buttons,
//     paddingBottom: 10,
//   },
// });

// import * as React from 'react'
// import { View, Text, SafeAreaView, FlatList, StyleSheet, Image, ScrollView, TouchableOpacity, ImageBackground, StatusBar } from 'react-native'
// import { NavigationContainer } from '@react-navigation/native'
// import { createStackNavigator } from '@react-navigation/stack'
// import colors from '../../assets/colors/color'
// import { Colors } from 'react-native/Libraries/NewAppScreen'
// import { calcH, calcW } from '../../utils/common'

const DATA = [
  {
    id: '1',
    title: 'Accounts',
    url: 'Account'
  },
  {
    id: '2',
    title: 'Privacy and Security',
    url: 'PrivacySecurity'
  },
  {
    id: '3',
    title: 'Help and Support',
    url: 'HelpSupport'
  },
  {
    id: '4',
    title: 'About',
    url: 'About'
  }
]

export default SettingScreen = ({ route, navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor:AppColors.Theme_Background }}>

      <View style={styles.container}>

        <View style={{ height:140,marginTop:15}}>
          <ImageBackground source={AppImages.setting} resizeMode="cover" style={styles.image} >
                <Text style={styles.text}>Settings</Text>
                <Pressable onPress={()=>navigation.goBack()}
                style={{position:'absolute',margin:15}}>
                <Image source={AppImages.back} style={{height:28,width:28}}/>
                </Pressable>
          </ImageBackground>
        </View>

      

        <View style={{ flex: 4 }}>
              <FlatList
                data={DATA}
                renderItem={({ item }) =>
                <SettingMenu 
                onPress={()=>navigation.navigate(item.url)}
                item={item}/>
              }
                keyExtractor={item => item.id}
              />

        </View>

    </View>
  </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    // marginTop: 10,
    borderTopEndRadius: 30,
    borderTopStartRadius: 30
    // borderWidth: 5,
    // borderColor: 'red'
  },
  image: {
    flex: 1,
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
    overflow: 'hidden'
   
  },
  
  text: {
    color: 'white',
    fontSize: 26,
    lineHeight: 60,
    fontFamily:AppFonts.BoldFont,
    fontWeight: '700',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)'
  },
  

})
