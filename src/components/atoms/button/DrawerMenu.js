import React from 'react';
import {
    View, Text, Pressable,StyleSheet,Image
} from 'react-native';
import AppFonts from "../../../utils/AppFonts";
import AppColors from '../../../utils/AppColors';
import AppImages from "../../../utils/AppImages"

const DrawerMenu = ({ title, focused, onPress }) => {

    return (
      
        <Pressable 
        onPress={onPress}>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>{title}</Text>
          <Image source={AppImages.navigateDrawer} style={{alignSelf:'center',marginRight:'3%'}}/>
        </View>
      </Pressable>
    );
};

const styles = StyleSheet.create({

  buttonContainer:{
    // backgroundColor:AppColors.Theme_Buttons,
    height:55,
    flexDirection:'row',
    justifyContent:'space-between',
    width:'75%',
    alignSelf:'center',
    alignItems:'center'
  },
  buttonText:{
    textAlign:'center',
    fontSize:20,
    // paddingTop:10,
    fontFamily:AppFonts.BoldFont,
    color:AppColors.Theme_white,
    //  marginLeft:'30%'
  }
  });
export default DrawerMenu;