import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Dimensions,
 ScrollView,
 KeyboardAvoidingView,
 Keyboard,
 TouchableWithoutFeedback
  // Button
} from 'react-native';
import AppColors from '../../utils/AppColors';
import AppStyles from '../../utils/AppStyles';
import Header from '../../components/atoms/header/Header';
import TinyButtons from '../../components/atoms/button/TinyButton';
import DescriptiveInput from "../../components/atoms/input/DescriptiveInput";
import Button from "../../components/atoms/button/Button";
import {KeyboardAwareScrollView} from '@codler/react-native-keyboard-aware-scroll-view';

const {width, height} = Dimensions.get('window');

const CheckOutFirstScreen = props => {
    const [activeAttire,setActiveAttire]=useState(0);
    const [detailAttire,setDetailAttire]=useState('')

  /****************************************************************************/

  /****************************************************************************/

  /****************************************************************************/
  const onLevelChange = (tabIndex, selectValue) => {
    setActiveAttire(tabIndex);
  };
  /****************************************************************************/

  return (
    <TouchableWithoutFeedback
     onPress={Keyboard.dismiss}>
    <SafeAreaView style={AppStyles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={AppColors.Theme_Background}
      />
      <Header title="Checkout" onPress={()=>props.navigation.goBack()}/>

     
      <ScrollView style={{flex:1}}>
      {/* <KeyboardAvoidingView
         style={{flex:1}}
          // keyboardVerticalOffset={+30}
          > */}
          <KeyboardAwareScrollView>
      <View style={{margin:'5%'}}>
          <Text style={AppStyles.normalBoldText}>Attire</Text>
          <View style={styles.buttonContainer}>
              <TinyButtons
                title="Casual"
                buttonColor={
                  activeAttire == 0
                    ? AppColors.Theme_Red
                    : AppColors.Theme_Buttons
                }
                onPress={() => onLevelChange(0, 'Casual')}
              />
              <TinyButtons
                title="Semi"
                buttonColor={
                activeAttire == 1
                    ? AppColors.Theme_Red
                    : AppColors.Theme_Buttons
                }
                onPress={() => onLevelChange(1, 'Semi')}
              />
              <TinyButtons
                title="Formal"
                buttonColor={
                activeAttire == 2
                    ? AppColors.Theme_Red
                    : AppColors.Theme_Buttons
                }
                onPress={() => onLevelChange(2, 'Formal')}
              />
            </View>

             
              <View style={styles.attireContainer}>
                <View style={styles.firstColumn}>
              <Text style={[AppStyles.normalBoldText,{fontSize:16}]}>Casual wear</Text>
            
              <Text style={AppStyles.normalBoldText}>:</Text>
              </View>
              <View style={{width:'50%'}}>
              <Text style={[AppStyles.normalBoldText,{fontSize:14}]}>Lorem Ipsum has been the industry standard dummy text ever since the 1500s</Text>
              </View>
               </View>

               <View style={styles.attireContainer}>
                <View style={styles.firstColumn}>
              <Text style={[AppStyles.normalBoldText,{fontSize:16}]}>Semi Formal wear</Text>
            
              <Text style={AppStyles.normalBoldText}>:</Text>
              </View>
              <View style={{width:'50%'}}>
              <Text style={[AppStyles.normalBoldText,{fontSize:14}]}>Lorem Ipsum has been the industry standard dummy text ever since the 1500s</Text>
              </View>
               </View>

               <View style={styles.attireContainer}>
                <View style={styles.firstColumn}>
              <Text style={[AppStyles.normalBoldText,{fontSize:16}]}>Formal wear</Text>
            
              <Text style={AppStyles.normalBoldText}>:</Text>
              </View>
              <View style={{width:'50%'}}>
              <Text style={[AppStyles.normalBoldText,{fontSize:14}]}>Lorem Ipsum has been the industry standard dummy text ever since the 1500s</Text>
              </View>
               </View>

               <DescriptiveInput
                value={detailAttire}
                onChange={(value)=>setDetailAttire(value)}
                type="name"
                placeholder="Detail Description of Attire(Optional)"
              />
          </View>

          
          
     
      {/* </KeyboardAvoidingView> */}
     
      </KeyboardAwareScrollView>
      </ScrollView>
      <View style={{marginHorizontal:'5%'}}>
        <Button title="CONTINUE" onPress={()=>props.navigation.navigate('CheckOut')}/>
        </View>
     
      
    </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

/****************************************************************************/

export default CheckOutFirstScreen;

const styles = StyleSheet.create({
 
  buttonContainer: {
    marginTop: '2%',
    flexDirection: 'row',

    justifyContent: 'space-between',
    width:'100%'
  },
  attireContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:'5%'
  },
  firstColumn:{
    flexDirection:'row',
    justifyContent:'space-between',
    width:'40%'
  }
});
