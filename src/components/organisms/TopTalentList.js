import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  Keyboard,
  Dimensions,
  Pressable,
  TouchableWithoutFeedback
} from "react-native";
import AppStyles from "../../utils/AppStyles";
import AppColors from "../../utils/AppColors";
import AppFonts from "../../utils/AppFonts";
import AppImages from "../../utils/AppImages";
import Stars from 'react-native-stars';

const { width, height } = Dimensions.get("window");

const TopTalentList = (props) => {
  const {item,onPress,onProfilePress} = props;

  return (
    <View style={styles.mainContainer}>
   <View style={{width:'66%',flexDirection:'row',alignItems:'center'}}>
   <TouchableWithoutFeedback
     onPress={onProfilePress}>
       <Image source={item.pic} style={{width:65,height:65,borderRadius:50,marginLeft:10}}/>
       </TouchableWithoutFeedback>
       <View>
       <Text style={[AppStyles.normalBoldText,{marginLeft:10,fontSize:20}]}
       numberOfLines={1}
       adjustsFontSizeToFit>{item.clientname}</Text>
       <View style={{flexDirection:'row',marginLeft:10}}>
       <Image source={item.image1} style={styles.imageStyle}/>
       <Image source={item.image2} style={styles.imageStyle}/>
       <Image source={item.image3} style={styles.imageStyle}/>
       </View>
       </View>
   </View>
   <View  width="32%" alignItems="center" justifyContent="center">
   {!item.select?
     <Pressable style={styles.homeButton}
     onPress={onPress}>
       <Text style={styles.homeText}>HIRE</Text>
     </Pressable>
     :
     <Pressable 
     onPress={onPress}>
     <Image source={AppImages.check} style={{height:25,width:25}}/>
     </Pressable>
}
     <View style={{flexDirection:'row'}}>
         <View style={{marginTop:2}}>
     <Stars
            display={4}
            spacing={2}
            count={5}
            starSize={15}
            fullStar={AppImages.star}
            emptyStar={AppImages.emptyStar}
          />
          </View>
           <Text style={styles.homeText}>4.0</Text>
          </View>
   </View>
  </View>
  );
};

const styles = StyleSheet.create({
mainContainer:{
    flexDirection: 'row',
    // borderWidth:2,
    // borderColor:AppColors.Theme_Buttons,
    marginTop:15,
    borderRadius:5,
    alignItems:'center',
    borderRadius:25
    },
firstColumn:{
    flexDirection: 'row',
    width:'100%',
    margin:2
},
buttonContainer:{
    borderWidth:2,
    borderColor:AppColors.Theme_Buttons,
    borderRadius:15
},
imageStyle:{
  width:30,
  height:30,
  marginRight:5
},
homeText:{
  fontSize:14,
  fontFamily:AppFonts.BoldFont,
  color:'white'
},
homeButton:{
  backgroundColor:AppColors.Theme_Buttons,
  width:90,
  height:25,
  alignItems:'center',
  justifyContent:'center',
  borderRadius:15
},
distanceText:{
  fontSize:14,
  fontFamily:AppFonts.BoldFont,
  color:AppColors.Theme_Green
}

  
});

export default TopTalentList;
