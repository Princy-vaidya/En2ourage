import React, {useState} from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  Pressable,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  Platform
} from 'react-native';
import AppColors from '../../../utils/AppColors';
import AppStyle from '../../../utils/AppStyles';
import AppStrings from '../../../utils/AppStrings';
import AppImages from '../../../utils/AppImages';
import AppStyles from '../../../utils/AppStyles';
import AppFonts from '../../../utils/AppFonts';
import { overlay } from 'react-native-paper';

const {width, height} = Dimensions.get('window');

const slides = [
  {
    key: 1,
    title: '1',
    text: 'Fill out the application form with all the relevant details.',
    // image: AppImages.onboarding,
    backgroundColor: '#59b2ab',
  },
  {
    key: 2,
    title: '2',
    text: 'Submit all relevant documents to verify you identity as well as other security credential.',
    // image: AppImages.onboarding,
    backgroundColor: '#febe29',
  },
  {
    key: 3,
    title: '3',
    text: 'Submit to background check, and if cleared you will be accepted and be ready to work',
    // image: AppImages.onboarding,
    backgroundColor: '#22bcb5',
  },
  {
    key: 4,
    title: '4',
    text: 'Choose a subscription model that best fits your needs and start work',
    // image: AppImages.onboarding,
    backgroundColor: '#22bcb5',
  },
];

