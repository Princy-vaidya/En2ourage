import React, { useRef,useState } from "react";
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
  Dimensions,
  Animated,
  TouchableOpacity
} from "react-native";
import AppColors from "../../../utils/AppColors";
import AppStyles from "../../../utils/AppStyles";
import { Formik } from "formik";
import * as Yup from "yup";
import FormInput from "../../../components/atoms/input/FormInput";
import AppStrings from "../../../utils/AppStrings";
import AppFonts from "../../../utils/AppFonts";
import AppImages from "../../../utils/AppImages";
import Button from "../../../components/atoms/button/Button";
import StepInput from "../../../components/atoms/input/StepInput";

const { width, height } = Dimensions.get("window");

const SignUpUserScreen = (props) => {
  const ref_input1 = useRef();
  const ref_input2 = useRef();

  const {onPress,onSubmit,forgetPass}=props;

  const [activeIndex, setActiveIndex] = useState(0); 
  const [xTabOne, setxTabOne] = useState(0); 
  const [xTabTwo, setxTabTwo] = useState(0); 
  const [translateX, settranslateX] = useState(new Animated.Value(0)); 
  const [translateXTabOne, settranslateXTabOne] = useState(new Animated.Value(0)); 
  const [translateXTabTwo, settranslateXTabTwo] = useState(new Animated.Value(width)); 
  const [translateY, settranslateY] = useState(-1000); 




  /****************************************************************************/

  const Validate = Yup.object().shape({
    name: Yup.string()
      .min(3, AppStrings.invalid_firstname)
      .required(AppStrings.name_required),
    email: Yup.string()
      .email(AppStrings.invalid_email)
      .required(AppStrings.email_required),
    password: Yup.string().required(AppStrings.pass_required),
  });

  /****************************************************************************/
  const onTabChange = (tabIndex) => {
    setActiveIndex(tabIndex);
  };
  /****************************************************************************/

 const handleSlide = type => {
    Animated.spring(translateX, {
        toValue: type,
        duration: 0
    }).start();
    if (activeIndex === 0) {
        Animated.parallel([
            Animated.spring(translateXTabOne, {
                toValue: 0,
                duration:100
            }).start(),
            Animated.spring(translateXTabTwo, {
                toValue: width,
                duration:100
            }).start()
        ]);
    } else {
        Animated.parallel([
            Animated.spring(translateXTabOne, {
                toValue: -width,
                duration:100
            }).start(),
            Animated.spring(translateXTabTwo, {
                toValue: 0,
            }).start()
        ]);
    }
};


  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      
      
            <Formik
              initialValues={{ name: "", email: "", password: "" }}
              onSubmit={onSubmit}
              validationSchema={Validate}
              validateOnChange={true}
              validateOnBlur={false}
            >
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
                      value={values.name}
                      onChange={handleChange("name")}
                      type="name"
                      label="Name"
                      // onBlur={() => setFieldTouched('name')}
                      max={100}
                      placeholder="Name"
                      borderColor={
                        touched.name && errors.name
                          ? AppColors.Theme_Red
                          : AppColors.Theme_Buttons
                      }
                      onSubmitEditing={() => ref_input1.current.focus()}
                      returnKeyType="next"
                    />
                    {touched.name && errors.email && (
                      <Text style={styles.formError}>{errors.name}</Text>
                    )}
                    <StepInput
                      value={values.email}
                      onChange={handleChange("email")}
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
                      onSubmitEditing={() => ref_input2.current.focus()}
                      refInput={ref_input1}
                      returnKeyType="next"
                    />
                  </View>

                  {touched.email && errors.email && (
                    <Text style={styles.formError}>{errors.email}</Text>
                  )}
                  <StepInput
                    value={values.password}
                    onChange={handleChange("password")}
                    type="password"
                    label="Password"
                    onBlur={() => setFieldTouched("password")}
                    max={50}
                    placeholder="Password"
                    borderColor={
                      touched.password && errors.password
                        ? AppColors.Theme_Red
                        : AppColors.Theme_Buttons
                    }
                    refInput={ref_input2}
                    returnKeyType="done"
                  />
                  {touched.password && errors.password && (
                    <Text style={[styles.formError, { marginBottom: -15 }]}>
                      {errors.password}
                    </Text>
                  )}
                  <View style={styles.forgotPassContainer}>
                    <Pressable
                      style={{ alignSelf: "flex-end" }}
                      onPress={forgetPass}
                    >
                      <Text
                        style={[AppStyles.whiteMediumText, { fontSize: 15 }]}
                      >
                        {AppStrings.FORGOT_PASSWORD}
                      </Text>

                      {/* <Image
                    source={AppImages.next}
                    style={{width: 35, height: 20}}
                  /> */}
                    </Pressable>
                  </View>
                  <View style={{}}>
                    <Button title="SIGN UP" onPress={handleSubmit} />
                  </View>

                  <View
                    style={{ marginTop: height * 0.035, alignItems: "center" }}
                  >
                    <View style={{ flexDirection: "row" }}>
                      <Text style={AppStyles.whiteMediumText}>
                        {AppStrings.ALREADY_HAVE_AN_ACCOUNT}
                      </Text>
                      <Pressable
                        onPress={onPress}
                      >
                        <Text
                          style={[
                            AppStyles.whiteMediumText,
                            { color: AppColors.Theme_Red },
                          ]}
                        >
                          {"  " + "Sign In"}
                        </Text>
                      </Pressable>
                    </View>
                    {/* <Text style={AppStyles.whiteMediumText}>
                  {AppStrings.FACEBOOK_LOGIN}
                </Text> */}
                  </View>
                </>
              )}
            </Formik>
         
    </TouchableWithoutFeedback>
  );
};

/****************************************************************************/

export default SignUpUserScreen;

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: "center",
    // justifyContent: 'center',
    // flex:1
  },
  formikContainer: {
    width: "100%",
    marginTop: 15,
  },
  forgotPassContainer: {
    width: "90%",
    alignSelf: "flex-end",
    // flexDirection: 'row',
    marginVertical: height * 0.035,
    marginTop: height * 0.025,
  },
  formError: {
    color: "red",
    marginTop: -8,
    marginBottom: 10,
  },
  logoContainer: {
    width: 121,
    height: 121,
    borderWidth:1,
    borderColor:AppColors.Theme_Buttons,
    borderRadius:110,
    alignSelf: "center",
    marginVertical: height * 0.045,
    //  marginTop:-30,
    alignItems: "center",
    justifyContent: "center",
  },
  activeButton: {
    flex: 0.5,
    backgroundColor: AppColors.Theme_Red,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
  },
  inactiveButton: {
    flex: 0.5,
    height: 40,
    justifyContent: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 20,
    width: "90%",
    alignSelf: "center",
    alignItems: "center",
  },
  modalContainer: {
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
