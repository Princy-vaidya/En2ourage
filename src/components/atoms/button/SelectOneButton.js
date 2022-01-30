import React from 'react';
import {
    View, Text, Pressable,StyleSheet,Image
} from 'react-native';
import AppFonts from "../../../utils/AppFonts";
import AppColors from '../../../utils/AppColors';
import AppImages from "../../../utils/AppImages"

const SelectOneButton = ({ title, focused, onPress }) => {

    return (
      
        <Pressable onPress={onPress}>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>{title}</Text>
        </View>
        <Pressable style={{position:'absolute',right:0,margin:10,marginTop:12,}}
        onPress={onPress}>
        <Image source={AppImages.dropdown} style={{alignSelf:'center'}}/>
        </Pressable>
      </Pressable>
    );
};

const styles = StyleSheet.create({

  buttonContainer:{
    backgroundColor:AppColors.Theme_Buttons,
    height:48,
    borderRadius:8,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
  },
  buttonText:{
    textAlign:'center',
    fontSize:15,
    fontFamily:AppFonts.BoldFont,
    color:AppColors.Theme_white,
   
  }
  });
export default SelectOneButton;