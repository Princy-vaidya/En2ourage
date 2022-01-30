import React, {useState, useCallback} from 'react';
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
  ScrollView,
  // Button
} from 'react-native';
import AppColors from '../../utils/AppColors';
import AppStyles from '../../utils/AppStyles';
import Header from '../../components/atoms/header/Header';
import BookingList from '../../components/organisms/BookingList';
import TinyButton from '../../components/atoms/button/TinyButton';
import TinyButtons from '../../components/atoms/button/TinyButton';
import RangeSlider from 'rn-range-slider';
import Notch from '../../components/molecule/slider/Notch';
import Label from '../../components/molecule/slider/Label';
import Rail from '../../components/molecule/slider/Rail';
import RailSelected from '../../components/molecule/slider/RailSeleceted';
import Thumb from '../../components/molecule/slider/Thumb';
import Button from "../../components/atoms/button/Button"

const {width, height} = Dimensions.get('window');

const FilterScreen = props => {
  const [activeGender, setActiveGender] = useState(0);
  const [gender, setGender] = useState('');
  const [activeFirearm, setActiveFirearm] = useState(0);
  const [firearm, setFirearm] = useState('');
  const [activeTraining, setActiveTraining] = useState(0);
  const [training, setTraining] = useState('');
  const [activeLevel, setActiveLevel] = useState(0);
  const [level, setLevel] = useState('');
  const [lowPrice, setLowPrice] = useState(78);
  const [highPrice, setHighPrice] = useState(148);
  const [lowDistance, setLowDistance] = useState(0);
  const [highDistance, setHighDistance] = useState(30);

  /****************************************************************************/
  const onGenaderChange = (tabIndex, selectValue) => {
    setActiveGender(tabIndex);
    setGender(selectValue);
  };

  const onFirearmChange = (tabIndex, selectValue) => {
    setActiveFirearm(tabIndex);
    setFirearm(selectValue);
  };

  const onTrainingChange = (tabIndex, selectValue) => {
    setActiveTraining(tabIndex);
    setTraining(selectValue);
  };

  const onLevelChange = (tabIndex, selectValue) => {
    setActiveLevel(tabIndex);
    setLevel(selectValue);
  };
  /****************************************************************************/

  const renderThumb = useCallback(() => <Thumb />, []);
  const renderRail = useCallback(() => <Rail />, []);
  const renderRailSelected = useCallback(() => <RailSelected />, []);
  const renderLabel = useCallback(value => <Label text={value} />, []);
  const renderNotch = useCallback(() => <Notch />, []);
  const handlePriceChange = useCallback((low, high) => {
    setLowPrice(low);
    setHighPrice(high);
  }, []);

  const handleDistanceChange = useCallback((low, high) => {
    setLowDistance(low);
    setHighDistance(high);
  }, []);

  /****************************************************************************/

  /****************************************************************************/

  return (
    <SafeAreaView style={AppStyles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={AppColors.Theme_Background}
      />
      <Header title="FILTER" onPress={() => props.navigation.goBack()} />

      <ScrollView>
        <View style={{margin: 15,marginTop:'5%'}}>
          <View>
            <Text style={AppStyles.normalBoldText}>Gender</Text>

            <View style={styles.buttonContainer}>
              <TinyButtons
                title="Women"
                buttonColor={
                  activeGender == 0
                    ? AppColors.Theme_Red
                    : AppColors.Theme_Buttons
                }
                onPress={() => onGenaderChange(0, 'Women')}
              />
              <TinyButtons
                title="Men"
                buttonColor={
                  activeGender == 1
                    ? AppColors.Theme_Red
                    : AppColors.Theme_Buttons
                }
                onPress={() => onGenaderChange(1, 'Men')}
              />
            </View>
          </View>

          <View style={{marginTop: '5%'}}>
            <Text style={AppStyles.normalBoldText}>Licensed Firearm</Text>

            <View style={styles.buttonContainer}>
              <TinyButtons
                title="Yes"
                buttonColor={
                  activeFirearm == 0
                    ? AppColors.Theme_Red
                    : AppColors.Theme_Buttons
                }
                onPress={() => onFirearmChange(0, 'Yes')}
              />
              <TinyButtons
                title="No"
                buttonColor={
                  activeFirearm == 1
                    ? AppColors.Theme_Red
                    : AppColors.Theme_Buttons
                }
                onPress={() => onFirearmChange(1, 'No')}
              />
            </View>
          </View>

          <View style={{marginTop: '5%'}}>
            <Text style={AppStyles.normalBoldText}>
              Hand to hand combat training
            </Text>
            <View style={styles.buttonContainer}>
              <TinyButtons
                title="Yes"
                buttonColor={
                  activeTraining == 0
                    ? AppColors.Theme_Red
                    : AppColors.Theme_Buttons
                }
                onPress={() => onTrainingChange(0, 'Yes')}
              />
              <TinyButtons
                title="No"
                buttonColor={
                  activeTraining == 1
                    ? AppColors.Theme_Red
                    : AppColors.Theme_Buttons
                }
                onPress={() => onTrainingChange(1, 'No')}
              />
            </View>
          </View>

          <View style={{marginTop: '5%'}}>
            <Text style={AppStyles.normalBoldText}>Security Level</Text>
            <View style={[styles.buttonContainer, {width: '95%'}]}>
              <TinyButtons
                title="A1"
                buttonColor={
                  activeLevel == 0
                    ? AppColors.Theme_Red
                    : AppColors.Theme_Buttons
                }
                onPress={() => onLevelChange(0, 'A1')}
              />
              <TinyButtons
                title="A2"
                buttonColor={
                  activeLevel == 1
                    ? AppColors.Theme_Red
                    : AppColors.Theme_Buttons
                }
                onPress={() => onLevelChange(1, 'A2')}
              />
              <TinyButtons
                title="A3"
                buttonColor={
                  activeLevel == 2
                    ? AppColors.Theme_Red
                    : AppColors.Theme_Buttons
                }
                onPress={() => onLevelChange(2, 'A3')}
              />
            </View>
          </View>

          <View style={{marginTop: '5%'}}>
            <Text style={AppStyles.normalBoldText}>Price Range</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: '3%',
              }}>
              <Text style={AppStyles.normalRegularText}>$78/hr</Text>
              <Text style={AppStyles.normalRegularText}>$148/hr</Text>
            </View>
            <RangeSlider
              style={styles.slider}
              min={78}
              max={148}
              step={1}
              floatingLabel
              renderThumb={renderThumb}
              renderRail={renderRail}
              renderRailSelected={renderRailSelected}
              renderLabel={renderLabel}
              renderNotch={renderNotch}
              onValueChanged={handlePriceChange}
            />
          </View>

          <View style={{marginTop: '5%'}}>
            <Text style={AppStyles.normalBoldText}>By Distance</Text>
            <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
              <Text style={AppStyles.normalRegularText}>30 miles</Text>
            </View>
            <RangeSlider
              style={styles.slider}
              min={78}
              max={148}
              step={1}
              floatingLabel
              renderThumb={renderThumb}
              renderRail={renderRail}
              renderRailSelected={renderRailSelected}
              renderLabel={renderLabel}
              renderNotch={renderNotch}
              onValueChanged={handleDistanceChange}
            />
          </View>
        </View>

      </ScrollView>
     <View style={{margin:'5%'}}>
     <Button title="APPLY FILTER" 
       onPress={()=>props.navigation.navigate('BottomTab',{index:3})}/>
     </View>
    </SafeAreaView>
  );
};

/****************************************************************************/

export default FilterScreen;

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: '2%',
    flexDirection: 'row',
    width: width*0.565,
    justifyContent: 'space-between',
  },
  buttonView:{
    backgroundColor:'#4B4B4B',
    width:width*0.8,
    alignSelf:'center',
    marginTop:'15%',
    borderRadius:10,
    marginBottom:'5%'
  }
});
