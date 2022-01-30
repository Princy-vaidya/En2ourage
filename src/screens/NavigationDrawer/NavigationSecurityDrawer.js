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
  Pressable
  // Button
} from 'react-native';
import AppColors from '../../utils/AppColors';
import AppStyles from '../../utils/AppStyles';
import Button from '../../components/atoms/button/Button';
import DrawerMenu from "../../components/atoms/button/DrawerMenu";
import TinyButtons from '../../components/atoms/button/TinyButton';
import AppImages from '../../utils/AppImages';

const {width, height} = Dimensions.get('window');

const NavigationSecurityDrawer = (props) => {
  
  /****************************************************************************/

  /****************************************************************************/

  /****************************************************************************/

  /****************************************************************************/

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={AppColors.Theme_Background}
      />
 <Pressable style={{margin:'13%',}}
  onPress={()=>props.navigation.toggleDrawer()}>
        <Image source={AppImages.drawerCloser} />
      </Pressable>
      
      <View style={styles.menu} >
     
        <Text style={AppStyles.boldWhiteText}>MENU</Text>
        {/* <Image source={AppImages.clientPic} style={{width:80,height:80}}/>
        <Text style={[AppStyles.authHeadingText,{marginLeft:20}]}>Emily</Text> */}
      </View>

      {/* <View style={{flexDirection:'row'}}>
       <Image source={AppImages.clientPic}/>
      </View> */}
    <DrawerMenu title="Notification" onPress={()=>props.navigation.navigate('Notification')}/>
    <DrawerMenu title="Active Jobs" onPress={()=>props.navigation.navigate('Activejobs')}/>
    <DrawerMenu title="Bookings" onPress={()=>props.navigation.navigate('Booking')}/>
    <DrawerMenu title="Settings" onPress={()=>props.navigation.navigate('Setting')}/>

     <View style={{marginTop:'10%',marginLeft:25}}>
    <TinyButtons title="Log Out" onPress={()=>props.navigation.navigate('Login')} 
    buttonColor={AppColors.Theme_Red}/>
     </View>
    </SafeAreaView>
  );
};

/****************************************************************************/

export default NavigationSecurityDrawer ;

const styles = StyleSheet.create({
  container:{
  flex:1,
  backgroundColor:'#323232'
  },
 menu:{
  margin:'13%',
  marginBottom:'15%',
  marginTop:'20%',
  flexDirection:'row',
  borderBottomWidth:3,
  width:width*0.17,
  borderColor:AppColors.Theme_Buttons,

  // paddingBottom:10,
  justifyContent:'space-between',
  alignItems:'center'
 }
});
