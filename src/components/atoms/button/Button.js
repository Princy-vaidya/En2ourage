import React from 'react';
import {
    View, Text, Pressable,StyleSheet
} from 'react-native';
import AppFonts from "../../../utils/AppFonts";
import AppColors from '../../../utils/AppColors';

const Button = ({ title, focused, onPress }) => {

    return (
      
        <Pressable onPress={onPress}>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>{title}</Text>
        </View>
      </Pressable>
    );
};

const styles = StyleSheet.create({

  buttonContainer:{
    backgroundColor:AppColors.Theme_Buttons,
    height:48,
    borderRadius:8,
    alignItems:'center',
    justifyContent:'center'
  },
  buttonText:{
    textAlign:'center',
    fontSize:18,
    fontFamily:AppFonts.BoldFont,
    color:AppColors.Theme_white
  }
  });
export default Button;