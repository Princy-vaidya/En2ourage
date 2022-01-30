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

const SignUpSecurityScreen = (props) => {
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

 


  return (
    <View style={{width: width / 1.1,marginTop:20}}>
<Text style={[AppStyles.boldWhiteText,{fontSize:20}]}>Make money on your time with</Text>
<Text style={[AppStyles.boldWhiteText,{fontSize:20,color:AppColors.Theme_Red}]}>En2ourage.</Text>
<Text style={[AppStyles.boldWhiteText,{fontSize:20}]}
numberOfLines={4}
adjustsFontSizeToFit>Learn more about this opportunity, explore the requirments to be part of our team, and see what you need to sign up.</Text>

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
                    <Button title="SIGN UP" onPress={onSubmit} />
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
                   </View>
    </View>
  );
};

/****************************************************************************/

export default SignUpSecurityScreen;

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
});
