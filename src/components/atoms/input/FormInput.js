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

const FormInput = (props) => {
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
    refInput,
   onSubmitEditing,
   returnKeyType
  } = props;
  const [colors, setColor] = useState(AppColors.Text_grey);

  return (
    <View style={[styles.input, {borderColor:borderColor}]}>
      <TextInput
        style={styles.textInput}
        placeholderTextColor="#9B9B9B"
        placeholder={placeholder}
        secureTextEntry={(type === "password" || type==="currentPassword"|| type==="newPassword"|| type==="confirmPassword")? true : false}
        onChangeText={(text) => onChange(text)}
        value={value}
        onBlur={onBlur}
        returnKeyType={returnKeyType}
        keyboardType={keyboard ? keyboard : "default"}
        maxLength={max}
        onSubmitEditing={onSubmitEditing}
        ref={refInput}
        autoCapitalize="none"
      />
    </View>
  );
};

const styles = StyleSheet.create({

  textInput: {
    height: 64,
    flex: 1,
    padding: 10,
    marginLeft: 10,
    color:AppColors.Theme_white,
    fontSize:18,
    fontFamily:AppFonts.RegularFont
  },
  
  input: {
    borderRadius:5,
    borderWidth:2,
    borderColor:AppColors.Theme_Buttons,
    marginBottom:10,
    width: width/1.1 ,
    height:64,
    fontSize: 18,
    flexDirection:'row',
    fontFamily:AppFonts.RegularFont,
    justifyContent:'space-between',
  }
});

export default FormInput;