const OnboardingScreen = props => {
  const [showRealApp, setShowRealApp] = useState(false);
  const [indexNumber,setIndexNumber]=useState(0)
  /****************************************************************************/

  const _renderItem = ({item, index}) => {
    console.log('index', index);
    return (
      // <View style={{backgroundColor: AppColors.Theme_Background,height:height,width:width}}>
      //   <View style={{height:'15%',justifyContent:'center'}}>
      //   <Text style={[AppStyles.regularLargeWhiteText,{textAlign:'center'}]}>
      //     On Boarding
      //   </Text>
      //   </View>
      //   <View style={styles.slide}>
      //     <ImageBackground source={AppImages.onboarding} 
      //     style={styles.imageStyle}
      //     imageStyle= 
      //   {{opacity:0.5}}>
      <View>
            <View style={{marginHorizontal:'7%',  }}>
              <View style={{ flexDirection: 'row',marginTop:'12%'}}>
                <Text style={[AppStyle.redLargeText]}>S</Text>
                <Text style={[AppStyle.boldWhiteText,{fontSize:27,fontFamily:'Roboto-Black',marginTop:'15%'}]}>
                  tep {item.title}
                </Text>
               
              </View>
              <Text
              numberOfLines={4}
              // adjustsFontSizeToFit
              style={[AppStyles.boldWhiteText, styles.text]}
              >
                {item.text}
              </Text>
             
            </View>
            {/* {item.title==="4" ?<View></View>:
            <View style={styles.skipItemButton}>
            <Pressable onPress={()=>_onSkip()}>
            
                <Text style={[AppStyles.boldText,{fontSize:20}]}>Skip</Text>
               
              </Pressable>
              </View>} */}
              </View>
      //     </ImageBackground>
      //   </View>
      // </View>
    );
  };

  const onNext=()=>{
    if(indexNumber===0)
    setIndexNumber(1)
    else if(indexNumber===1)
    setIndexNumber(2);
    else if(indexNumber===2)
    setIndexNumber(3);
    else setIndexNumber(4)
    
  }

  /****************************************************************************/

  const _onDone = () => {
    setShowRealApp(true);
    props.navigation.navigate('Step1');
  };

  /****************************************************************************/

  const _onSkip = () => {
    setShowRealApp(true);
    props.navigation.navigate('Step1');
  };

  /****************************************************************************/

  const _renderNextButton = () => {
    return (
      <View style={{height:'50%',marginBottom:'-30%',marginTop:50,zIndex:1}}>
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>NEXT</Text>
      </View>
      </View>
    );
  };

  /****************************************************************************/

  const _renderSkipButton = () => {
    return (
    //   <View style={styles.skipButton}
    //  >
    //     <Text style={[AppStyle.normalBoldText, styles.skipText]}>Skip</Text>
    //   </View>
    <View></View>
    );
  };

  /****************************************************************************/

  const _renderDoneButton = () => {
    return (
      <View style={{height:'50%',backgroundColor:'red',marginBottom:'-30%',marginTop:50,zIndex:1}}>

      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>DONE</Text>
      </View>
      </View>
    );
  };

  /****************************************************************************/

  return (
    <SafeAreaView style={[AppStyle.container,{height:height,width:width}]}>
        <StatusBar
        barStyle="light-content"
        backgroundColor={AppColors.Theme_Background}
      />
      <View style={{backgroundColor: AppColors.Theme_Background,height:height,width:width}}>
      <View style={{height:'15%',justifyContent:'center'}}>
      <Text style={[AppStyles.regularLargeWhiteText,{textAlign:'center'}]}>
        On Boarding
      </Text>
      </View>
      <View style={styles.slide}>
        <ImageBackground source={AppImages.onboarding} 
        style={styles.imageStyle}
        imageStyle= 
      {{opacity:0.5}}>
      <AppIntroSlider
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}
        renderItem={_renderItem}
        data={slides}
        // onDone={_onDone}
         renderDoneButton={_renderDoneButton}
         showNextButton={false}
        bottomButton
        // renderSkipButton={_renderSkipButton}
        renderNextButton={_renderNextButton}
        onSkip={_onSkip}
        // showSkipButton={true}
        // scrollEnabled={true}
        // goToSlide={goToSlide(3)}
        showNextButton={false}
        showDoneButton={false}
      />

<View style={styles.skipItemButton}>
            <Pressable onPress={()=>_onSkip()}>
            
                <Text style={[AppStyles.boldText,{fontSize:20}]}>Skip</Text>
               
              </Pressable>
              </View>
      </ImageBackground>

 
    
         </View>
         <Pressable onPress={()=>_onSkip()}>
         <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>NEXT</Text>
      </View>
      </Pressable>
      </View>
    
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width:width*0.9,
    height:Platform.OS=== 'android' ?height*0.72:height*0.64,
    marginTop:-28,
    borderWidth: 2,
    borderColor: AppColors.Theme_Buttons,
    borderRadius: 15,
    // backgroundColor:'rgba(0, 0, 0, 0.2)'
  },
  text: {
    textAlign: 'left',
    marginTop: '10%',
    fontSize:25
  },
  title: {
    alignSelf: 'flex-end',
    marginBottom: height*0.043,
  },
  skipButton: {
    backgroundColor: AppColors.Theme_Red,
    marginLeft:'75%',
    marginTop:'-40%',
    borderRadius: 8,
    marginRight: 20,
  },
  skipText: {
    padding:6,
    textAlign: 'center',
    paddingHorizontal: 20,
    fontFamily:AppFonts.BoldFont,
    color:AppColors.colorWhite
  },
  dotStyle: {
    backgroundColor: AppColors.Theme_white,
    marginBottom:'60%',
    width: 13,
    height: 13,
    borderRadius:13,
    borderColor: 'white',
    marginHorizontal:'3%'
  },
  activeDotStyle: {
    backgroundColor: 'red',
    marginBottom: '60%',
    borderWidth: 1,
    width: 18,
    height: 18,
    borderRadius:18,
    marginHorizontal:'3%',
    borderColor: AppColors.Theme_white,
  },

  imageStyle: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
    borderRadius:15,
    // borderWidth:1,
    borderColor:AppColors.Theme_Buttons,
    // backgroundColor:'rgba(0, 0, 0, 0.2)'
  },
  buttonContainer: {
    backgroundColor: AppColors.Theme_Buttons,
    borderRadius: 8,
    // marginBottom:'8%',
    height:48,
    alignItems:'center',
    justifyContent:'center',
  //  marginBottom:'-20%',
 marginHorizontal:'5%',
 marginTop:30
    // marginBottom:
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 18,
    padding: 5,
    fontFamily: AppFonts.BoldFont,
    color: AppColors.Theme_white,
  },
  skipItemButton:{
    position:'absolute', 
    bottom:15,
    right:20,
    height:35,
    backgroundColor: AppColors.Theme_Red,
    borderRadius:8,
    paddingHorizontal:'7%',
    alignItems:'center',
    justifyContent:'center',
    bottom:'7%'
  }
});

export default OnboardingScreen;
