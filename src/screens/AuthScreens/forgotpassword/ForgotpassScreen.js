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

const ForgotpassScreen = props => {
  /****************************************************************************/

  const Validate = Yup.object().shape({
    email: Yup.string()
      .email(AppStrings.invalid_email)
      .required(AppStrings.email_required),
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
            Forgot Password
          </Text>

          <View style={{width: '90%', alignSelf: 'center', margin: 10,marginTop:'10%'}}>
            <Text style={[AppStyles.whiteMediumText, {textAlign: 'center'}]}>
              {AppStrings.RESET_PASSWORD}
            </Text>
          </View>

          <Formik
            initialValues={{email: '', password: ''}}
            onSubmit={() => props.navigation.navigate('Verification')}
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
                  />
                </View>

                {touched.email && errors.email && (
                  <Text style={styles.formError}>{errors.email}</Text>
                )}

                <View style={{marginTop: '4%'}}>
                  <Button title="SEND" onPress={handleSubmit} />
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

export default ForgotpassScreen;

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
