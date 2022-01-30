import React, {useState,useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Dimensions,
  FlatList,
  Image,
  Pressable,
  Switch,
  Animated,
  Easing,

  // Button
} from 'react-native';
import AppColors from '../../utils/AppColors';
import AppStyles from '../../utils/AppStyles';
import DashboardTab from '../../components/atoms/button/DashboardTab';
import Header from "../../components/atoms/header/Header";
import SubscriptionList from '../../components/molecule/step/SubscriptonList';
import SelectOneButton from '../../components/atoms/button/SelectOneButton';
import AppImages from '../../utils/AppImages';
import ClientDetailList from '../../components/organisms/ClientDetailList';
import AppFonts from '../../utils/AppFonts';
import * as ImagePicker from "react-native-image-picker";



const {width, height} = Dimensions.get('window');

const DashboardScreen = props => {
  const [clientDetail, setClientDetail] = useState([
    {clientname: 'Ray Charlies', time: '9:00pm- 12:00pm', date: '12/12/2021'},
    {clientname: 'Joy Brown', time: '9:00pm- 12:00pm', date: '12/12/2021'},
    {clientname: 'Ray Charlies', time: '9:00pm- 12:00pm', date: '12/12/2021'},
  ]);
  const [isToggle, setIsToggle] = useState(false);
  const toggleSwitch = () => setIsToggle(previousState => !previousState);
  const knobOffset = 32;
  const animatedValue= new Animated.Value(isToggle ? knobOffset : 0);
  const [pic, setPic] = useState("");


  /****************************************************************************/
  useEffect(() => {
    Animated.timing(
     animatedValue,
      {
        toValue: isToggle? knobOffset : 0,
        easing: Easing.elastic(0.7),
        duration: 100,
      }
    ).start()
  }, []);
  /****************************************************************************/

  /****************************************************************************/
  const onAddPhoto = async () => {
    ImagePicker.launchImageLibrary(
      {
        mediaType: "photo",
        includeBase64: false,
        maxHeight: 200,
        maxWidth: 200,
      },
      async (response) => {
        if (response.didCancel == true) {
          const profile = await getValuesFormStorage("pic");
          setPic(profile);
        } else {
          setPic(response.uri);

          try {
            await setValuesInStorage("pic", response.uri);
          } catch (e) {
            console.log("user detail", e);
          }
        }
        console.log("ooo", response);
      }
    );
  };

  /****************************************************************************/

  return (
    <SafeAreaView style={[AppStyles.container]}>
       <Header
        title="EN2OURAGE"
        type="menu"
        onPress={()=>props.navigation.toggleDrawer()}
      />
        <View style={{flex:1,width:'90%',alignSelf:'center'}}>
        <FlatList
          ListHeaderComponent={
            <>
              <View style={{flexDirection: 'row',width:'100%'}}>
                <View style={{width:'30%'}}>
                <Pressable style={{marginTop:10,width:80}}
         onPress={()=>onAddPhoto()}>
          {pic===""?
        <Image source={AppImages.profile} style={{width:80,height:80,borderRadius:80}}/>
       :
        <Image source={{uri:pic}} style={{width:80,height:80,borderRadius:80}}/>
   }
       <View style={{backgroundColor:AppColors.Theme_Gray_Text,width:22,height:22,borderRadius:25,position:'absolute',bottom:5,right:0,alignItems:'center',justifyContent:'center'}}>
         <Image source={require('../../assets/images/camera.png')}
          style={{width:15,height:11,tintColor:'black'}}/>
        </View>
        </Pressable>
                      </View>
                <View style={styles.profileDetail}>
                  <Text style={{fontSize:15,color:'white',fontFmaily:AppFonts.MediumFont}}>Bobby Brown</Text>
                  <Text style={{fontSize:15,color:'white',fontFmaily:AppFonts.MediumFont}}
                  numberOfLines={1}
                  adjustsFontSizeToFit>
                    Bobethbuilder@en2ourage.com
                  </Text>
                </View>
              </View>

              <Text
                style={[
                  AppStyles.boldHeadingText,
                  {textAlign: 'left', marginTop: 10,fontSize:25},
                ]}>
                My Dashboard
              </Text>
              <Image
                source={AppImages.map}
                style={{width: '100%', borderRadius: 10, marginTop: 10}}
              />
            </>
          }
          data={clientDetail}
          renderItem={({item}) => 
          <ClientDetailList item={item}
          onJobDetail={()=>props.navigation.navigate('JobDetails')}
           />}
          keyExtractor={item => item.id}
          ListFooterComponent={
            <View>
              <View style={styles.dashboardTabContainer}>
                <DashboardTab title="ACTIVE JOBS" 
                onPress={()=>props.navigation.navigate('Activejobs')}/>
                <DashboardTab title="PROFILE" 
                 onPress={()=>props.navigation.navigate('Profile')}/>
                <DashboardTab title="MY REVIEWS"
                onPress={()=>props.navigation.navigate('Myreview')} />
              </View>
          
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginHorizontal: 10,
                  marginTop: 20,
                }}>
                <Text style={AppStyles.normalRegularText}>
                  Offline/Online Mode
                </Text>
                

     <Pressable
        activeOpacity={0.5}
        style={{
          backgroundColor: isToggle ? "white" : "gray",
          width: 55,
          height: 25,
          borderRadius: 32,
          padding:4,
        }}
        onPress={() => toggleSwitch()}
      >
        <Animated.View style={{
          width: 16,
          height: 16,
          borderRadius: 32,
          backgroundColor:'black',
          transform: [{
            translateX: animatedValue,
          }]
        }} />
      </Pressable>
              </View>
            </View>
          }
        />
      </View>
    </SafeAreaView>
  );
};

/****************************************************************************/

export default DashboardScreen;

const styles = StyleSheet.create({
  skipContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 10,
  },

  title: {
    alignSelf: 'flex-end',
    marginBottom: '6%',
  },

  packageContainer: {
    width: '90%',
    alignSelf: 'center',
    borderBottomWidth: 2,
    borderColor: AppColors.Theme_Buttons,
    paddingBottom: 5,
    marginBottom: 20,
  },
  profileDetail: {
    alignSelf: 'center',
    width:'70%',

  },
  dashboardTabContainer: {
    flexDirection: 'row',
    margin: 5,
    justifyContent: 'space-between',
    marginTop: 20,
  },
});
