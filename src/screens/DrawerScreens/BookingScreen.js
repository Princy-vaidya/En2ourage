import React, {useState} from 'react';
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
import BookingList from '../../components/organisms/BookingList';

const {width, height} = Dimensions.get('window');

const BookingScreen = props => {
  const [booking,setBooking]=useState([
    {clientname: 'Ray Charlies', time: '9:00pm- 12:00pm', date: '12/12/2021'},
    {clientname: 'Joy Brown', time: '9:00pm- 12:00pm', date: '12/12/2021'},
    {clientname: 'Ray Charlies', time: '9:00pm- 12:00pm', date: '12/12/2021'},
  ])
  /****************************************************************************/

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
                  renderItem={({item}) => <BookingList item={item} 
                  onPress={()=>props.navigation.navigate('JobDetails')}/>
                  }
                  keyExtractor={item => item.id}
                  
                />
     
    
    </SafeAreaView>
  );
};

/****************************************************************************/

export default BookingScreen;

const styles = StyleSheet.create({
  
});
