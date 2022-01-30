import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  Keyboard,
  Dimensions,
  Pressable
} from "react-native";
import AppStyles from "../../../utils/AppStyles";
import AppColors from "../../../utils/AppColors";
import AppFonts from "../../../utils/AppFonts";
const { width, height } = Dimensions.get("window");

const BookInput = (props) => {
  const {infoQue,infoAns,type,
    placeholder,
    value,
    onChange,
    icon,
    onBlur,
    keyboard,
    max,
    label,
    borderColor,
    returnKeyType,
    touchedError,
    error
  } = props;

  return (
    <View style={styles.mainContainer}>
    <View style={{width:'35%',justifyContent:'center'}}>
    <Text style={AppStyles.mediumWhiteText}>{label}</Text>
    </View>
    <View>
    <View style={[styles.input,{borderColor:touchedError?AppColors.Theme_Red:AppColors.Theme_Buttons}]}>
    <TextInput
        style={styles.textInput}
        placeholderTextColor="#9B9B9B"
        placeholder={placeholder}
        secureTextEntry={(type === "password" || type==="currentPassword"|| type==="newPassword"|| type==="confirmPassword")? true : false}
        onChangeText={(text) => onChange(text)}
        value={value}
        onBlur={onBlur}
        returnKeyType="done"
        keyboardType={keyboard ? keyboard : "default"}
        maxLength={max}
      />
      
    </View>
    {touchedError && (
            <Text style={styles.formError}>{error}</Text>
        )}

    </View>
</View>
  );
};

const styles = StyleSheet.create({
    mainContainer:{
        flexDirection:'row',
        marginTop:0,width:'100%'
    },
    textInput: {
        height:21 ,
        flex: 1,
        padding: 10,
        paddingTop:0,
        paddingBottom:0,
        marginLeft: 10,
        color:AppColors.Theme_white,
         textAlign:'center'
      },
      
      input: {
        borderRadius:5,
        borderWidth:2,
        borderColor:AppColors.Theme_Buttons,
        marginBottom:10,
        width: width/1.7 ,
        height:25,
        fontSize: 16,
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:5,
        fontFamily:AppFonts.MediumFont
      },
      formError: {
        color: 'red',
        marginTop: -8,
        marginBottom: 10,
      },
  
});

export default BookInput;
