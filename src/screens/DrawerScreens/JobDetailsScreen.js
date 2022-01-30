import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Dimensions,
  FlatList,
  Pressable,
  Image,
  ScrollView
  // Button
} from 'react-native';
import AppColors from '../../utils/AppColors';
import AppStyles from '../../utils/AppStyles';
import AppFonts from '../../utils/AppFonts';
import Header from '../../components/atoms/header/Header';
import JobDetailsList from '../../components/molecule/jobdetails/JobDeatilsList';
import DescriptiveInput from "../../components/atoms/input/DescriptiveInput";
import AppImages from "../../utils/AppImages"
const {width, height} = Dimensions.get('window');

const JobDetailsScreen = props => {
  const [booking,setBooking]=useState([
    {clientname: 'Ray Charlies', time: '9:00pm- 12:00pm', date: '12/12/2021'},
    {clientname: 'Joy Brown', time: '9:00pm- 12:00pm', date: '12/12/2021'},
    {clientname: 'Ray Charlies', time: '9:00pm- 12:00pm', date: '12/12/2021'},
  ]);
  const [detailAttire, setDetailAttire] = useState("");
  const [detailJob, setDetailJob] = useState("");
  /****************************************************************************/

  /****************************************************************************/

  /****************************************************************************/

  /****************************************************************************/

  return (
    <SafeAreaView style={AppStyles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={AppColors.Theme_Background}
      />
     <Header title="Job Details" onPress={()=>props.navigation.goBack()}/> 

     <ScrollView
        // style={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">
        {/* <KeyboardAwareScrollView > */}
     <View style={{width:'90%',alignSelf:'center'}}>
         
         <View style={styles.infoContainer}>
      <Text style={[AppStyles.boldText]}>Booking Information</Text>
      </View>

      <JobDetailsList infoQue="Job Details" infoAns="Ray Chaese"/>
      <JobDetailsList infoQue="Start Time" infoAns="9:00 pm"/>
      <JobDetailsList infoQue="End Time" infoAns="3:00 am"/>
      <JobDetailsList infoQue="Date" infoAns="12/12/2021"/>
      <JobDetailsList infoQue="Location" infoAns="3 New board cities,Hills station, United state."/>

      <View style={[styles.infoContainer,{marginTop:'6%'}]}>
      <Text style={[AppStyles.boldText]}>Special Requirement</Text>
      </View>

      <JobDetailsList infoQue="Attire" infoAns="Formal"/>
      <JobDetailsList infoQue="Firearm" infoAns="Yes"/>
      <JobDetailsList infoQue="Work" infoAns="Team"/>
      <JobDetailsList infoQue="Report To" infoAns="Nate Mcmillan"/>
      
      <View style={{ alignSelf: "center", marginTop: -30 }}>
                <DescriptiveInput
                  value={detailAttire}
                  onChange={(value) => setDetailAttire(value)}
                  type="Job Description"
                  placeholder="Detail description of Attire "
                />
              </View>
              <View style={{ alignSelf: "center", marginTop: -40 }}>
                <DescriptiveInput
                  value={detailJob}
                  onChange={(value) => setDetailJob(value)}
                  type="Job Description"
                  placeholder="Detail description of Job "
                />
              </View>
              <View
                style={{
                  borderWidth: 2,
                  borderColor: AppColors.Theme_Buttons,
                  height: 50,
                  // width: "90%",
                  alignSelf: "center",
                  borderRadius: 5,
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <View
                  style={{
                    flex: 0.2,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRightWidth: 1,
                    borderColor: AppColors.Theme_Buttons,
                  }}
                >
                  <Image
                    source={AppImages.pay}
                    style={{ width: 45, height: 30 }}
                  />
                </View>
                <View
                  style={{
                    flex: 0.6,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 18,
                      fontFamily: AppFonts.RegularFont,
                      color: AppColors.Theme_Gray_Text,
                    }}
                  >
                    **** **** **** 3947
                  </Text>
                </View>
                <View
                  style={{
                    flex: 0.3,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text style={AppStyles.whiteSmallText}>Change</Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%",
                  alignSelf: "center",
                  marginTop: 5,
                }}
              >
                <View
                  style={{
                    flex: 0.3,
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={AppStyles.whiteSmallText}>Cost/Hour</Text>
                  <Text style={AppStyles.whiteSmallText}>:</Text>
                </View>
                <View style={{ flex: 0.18 }}>
                  <Text style={AppStyles.whiteSmallText}>$55</Text>
                </View>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%",
                  alignSelf: "center",
                  marginTop: 5,
                }}
              >
                <View
                  style={{
                    flex: 0.3,
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={AppStyles.whiteSmallText}>Total Hour</Text>
                  <Text style={AppStyles.whiteSmallText}>:</Text>
                </View>
                <View style={{ flex: 0.18 }}>
                  <Text style={AppStyles.whiteSmallText}>9 Hours</Text>
                </View>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%",
                  alignSelf: "center",
                  marginTop: 5,
                }}
              >
                <View
                  style={{
                    flex: 0.3,
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={AppStyles.whiteSmallText}>App Fees</Text>
                  <Text style={AppStyles.whiteSmallText}>:</Text>
                </View>
                <View style={{ flex: 0.18 }}>
                  <Text style={AppStyles.whiteSmallText}>$74.24</Text>
                </View>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%",
                  alignSelf: "center",
                  marginTop: 5,
                }}
              >
                <View
                  style={{
                    flex: 0.3,
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={AppStyles.whiteSmallText}>Total cost</Text>
                  <Text style={AppStyles.whiteSmallText}>:</Text>
                </View>
                <View style={{ flex: 0.18 }}>
                  <Text style={AppStyles.whiteSmallText}>$420.75</Text>
                </View>
              </View>


    
     </View>
      </ScrollView>
   
    </SafeAreaView>
  );
};

/****************************************************************************/

export default JobDetailsScreen;

const styles = StyleSheet.create({
  infoContainer:{
    borderBottomWidth:2,
    borderBottomColor:AppColors.Theme_Buttons,
    width:180,
    paddingBottom:5,
    marginBottom:6
  }
});
