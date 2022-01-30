import React, {useState,useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Dimensions,
  FlatList,
  Pressable,
  Image,
  // Button
} from 'react-native';
import AppColors from '../../utils/AppColors';
import AppStyles from '../../utils/AppStyles';
import Header from '../../components/atoms/header/Header';
import BookingUserList from '../../components/organisms/BookingUserList';
import { perPlatformTypes } from 'react-native-document-picker/lib/typescript/fileTypes';

const {width, height} = Dimensions.get('window');

const BookingUserScreen = props => {
  const [booking,setBooking]=useState([
    {clientname: 'Ray Charlies', time: '9:00pm- 12:00pm', date: '12/12/2021'},
   
  ]);
  const [submit,setSubmit]=useState('check')
  /****************************************************************************/
useEffect(() => {
  let submitValue=props.route.params ? props.route.params.submit:'check';
  setSubmit(submitValue)
}, [props.route.params])
  /****************************************************************************/

  /****************************************************************************/

  /****************************************************************************/

  return (
    <SafeAreaView style={AppStyles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={AppColors.Theme_Background}
      />
     <Header title="Bookings" onPress={()=>props.navigation.goBack()}/> 

                <FlatList
               
                  data={booking}
                  renderItem={({item}) => <BookingUserList item={item} 
                  onPress={()=>props.navigation.navigate('JobDetails')}
                  onReviewPress={()=>props.navigation.navigate('StarRating')}
                  submit={submit}/>
                  }
                  keyExtractor={item => item.id}
                  
                />
     
    
    </SafeAreaView>
  );
};

/****************************************************************************/

export default BookingUserScreen;

const styles = StyleSheet.create({
  
});
