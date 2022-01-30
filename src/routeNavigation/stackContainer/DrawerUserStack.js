import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import About from '../screens/About';
import Settings from '../screens/Settings';
import Animated from 'react-native-reanimated';
import NavigationDrawer from "../../screens/NavigationDrawer/NavigationDrawer";
import AppColors from "../../utils/AppColors";
import AppStyle from "../../utils/AppStyles";
import AppFonts from "../../utils/AppFonts";
import AppImage from "../../utils/AppImages";
import ActivejobsScreen from "../../screens/DrawerScreens/ActivejobsScreen"
import FilterScreen from "../../screens/dashboardUser/FilterScreen";
import SettingScreen from "../../screens/DrawerScreens/SettingScreen";
import JobDetailsScreen from "../../screens/DrawerScreens/JobDetailsScreen";
import AllpersonnelScreen from "../../screens/dashboardUser/AllpersonnelScreen";
import OverviewScreen from "../../screens/dashboardUser/OverviewScreen";
import CheckOutFirstScreen from "../../screens/checkout/CheckOutFirstScreen";
import CheckOutSecondScreen from "../../screens/checkout/CheckOutSecondScreen";
import BookScreen from "../../screens/book/BookScreen";
import BookingScreen from "../../screens/DrawerScreens/BookingScreen";
import StarRatingScreen from "../../screens/starrating/StarRatingScreen";
import BookingUserScreen from "../../screens/DrawerScreens/BookingUserScreen"
import AboutScreen from "../../screens/setting/AboutScreen";
import PrivacySecurityScreen from "../../screens/setting/PrivacySecurityScreen";
import TermConditionScreen from "../../screens/setting/TermConditionScreen";
import PrivacyPolicyScreen from "../../screens/setting/PrivacyPolicyScreen";
import SuccessScreen from "../../screens/success/SuccessScreen";
import AccountScreen from "../../screens/setting/AccountScreen";
import HelpSupportScreen from "../../screens/setting/Help&SupportScreen";
import NotificationScreen from "../../screens/DrawerScreens/NotificationScreen";
import DashboardBottomTab from "../../screens/dashboardUser/DashboardBottomTab";
import FavouriteListScreen from '../../screens/DrawerScreens/FavouritListScreen';
import Step3Screen from "../../screens/AuthScreens/step/Step3Screen";
import MyReviewScreen from "../../screens/DrawerScreens/MyReviewScreen";
import SubscriptionScreen from "../../screens/setting/SubscriptionScreen";


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();


const Screens = ({navigation, style}) => {
  return (
    <Animated.View style={[styles.stack, style]}>
      <Stack.Navigator
        screenOptions={{
          headerShown:false
        }}>
        <Stack.Screen name="BottomTab" component={DashboardBottomTab} />
        <Stack.Screen name="Allpersonnel" component={AllpersonnelScreen} />
        <Stack.Screen name="Filter" component={FilterScreen} />
        <Stack.Screen name="Setting" component={SettingScreen} />
        <Stack.Screen name="Book" component={BookScreen} />
        <Stack.Screen name="CheckOutFirst" component={CheckOutFirstScreen} />
        <Stack.Screen name="CheckOut" component={CheckOutSecondScreen} />
        <Stack.Screen name="StarRating" component={StarRatingScreen} />
        <Stack.Screen name="MyReview" component={MyReviewScreen} />
        <Stack.Screen name="JobDetails" component={JobDetailsScreen} />
        <Stack.Screen name="Activejobs" component={ActivejobsScreen} />
        <Stack.Screen name="Booking" component={BookingUserScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="PrivacySecurity" component={PrivacySecurityScreen} />
        <Stack.Screen name="TermCondition" component={TermConditionScreen} />
        <Stack.Screen name="Privacy" component={PrivacyPolicyScreen} />
        <Stack.Screen name="Account" component={AccountScreen} />
        <Stack.Screen name="Notification" component={NotificationScreen} />
        <Stack.Screen name="Success" component={SuccessScreen} />
        <Stack.Screen name="HelpSupport" component={HelpSupportScreen} />
        <Stack.Screen name="Overview" component={OverviewScreen} />
        <Stack.Screen name="FavouriteList" component={FavouriteListScreen} />

      </Stack.Navigator>
    </Animated.View>
  );
};
export default () => {
  const [progress, setProgress] = useState(new Animated.Value(0));
  const scale = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });
  const borderRadius = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [0, 10],
  });
  const animatedStyle = {borderRadius, transform: [{scale}]};
  return (
    <View style={styles.container} >
      <Drawer.Navigator
        backBehavior="none"
        initialRouteName="Home"
        drawerType="slide"
        overlayColor="transparent"
        drawerStyle={styles.drawerStyles}
        contentContainerStyle={styles.container}
        drawerContentOptions={{
          activeBackgroundColor: 'transparent',
          activeTintColor: 'white',
          inactiveTintColor: 'white',
        }}
        sceneContainerStyle={styles.scene}
        drawerContent={(props) => {
          setProgress(props.progress);
          return <NavigationDrawer {...props} />;
        }}>
        <Drawer.Screen name="Screens">
          {(props) => <Screens {...props} style={animatedStyle} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#323232'
  },
  scene: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
    backgroundColor: 'transparent',
  },
  stack: {
    flex: 1,
    shadowColor: '#FFF',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 5,
    overflow: 'hidden',
  },
  drawerStyles: {flex: 1, width: '50%', backgroundColor: 'transparent'},
  menu: {
    width: 38,
    height: 38,
    margin: 20,
  },
  drawerLblStyle: {
    fontWeight: '500',
    fontSize: 20,
  },
});
