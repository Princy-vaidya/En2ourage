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

const AccountInput = (props) => {
  const {label,title} = props;

  return (
    <View style={styles.mainContainer}>
    <Text style={styles.labelStyle}>{label}</Text>

    <Text style={[AppStyles.normalRegularText]}>{title}</Text>
    </View>
      );
};

const styles = StyleSheet.create({
    mainContainer:{
        marginTop:'6%',
        marginLeft:'5%',
        marginBottom:2
    },
    labelStyle:{
        color:AppColors.Theme_Gray_Text,
        fontSize:14,
        fontFamily:AppFonts.RegularFont
      }
    
     
  
});

export default AccountInput;
