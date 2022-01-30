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
import AppStyles from '../../../utils/AppStyles';
import AppImages from '../../../utils/AppImages';
import AppColors from '../../../utils/AppColors';
import AppFonts from '../../../utils/AppFonts';
const {width, height} = Dimensions.get('window');

const SubscriptionList = props => {
  const {item} = props;

  return (
    <View style={{flexDirection: 'row', marginHorizontal: 20,}}>
      <Image
        source={AppImages.line}
        style={{width: 25, height: 15, marginRight: 10}}
      />
      <View style={{ marginBottom: 5,marginTop:-5,width:'95%'}}>
        <Text style={AppStyles.regularText}>{item}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SubscriptionList;
