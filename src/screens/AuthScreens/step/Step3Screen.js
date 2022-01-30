import React, {useState, useRef,Fragment} from 'react';
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
import SecurityInput from '../../../components/atoms/input/SecurityInput';
import FormInput from '../../../components/atoms/input/FormInput';
import AppStrings from '../../../utils/AppStrings';
import AppFonts from '../../../utils/AppFonts';
import AppImages from '../../../utils/AppImages';
import Button from '../../../components/atoms/button/Button';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import moment from 'moment';
import DocumentPicker from 'react-native-document-picker';
import DocumentList from '../../../components/molecule/step/DocumentList';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

const {width, height} = Dimensions.get('window');
const CELL_COUNT = 9;
const Step3Screen = (props) => {
  const [date, setDate] = useState(new Date());
  const [xxx,setXXX]=useState('');
  const [xx,setXX]=useState('');
  const [xxxx,setXXXX]=useState('');
  const [singleFile, setSingleFile] = useState('');
  const [multiplefile, setMultipleFile] = useState([]);
  const [xxxError,setXXXError]=useState(false);
  const [xxError,setXXError]=useState(false);
  const [xxxxError,setXXXXError]=useState(false);

  const ref_input1 = useRef();
  const ref_input2 = useRef();
  /****************************************************************************/


  /****************************************************************************/

  const onSubmit=()=>{
    if(xxx===""){
      setXXXError(true)
    }
    if(xx===""){
      setXXError(true)
    }
    if(xxxx===""){
      setXXXXError(true)
    }

    if(xxx!="" &&xx!="" && xxx!="")
    {
      props.navigation.navigate('Success')
    }
  
  }

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
    <SafeAreaView style={[AppStyles.container]}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={AppColors.Theme_Background}
      />

      {/* <KeyboardAwareScrollView > */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        keyboardVerticalOffset={+30}>
       
              <View style={styles.formikContainer}>
                <View>
                  <FlatList
                    ListHeaderComponent={
                      <>
                        <View>
                        <View style={styles.skipContainer}>
                <Text style={[AppStyles.redLargeText]}>S</Text>
                <Text style={[AppStyles.boldWhiteText,{fontSize:27,fontFamily:'Roboto-Black',marginTop:'13%'}]}>
                  tep 3
                </Text>
               
              </View>
                          <Text
                            style={[
                              AppStyles.boldWhiteText,
                              {fontSize: 20, marginTop: -10},
                            ]}>
                            BACKGROUND CHECK
                          </Text>
                          <View style={{margin: 15, marginHorizontal: 11.5}}>
                            <Text
                              style={AppStyles.regularText}
                              numberOfLines={3}
                              adjustsFontSizeToFit>
                              {AppStrings.SECURITY_CHECK}
                            </Text>
                          </View>

                          <View style={{margin: 7}}>
                            <View
                              style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                              }}>
                              <Text
                                style={{
                                  fontSize: 14,
                                  color: '#9B9B9B',
                                  fontFamily: AppFonts.RegularFont,
                                }}>
                                Social Security Number
                              </Text>
                              <Text style={AppStyles.normalRegularOrangeText}>
                                Required.
                              </Text>
                            </View>
                          </View>
                          <View
                            style={{
                              flexDirection: 'row',
                              justifyContent: 'space-between',
                              marginHorizontal: 7,
                            }}>
                            <SecurityInput
                              value={xxx}
                              onChange={(value)=>{setXXX(value),
                                setXXXError(false),
                               value.length===3 && ref_input1.current.focus()}}
                              type="XXX"
                              label="XXX"
                              // onBlur={() => setFieldTouched('xxx')}
                              max={3}
                              placeholder="XXX"
                              widthInput={width / 4}
                              borderColor={
                               !xxxError
                                  ? 
                                  AppColors.Theme_Buttons
                                  : AppColors.Theme_Red
                              }
                              // onSubmitEditing={() => ref_input1.current.focus()}
                              returnKeyType="next"
                              type="backgroud check"
                            />

                            <SecurityInput
                              value={xx}
                              onChange={(value)=>{setXX(value),
                                setXXError(false)
                             value.length===2 && ref_input2.current.focus()}}
                              type="XX"
                              label="XX"
                              // onBlur={() => setFieldTouched('xx')}
                              max={2}
                              placeholder="XX"
                              widthInput={width / 4}
                              borderColor={
                              !xxError
                                  ? 
                                  AppColors.Theme_Buttons
                                  : AppColors.Theme_Red
                              }
                              // onSubmitEditing={() => ref_input2.current.focus()}
                              refInput={ref_input1}
                              returnKeyType="next"
                              // type="backgroud check"
                            />

                            <SecurityInput
                              value={xxxx}
                              onChange={(value)=>{setXXXX(value);
                                setXXXXError(false)}}
                              type="XXXX"
                              label="XXXX"
                              // onBlur={() => setFieldTouched('xxxx')}
                              max={4}
                              placeholder="XXXX"
                              widthInput={width / 3}
                              borderColor={
                                !xxxxError
                                  ? 
                                  AppColors.Theme_Buttons
                                  : AppColors.Theme_Red
                              }
                              refInput={ref_input2}
                              returnKeyType="done"
                              

                            />
                          </View>
                        </View>
                         <Text
                          style={[
                            AppStyles.regularText,
                            {margin: 5, marginTop: 10},
                          ]}>
                          {AppStrings.REMAIN_PRIVATE}
                        </Text>
                        <Text style={[AppStyles.regularText, {margin: 5}]}>
                          {AppStrings.NO_CREDIT_CHECK}
                        </Text>
                        <Text style={[AppStyles.regularText, {margin: 5}]}>
                          {AppStrings.INFO_SAFE}
                        </Text>

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
                          <Button title="CONTINUE" onPress={()=>props.navigation.navigate('Processing')} />
                        </View>
                        <Text
                          style={[
                            AppStyles.boldText,
                            {fontSize: 25, textAlign: 'center'},
                          ]}>
                          3/4
                        </Text>
                      </>
                    }
                  />
                </View>
              </View>
          
      </KeyboardAvoidingView>

      {/* </KeyboardAwareScrollView> */}
    </SafeAreaView>
  );
};

/****************************************************************************/

export default Step3Screen;

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 7,
  },
  skipContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginVertical:'4%'
  },
  formikContainer: {
    width: '93%',
    // marginTop: 10,
    alignSelf: 'center',
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
    backgroundColor: 'rgba(52, 52, 52, 0.2)',
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
  // root: { minHeight: 300},
  // title: {textAlign: 'center', fontSize: 30},
  // codeFieldRoot: {marginTop: 20},
  cell: {
    width: 25,
    height: 30,
    // lineHeight: 28,
    fontSize: 20,
    borderWidth: 2,
    borderRadius: 3,
    borderColor: '#00000030',
    textAlign: 'center',
  },
  separator: {
    // height: 2,
    // width: 10,
    backgroundColor: '#000',
    alignSelf: 'center',
  },
  focusCell: {
    borderColor: '#000',
  },
});
