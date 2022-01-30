import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Dimensions,
  FlatList,
  Image,
  Pressable,
  Switch,
  // Button
} from 'react-native';
import AppColors from '../../utils/AppColors';
import AppStyles from '../../utils/AppStyles';
import TinyButton from "../../components/atoms/button/TinyButton";
import AppImages from '../../utils/AppImages';
import Search from '../../components/molecule/search/Search';
import PersonnelList from '../../components/organisms/PersonnelList';
import MenuHeader from "../../components/atoms/header/MenuHeader"
import Toast from 'react-native-simple-toast';

const {width, height} = Dimensions.get('window');

const AllpersonnelScreen = props => {
  const [clientDetail, setClientDetail] = useState([
    {
      clientname: 'Don Mitchelle',
      price: '19',
      rating: '4.3',
      image1: AppImages.securityA,
      image2: AppImages.gun,
      image3: AppImages.a1,
      pic:require('../../assets/images/security/don_mitchelle.png'),
      id:1,
      select:false
    },
    {
      clientname: 'Joy Brown',
      price: '22',
      rating: '3.3',
      image1: AppImages.securityA,
      image2: AppImages.gun,
      image3: AppImages.a1,
      pic:require('../../assets/images/security/abdel_khader.png'),
      id:2,
      select:false
    },
    {
      clientname: 'Ben Thomson',
      price: '17',
      rating: '5',
      image1: AppImages.securityA,
      image2: AppImages.gun,
      image3: AppImages.a1,
      pic:require('../../assets/images/security/ben_thomson.png'),

      id:3,
      select:false
    },
    {
      clientname: 'Javier Estarossa',
      price: '22',
      rating: '3.3',
      image1: AppImages.securityA,
      image2: AppImages.gun,
      image3: AppImages.a1,
      pic:require('../../assets/images/security/javier_estarossa.png'),

      id:4,
      select:false
    },
    {
      clientname: 'Nancy Thomas',
      price: '17',
      rating: '5',
      image1: AppImages.securityA,
      image2: AppImages.gun,
      image3: AppImages.a1,
      pic:require('../../assets/images/security/nancy_thomas.png'),

      id:5,
      select:false
    }, 
    {
      clientname: 'Patrick Wilson',
      price: '22',
      rating: '3.3',
      image1: AppImages.securityA,
      image2: AppImages.gun,
      image3: AppImages.a1,
      pic:require('../../assets/images/security/patrick_wilson.png'),

      id:6,
      select:false
    },
    {
      clientname: 'Roberto_Alonzo',
      price: '17',
      rating: '5',
      image1: AppImages.securityA,
      image2: AppImages.gun,
      image3: AppImages.a1,
      pic:require('../../assets/images/security/roberto_alonzo.png'),

      id:7,
      select:false
    },
    {
      clientname: 'Roman Pierce',
      price: '17',
      rating: '5',
      image1: AppImages.securityA,
      image2: AppImages.gun,
      image3: AppImages.a1,
      pic:require('../../assets/images/security/roman_pierce.png'),

      id:8,
      select:false
    },
    {
      clientname: 'Soloman Verghesse',
      price: '17',
      rating: '5',
      image1: AppImages.securityA,
      image2: AppImages.gun,
      image3: AppImages.a1,
      pic:require('../../assets/images/security/soloman_verghesse.png'),

      id:9,
      select:false
    },
  ]);
  const [isToggle, setIsToggle] = useState(false);
  const toggleSwitch = () => setIsToggle(previousState => !previousState);
  const [searchValue, setSearchValue] = useState('');
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const {navigation,onMenuPress,onViewPress}=props

  const onTabChange = (tabIndex ,route)=> {
    setActiveTabIndex(tabIndex);
    props.navigation.navigate(route)
  };
  /****************************************************************************/

  /****************************************************************************/

  /****************************************************************************/
  const addItem =  (index) => {
    let listArray = clientDetail;
    let newArray=[];
    setIsToggle(!isToggle)
    listArray[index].select = !listArray[index].select;
   
   console.log('data',)
  if(listArray[index].select){
    Toast.show('Added to list.')
  }else{
    Toast.show('Remove from list.')
  }
   setClientDetail(listArray);
  }
  /****************************************************************************/

  return (
    <SafeAreaView style={[AppStyles.container]}>

     <MenuHeader title="ALL PERSONNEL"
       navigation={navigation}
       onMenuPress={onMenuPress}/>
      <View style={{width:'95%',alignSelf:'center',flex:1}}>
        <FlatList
          ListHeaderComponent={
            <>
              <Search
                value={searchValue}
                onChange={serchValue => setSearchValue(serchValue)}
                placeholder={'Search Security'}
                inputwidth="90%"
              />
            </>
          }
          data={clientDetail}
          renderItem={({item,index}) => 
          <PersonnelList item={item} 
          index={index}
          type="Personnel"
          onPress={()=>onViewPress.navigate('Overview',{item:item})}
          onAddItem={()=>addItem(index)}/>
        }
          keyExtractor={item => item.id}
          ListFooterComponent={
            <View style={{marginBottom:'5%'}}/>
          }
        />
      </View>
      {/* <SafeAreaView style={styles.buttonContainer}>
            <Pressable
              style={
                 styles.inactiveButton
              }
              onPress={() => onTabChange(0,'BottomTab')}>
              <Image source={AppImages.inactiveHome} />
            </Pressable>
            <Pressable
              style={
                styles.inactiveButton 
              }
              onPress={() => onTabChange(1,'BottomTab')}>
              <Image source={AppImages.inactiveSecurity} />
            </Pressable>
          </SafeAreaView> */}
    </SafeAreaView>
  );
};

/****************************************************************************/

export default AllpersonnelScreen;

const styles = StyleSheet.create({
  map: {
    width: '100%',
    borderRadius: 10,
    marginTop: '5%',
  },
  activeButton: {
    borderWidth: 1,
    width: '50%',
    borderColor: AppColors.Theme_Red,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inactiveButton: {
    borderWidth: 1,
    borderColor: AppColors.Theme_Buttons,
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    // position: 'absolute',
    // bottom: 0,
    flexDirection: 'row',
    height: 40,
    width: '100%',
    backgroundColor: AppColors.Theme_Background,
    marginBottom: 0,
  },
});
