import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
  KeyboardAvoidingView,
  Image,
  Pressable,
  TouchableOpacity,
  Platform,
  Dimensions,
  Modal,
  // Button
} from 'react-native';
import AppColors from '../../../utils/AppColors';
import AppStyles from '../../../utils/AppStyles';
import AppStrings from '../../../utils/AppStrings';
import AppFonts from '../../../utils/AppFonts';
import AppImages from '../../../utils/AppImages';
import Button from '../../../components/atoms/button/Button';
import moment from 'moment';

const {width, height} = Dimensions.get('window');

const ProcessingScreen = props => {
  const [date, setDate] = useState(new Date());
  const [dob, setDOB] = useState(moment());
  const [show, setShow] = useState(false);
  const [dobShow, setDOBShow] = useState(false);
  const [mode, setMode] = useState('date');

  /****************************************************************************/

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    setDOB(currentDate);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  /****************************************************************************/

  return (
    <SafeAreaView style={AppStyles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={AppColors.Theme_Background}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.processingContainer}>
          <Text style={[AppStyles.largeWhiteText,{fontSize:35}]}
          numberOfLines={2} adjustsFontSizeToFit>
            {AppStrings.PROCESSING_INFO}
          </Text>
          <View style={{margin: 40}}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.check}>
                <Image source={AppImages.processCheck} />
              </View>

              <Text style={[AppStyles.regularText, {marginLeft: '5%'}]}
              numberOfLines={1} 
              adjustsFontSizeToFit>
                {AppStrings.PROFILE_CREATED}
              </Text>
            </View>
            <View style={styles.verticalLine1} />
           
            <View style={{flexDirection: 'row'}}>
              <Image source={AppImages.processUncheck} />
              <Text style={[AppStyles.regularText, 
                {marginLeft: '5%'}]}
                numberOfLines={2} 
                adjustsFontSizeToFit>
                {AppStrings.SCREENING_COMPLETE}
              </Text>
            </View>
            <View style={styles.verticalLine2}>
              <Text
                style={[
                  AppStyles.normalRegularOrangeText,
                  {marginLeft: '10%', fontSize: 18,marginTop:-10},
                ]}
                numberOfLines={1} 
                adjustsFontSizeToFit>
                {AppStrings.TIME_TAKEN}
              </Text>
            </View>

            <View style={{flexDirection: 'row'}}>
              <Image source={AppImages.processUncheck} />
              <Text style={[AppStyles.regularText, {marginLeft: '5%'}]}
               numberOfLines={1} adjustsFontSizeToFit>
                {AppStrings.PICK_SUBSCRIPTIN}
              </Text>
            </View>
            <View style={styles.verticalLine1} />

            <View style={{flexDirection: 'row'}}>
              <Image source={AppImages.processUncheck} />
              <Text style={[AppStyles.regularText, {marginLeft: '5%'}]}
               numberOfLines={1} adjustsFontSizeToFit>
                {AppStrings.WORK_EARN}
              </Text>
            </View>
          </View>
          <View style={{marginTop: '30%', marginBottom: '5%'}}>
            <Button title="CONTINUE" onPress={() =>props.navigation.navigate('Step4') } />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

/****************************************************************************/

export default ProcessingScreen;

const styles = StyleSheet.create({
  processingContainer: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 20,
  },
  check: {
    width: 30,
    height: 30,
    borderRadius: 25,
    borderWidth: 3,
    flexDirection: 'row',
    borderColor: AppColors.Theme_Buttons,
  },
  verticalLine1: {
    height: height*0.03,
    borderLeftWidth: 1,
    borderColor: AppColors.Theme_Buttons,
    marginLeft:width*0.038,
  },
  verticalLine2: {
    height: height*0.130,
    borderLeftWidth: 1,
    borderColor: AppColors.Theme_Buttons,
    marginLeft:width*0.038,
    marginTop: -22,
    justifyContent: 'center',
  },
});
