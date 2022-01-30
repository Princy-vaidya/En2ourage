import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Dimensions,
  ScrollView,
  Image,
  Pressable,
  Modal,
  KeyboardAvoidingView,
  TouchableHighlight,
  TouchableWithoutFeedback,
  // Button
} from 'react-native';
import AppColors from '../../utils/AppColors';
import AppStyles from '../../utils/AppStyles';
import Header from '../../components/atoms/header/Header';
import TinyButtons from '../../components/atoms/button/TinyButton';
import DescriptiveInput from '../../components/atoms/input/DescriptiveInput';
import InfoInput from '../../components/atoms/input/InfoInput';
import Button from '../../components/atoms/button/Button';
import AppImages from '../../utils/AppImages';
import StepInput from '../../components/atoms/input/StepInput';
import {Formik} from 'formik';
import {Validate} from '../../components/atoms/input/SetlocationValidation';
import {Calendar} from 'react-native-calendars';
import Moment from 'moment';
import {TimePickerModal} from 'react-native-paper-dates';
import 'intl';
import 'intl/locale-data/jsonp/en';
import {KeyboardAwareScrollView} from '@codler/react-native-keyboard-aware-scroll-view';

const {width, height} = Dimensions.get('window');

const CheckOutSecondScreen = props => {
  const [activeAWork, setActiveWork] = useState(0);
  const [activeFirearm, setActiveFirearm] = useState(0);
  const [reportTo, setReportTo] = useState('');
  const [detailJob, setDetailJob] = useState('');
  const [showLocation, setShowLocation] = useState(false);
  const [showTime, setShowTime] = useState(false);
  const [name, setName] = useState('Tom');
  const [address, setAddress] = useState('3,Newbridge cOurge');
  const [fullAddress, setFullAddress] = useState(
    'Chino Hills ,CA,91709, United state',
  );
  const [markedDates, setMarkedDates] = useState({});
  const [startTime, setStartTime] = useState('00:00');
  const [endTime, setEndTime] = useState('00:00');
  const [visibleEndTime, setVisibleEndTime] = useState(false);
  const [visibleStartTime, setVisibleStartTime] = useState(false);
  const ref_input1 = useRef();
  const ref_input2 = useRef();
  const ref_input3 = useRef();
  const ref_input4 = useRef();
  const ref_input5 = useRef();

  const currentYear = Moment().format('YYYY');
  const minDate = currentYear - 1 + '-01-01';
  const maxDate = currentYear + '-12-31';

  /****************************************************************************/

  /****************************************************************************/
  const onFirearmChange = (tabIndex, selectValue) => {
    setActiveFirearm(tabIndex);
  };
  /****************************************************************************/
  const onWorkChange = (tabIndex, selectValue) => {
    setActiveWork(tabIndex);
  };
  /****************************************************************************/

  const onSetAddress = values => {
    setName(values.fullname);
    setAddress(values.address);
    setFullAddress(
      values.city +
        ',' +
        values.state +
        ',' +
        values.zipcode +
        ',' +
        values.country,
    );
    setShowLocation(false);
  };

  const getSelectedDayEvents = date => {
    // alert('selected day: '+date)
    let markedDate = {};
    markedDate[date] = {
      startingDay: true,
      color: AppColors.Theme_Red,
      endingDay: true,
      textColor: 'white',
    };

    setMarkedDates(markedDate);
  };

  const onDismissStartTime = React.useCallback(() => {
    setVisibleStartTime(false);
  }, [setVisibleStartTime]);

  const onConfirmStartTime = React.useCallback(
    ({hours, minutes}) => {
      setVisibleStartTime(false);

      let TimeType = '';

      if (hours <= 11) {
        TimeType = 'AM';
      } else {
        TimeType = 'PM';
      }

      if (hours > 12) {
        hours = hours - 12;
      }
      if (hours == 0) {
        hours = 12;
      }

      const starttime = `${hours}:${minutes} ${TimeType}`;
      setStartTime(starttime);
    },
    [setVisibleStartTime],
  );

  const onDismissEndTime = React.useCallback(() => {
    setVisibleEndTime(false);
  }, [setVisibleEndTime]);

  const onConfirmEndTime = React.useCallback(
    ({hours, minutes}) => {
      setVisibleEndTime(false);

      let TimeType = '';

      if (hours <= 11) {
        TimeType = 'AM';
      } else {
        TimeType = 'PM';
      }

      if (hours > 12) {
        hours = hours - 12;
      }
      if (hours == 0) {
        hours = 12;
      }

      const endtime = `${hours}:${minutes} ${TimeType}`;
      setEndTime(endtime);
    },
    [setVisibleEndTime],
  );

  const renderDriverBottomTimeSheet = () => {
    return (
      <Modal
        visible={showTime}
        onRequestClose={() => setShowTime(false)}
        transparent={true}
        animationType={'fade'}
        onRequestClose={() => {}}>
        <TouchableWithoutFeedback onPress={() => setShowTime(false)}>
          <View style={styles.modalView}>
            <View style={styles.modalContainer}>
              <Pressable onPress={() => setShowTime(false)}>
                <Image source={AppImages.rectangle} style={{margin: '5%'}} />
              </Pressable>

              <ScrollView
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps="handled">
                {/* <KeyboardAwareScrollView > */}
                <KeyboardAvoidingView
                  behavior={Platform.OS === 'ios' ? 'padding' : null}
                  keyboardVerticalOffset={+30}>
                  <Text
                    style={[
                      AppStyles.normalBoldText,
                      {textAlign: 'center', margin: '3%'},
                    ]}>
                   Set  Schedule{' '}
                  </Text>

                  <Calendar
                    minDate={minDate}
                    maxDate={maxDate}
                    hideArrows={false}
                    enableSwipeMonths={true}
                    //   onMonthChange={(month) => onMonthChange(month)}
                    style={{
                      borderWidth: 1,
                      marginTop: 10,
                      borderColor: AppColors.Theme_Buttons,
                      marginHorizontal: '10%',
                      width: '100%',
                      alignSelf: 'center',
                    }}
                    theme={{
                      // textDayHeaderFontSize: 16,
                      calendarBackground: AppColors.backgroundColor,
                      todayTextColor: AppColors.Theme_white,
                      dayTextColor: AppColors.Theme_white,
                      textDisabledColor: AppColors.Theme_Buttons,
                      arrowColor: AppColors.Theme_white,
                      textMonthFontWeight: 'bold',
                      monthTextColor: AppColors.Theme_white,
                    }}
                    // dayComponent={({ date, state }) =>
                    // 	this.renderDayComponent(date, state)
                    // }
                    markedDates={markedDates}
                    markingType={'period'}
                    onDayPress={day => {
                      getSelectedDayEvents(day.dateString);
                    }}
                  />

                  <Pressable
                    style={styles.timerContainer}
                    onPress={() => setVisibleStartTime(true)}>
                    <Text
                      style={{
                        fontSize: 14,
                        color: AppColors.Theme_Gray_Text,
                        padding: 5,
                      }}>
                      From
                    </Text>
                    <Text
                      style={[AppStyles.normalRegularText, {paddingLeft: 5}]}>
                      {startTime}
                    </Text>
                  </Pressable>

                  <Pressable
                    style={styles.timerContainer}
                    onPress={() => setVisibleEndTime(true)}>
                    <Text
                      style={{
                        fontSize: 14,
                        color: AppColors.Theme_Gray_Text,
                        padding: 5,
                      }}>
                      To
                    </Text>
                    <Text
                      style={[AppStyles.normalRegularText, {paddingLeft: 5}]}>
                      {endTime}
                    </Text>
                  </Pressable>

                  <View style={{marginTop: '5%', marginBottom: '3%'}}>
                    <Button
                      title="SET SCHEDULE"
                      onPress={() => setShowTime(false)}
                    />
                  </View>
                </KeyboardAvoidingView>
              </ScrollView>

              <TimePickerModal
                visible={visibleStartTime}
                onDismiss={onDismissStartTime}
                onConfirm={onConfirmStartTime}
                // hours={12} // default: current hours
                // minutes={14} // default: current minutes
                label="Select time" // optional, default 'Select time'
                cancelLabel="Cancel" // optional, default: 'Cancel'
                confirmLabel="Ok" // optional, default: 'Ok'
                animationType="fade" // optional, default is 'none'
                locale={'en'}
                style={{color: 'red'}}
              />

              <TimePickerModal
                visible={visibleEndTime}
                onDismiss={onDismissEndTime}
                onConfirm={onConfirmEndTime}
                // hours={12} // default: current hours
                // minutes={14} // default: current minutes
                label="Select time" // optional, default 'Select time'
                cancelLabel="Cancel" // optional, default: 'Cancel'
                confirmLabel="Ok" // optional, default: 'Ok'
                animationType="fade" // optional, default is 'none'
                locale={'en'}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  };

  const renderDriverBottomLocationSheet = () => {
    return (
      <Modal
        visible={showLocation}
        transparent={true}
        animationType={'fade'}
        onRequestClose={() => {}}>
        <TouchableWithoutFeedback onPress={() => setShowLocation(false)}>
          <View style={styles.modalView}>
            <View style={styles.modalContainer}>
              <Pressable onPress={() => setShowLocation(false)}>
                <Image source={AppImages.rectangle} style={{margin: '5%'}} />
              </Pressable>

              <ScrollView
                style={{flexGrow: 1}}
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps="handled">
                {/* <KeyboardAwareScrollView > */}
                <KeyboardAvoidingView
                  behavior={Platform.OS === 'ios' ? 'padding' : null}
                  keyboardVerticalOffset={+30}>
                  <Text
                    style={[
                      AppStyles.normalBoldText,
                      {textAlign: 'center', margin: '3%'},
                    ]}>
                    Set Location{' '}
                  </Text>
                  <Formik
                    initialValues={{
                      fullname: '',
                      address: '',
                      city: '',
                      state: '',
                      zipcode: '',
                      country: '',
                    }}
                    onSubmit={values => onSetAddress(values)}
                    validationSchema={Validate}>
                    {({
                      values,
                      handleChange,
                      errors,
                      handleSubmit,
                      touched,
                      setFieldTouched,
                    }) => (
                      <>
                        <View style={styles.formikContainer}>
                          <StepInput
                            value={values.fullname}
                            onChange={handleChange('fullname')}
                            type="fullname"
                            label="Full Name"
                            onBlur={() => setFieldTouched('fullname')}
                            max={100}
                            placeholder="Full Name"
                            borderColor={
                              touched.fullname && errors.fullname
                                ? AppColors.Theme_Red
                                : AppColors.Theme_Buttons
                            }
                            onSubmitEditing={() => ref_input1.current.focus()}
                            returnKeyType="next"
                          />

                          {touched.fullname && errors.fullname && (
                            <Text style={styles.formError}>
                              {errors.fullname}
                            </Text>
                          )}

                          <StepInput
                            value={values.address}
                            onChange={handleChange('address')}
                            type="address"
                            label="Address"
                            onBlur={() => setFieldTouched('address')}
                            max={100}
                            placeholder="Address"
                            borderColor={
                              touched.address && errors.address
                                ? AppColors.Theme_Red
                                : AppColors.Theme_Buttons
                            }
                            onSubmitEditing={() => ref_input2.current.focus()}
                            refInput={ref_input1}
                            returnKeyType="next"
                          />

                          {touched.address && errors.address && (
                            <Text style={styles.formError}>
                              {errors.address}
                            </Text>
                          )}

                          <StepInput
                            value={values.city}
                            onChange={handleChange('city')}
                            type="city"
                            label="city"
                            onBlur={() => setFieldTouched('city')}
                            max={100}
                            placeholder="city"
                            borderColor={
                              touched.city && errors.city
                                ? AppColors.Theme_Red
                                : AppColors.Theme_Buttons
                            }
                            onSubmitEditing={() => ref_input3.current.focus()}
                            refInput={ref_input2}
                            returnKeyType="next"
                          />

                          {touched.city && errors.city && (
                            <Text style={styles.formError}>{errors.city}</Text>
                          )}

                          <StepInput
                            value={values.state}
                            onChange={handleChange('state')}
                            type="state"
                            label="state"
                            onBlur={() => setFieldTouched('state')}
                            max={100}
                            placeholder="state"
                            borderColor={
                              touched.state && errors.state
                                ? AppColors.Theme_Red
                                : AppColors.Theme_Buttons
                            }
                            onSubmitEditing={() => ref_input4.current.focus()}
                            refInput={ref_input3}
                            returnKeyType="next"
                          />

                          {touched.state && errors.state && (
                            <Text style={styles.formError}>{errors.state}</Text>
                          )}

                          <StepInput
                            value={values.zipcode}
                            onChange={handleChange('zipcode')}
                            type="zipcode"
                            label="zipcode"
                            onBlur={() => setFieldTouched('zipcode')}
                            max={100}
                            placeholder="zipcode"
                            borderColor={
                              touched.zipcode && errors.zipcode
                                ? AppColors.Theme_Red
                                : AppColors.Theme_Buttons
                            }
                            keyboard="number-pad"
                            onSubmitEditing={() => ref_input5.current.focus()}
                            refInput={ref_input4}
                            returnKeyType="next"
                          />

                          {touched.zipcode && errors.zipcode && (
                            <Text style={styles.formError}>
                              {errors.zipcode}
                            </Text>
                          )}

                          <StepInput
                            value={values.country}
                            onChange={handleChange('country')}
                            type="country"
                            label="country"
                            onBlur={() => setFieldTouched('country')}
                            max={100}
                            placeholder="country"
                            borderColor={
                              touched.country && errors.country
                                ? AppColors.Theme_Red
                                : AppColors.Theme_Buttons
                            }
                            refInput={ref_input5}
                            returnKeyType="next"
                          />

                          {touched.country && errors.country && (
                            <Text style={styles.formError}>
                              {errors.country}
                            </Text>
                          )}

                          <View style={{ marginBottom: '3%',marginTop:'5%'}}>
                            <Button
                              title="SET ADDRESS"
                              onPress={handleSubmit}
                            />
                          </View>
                        </View>
                      </>
                    )}
                  </Formik>
                </KeyboardAvoidingView>

                {/* </KeyboardAwareScrollView> */}
              </ScrollView>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  };

  return (
    <SafeAreaView style={AppStyles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={AppColors.Theme_Background}
      />
      <Header
        title="Checkout"
        onPress={() => props.navigation.navigate('CheckOutFirst')}
      />

      <ScrollView>
        {/* <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : null}> */}
                    <KeyboardAwareScrollView>

          <View style={{margin: '5%'}}>
            <Text style={AppStyles.normalBoldText}>Work</Text>
            <View style={styles.buttonContainer}>
              <TinyButtons
                title="Single"
                buttonColor={
                  activeAWork == 0
                    ? AppColors.Theme_Red
                    : AppColors.Theme_Buttons
                }
                onPress={() => onWorkChange(0, 'Single')}
              />
              <TinyButtons
                title="Team"
                buttonColor={
                  activeAWork == 1
                    ? AppColors.Theme_Red
                    : AppColors.Theme_Buttons
                }
                onPress={() => onWorkChange(1, 'Team')}
              />
            </View>

            <View style={styles.reportTo}>
              <Text style={AppStyles.normalBoldText}>Report To</Text>
              <InfoInput
                value={reportTo}
                onChange={value => setReportTo(value)}
                type="name"
                max={50}
                placeholder="OPTIONAL"
              />
            </View>

            <View style={{marginTop: '3%'}}>
              <Text style={AppStyles.normalBoldText}>Firearm Requirement</Text>
              <View style={styles.buttonContainer}>
                <TinyButtons
                  title="No"
                  buttonColor={
                    activeFirearm == 0
                      ? AppColors.Theme_Red
                      : AppColors.Theme_Buttons
                  }
                  onPress={() => onFirearmChange(0, 'No')}
                />
                <TinyButtons
                  title="Yes"
                  buttonColor={
                    activeFirearm == 1
                      ? AppColors.Theme_Red
                      : AppColors.Theme_Buttons
                  }
                  onPress={() => onFirearmChange(1, 'Yes')}
                />
              </View>

              <Pressable
                style={styles.timeConatiner}
                onPress={() => setShowTime(true)}>
                <Image source={AppImages.timer} />
                <View style={{width: '70%'}}>
                  <Text style={AppStyles.regularWhiteText}>
                    Select Date/Time
                  </Text>
                </View>
              </Pressable>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: '3%',
                }}>
                <Text style={AppStyles.normalBoldText}>Set Location</Text>
                <Pressable onPress={() => setShowLocation(true)}>
                  <Text style={AppStyles.normalBoldText}>change</Text>
                </Pressable>
              </View>

              <View style={styles.locationContainer}>
                <Text style={[AppStyles.whiteSmallText, {padding: 5}]}>
                  {name}
                </Text>
                <Text style={[AppStyles.whiteSmallText, {padding: 5}]}>
                  {address}
                </Text>
                <Text style={[AppStyles.whiteSmallText, {padding: 5}]}>
                  {fullAddress}
                </Text>
              </View>
            </View>

            <DescriptiveInput
              value={detailJob}
              onChange={value => setDetailJob(value)}
              type="Job Description"
              placeholder="Job Description (REQUIRED) "
            />
          </View>
         
        {/* </KeyboardAvoidingView> */}
        </KeyboardAwareScrollView>
      </ScrollView>
      <View style={{margin: '5%'}}>
            <Button
              title="CHECK OUT"
              onPress={() => props.navigation.navigate('Book')}
            />
          </View>

      {renderDriverBottomLocationSheet()}
      {renderDriverBottomTimeSheet()}
    </SafeAreaView>
  );
};

/****************************************************************************/

export default CheckOutSecondScreen;

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: '2%',
    flexDirection: 'row',
    width: width * 0.565,
    justifyContent: 'space-between',
  },
  attireContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '5%',
  },
  firstColumn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '40%',
  },
  timeConatiner: {
    borderRadius: 5,
    borderWidth: 2,
    borderColor: AppColors.Theme_Buttons,
    marginBottom: 10,
    width: width / 1.1,
    height: 50,
    fontSize: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '8%',
    alignItems: 'center',
    padding: 10,
  },
  modalView: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'rgba(52, 52, 52, 0.2)',
  },
  modalContainer: {
    backgroundColor: "#2f2f2f",
    width: '100%',
    // height: '85%',
    alignItems: 'center',
    borderRadius: 6,
    elevation: 4,
    flexDirection: 'column',
    position: 'absolute',
    bottom: 0,
    borderTopEndRadius: 30,
    borderTopLeftRadius: 30,
  },
  reportTo: {
    marginTop: '3%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  locationContainer: {
    width: width / 1.1,
    borderWidth: 1,
    borderColor: AppColors.Theme_Buttons,
    // height: 108,
    padding: 10,
    marginTop: 10,
    marginBottom:-10
  },
  timerContainer: {
    marginTop: '3%',
    width: width / 1.1,
    height: 55,
    borderWidth: 1,
    borderColor: AppColors.Theme_Buttons,
  },
  formError: {
    color: 'red',
    marginTop: -8,
    marginBottom: 10,
  },
});
