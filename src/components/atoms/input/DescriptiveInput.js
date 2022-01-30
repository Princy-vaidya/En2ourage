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

const DescriptiveInput = (props) => {
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
  } = props;

  

  return (
    <View style={styles.input}>
      <TextInput
        style={styles.textInput}
        placeholderTextColor="#9B9B9B"
        placeholder={placeholder}
        secureTextEntry={(type === "password" || type==="currentPassword"|| type==="newPassword"|| type==="confirmPassword")? true : false}
        onChangeText={(text) => onChange(text)}
        value={value}
        onBlur={onBlur}
        returnKeyType="next"
        keyboardType={keyboard ? keyboard : "default"}
        multiline={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: 140,
    flex: 1,
    padding: 10,
    paddingTop:12,
    marginLeft: 10,
    color:AppColors.Theme_white,
    fontSize: 18,
    fontFamily:AppFonts.RegularFont,
    textAlign:'center'
  },
  
  input: {
    borderRadius:5,
    borderWidth:2,
    borderColor:AppColors.Theme_Buttons,
    marginBottom:10,
    width: width/1.1 ,
    height:150,
    flexDirection:'row',
    justifyContent:'space-between',
    borderColor:AppColors.Theme_Buttons,
    marginTop:'10%',
    alignItems:'center'
  }
});

export default DescriptiveInput;
