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

const DocumentList = (props) => {
  const {item} = props;

  return (
    <View style={styles.mainContainer}>
        <View style={{marginTop:10,width:'90%'}}>
        <Text style={[AppStyles.normalRegularText,
            {fontSize:14,marginLeft:'8%'}]}>
                {item.name}
            </Text>
          
        </View>
        <Pressable style={styles.removeContainer}>
            <Text style={[AppStyles.normalRegularText,
                {fontSize:14,color:AppColors.Theme_Red}]}>
                Remove</Text>
            </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
mainContainer:{
        flexDirection:'row',
        width:'90%',
        justifyContent:'space-around',
       
    },
removeContainer:{
    marginTop:10,
    width:'30%',
    alignItems:'flex-end'
},

  
});

export default DocumentList;
