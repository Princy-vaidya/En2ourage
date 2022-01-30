import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  Keyboard,
  Dimensions
} from "react-native";
import App from "../../../../App";
import AppColors from "../../../utils/AppColors";
import AppFonts from "../../../utils/AppFonts";
const { width, height } = Dimensions.get("window");

const InfoInput = (props) => {
  const {
    type,
    placeholder,
    value,
    onChange,
    icon,
    onBlur,
    keyboard,
    max,
    label,
    borderColor,
    returnKeyType
  } = props;

  return (
    <View style={styles.input}>
      <TextInput
        style={styles.textInput}
        placeholderTextColor="#9B9B9B"
        placeholder={placeholder}
        onChangeText={(text) => onChange(text)}
        value={value}
        returnKeyType="done"
        keyboardType={keyboard ? keyboard : "default"}
        maxLength={max}
        
      />
    </View>
  );
};

const styles = StyleSheet.create({

  textInput: {
    // height: 26,
  flex: 1,
    padding: 10,
    paddingTop:0,
    paddingBottom:0,
    marginLeft: 10,
    color:AppColors.Theme_white,
    // textAlign:'center'
  },
  
  input: {
    borderRadius:5,
    borderWidth:2,
    borderColor:AppColors.Theme_Buttons,
    marginBottom:10,
    width: width/1.8 ,
    height:26,
    fontSize: 16,
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:5
  }
});

export default InfoInput;
