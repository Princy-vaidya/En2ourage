import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Dimensions,
  FlatList,
  Pressable,
  Image,
  // Button
} from 'react-native';
import AppColors from '../../utils/AppColors';
import AppStyles from '../../utils/AppStyles';
import Button from '../../components/atoms/button/Button';

import SubscriptionList from '../../components/molecule/step/SubscriptonList';
import SelectOneButton from '../../components/atoms/button/SelectOneButton';
import AppImages from '../../utils/AppImages';
import Header from '../../components/atoms/header/Header';
import JobButtons from '../../components/atoms/button/JobButton';
import TinyButtons from '../../components/atoms/button/TinyButton';

const {width, height} = Dimensions.get('window');

const ActivejobsScreen = props => {
  /****************************************************************************/
const [startJobYes,setStartJobYes]=useState(false);
const [startJobNo,setStartJobNo]=useState(false);

  /****************************************************************************/

  /****************************************************************************/

  /****************************************************************************/

  return (
    <SafeAreaView style={AppStyles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={AppColors.Theme_Background}
      />
      <Header title="Active Jobs" onPress={()=>props.navigation.goBack()}/>
      <View style={{borderWidth: 2, borderColor: AppColors.Theme_Buttons,margin:10}}>
        <View style={styles.mainContainer}>
          <View style={{width: '65%'}}>
            <View style={styles.firstColumn}>
              <Text style={[AppStyles.regularWhiteText, {width: '30%'}]}>
                Name
              </Text>
              <Text style={[AppStyles.regularWhiteText, {width: '10%'}]}>
                :
              </Text>
              <View style={styles.details}>
                <Text style={[AppStyles.regularWhiteText]}
                numberOfLines={1}
                adjustsFontSizeToFit>James Batson</Text>
              </View>
            </View>
            <View style={styles.firstColumn}>
              <Text style={[AppStyles.regularWhiteText, {width: '30%'}]}>
                Start
              </Text>
              <Text style={[AppStyles.regularWhiteText, {width: '10%'}]}>
                :
              </Text>
              <View style={styles.details}>
                <Text style={[AppStyles.regularWhiteText]}>7:00 AM</Text>
              </View>
            </View>
            <View style={styles.firstColumn}>
              <Text style={[AppStyles.regularWhiteText, {width: '30%'}]}>
                End
              </Text>
              <Text style={[AppStyles.regularWhiteText, {width: '10%'}]}>
                :
              </Text>
              <View style={styles.details}>
                <Text style={[AppStyles.regularWhiteText]}>4 AM</Text>
              </View>
            </View>
            <View style={styles.firstColumn}>
              <Text style={[AppStyles.regularWhiteText, {width: '30%'}]}>
                Date
              </Text>
              <Text style={[AppStyles.regularWhiteText, {width: '10%'}]}>
                :
              </Text>
              <View style={styles.details}>
                <Text style={[AppStyles.regularWhiteText]}>2/2/2021</Text>
              </View>
            </View>
          </View>
          <View style={{width: '40%', alignItems: 'center'}}>
            <Image source={AppImages.clientPic} />
            <Pressable style={styles.buttonContainer}>
              <Text
                style={[
                  AppStyles.regularWhiteText,
                  {padding: 5, paddingHorizontal: 10},
                ]}>
               DETAILS
              </Text>
            </Pressable>
          </View>
        </View>
        <View style={{margin: 20,marginTop:5}}>
          <JobButtons title={!startJobNo?"START JOBS":"COMPLETED"}/>
        </View>

        {!startJobNo ? <View style={styles.activityContainer}>
          <View style={{flexDirection:'row'}}>
          <TinyButtons title="No" buttonColor={AppColors.Theme_Red}
          onPress={()=>{setStartJobNo(true),setStartJobYes(false)}} />
          <View style={{marginLeft: 10}}>
            <TinyButtons title="Yes" buttonColor={AppColors.Theme_Green}
             onPress={()=>setStartJobYes(true)} />
          </View>
          </View>
          {startJobYes &&
          <View>
          <Text  style={[AppStyles.normalBoldText, { color: AppColors.colorRed }]}>16:00 </Text>
          <Text  style={[AppStyles.normalBoldText, { color: AppColors.colorRed }]}>Late</Text>
          </View>
}
        </View>
        :
        <View style={{width:'90%',alignSelf:'center',marginBottom:15}}>
        <Text style={AppStyles.normalBoldText}>
          You did not meet client expection.This job has  been canceled</Text>
      </View>}
      </View>
    </SafeAreaView>
  );
};

/****************************************************************************/

export default ActivejobsScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    marginTop: 0,
    borderRadius: 5,
    padding: 10,
  },
  firstColumn: {
    flexDirection: 'row',
    width: '100%',
    margin: 2,
  },
  buttonContainer: {
    borderWidth: 2,
    borderColor: AppColors.Theme_Buttons,
    borderRadius: 20,
    paddingHorizontal:'5%',
    marginTop: 15,
  },
  details: {
    borderWidth: 2,
    borderBottomColor: 'white',
    width: '60%',
  },
  activityContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginBottom: 20,
    marginTop:-5,
    alignItems:'center',
    justifyContent:'space-between'
  },
});
