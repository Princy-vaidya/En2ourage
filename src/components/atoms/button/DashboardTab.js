import React from 'react';
import {
    View, Text, Pressable,StyleSheet,Dimensions,Image
} from 'react-native';
import AppFonts from "../../../utils/AppFonts";
import AppColors from '../../../utils/AppColors';
import AppImages from '../../../utils/AppImages';

const { width, height } = Dimensions.get("window");

const DashboardTab = ({ title, focused, onPress }) => {

    return (
      <Pressable onPress={onPress}>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}
          numberOfLines={1}
          adjustsFontSizeToFit
         >{title}</Text>
         {title==='PROFILE' &&<Image source={AppImages.exclamation} style={{marginBottom:-20}}/>}
        </View>
      </Pressable>
    );
};

const styles = StyleSheet.create({

  buttonContainer:{
    backgroundColor:AppColors.Theme_Buttons,
  height:70,
  width:width*0.25,
    borderRadius:8,
   justifyContent:'center',
    alignItems:'center',
    paddingHorizontal:2
  },
  buttonText:{
    textAlign:'center',
    fontSize:16,
    // padding:10,
    // paddingTop:20,
    fontFamily:AppFonts.MediumFont,
    color:AppColors.Theme_white
  }
  });
export default DashboardTab;