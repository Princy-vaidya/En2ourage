import React, {useState,useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Pressable,
} from 'react-native';
import AppStyles from '../../utils/AppStyles';
import AppColors from '../../utils/AppColors';
import AppImages from '../../utils/AppImages';
import DashboardUserScreen from "./DashboardUserScreen";
import SecurityListScreen from "./SecurityListScreen";
import AllpersonnelScreen from "./AllpersonnelScreen";

const DashboardBottomTab = (props) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  useEffect(() => {
  let index=props.route.params?props.route.params.index:0;

setActiveTabIndex(index)
    
  }, [props.route.params])

  const onTabChange = tabIndex => {
    setActiveTabIndex(tabIndex);
  };

  

  return (
    <SafeAreaView style={[AppStyles.container]}>
         {activeTabIndex==0?
      <DashboardUserScreen
      navigation={()=>props.navigation.navigate('Filter')}
      onMenuPress={()=>props.navigation.toggleDrawer()}
      onPersonnelPress={()=>setActiveTabIndex(3)}
      onViewPress={props.navigation}
     
      />
   :
      activeTabIndex==1?
      
       <SecurityListScreen
        navigation={()=>props.navigation.navigate('Filter')}
        onMenuPress={()=>props.navigation.toggleDrawer()}
        onViewPress={props.navigation}
        onContinue={()=> props.navigation.navigate("CheckOutFirst")}/>
       :
       <AllpersonnelScreen
        navigation={()=>props.navigation.navigate('Filter')}
        onMenuPress={()=>props.navigation.toggleDrawer()}
        onViewPress={props.navigation}
        />
    
      }
      <SafeAreaView style={styles.buttonContainer}>
        <Pressable
          style={
            activeTabIndex === 0 ? styles.activeButton : styles.inactiveButton
          }
          onPress={() => onTabChange(0)}>
          <Image source={activeTabIndex === 0 ?AppImages.activeHome:AppImages.inactiveHome} />
        </Pressable>
        <Pressable
          style={
            activeTabIndex === 1 ? styles.activeButton : styles.inactiveButton
          }
          onPress={() => onTabChange(1)}>
          <Image source={activeTabIndex === 1?AppImages.activeSecurity:AppImages.inactiveSecurity} />
        </Pressable>
      </SafeAreaView>
     
    </SafeAreaView>
  );
};

export default DashboardBottomTab;

const styles = StyleSheet.create({
  activeButton: {
    borderWidth: 1,
    width: '50%',
    borderColor: AppColors.Theme_Red,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:AppColors.Theme_Background
  },
  inactiveButton: {
    borderWidth: 1,
    borderColor: AppColors.Theme_Buttons,
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    // position: 'absolute',
    // bottom: 0,
    flexDirection: 'row',
    height: 40,
    width: '100%',
    backgroundColor:AppColors.Theme_Background,
    // marginBottom:10
  },
});
