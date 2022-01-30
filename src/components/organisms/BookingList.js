import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  Keyboard,
  Dimensions,
  Pressable
} from "react-native";
import AppStyles from "../../utils/AppStyles";
import AppColors from "../../utils/AppColors";
import AppFonts from "../../utils/AppFonts";
import TinyButtons from "../../components/atoms/button/TinyButton";

const { width, height } = Dimensions.get("window");

const BookingList = (props) => {
  const {item,onPress} = props;

  return (
    <View style={styles.container}>
    <View style={styles.mainContainer}>
      <View style={{width: '65%'}}>
        <View style={styles.firstColumn}>
          <Text style={[AppStyles.regularWhiteText, {width: '30%'}]}>
            Client
          </Text>
          <Text style={[AppStyles.regularWhiteText, {width: '10%'}]}>
            :
          </Text>
          <View style={styles.details}>
            <Text style={[AppStyles.regularWhiteText]}>{item.clientname}</Text>
          </View>
        </View>
        <View style={styles.firstColumn}>
          <Text style={[AppStyles.regularWhiteText, {width: '30%'}]}>
          Time
          </Text>
          <Text style={[AppStyles.regularWhiteText, {width: '10%'}]}>
            :
          </Text>
          <View style={styles.details}>
            <Text style={[AppStyles.regularWhiteText]}
              numberOfLines={1}
              adjustsFontSizeToFit>{item.time}</Text>
          </View>
        </View>
     
        <View style={styles.firstColumn}>
          <Text style={[AppStyles.regularWhiteText, {width: '30%'}]}>
            Date
          </Text>
          <Text style={[AppStyles.regularWhiteText, {width: '10%'}]}>
            :
          </Text>
          <View style={styles.details}>
            <Text style={[AppStyles.regularWhiteText]}>{item.date}</Text>
          </View>
        </View>
      </View>
      <View style={{width: '40%', alignItems: 'center'}}>
       
        <Pressable style={styles.buttonContainer} 
        onPress={onPress}>
          <Text
            style={[
              AppStyles.regularWhiteText,
              {padding: 5, paddingHorizontal: 10},
            ]}
            numberOfLines={1}
            adjustsFontSizeToFit>
            Job Details
          </Text>
        </Pressable>
        <Text style={[AppStyles.redSmallText,
            {marginTop:10}]}>
                Time left 15:00
        </Text>
      </View>
    </View>

    <View style={styles.activityContainer}>
      <TinyButtons title="No" buttonColor={AppColors.Theme_Red} />
      <View style={{marginLeft: 30}}>
        <TinyButtons title="Yes" buttonColor={AppColors.Theme_Green} />
      </View>
    </View>
  </View>
  );
};

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        // marginTop: 15,
        borderRadius: 5,
        padding: 10,
      },
      firstColumn: {
        flexDirection: 'row',
        width: '100%',
        margin: 2,
      },
      buttonContainer: {
        borderWidth: 2,
        borderColor: AppColors.Theme_white,
        borderRadius: 20,
        marginTop: 15,
      },
      details: {
        // borderWidth: 2,
        // borderBottomColor: 'white',
        width: '60%',
      },
      activityContainer: {
        flexDirection: 'row',
        margin:10,
        marginTop:-10,
        
      },
      container:{
        borderWidth: 2, 
        borderColor: AppColors.Theme_Buttons,
        margin:10,
        borderRadius:10
      }
  
});

export default BookingList;
