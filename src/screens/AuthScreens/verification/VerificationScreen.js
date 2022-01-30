import React from 'react';
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
  Keyboard
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
import StepInput from '../../../components/atoms/input/StepInput';

const VerificationScreen = props => {
  /****************************************************************************/

  const Validate = Yup.object().shape({
    code: Yup.string()
      .required('Verification code required.'),
  });

  /****************************************************************************/

  return (
    <TouchableWithoutFeedback
    onPress={Keyboard.dismiss}>
    <SafeAreaView style={[AppStyles.container]}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={AppColors.Theme_Background}
      />
      <Pressable onPress={() => props.navigation.goBack()}>
        {/* <View style={{}}> */}
        <Image source={AppImages.back} style={{margin: 10,marginTop:'5%',marginLeft:'4%'}} />
        {/* </View> */}
      </Pressable>
      <View style={styles.mainContainer}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : null}
          keyboardVerticalOffset={-30}>
          <Text style={[AppStyles.authHeadingText, {marginTop: '31%'}]}>
            Verification
          </Text>

          <View style={{width: '90%', alignSelf: 'center', margin: 10,}}>
            <Text style={[AppStyles.whiteMediumText, {textAlign: 'center',marginVertical:'7%'}]}>
             Enter Code Below
            </Text>
          </View>

          <Formik
            initialValues={{code: ''}}
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
            }) => (
              <>
                <View style={styles.formikContainer}>
                  <StepInput
                    value={values.code}
                    onChange={handleChange('code')}
                    type="code"
                    label="Verification Code"
                    // onBlur={() => setFieldTouched('code')}
                    max={100}
                    placeholder="Verification Code"
                    borderColor={
                      touched.code && errors.code
                        ? AppColors.Theme_Red
                        : AppColors.Theme_Buttons
                    }
                    keyboard="number-pad"
                  />
                </View>

                {touched.code && errors.code && (
                  <Text style={styles.formError}>{errors.code}</Text>
                )}

                <View style={{marginTop: '4%'}}>
                  <Button title="SUBMIT" onPress={handleSubmit} />
                </View>

                <View style={{marginTop:'6%', alignItems: 'center'}}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={AppStyles.whiteMediumText}>
                   Didnt Receive Code?
                  </Text>
                  <Pressable onPress={()=>props.navigation.navigate('Login')}>
                    <Text
                      style={[
                        AppStyles.whiteMediumText,
                        {color: AppColors.Theme_Red},
                      ]}>
                      {'  ' + 'Resend'}
                    </Text>
                  </Pressable>
                </View>
                </View>
              </>
            )}
          </Formik>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

/****************************************************************************/

export default VerificationScreen;

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  formikContainer: {
    width: '100%',
    // marginTop: 10,
  },
  forgotPassContainer: {
    width: '90%',
    alignSelf: 'flex-end',
    flexDirection: 'row',
  },
  formError: {
    color: 'red',
    marginTop: -8,
    marginBottom: 10,
  },
});
