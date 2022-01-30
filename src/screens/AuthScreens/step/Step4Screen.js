import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Dimensions,
  FlatList,
  Pressable
  // Button
} from 'react-native';
import AppColors from '../../../utils/AppColors';
import AppStyles from '../../../utils/AppStyles';
import Button from '../../../components/atoms/button/Button';

import SubscriptionList from '../../../components/molecule/step/SubscriptonList';
import SelectOneButton from '../../../components/atoms/button/SelectOneButton';
import AppFonts from '../../../utils/AppFonts';

const {width, height} = Dimensions.get('window');

const Step4Screen = props => {
  const [showSubscription, setShowSubscription] = useState(true);
  const [standardPackage, setStandardPackage] = useState([
    ' Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
    ' Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
    ' Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
    ' Lorem Ipsum has been the industry standard dummy text ever since the 1500s',

  ]);
  const [premierPackage, setPremierPackage] = useState([
    ' Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
    ' Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
    ' Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
  ]);

  /****************************************************************************/

  /****************************************************************************/

  /****************************************************************************/

  /****************************************************************************/

  return (
    <SafeAreaView style={[AppStyles.container]}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={AppColors.Theme_Background}
      />

      <FlatList
        ListHeaderComponent={
          <>
             <View style={styles.skipContainer}>
                <Text style={[AppStyles.redLargeText]}>S</Text>
                <Text style={[AppStyles.boldWhiteText,{fontSize:27,fontFamily:'Roboto-Black',marginTop:'13%'}]}>
                  tep 4
                </Text>
                <Pressable 
                 onPress={() => props.navigation.navigate('Drawer')}
                style={{position:'absolute',bottom:30,right:'-30%'}}>
                <Text style={{fontSize:18,fontFamily:AppFonts.RegularFont,color:'#FFBA49'}}>
                  Skip  
                </Text>
                </Pressable>
                
              </View>
            <Text
              style={[AppStyles.boldWhiteText, {marginTop: -10, fontSize: 20}]}>
              SUBSCRIPTION
              <Text style={AppStyles.boldGrayText}> (OPTIONAL)</Text>
            </Text>

            <View style={{margin: '5%', marginTop: '2%', marginBottom: '2%'}}>
              <SelectOneButton
                title="SELECT ONE"
                onPress={() => setShowSubscription(true)}
              />
            </View>

            <View style={[styles.packageContainer]}>
              <Text style={[AppStyles.boldText]}>
                Standard Packages - What Included
              </Text>
            </View>
          </>
        }
        data={standardPackage}
        renderItem={({item}) =>
          showSubscription && <SubscriptionList item={item} />
        }
        keyExtractor={item => item.id}
        ListFooterComponent={
          <>
            <FlatList
              ListHeaderComponent={
                <>
                  <View style={[styles.packageContainer, {marginTop: 10}]}>
                    <Text style={[AppStyles.boldText]}>
                      Premier Packages - What Included
                    </Text>
                  </View>
                </>
              }
              data={premierPackage}
              renderItem={({item}) =>
                showSubscription && <SubscriptionList item={item} />
              }
              keyExtractor={item => item.id}
              ListFooterComponent={
                <>
                  <View style={{margin: '5%'}}>
                    <Button
                      title="CONTINUE"
                      onPress={() => props.navigation.navigate('Drawer')}
                    />
                  </View>
                  <Text
                    style={[
                      AppStyles.boldText,
                      {fontSize: 25, textAlign: 'center'},
                    ]}>
                    4/4
                  </Text>
                </>
              }
            />
          </>
        }
      />
    </SafeAreaView>
  );
};

/****************************************************************************/

export default Step4Screen;

const styles = StyleSheet.create({
  skipContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
  marginVertical:'4%'
  },

  title: {
    alignSelf: 'flex-end',
    marginBottom: '6%',
    fontSize: 27,
  },

  packageContainer: {
    width: '90%',
    alignSelf: 'center',
    borderBottomWidth: 2,
    borderColor: AppColors.Theme_Buttons,
    paddingBottom: 5,
    marginBottom: 20,
  },
});
