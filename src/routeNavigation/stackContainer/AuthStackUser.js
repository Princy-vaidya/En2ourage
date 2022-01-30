
import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../../screens/AuthScreens/login/LoginScreen';
import DrawerUserScreen from "../stackContainer/DrawerUserStack";
import SignUpScreen from "../../screens/AuthScreens/signup/SignUpScreen";
import ForgotpassScreen from "../../screens/AuthScreens/forgotpassword/ForgotpassScreen";
import FindProtectionScreen from "../../screens/AuthScreens/findProtection/FindProtectionScreen";
import VerificationScreen from "../../screens/AuthScreens/verification/VerificationScreen"
import OnboardingScreen from "../../screens/AuthScreens/onboarding/OnboardingScreen";
import Step1Screen from "../../screens/AuthScreens/step/Step1Screen";
import Step2Screen from "../../screens/AuthScreens/step/Step2Screen";
import Step3Screen from "../../screens/AuthScreens/step/Step3Screen";
import Step4Screen from "../../screens/AuthScreens/step/Step4Screen";
import ProcessingScreen from "../../screens/AuthScreens/step/ProcessingScreen";
import DrawerUserStack from "../stackContainer/DrawerUserStack";
import DrawerStack from "../stackContainer/DrawerStack";

const AuthStack = createStackNavigator();
const AuthStackUserScreen = () => {
    return (
      <AuthStack.Navigator headerMode="none" initialRouteName="Login">
        {/* <AuthStack.Screen name="Splash" component={Splash} /> */}
        <AuthStack.Screen name="Login" component={LoginScreen} />
        <AuthStack.Screen name="Signup" component={SignUpScreen} />
        <AuthStack.Screen name="Forgotpass" component={ForgotpassScreen} />
        <AuthStack.Screen name="Verification" component={VerificationScreen} />
        <AuthStack.Screen name="FindProtection" component={FindProtectionScreen} />
        <AuthStack.Screen name="DrawerUser" component={DrawerUserStack} />
        <AuthStack.Screen name="Onboarding" component={OnboardingScreen} />
        <AuthStack.Screen name="Step1" component={Step1Screen} />
        <AuthStack.Screen name="Step2" component={Step2Screen} />
        <AuthStack.Screen name="Step3" component={Step3Screen} />
        <AuthStack.Screen name="Step4" component={Step4Screen} />
        <AuthStack.Screen name="Processing" component={ProcessingScreen} />
        <AuthStack.Screen name="Drawer" component={DrawerStack} />
      </AuthStack.Navigator>
    );
  };
  export default AuthStackUserScreen;