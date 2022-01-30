import React from 'react';
import {View, Text, Pressable, StyleSheet, Image,SafeAreaView,ImageBackground} from 'react-native';
import AppFonts from '../../../utils/AppFonts';
import AppColors from '../../../utils/AppColors';
import AppImages from '../../../utils/AppImages';
import AppStyles from '../../../utils/AppStyles';

const SettingHeader = ({title, onPress,image}) => {
  return (
    <View style={{ flex: 1 }}>
          <ImageBackground source={image} resizeMode="cover" style={styles.haederContainer} >
                <Text style={styles.headerTitle}>{title}</Text>
                <Pressable onPress={onPress}
                style={{position:'absolute',margin:15}}>
                <Image source={AppImages.back} style={{height:28,width:28}}/>
                </Pressable>
          </ImageBackground>
        </View>
  );
};

const styles = StyleSheet.create({
  
  headerTitle: {
    color: 'white',
    fontSize: 26,
    lineHeight: 60,
    fontFamily:AppFonts.BoldFont,
    fontWeight: '700',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)'
  },
  haederContainer: {
    flex: 1,
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
    overflow: 'hidden'
    // borderWidth: 5,
    // borderColor: 'red'
    // height: '100%',
    // width: '100%',
    // justifyContent: 'flex-start'
  },
});
export default SettingHeader;
