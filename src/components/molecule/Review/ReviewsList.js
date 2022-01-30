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
import AppColors from '../../../utils/AppColors';
import AppFonts from '../../../utils/AppFonts';
import AppImages from '../../../utils/AppImages';
import Stars from 'react-native-stars';

const {width, height} = Dimensions.get('window');

const ReviewsList = props => {
  const {item, onPress} = props;

  return (
    <View style={styles.reviewContainer}>
      <View style={styles.reviewDetail}>
        <View style={{flexDirection: 'row'}}>
          <Image source={AppImages.profile} style={{width: 50, height: 50}} />
          <View style={{marginLeft: 10}}>
            <Text style={AppStyles.normalBoldText}>{item.name}</Text>
            <Stars
              display={item.rating}
              spacing={2}
              count={5}
              starSize={15}
              fullStar={AppImages.star}
              emptyStar={AppImages.emptyStar}
            />
          </View>
        </View>
        <View style={{}}>
          <Text style={styles.textStyle}>{item.date}</Text>
        </View>
      </View>
      <Text style={[styles.textStyle,{marginTop:3}]}>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English.
      </Text>
      
      <View style={{marginTop:8,alignSelf:'flex-end',flexDirection:'row'}}>
      <Text style={[styles.textStyle,]}>
        Helpful
        </Text>
        <Image source={AppImages.helpful} style={{alignSelf:'center',marginTop:-5}}/>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  reviewContainer: {
    borderWidth: 2,
    borderColor: AppColors.Theme_Buttons,
    padding: 30,
    borderRadius: 10,
    borderWidth: 2,
    marginTop: '3%',
  },
  reviewDetail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textStyle:{
    fontSize:14,fontFamily:AppFonts.regularWhiteText,color:'white'
  }
});

export default ReviewsList;
