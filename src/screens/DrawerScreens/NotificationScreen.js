import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  Pressable
  // Button
} from 'react-native';
import AppColors from '../../utils/AppColors';
import AppStyles from '../../utils/AppStyles';
import Button from '../../components/atoms/button/Button';
import SettingMenu from '../../components/atoms/button/SettingMenu';
import AppImages from '../../utils/AppImages';
import SettingHeader from '../../components/atoms/header/SettingHeader';
import AppFonts from "../../utils/AppFonts";

const {width, height} = Dimensions.get('window');

const NotificationScreen = props => {
  /****************************************************************************/

  /****************************************************************************/

  /****************************************************************************/

  /****************************************************************************/

  return (
    <SafeAreaView style={AppStyles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={AppColors.Theme_Background}
      />
       
       <View style={{ height:140,marginTop:15}}>
          <ImageBackground source={AppImages.notification} resizeMode="cover" style={styles.image} >
                <Text style={styles.text}> Notification</Text>
                <Pressable onPress={()=>props.navigation.goBack()}
                style={{position:'absolute',margin:15}}>
                <Image source={AppImages.back} style={{height:28,width:28}}/>
                </Pressable>
          </ImageBackground>
        </View>
      <View style={{width: '92%', alignSelf: 'center'}}>
        <View style={styles.mainContainer}>
          <Image source={AppImages.order} />
          <View style={styles.textContainer}>
            <Text style={AppStyles.normalRegularText}>
              Your booking was confirmed.
            </Text>
          </View>

          <Text style={AppStyles.normalRegularText}>11:00 am</Text>
        </View>

        <View style={styles.mainContainer}>
          <Image source={AppImages.startjob} />
          <View style={styles.textContainer}>
            <Text style={AppStyles.normalRegularText}>
              Your agent has started his job.
            </Text>
          </View>
          <Text style={AppStyles.normalRegularText}>7:00 pm</Text>
        </View>
        <View>
          <Text></Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

/****************************************************************************/

export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#323232',
  },
  menu: {
    margin: '10%',
    marginTop: '20%',
    borderBottomWidth: 2,
    borderColor: AppColors.Theme_Buttons,
    paddingBottom: 10,
  },
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '5%',
  },
  textContainer: {
    width: '65%',
    alignSelf: 'center',
    marginLeft: 15,
  },
  image: {
    flex: 1,
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
    overflow: 'hidden',
  
  },
   text: {
    color: 'white',
    fontSize: 26,
    lineHeight: 60,
    fontFamily:AppFonts.BoldFont,
    fontWeight: '700',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)'
  },
});
