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

const JobDetailList = (props) => {
  const {infoQue,infoAns} = props;

  return (
    <View style={styles.mainContainer}>
    <View style={{width:'40%',justifyContent:'center'}}>
    <Text style={AppStyles.mediumWhiteText}>{infoQue}</Text>
    </View>
    <View style={styles.infoAns}>
        <Text style={[AppStyles.mediumWhiteText]}>{infoAns}</Text>
    </View>
   <View>

    </View>
</View>
  );
};

const styles = StyleSheet.create({
    mainContainer:{
        flexDirection:'row',
        marginTop:10,width:'100%'
    },
  infoAns:{
    borderWidth:1,
    borderColor:AppColors.Theme_Buttons,
    width:'60%',
    alignItems:'center',
    // padding:5
}

  
});

export default JobDetailList;
