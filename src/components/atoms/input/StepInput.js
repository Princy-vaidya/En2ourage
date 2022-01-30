import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  Keyboard,
  Dimensions,
  Animated,
} from "react-native";
import App from "../../../../App";
import AppColors from "../../../utils/AppColors";
import AppFonts from "../../../utils/AppFonts";
import Reinput from "reinput";


const { width, height } = Dimensions.get("window");

const StepInput = (props) => {
  const {
    type,
    placeholder,
    value,
    onChange,
    icon,
    onBlur,
    keyboard,
    max,
    label,
    borderColor,
    refInput,
    onSubmitEditing,
    returnKeyType,
    focuss,
    autofocus,
  } = props;
  const [focus, setFocus] = useState(false);
  const _animatedIsFocused = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(_animatedIsFocused, {
      toValue: focus ? 1 : 0,
      duration: 100,
    }).start();
  }, [focus]);

  const labelStyling = {
    color: "#9B9B9B",
    paddingTop: _animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0],
    }),
    paddingLeft: 15,
    fontSize: 14,
    fontFamily: AppFonts.RegularFont,
  };

  return (
    <View style={[styles.input, { borderColor: borderColor }]}>
      {/* {focus &&
      <Animated.Text style={{color:'#9B9B9B',
      paddingTop:_animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [15,6],
      }),
      paddingLeft:15,
      fontSize:14,
      fontFamily:AppFonts.RegularFont}}>{placeholder}</Animated.Text>
   }
      <TextInput
        style={[styles.textInput,!focus?{paddingTop:5,paddingBottom:2}:{paddingTop:2}]}
        placeholderTextColor={"#9B9B9B"}
        placeholder={!focus ?placeholder:''}
        secureTextEntry={(type === "password" || type==="currentPassword"|| type==="newPassword"|| type==="confirmPassword")? true : false}
        onChangeText={(text) => onChange(text)}
        value={value}
        onBlur={()=> !value && setFocus(false)}
        returnKeyType={returnKeyType}
        keyboardType={keyboard ? keyboard : "default"}
        maxLength={max}
        onSubmitEditing={onSubmitEditing}
        ref={refInput}
        autoCapitalize="none"
        onFocus={()=>setFocus(true)}
        
      
      /> */}
      <Reinput
        label={placeholder}
        fontFamily={AppFonts.RegularFon}
        color={AppColors.Theme_white}
        labelColor="#9B9B9B"
        labelActiveColor="#9B9B9B"
        marginLeft={20}
      //  marginTop={5}
    
        fontSize={18}
        underlineHeight={-5}
        underlineActiveHeight={-5}
      labelActiveTop={-20}
      //  labelActiveScale={0.9}
        // height={calcH(0.05)}
        // marginBottom={calcH(-0.02)
        secureTextEntry={
          type === "password" ||
          type === "currentPassword" ||
          type === "newPassword" ||
          type === "confirmPassword"
            ? true
            : false
        }
        onChangeText={(text) => onChange(text)}
        value={value}
        returnKeyType={returnKeyType}
        keyboardType={keyboard ? keyboard : "default"}
        maxLength={max}
        onSubmitEditing={onSubmitEditing}
        ref={refInput}
        autoCapitalize="none"
        onBlur={()=>setFocus(false)}
        // labelActiveScale={0.8}
        // paddingTop={0}
        // labelActiveScale={0.6}
        onFocus={() => setFocus(true)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: 50,
    flex: 1,
    padding: 10,
    paddingTop:0,
    paddingBottom:0,
    marginLeft: 5,
    color: AppColors.Theme_white,
    fontSize: 18,
    fontFamily: AppFonts.RegularFont,
    // backgroundColor:'red'
    
  },

  input: {
    borderRadius: 5,
    borderWidth: 2,
    borderColor: AppColors.Theme_Buttons,
    marginBottom: 10,
    width: width / 1.1,
    height: 64,
    fontSize: 18,
    fontFamily: AppFonts.RegularFont,
    // alignSelf: "center",
    alignItems:'center',
   justifyContent:'center'

  },
});

export default StepInput;
