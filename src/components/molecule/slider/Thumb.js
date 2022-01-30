import React, { memo } from 'react';
import { View, StyleSheet } from 'react-native';
import AppColors from '../../../utils/AppColors'


const THUMB_RADIUS = 12;

const Thumb = () => {
  return (
    <View style={styles.root}/>
  );
};

const styles = StyleSheet.create({
  root: {
    width: THUMB_RADIUS * 1.7,
    height: THUMB_RADIUS * 1.7,
    borderRadius: THUMB_RADIUS,
    backgroundColor:AppColors.Theme_Red,
  },
});

export default memo(Thumb);