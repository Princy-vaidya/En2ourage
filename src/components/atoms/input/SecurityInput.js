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
import AppColors from "../../../utils/AppColors";
import AppFonts from "../../../utils/AppFonts";
const { width, height } = Dimensions.get("window");

const SecurityInput = (props) => {
  const {
    type,
    placeholder,
    value,
    onChange,
    onBlur,
    keyboard,
    max,
    borderColor,
    widthInput,
    refInput,
    onSubmitEditing,
    returnKeyType
  } = props;
  const [colors, setColor] = useState(AppColors.Text_grey);

  return (
    <View style={[styles.input, {borderColor:borderColor,width:widthInput}]}>
      <TextInput
        style={styles.textInput}
        placeholderTextColor="#9B9B9B"
        placeholder={placeholder}
        secureTextEntry={(type === "password" || type==="currentPassword"|| type==="newPassword"|| type==="confirmPassword")? true : false}
        onChangeText={(text) => onChange(text)}
        value={value}
        onBlur={onBlur}
        returnKeyType={returnKeyType}
        keyboardType="phone-pad"
        maxLength={max}
        onSubmitEditing={onSubmitEditing}
        ref={refInput}
        autoFocus={type==="backgroud check" ? true :false}
      />
    </View>
  );
};

const styles = StyleSheet.create({

  textInput: {
    height: 60,
    flex: 1,
    padding: 10,
    color:AppColors.Theme_white,
    fontSize:20,
    textAlign:'center'
  },
  
  input: {
    borderRadius:5,
    borderWidth:2,
    borderColor:AppColors.Theme_Buttons,
    marginBottom:10,
    height:60,
    flexDirection:'row',
    justifyContent:'space-between',
  }
});

export default SecurityInput;
