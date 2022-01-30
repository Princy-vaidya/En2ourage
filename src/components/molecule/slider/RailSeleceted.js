import React, { memo } from 'react';
import {StyleSheet, View} from 'react-native';
import AppColors from '../../../utils/AppColors'

const RailSelected = () => {
  return (
    <View style={styles.root}/>
  );
};

export default memo(RailSelected);

const styles = StyleSheet.create({
  root: {
    height: 4,
    backgroundColor:AppColors.Theme_Red,
    borderRadius: 2,
  },
});