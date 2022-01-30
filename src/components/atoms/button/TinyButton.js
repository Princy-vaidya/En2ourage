import React from 'react';
import {
    View, Text, Pressable,StyleSheet,Dimensions
} from 'react-native';
import AppFonts from "../../../utils/AppFonts";
import AppColors from '../../../utils/AppColors';
const {width, height} = Dimensions.get('window');


const TinyButtons = ({ title, focused, onPress,buttonColor }) => {

    return (
      <Pressable onPress={onPress}>
        <View style={[styles.buttonContainer,{backgroundColor:buttonColor}]}>
          <Text style={styles.buttonText}>{title}</Text>
        </View>
      </Pressable>
    );
};

const styles = StyleSheet.create({

  buttonContainer:{
    height:40,
    borderRadius:8,
    width:width*0.25,
    justifyContent:'center'
  },
  buttonText:{
    textAlign:'center',
    fontSize:16,
    fontFamily:AppFonts.BoldFont,
    color:AppColors.Theme_white
  }
  });
export default TinyButtons;