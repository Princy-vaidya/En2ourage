import React ,{useRef,useState}from 'react';
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
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions
} from 'react-native';
import AppColors from '../../../utils/AppColors';
import AppStyles from '../../../utils/AppStyles';
import {Formik} from 'formik';
import * as Yup from 'yup';
import FormInput from '../../../components/atoms/input/FormInput';
import AppStrings from '../../../utils/AppStrings';
import AppFonts from '../../../utils/AppFonts';
import AppImages from '../../../utils/AppImages';
import Button from '../../../components/atoms/button/Button';
import StepInput from "../../../components/atoms/input/StepInput";
import {KeyboardAwareScrollView} from '@codler/react-native-keyboard-aware-scroll-view';

const {width, height} = Dimensions.get('window');

const LoginScreen = (props) => {

  const ref_input1=useRef();
  const ref_input2=useRef();

  const [showError,setShowError]=useState(false)
/****************************************************************************/

  const Validate = Yup.object().shape({
    email: Yup.string()
      .email(AppStrings.invalid_email)
      .required(AppStrings.email_required),
    password: Yup.string().required(AppStrings.pass_required),
  });

 /****************************************************************************/
const onLogin=(errors)=>{
  
  if(!errors){
  props.navigation.navigate('FindProtection')
  }
}
  return (
  
      <TouchableWithoutFeedback
     onPress={Keyboard.dismiss}>
         <SafeAreaView style={[AppStyles.container]}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={AppColors.Theme_Background}
      />
       {/* <Pressable onPress={()=>props.navigation.goBack()}>
          <Image source={AppImages.back} style={{margin:10}}/>
       </Pressable> */}
                  <View style={styles.mainContainer}>
      {/* <KeyboardAwareScrollView> */}
        <ScrollView>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : null}
          // keyboardVerticalOffset={+30}
          >
        <View style={styles.logoContainer}>
         {/* <Text style={{color:'white',fontFamily:AppFonts.BoldFont,fontSize:40}}>EN2
         <Text style={{color:AppColors.Theme_Red,fontFamily:AppFonts.BoldFont,fontSize:40}}>ourage</Text>
         </Text>  */}
         <Image source={AppImages.textLogo} style={{width:200,height:100}}
         resizeMode="contain"/>
        </View>

       
         
        <Text style={AppStyles.authHeadingText}>Sign In</Text>
        <Formik
          initialValues={{email: '', password: ''}}
          onSubmit={() => props.navigation.navigate('FindProtection')}
          validationSchema={Validate}
          validateOnChange={true}
          validateOnBlur={false}>
          {({
            values,
            handleChange,
            errors,
            handleSubmit,
            touched,
            setFieldTouched,
            handleSave
          }) => (
            <>
              <View style={styles.formikContainer}>
                <StepInput
                  value={values.email}
                  onChange={handleChange('email')}
                  type="email"
                  label="Email"
                  // onBlur={() => setFieldTouched('email')}
                  max={100}
                  placeholder="Email"
                  borderColor={errors.email && touched.email ? AppColors.Theme_Red:AppColors.Theme_Buttons}
                  onSubmitEditing={()=>ref_input1.current.focus()}
                  returnKeyType="next"
                  focuss={touched.email}
                />
              </View>

              {errors.email && touched.email &&(
                <Text style={styles.formError}>{errors.email}</Text>
              )}
              <StepInput
                value={values.password}
                onChange={handleChange('password')}
                type="password"
                label="Password"
                // onBlur={() => setFieldTouched('password')}
                max={50}
                placeholder="Password"
                borderColor={errors.password && touched.password? AppColors.Theme_Red:AppColors.Theme_Buttons}
                refInput={ref_input1}
                returnKeyType="done"
                // focuss={touched.password}
              />
              {errors.password  && touched.password && (
                <Text style={[styles.formError,{marginBottom:-15}]}>{errors.password}</Text>
              )}
              <View style={styles.forgotPassContainer}>
              <Pressable style={{alignSelf:'flex-end'}}
                onPress={()=>props.navigation.navigate('Forgotpass')}>
                <Text style={[AppStyles.whiteMediumText,{fontSize:15}]}>
                  {AppStrings.FORGOT_PASSWORD}
                </Text>
              
                  {/* <Image
                    source={AppImages.next}
                    style={{width: 35, height: 20}}
                  /> */}
                </Pressable>
              </View>

              <View style={{}}>
                <Button title="LOGIN" onPress={handleSubmit} />
              </View>

              <View style={{marginTop:height*0.035, alignItems: 'center'}}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={AppStyles.whiteMediumText}>
                    {AppStrings.DONT_HAVE_ACCOUNT}
                  </Text>
                  <Pressable 
                  onPress={()=>props.navigation.navigate('Signup')}>
                    <Text
                      style={[
                        AppStyles.whiteMediumText,
                        {color: AppColors.Theme_Red},
                      ]}>
                      {'  ' + 'Sign Up'}
                    </Text>
                  </Pressable>
                </View>
                {/* <Text style={[AppStyles.whiteMediumText]}>
                  {AppStrings.FACEBOOK_LOGIN}
                </Text> */}
              </View>
            </>
          )}
        </Formik>
        </KeyboardAvoidingView>
        </ScrollView>
      {/* </KeyboardAwareScrollView> */}
    
      </View>
      </SafeAreaView>
      </TouchableWithoutFeedback>
    
  );
};

/****************************************************************************/

export default LoginScreen;

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    // justifyContent: 'center',
    // flex:1
  },
  formikContainer: {
    width: '100%',
    marginTop: 15,
  },
  forgotPassContainer: {
    width: '90%',
    alignSelf: 'flex-end',
    // flexDirection: 'row',
    marginVertical:height*0.035,
    marginTop:height*0.025
  },
  formError: {
    color: 'red',
    marginTop: -8,
    marginBottom: 10,
  },
  logoContainer:{
    // width:122, 
    height:122, 
    // borderWidth:1,
    // borderColor:AppColors.Theme_Buttons,
    borderRadius:110,
    alignSelf:'center',
    marginVertical:height*0.045,
    //  marginTop:-30,
    alignItems:'center',
    justifyContent:'center'
  }
});
