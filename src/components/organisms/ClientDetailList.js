import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  Keyboard,
  Dimensions,
  Pressable,
} from 'react-native';
import AppStyles from '../../utils/AppStyles';
import AppColors from '../../utils/AppColors';
import AppFonts from '../../utils/AppFonts';
const {width, height} = Dimensions.get('window');

const ClientDetailList = props => {
  const {item,onJobDetail} = props;

  return (
    <View style={styles.mainContainer}>
      <View style={{width: '65%'}}>
        <View style={styles.firstColumn}>
          <Text
            style={[AppStyles.regularWhiteText, {width: '30%', fontSize: 15}]}>
            Client
          </Text>
          <Text
            style={[AppStyles.regularWhiteText, {width: '10%', fontSize: 15}]}>
            :
          </Text>
          <Text
            style={[AppStyles.regularWhiteText, {width: '60%', fontSize: 15}]}>
            {item.clientname}
          </Text>
        </View>
        <View style={styles.firstColumn}>
          <Text
            style={[AppStyles.regularWhiteText, {width: '30%', fontSize: 15}]}>
            Time
          </Text>
          <Text
            style={[AppStyles.regularWhiteText, {width: '10%', fontSize: 15}]}>
            :
          </Text>
          <Text
            style={[AppStyles.regularWhiteText, {width: '60%', fontSize: 15}]}
            numberOfLines={1}
            adjustsFontSizeToFit>
            {item.time}
          </Text>
        </View>
        <View style={styles.firstColumn}>
          <Text
            style={[AppStyles.regularWhiteText, {width: '30%', fontSize: 15}]}>
            Date
          </Text>
          <Text
            style={[AppStyles.regularWhiteText, {width: '10%', fontSize: 15}]}>
            :
          </Text>
          <Text
            style={[AppStyles.regularWhiteText, {width: '60%', fontSize: 15}]}>
            {item.date}
          </Text>
        </View>
      </View>
      <View
        style={{width: '35%', alignItems: 'center', justifyContent: 'center'}}>
        <Pressable style={styles.buttonContainer}
        onPress={onJobDetail}>
          <Text
            style={[
              AppStyles.regularWhiteText,
              {padding: 5, paddingHorizontal: 17},
            ]}
            numberOfLines={1}
            adjustsFontSizeToFit>
            Job Details
          </Text>
        </Pressable>
        <Pressable style={[styles.buttonContainer, {marginTop: '2%'}]}>
          <Text
            style={[
              AppStyles.regularWhiteText,
              {padding: 5, paddingHorizontal: 10},
            ]}
            numberOfLines={1}
            adjustsFontSizeToFit>
            Get Direction
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: AppColors.Theme_Buttons,
    marginTop: 15,
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
  },
});

export default ClientDetailList;
