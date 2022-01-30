import React from 'react';
import {
    View, Text, Pressable,StyleSheet,Image
} from 'react-native';
import AppFonts from "../../../utils/AppFonts";
import AppColors from '../../../utils/AppColors';
import AppImages from "../../../utils/AppImages";
import AppStyles from "../../../utils/AppStyles";

const SettingMenu = ({ title, focused, onPress ,item,type}) => {

    return (
      
            <Pressable
                    onPress={onPress} >
                      <View style={{ borderStyle: 'solid', padding: 4, borderBottomColor: '#9B9B9B', borderBottomWidth: 0.3, width: '100%', justifyContent: 'space-between', flex: 1, alignItems: 'center', flexDirection: 'row' }}>
                        <Text style={styles.item}>{type==='Privacy'?title:item.title}</Text>
                        <Image style={{ marginRight: 8 }} source={AppImages.navigateDrawer}/>
                        </View>
              </Pressable>

    );
};

const styles = StyleSheet.create({

  buttonContainer:{
    // backgroundColor:AppColors.Theme_Buttons,
    height:50,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
   
  },
  buttonText:{
    textAlign:'center',
    fontSize:20,
    paddingTop:10,
    fontFamily:AppFonts.BoldFont,
    color:AppColors.Theme_white,
  },
  item: {
    paddingVertical: 12,
    paddingHorizontal: 28,
    fontSize: 18,
    fontFamily: 'Roboto-Medium',
    fontWeight: '500',
    color:AppColors.Theme_white,
    width: '80%'
  },
  });
export default SettingMenu;