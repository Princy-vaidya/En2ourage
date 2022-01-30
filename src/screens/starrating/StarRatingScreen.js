import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Dimensions,
 TextInput,
 ScrollView,
  KeyboardAvoidingView,
  // Button
} from 'react-native';
import AppColors from '../../utils/AppColors';
import AppStyles from '../../utils/AppStyles';
import Header from '../../components/atoms/header/Header';
import Stars from 'react-native-stars';
import AppImages from "../../utils/AppImages";
import AppStrings from "../../utils/AppStrings";
import Button from "../../components/atoms/button/Button"
import AppFonts from '../../utils/AppFonts';


const {width, height} = Dimensions.get('window');

const StarRatingScreen = props => {
    const [star,setStar]=useState(0);
    const [review,setReview]=useState('')
  
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
     {/* <Header title="Review and Submit" onPress={()=>props.navigation.goBack()}/> */}


       <ScrollView
        // style={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">
        {/* <KeyboardAwareScrollView > */}

        {/* <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : null}
          keyboardVerticalOffset={+30}> */}
     <View style={{alignItems:'center',marginTop:'3%'}}>
         <Text style={[AppStyles.normalBoldText,{fontSize:18}]}>What is your rate?</Text>
         <View style={{marginTop:'5%'}}>
     <Stars
     half={true}
     default={star}
     update={(val)=>setStar(val)}
     spacing={20}
     starSize={40}
     count={5}
     fullStar={AppImages.redStar}
     emptyStar={AppImages.blankStart}
     />
</View>
<Text style={[AppStyles.normalBoldText,{margin:'5%',marginHorizontal:'20%',textAlign:'center',fontSize:18}]} 
numberOfLines={2}
adjustsFontSizeToFit>
    {AppStrings.SHARE_EXPERIANCE}</Text>
</View>

    <View style={styles.input}>
      <TextInput
        style={styles.textInput}
        placeholderTextColor="#9B9B9B"
        placeholder='Your Review'
        onChangeText={(text) => setReview(text)}
        value={review}
        returnKeyType="next"
        multiline={true}
      />
    </View> 
   
    {/* </KeyboardAvoidingView> */}
  
    </ScrollView>
    <View style={{margin:'5%',marginTop:10}}>
    <Button title="SUBMIT REVIEW" onPress={()=>props.navigation.navigate('Booking',{submit:'submit'})}/>
    </View>
  
    
    </SafeAreaView>
  );
};

/****************************************************************************/

export default StarRatingScreen;

const styles = StyleSheet.create({
  textInput: {
    height: 200,
     flex: 1,
    color:AppColors.Theme_white,
    fontSize: 14,
    fontFamily:AppFonts.RegularFont,
    textAlign:'center',
    paddingHorizontal: 10,
    textAlignVertical:'top'
  },
  
  input: {
    borderRadius:5,
    borderWidth:2,
    borderColor:AppColors.Theme_Buttons,
    marginBottom:10,
     width: width/1.1 ,
    height:208,
    flexDirection:'row',
  //  justifyContent:'space-between',
    borderColor:AppColors.Theme_Buttons,
    // marginTop:'10%',
    alignContent:'center',
    alignItems:'center',
    alignSelf:'center'
  }
});
