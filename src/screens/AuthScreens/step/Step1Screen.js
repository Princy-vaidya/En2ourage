import React, {useState, useRef} from 'react';
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
import {Formik} from 'formik';
import * as Yup from 'yup';
import StepInput from '../../../components/atoms/input/StepInput';
import FormInput from '../../../components/atoms/input/FormInput';
import AppStrings from '../../../utils/AppStrings';
import AppFonts from '../../../utils/AppFonts';
import AppImages from '../../../utils/AppImages';
import Button from '../../../components/atoms/button/Button';
import {KeyboardAwareScrollView} from '@codler/react-native-keyboard-aware-scroll-view';
import {Validate} from '../../../components/atoms/input/Step1Validation';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

const {width, height} = Dimensions.get('window');

const Step1Screen = props => {
  const [date, setDate] = useState(new Date());
  const [dob, setDOB] = useState(moment());
  const [show, setShow] = useState(false);
  const [dobShow, setDOBShow] = useState(false);
  const [mode, setMode] = useState('date');
  const ref_input1 = useRef();
  const ref_input2 = useRef();
  const ref_input3 = useRef();
  const ref_input4 = useRef();
  const [visible,setVisible]=useState(true)

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
    <SafeAreaView style={[AppStyles.container, styles.mainContainer]}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={AppColors.Theme_Background}
      />
      {/* <ScrollView
        style={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">
        <KeyboardAwareScrollView > */}
        {/* <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : null}
          keyboardVerticalOffset={+30}> */}
           <Modal
        visible={visible}
        transparent={true}
        animationType={"fade"}
        onRequestClose={() => {}}
      >
           <View style={styles.modalViews}>
            <View style={[styles.modalContainers]}>
              <ScrollView>
              <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : null}
          // keyboardVerticalOffset={+30}
          >
        
          <View style={styles.skipContainer}>
                <Text style={[AppStyles.redLargeText]}>S</Text>
                <Text style={[AppStyles.boldWhiteText,{fontSize:27,fontFamily:'Roboto-Black',marginTop:'13%'}]}>
                  tep 1
                </Text>
               
              </View>
          <Text
            style={[AppStyles.boldWhiteText, {fontSize: 20, marginTop: -10}]}>
            PROFILE DETAILS
          </Text>
          <Formik
            initialValues={{
              fname: '',
              lname: '',
              email: '',
              password: '',
              cfpass: '',
            }}
            onSubmit={() => {props.navigation.navigate('Step2'),setVisible(false)}}
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
                    value={values.fname}
                    onChange={handleChange('fname')}
                    type="fname"
                    label="First Name"
                    // onBlur={() => setFieldTouched('fname')}
                    max={100}
                    placeholder="First Name"
                    borderColor={
                      touched.fname && errors.fname
                        ? AppColors.Theme_Red
                        : AppColors.Theme_Buttons
                    }
                    onSubmitEditing={() => ref_input1.current.focus()}
                    returnKeyType="next"
                  />

                  {touched.fname && errors.fname && (
                    <Text style={styles.formError}>{errors.fname}</Text>
                  )}

                  <StepInput
                    value={values.lname}
                    onChange={handleChange('lname')}
                    type="lname"
                    label="Last Name"
                    // onBlur={() => setFieldTouched('lname')}
                    max={100}
                    placeholder="Last Name"
                    borderColor={
                      touched.lname && errors.lname
                        ? AppColors.Theme_Red
                        : AppColors.Theme_Buttons
                    }
                    onSubmitEditing={() => ref_input2.current.focus()}
                    refInput={ref_input1}
                    returnKeyType="next"
                  />

                  {touched.lname && errors.lname && (
                    <Text style={styles.formError}>{errors.lname}</Text>
                  )}

                  <StepInput
                    value={values.email}
                    onChange={handleChange('email')}
                    type="email"
                    label="Email"
                    // onBlur={() => setFieldTouched('email')}
                    max={100}
                    placeholder="Email"
                    borderColor={
                      touched.email && errors.email
                        ? AppColors.Theme_Red
                        : AppColors.Theme_Buttons
                    }
                    onSubmitEditing={() => ref_input3.current.focus()}
                    refInput={ref_input2}
                    returnKeyType="next"
                  />

                  {touched.email && errors.email && (
                    <Text style={styles.formError}>{errors.email}</Text>
                  )}

                  <View>
                    <TouchableOpacity
                      onPress={showDatepicker}
                      style={styles.input}>
                      <Text style={styles.dobBirth}>Date of Birth</Text>
                      <Text style={[styles.textInput]}>
                        {moment(dob).format('YYYY-MM-DD')}
                      </Text>
                    </TouchableOpacity>
                  </View>

                  {/* <View style={{borderWidth:1}}>
              <DatePicker date={date} onDateChange={setDate} />
              </View> */}
                  <StepInput
                    value={values.password}
                    onChange={handleChange('password')}
                    type="password"
                    label="Password"
                    // onBlur={() => setFieldTouched('password')}
                    max={50}
                    placeholder="Password"
                    borderColor={
                      touched.password && errors.password
                        ? AppColors.Theme_Red
                        : AppColors.Theme_Buttons
                    }
                    onSubmitEditing={() => ref_input4.current.focus()}
                    refInput={ref_input3}
                    returnKeyType="next"
                  />
                  {touched.password && errors.password && (
                    <Text style={styles.formError}>{errors.password}</Text>
                  )}

                  <StepInput
                    value={values.cfpass}
                    onChange={handleChange('cfpass')}
                    type="password"
                    label="Confirm Password"
                    // onBlur={() => setFieldTouched('cfpass')}
                    max={50}
                    placeholder="Confirm Password"
                    borderColor={
                      touched.cfpass && errors.cfpass
                        ? AppColors.Theme_Red
                        : AppColors.Theme_Buttons
                    }
                    refInput={ref_input4}
                    returnKeyType="done"
                  />
                  {touched.cfpass && errors.cfpass && (
                    <Text style={styles.formError}>{errors.cfpass}</Text>
                  )}
                    <Pressable
                      style={{alignSelf: 'flex-end'}}
                      onPress={() => props.navigation.navigate('Login')}>
                  <View style={styles.forgotPassContainer}>
                    <Text style={AppStyles.normalBoldText}>
                      {AppStrings.ALREADY_HAVE_AN_ACCOUNT}
                    </Text>
                    <Pressable
                      style={{alignSelf: 'center'}}
                      onPress={() => props.navigation.navigate('Login')}>
                      <Image
                        source={AppImages.next}
                        style={{width: 35, height: 20}}
                      />
                    </Pressable>
                  </View>
                  </Pressable>

                  <View style={{marginTop: '3%', marginBottom: '5%'}}>
                    <Button title="CONTINUE" onPress={handleSubmit} />
                  </View>

                  <Text
                    style={[
                      AppStyles.boldText,
                      {fontSize: 25, textAlign: 'center'},
                    ]}>
                    1/4
                  </Text>
                </View>
              </>
            )}
          </Formik>
          {Platform.OS === 'android' && show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={false}
              display="default"
              onChange={onChange}
              style={{
                width: 320,
                height: 400,
                borderWidth: 0.4,
                backgroundColor: 'white',
              }}
            />
          )}

          <Modal
            visible={Platform.OS === 'ios' && show}
            transparent={true}
            animationType={'fade'}
            onRequestClose={() => {}}>
            <View style={styles.modalView}>
              <View style={styles.modalContainer}>
                <DateTimePicker
                  testID="dateTimePicker"
                  value={date}
                  mode={mode}
                  is24Hour={false}
                  display="default"
                  onChange={onChange}
                  style={styles.datepickerContainer}
                  textColor="white"
                />
                <View
                  style={{
                    position: 'absolute',
                    bottom: 10,
                    width: '90%',
                    margin: 10,
                   marginTop:0
                  }}>
                  <Button title="OK" onPress={() => setShow(false)} />
                </View>
              </View>
            </View>
           
          </Modal>
        {/* </KeyboardAvoidingView> */}
        </KeyboardAvoidingView>
        </ScrollView>
        
        </View>
        </View>
        </Modal>
        {/* </KeyboardAwareScrollView>
      </ScrollView> */}
    </SafeAreaView>
  );
};

