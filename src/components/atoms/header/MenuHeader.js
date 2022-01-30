import React from 'react';
import {View, Text, Pressable, StyleSheet,Image,TouchableOpacity} from 'react-native';
import AppFonts from '../../../utils/AppFonts';
import AppColors from '../../../utils/AppColors';
import AppImages from "../../../utils/AppImages";
import AppStyles from "../../../utils/AppStyles"

const MenuHeader = (props) => {
   const {title, onMenuPress,onFilterPress,navigation}=props
  return (
    <View style={styles.haederContainer}>
      <TouchableOpacity onPress={onMenuPress} >
        <Image source={AppImages.menu} style={{margin: 5,width:30,height:30}} />
      </TouchableOpacity>
     <Text style={styles.title}>
        {title}
      </Text>
     
      <TouchableOpacity onPress={navigation}>
        <Image source={AppImages.filter} style={{margin: 5,width:25,height:25,marginRight:10}} />
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  haederContainer: {
    flexDirection: 'row',
    minHeight: 50,
    justifyContent:'space-between',
    borderColor: AppColors.Theme_Buttons,
    alignItems: 'center',
  },
  title:{
    fontFamily:AppFonts.RegularFont,
    fontSize:25,
    textAlign:'center',
    color:'white'
  },

});
export default MenuHeader;
