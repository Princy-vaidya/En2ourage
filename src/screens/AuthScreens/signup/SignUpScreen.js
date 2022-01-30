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
  TouchableOpacity,
  Modal
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
import StepInput from "../../../components/atoms/input/StepInput"
import SignUpUserScreen from "./SignUpUserScreen"
import {KeyboardAwareScrollView} from '@codler/react-native-keyboard-aware-scroll-view';
import SignUpSecurityScreen from "./SignupSecurityScreen";

const { width, height } = Dimensions.get("window");

const SignUpScreen = (props) => {
  const ref_input1 = useRef();
  const ref_input2 = useRef();

  const [activeIndex, setActiveIndex] = useState(0); 
  const [xTabOne, setxTabOne] = useState(0); 
  const [xTabTwo, setxTabTwo] = useState(0); 
  const [translateX, settranslateX] = useState(new Animated.Value(0)); 
  const [translateXTabOne, settranslateXTabOne] = useState(new Animated.Value(0)); 
  const [translateXTabTwo, settranslateXTabTwo] = useState(new Animated.Value(width)); 
  const [translateY, settranslateY] = useState(-1000); 

  const [visible,setVisible]=useState(true)




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
      <SafeAreaView style={[AppStyles.container, styles.mainContainer]}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={AppColors.Theme_Background}
        />

<Modal
           visible={visible}
           transparent={true}
           animationType={"fade"}
           onRequestClose={() => {}}
         >
              <View style={styles.modalView}>
               <View style={[styles.modalContainer]}>
                 <ScrollView>
                 <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : null}
          // keyboardVerticalOffset={+30}
          >
        <View style={styles.mainContainer}>
          {/* <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        keyboardVerticalOffset={-30}> */}
          <ScrollView>
            <View style={styles.logoContainer}>
              {/* <Text style={AppStyles.whiteMediumText}>LOGO</Text> */}
              <Image source={AppImages.textLogo} style={{width:200,height:100}}
         resizeMode="contain"/>
            </View>
           
            <View
                        style={styles.buttonContainer}
                    >
                        <Animated.View
                            style={{
                                position: "absolute",
                                width: "50%",
                                height: "100%",
                                top: 0,
                                left: 0,
                               backgroundColor: AppColors.Theme_Red,
                                borderRadius:30,
                                // borderRadius: 4,
                                transform: [
                                    {
                                        translateX
                                    }
                                ]
                            }}
                        />
              <Pressable
                style={
                  // activeIndex === 0
                  //   ? styles.activeButton
                    // :
                     styles.inactiveButton
                }
                onLayout={event =>
                  setxTabOne(event.nativeEvent.layout.x)
              }
                onPress={() => {onTabChange(0);handleSlide(xTabOne)}}
              >
                <Text
                  style={[
                    AppStyles.boldHeadingText,
                    activeIndex === 0
                      ? { fontSize: 20 }
                      : { fontSize: 20, color: "black" },
                  ]}
                >
                  USER
                </Text>
              </Pressable>
              <Pressable
                style={
                  // activeIndex === 1
                  //   ? styles.activeButton
                    // : 
                    styles.inactiveButton
                }
                onLayout={event =>
                  setxTabTwo(event.nativeEvent.layout.x)
              }
                onPress={() => {onTabChange(1);handleSlide(xTabTwo)}}
              >
                <Text
                  style={[
                    AppStyles.boldHeadingText,
                    activeIndex === 1
                      ? { fontSize: 20 }
                      : { fontSize: 20, color: "black" },
                  ]}
                >
                  SECURITY
                </Text>
              </Pressable>
           
            </View>
            <Text style={[AppStyles.authHeadingText, { marginTop: "8%" }]}>
              Sign Up
            </Text>
           {activeIndex ===0 ?
         
             <SignUpUserScreen
           onPress={()=>{props.navigation.navigate("Login"),setVisible(false)}}
           onSubmit={() => {props.navigation.navigate("FindProtection"),setVisible(false)}}
           forgetPass={()=>props.navigation.navigate("Forgotpass")}/>
           
           :
           <SignUpSecurityScreen
           onPress={()=>{props.navigation.navigate("Login"),setVisible(false)}}
           onSubmit={() => {props.navigation.navigate("Onboarding"),setVisible(false)}}
           forgetPass={()=>props.navigation.navigate("Forgotpass")}/>}
          </ScrollView>
          {/* </KeyboardAvoidingView> */}
        </View>
        </KeyboardAvoidingView>
        </ScrollView>
      </View>
      </View>
      </Modal>
      </SafeAreaView>
      
    
     
    </TouchableWithoutFeedback>
  );
};

/****************************************************************************/

export default SignUpScreen;

const styles = StyleSheet.create({
  modalView: {
    alignItems: "center",
    // justifyContent: "center",
    flex: 1,

    // backgroundColor: "rgba(52, 52, 52, 0.6)",
  },
  modalContainer: {
    // backgroundColor: "#2f2f2f",
    width: "100%",
    alignItems: "center",
  
    // position: "absolute",
    // bottom: 0,
  },
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
    // borderWidth:1,
    // borderColor:AppColors.Theme_Buttons,
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
