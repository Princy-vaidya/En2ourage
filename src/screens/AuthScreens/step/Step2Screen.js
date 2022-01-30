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
  FlatList,
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
import moment from 'moment';
import DocumentPicker from 'react-native-document-picker';
import DocumentList from '../../../components/molecule/step/DocumentList';

const {width, height} = Dimensions.get('window');

const Step2Screen = props => {
  const [date, setDate] = useState(new Date());
  const [dob, setDOB] = useState(moment());
  const [show, setShow] = useState(false);
  const [dobShow, setDOBShow] = useState(false);
  const [mode, setMode] = useState('date');
  const [singleFile, setSingleFile] = useState('');
  const [multiplefile, setMultipleFile] = useState([]);
  const ref_input1 = useRef();
  const ref_input2 = useRef();
  /****************************************************************************/

  const Validate = Yup.object().shape({
    driving: Yup.string().required(AppStrings.driving_required),
    security: Yup.string().required(AppStrings.security_required),
    weapon: Yup.string().required(AppStrings.weapon_required),
  });

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

  const selectOneFile = async () => {
    try {
      const results = await DocumentPicker.pickMultiple({
        type: [DocumentPicker.types.images, DocumentPicker.types.pdf],
        //There can me more options as well find above
      });
      for (const res of results) {
        //Printing the log realted to the file
        console.log('res : ' + JSON.stringify(res));
        console.log('URI : ' + res.uri);
        console.log('Type : ' + res.type);
        console.log('File Name : ' + res.name);
        console.log('File Size : ' + res.size);
      }
      //Setting the state to show multiple file attributes
      setMultipleFile(results);
    } catch (err) {
      //Handling any exception (If any)
      if (DocumentPicker.isCancel(err)) {
        //If user canceled the document selection
        alert('Canceled from multiple doc picker');
      } else {
        //For Unknown Error
        alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };

  /****************************************************************************/

  return (
    <SafeAreaView style={[AppStyles.container, styles.mainContainer]}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={AppColors.Theme_Background}
      />

     
      {/* <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        keyboardVerticalOffset={+30}> */}
        <Formik
          initialValues={{
            driving: '',
            security: '',
            weapon: '',
          }}
          onSubmit={() => props.navigation.navigate('Step3')}
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
              <View style={{}}>
                <FlatList
                  ListHeaderComponent={
                    <>
                      <View style={styles.skipContainer}>
                <Text style={[AppStyles.redLargeText]}>S</Text>
                <Text style={[AppStyles.boldWhiteText,{fontSize:27,fontFamily:'Roboto-Black',marginTop:'13%'}]}>
                  tep 2
                </Text>
               
              </View>
                      <Text
                        style={[
                          AppStyles.boldWhiteText,
                          {fontSize: 20, marginTop: -10},
                        ]}>
                        UPLOAD DOCUMENTS
                      </Text>
                      <View style={styles.formikContainer}>
                        <StepInput
                          value={values.driving}
                          onChange={handleChange('driving')}
                          type="Driving Licence Number"
                          label="Driving Licence Number"
                          // onBlur={() => setFieldTouched('driving')}
                          max={100}
                          placeholder="Driving Licence Number"
                          borderColor={
                            touched.driving && errors.driving
                              ? AppColors.Theme_Red
                              : AppColors.Theme_Buttons
                          }
                          onSubmitEditing={() => ref_input1.current.focus()}
                          returnKeyType="next"
                        />

                        {touched.driving && errors.driving && (
                          <Text style={styles.formError}>{errors.driving}</Text>
                        )}

                        <StepInput
                          value={values.security}
                          onChange={handleChange('security')}
                          type="security"
                          label="Security Licence Number"
                          // onBlur={() => setFieldTouched('security')}
                          max={100}
                          placeholder="Security Licence Number"
                          borderColor={
                            touched.security && errors.security
                              ? AppColors.Theme_Red
                              : AppColors.Theme_Buttons
                          }
                          onSubmitEditing={() => ref_input2.current.focus()}
                          refInput={ref_input1}
                          returnKeyType="next"
                        />

                        {touched.security && errors.security && (
                          <Text style={styles.formError}>
                            {errors.security}
                          </Text>
                        )}

                        <StepInput
                          value={values.weapon}
                          onChange={handleChange('weapon')}
                          type="Concealed Weapons Lincence Number"
                          label="Concealed Weapons Lincence Number"
                          // onBlur={() => setFieldTouched('weapon')}
                          max={100}
                          placeholder="Concealed Weapons Lincence Number"
                          borderColor={
                            touched.weapon && errors.weapon
                              ? AppColors.Theme_Red
                              : AppColors.Theme_Buttons
                          }
                          refInput={ref_input2}
                          returnKeyType="done"
                        />

                        {touched.weapon && errors.weapon && (
                          <Text style={styles.formError}>{errors.weapon}</Text>
                        )}
                      </View>

                      <View style={{marginTop: '5%', flexDirection: 'row',width:'100%',
                      alignSelf:'center'}}>
                        <Pressable
                          onPress={() => selectOneFile()}>
                          <Image source={AppImages.upload} />
                        </Pressable>
                        <Text
                          style={[
                            AppStyles.regularText,
                            { fontSize: 18, marginTop: -10,width:'75%',marginLeft:10},
                          ]}
                          numberOfLines={3}
                          adjustsFontSizeToFit>
                          {AppStrings.UPLOAD_FILE}
                        </Text>
                      </View>
                    </>
                  }
                  data={multiplefile}
                  renderItem={({item}) => <DocumentList item={item} />}
                  keyExtractor={item => item.id}
                  ListFooterComponent={
                    <>
                      <View style={{marginTop: '10%', marginBottom: '5%'}}>
                        <Button title="CONTINUE" onPress={handleSubmit} />
                      </View>
                      <Text
                        style={[
                          AppStyles.boldText,,
                          {fontSize: 25, textAlign: 'center'},
                        ]}>
                        2/4
                      </Text>
                    </>
                  }
                />
              </View>
            </>
          )}
        </Formik>
      {/* </KeyboardAvoidingView> */}
    </SafeAreaView>
  );
};

/****************************************************************************/

export default Step2Screen;

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  formikContainer: {
    width: '100%',
    marginTop: 10,
    alignSelf: 'center',
  },
  skipContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginVertical:'3%'
  },
  forgotPassContainer: {
    // width: '0%',
    alignSelf: 'flex-end',
    flexDirection: 'row',
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
    width: width / 1.2,
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
    backgroundColor: 'rgba(52, 52, 52, 0.6)',
  },
  modalContainer: {
    backgroundColor: AppColors.Theme_Background,
    width: '80%',
    height: '55%',
    alignItems: 'center',
    borderRadius: 6,
    elevation: 4,
    flexDirection: 'column',
    borderWidth: 2,
    borderColor: AppColors.Theme_Gray_Text,
  },
  datepickerContainer: {
    width: '90%',
    height: '70%',
    borderWidth: 0.4,
    marginTop: 10,
  },
  dobBirth: {
    textAlign: 'left',
    color: AppColors.Theme_Gray_Text,
    marginLeft: 15,
    marginTop: 5,
  },
});
