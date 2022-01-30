import React from 'react';
import {View, Text, Pressable, StyleSheet,Image,TouchableOpacity} from 'react-native';
import AppFonts from '../../../utils/AppFonts';
import AppColors from '../../../utils/AppColors';
import AppImages from "../../../utils/AppImages";
import AppStyles from "../../../utils/AppStyles"

const Header = ({title, onPress,type}) => {
  return (
   
    <View style={{justifyContent:'center'}}>
    <View style={styles.haederContainer}>
      <View style={{}}>
      <Text style={styles.title}>{title}</Text>
      </View>
    </View>
    {type==='menu' ? 
    <TouchableOpacity onPress={onPress}
    style={{position:'absolute',marginLeft:10}}>
        <Image source={AppImages.menu} style={{margin: 5,width:30,height:30}} />
      </TouchableOpacity>
      :<TouchableOpacity
        onPress={onPress}
        style={{position:'absolute',marginLeft:10}}>
        <Image source={AppImages.back} style={{alignSelf:'center'}} />
      </TouchableOpacity> }
    </View>
  );
};

const styles = StyleSheet.create({
  haederContainer: {
    backgroundColor: AppColors.Theme_Background,
    flexDirection: 'row',
    width: '100%',
    minHeight: 50,
    alignItems: 'center',
    justifyContent:'center'
  },
  title:{
    fontFamily:AppFonts.BoldFont,
    fontSize:22,
    textAlign:'center',
    color:AppColors.colorWhite,
     marginHorizontal:'23%'
  }
});
export default Header;
