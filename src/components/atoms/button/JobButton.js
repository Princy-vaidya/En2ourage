import React from 'react';
import {
    View, Text, Pressable,StyleSheet
} from 'react-native';
import AppFonts from "../../../utils/AppFonts";
import AppColors from '../../../utils/AppColors';

const JobButtons = ({ title, focused, onPress }) => {

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
    backgroundColor:'#4B4B4B',
    height:40,
    borderRadius:5,
  },
  buttonText:{
    textAlign:'center',
    fontSize:16,
    paddingTop:10,
    fontFamily:AppFonts.BoldFont,
    color:AppColors.Theme_Gray_Text
  }
  });
export default JobButtons;