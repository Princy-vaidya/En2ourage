import React, { useState, useEffect } from 'react';
import { View, Modal, TextInput, TouchableOpacity, Image, StyleSheet, Text,Dimensions } from 'react-native';
import AppImages from "../../../utils/AppImages";
import AppColors from "../../../utils/AppColors";
import AppFonts from '../../../utils/AppFonts';
const {width, height} = Dimensions.get('window');


export default Search = ({ reffocus, value, onPress, onChange, keypress, onFocus, placeholder, inputwidth, showfilter }) => {
  const [focus,setFocus]=useState(false)
  return (
    <View>
    <View style={styles.input}>
  
    {/* <View style={{alignItems:'center',justifyContent:'center',alignSelf:'center',width:'90%'}}>  */}
    <TextInput
          ref={reffocus}
          style={styles.textInput}
          placeholderTextColor='white'
          placeholder={focus?'':placeholder}
          onChangeText={(text) => {onChange(text);
            if(text===" "){
              setFocus(false)
            }
          }
          }
          value={value}
          onTouchStart={keypress}
         onFocus={()=>setFocus(true)}
         onBlur={()=>setFocus(false)}
         returnKeyType="done"
          // multiline={true}
        />
        {/* </View> */}
        {/*  */}
        <Image source={AppImages.search} style={{margin:10,position:'absolute',alignSelf:'flex-start'}} />

  </View>
       </View>
      
  )

}

const styles = StyleSheet.create({
  InputContainer: {
    width: "100%",
    height: 45,
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: "#595959",
    position: "relative"
  },
  textInput: {
    color: "white",
    // flex:1,
    //  paddingTop:10,
    height:45,
    fontFamily:AppFonts.RegularFont,
    // // width: width * 0.68,
     textAlign: 'center',
     fontSize:16,
  //  marginLeft:-15
  },
  input:{
    // flexDirection: 'row',
    borderWidth:1,
    borderColor:AppColors.Theme_Buttons,
    height:40,
    borderRadius:30,
    backgroundColor:AppColors.Theme_Buttons,
  // alignItems:'center',
  justifyContent:'center',
    flex:1,
    marginTop:'3%'
  }
})