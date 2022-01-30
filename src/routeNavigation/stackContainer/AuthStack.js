
import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../../screens/AuthScreens/login/LoginScreen';
import OnboardingScreen from "../../screens/AuthScreens/onboarding/OnboardingScreen";
import Step1Screen from "../../screens/AuthScreens/step/Step1Screen";
import Step2Screen from "../../screens/AuthScreens/step/Step2Screen";
import Step3Screen from "../../screens/AuthScreens/step/Step3Screen";
import Step4Screen from "../../screens/AuthScreens/step/Step4Screen";
import ProcessingScreen from "../../screens/AuthScreens/step/ProcessingScreen";
import DrawerScreen from "../stackContainer/DrawerStack";
import SignUpScreen from "../../screens/AuthScreens/signup/SignUpScreen";

const AuthStack = createStackNavigator();
const AuthStackScreen = () => {
    return (
      <AuthStack.Navigator headerMode="none" initialRouteName="Onboarding">
        {/* <AuthStack.Screen name="Splash" component={Splash} /> */}
        <AuthStack.Screen name="Onboarding" component={OnboardingScreen} />
        <AuthStack.Screen name="Step1" component={Step1Screen} />
        <AuthStack.Screen name="Step2" component={Step2Screen} />
        <AuthStack.Screen name="Step3" component={Step3Screen} />
        <AuthStack.Screen name="Step4" component={Step4Screen} />
        <AuthStack.Screen name="Processing" component={ProcessingScreen} />
        <AuthStack.Screen name="Login" component={LoginScreen} />
        <AuthStack.Screen name="Drawer" component={DrawerScreen} />
        <AuthStack.Screen name="Signup" component={SignUpScreen} />
        {/* <AuthStack.Screen name="Signup" component={Signup} />
        <AuthStack.Screen
          options={{
            headerShown: true,
            headerTitle: 'Forgot Password',
            headerStyle: {backgroundColor: COLORS.WHITE},
          }}
          name="ForgotPass"
          component={ForgotPassword}
        />
  
        <AuthStack.Screen
          name="Verification"
          component={EmailVarifyScreeen}
          options={{
            headerShown: true,
            headerTitle: 'Verification Code',
            headerBackTitle: '',
            headerStyle: {backgroundColor: '#fff'},
          }}
        /> */}
  
      </AuthStack.Navigator>
    );
  };
  export default AuthStackScreen;