/****************************************************************************/

export default Step1Screen;

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  formikContainer: {
    width: '100%',
    marginTop: '4%',
  },
  forgotPassContainer: {
    // width: '0%',
    alignSelf: 'flex-end',
    flexDirection: 'row',
    marginVertical:'1%'
  },
  formError: {
    color: 'red',
    marginTop: -8,
    marginBottom: 10,
  },
  title: {
    alignSelf: 'flex-end',
    marginBottom: '6%',
    fontSize: 27,
  },
  input: {
    borderRadius: 5,
    borderWidth: 2,
    borderColor: AppColors.Theme_Buttons,
    marginBottom: 10,
    width: width / 1.1,
    height: 60,
    fontSize: 16,
    justifyContent: 'space-between',
  },

  textInput: {
    height: 60,
    flex: 1,
    marginLeft: 15,
    marginTop: 5,
    textAlign: 'left',
    color: AppColors.Theme_white,
  },
  datepicker: {
    width: '100%',
    height: '30%',
    backgroundColor: AppColors.Theme_Buttons,
  },
  modalView: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'rgba(52, 52, 52, 0.2)',
  },
  modalContainer: {
    backgroundColor: AppColors.Theme_Background,
    width: '80%',
    alignItems: 'center',
    borderRadius: 6,
    elevation: 4,
    flexDirection: 'column',
    borderWidth: 2,
    borderColor: AppColors.Theme_Gray_Text,
  },
  datepickerContainer: {
    width: '90%',
     height: '20%',
    borderWidth: 0.4,
    marginTop: 10,
    backgroundColor:AppColors.Theme_Gray_Text
  },
  dobBirth: {
    textAlign: 'left',
    color: AppColors.Theme_Gray_Text,
    marginLeft: 15,
    marginTop: 5,
  },
  skipContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
   marginVertical:'4%'
  },
  modalViews: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,

    // backgroundColor: "rgba(52, 52, 52, 0.6)",
  },
  modalContainers: {
    // backgroundColor: "#2f2f2f",
    width: "100%",
    // height: "55%",
    alignItems: "center",
  
    flexDirection: "column",
    // position: "absolute",
    // bottom: 0,
  },
  reportTo: {
    marginTop: "3%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
