import React, { useState, useRef } from "react";
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
  ScrollView,
  ImageBackground,
  Animated,
  PanResponder,
  // Button
} from "react-native";
import AppColors from "../../../utils/AppColors";
import AppStyles from "../../../utils/AppStyles";
import AppImages from "../../../utils/AppImages";
import Search from "../../../components/molecule/search/Search";
import ClosestTalentList from "../../../components/organisms/ClosestTalentList";
import RisingTalentList from "../../../components/organisms/RisingTalentList";
import TopTalentList from "../../../components/organisms/TopTalentList";
import AppFonts from "../../../utils/AppFonts";
import Toast from 'react-native-simple-toast';

const { width, height } = Dimensions.get("window");

const ClosestTalent = (props) => {
  const [clientDetail, setClientDetail] = useState([
    {
      clientname: "Don Mitchelles",
      distance: "1.3 miles",
      image1: AppImages.securityA,
      image2: AppImages.gun,
      image3: AppImages.a1,
      pic:require('../../../assets/images/security/don_mitchelle.png'),
      select:false
    },
    {
      clientname: "Prince Wilson",
      distance: "1.3 miles",
      image1: AppImages.securityA,
      image2: AppImages.gun,
      image3: AppImages.a1,
      pic:require('../../../assets/images/james_batson.png'),
      select:false,
      flag:false
    },
    {
      clientname: "Abdel khader",
      distance: "1.2 miles",
      image1: AppImages.notavail,
      image2: AppImages.gun,
      image3: AppImages.a2,
      pic:require('../../../assets/images/security/abdel_khader.png'),
      select:false

    },
    {
      clientname: "Roberto Alonz",
      distance: "1.2 miles",
      image1: AppImages.notavail,
      image2: AppImages.gun,
      image3: AppImages.a2,
      pic:require('../../../assets/images/security/roberto_alonzo.png'),
      select:false,
      flag:false
    },
    {
      clientname: "Ray Charlies",
      distance: "1.6 miles",
      image1: AppImages.notavail,
      image2: AppImages.notavail,
      image3: AppImages.a3,
      pic:require('../../../assets/images/security/soloman_verghesse.png'),
      select:false
    },
    {
      clientname: "Patrick Wilson",
      distance: "1.3 miles",
      image1: AppImages.securityA,
      image2: AppImages.gun,
      image3: AppImages.a1,
      pic:require('../../../assets/images/security/patrick_wilson.png'),
      select:false,
      flag:false
    },

   
   
   
  ]);
  const [isToggle, setIsToggle] = useState(false);
  const toggleSwitch = () => setIsToggle((previousState) => !previousState);
  const [searchValue, setSearchValue] = useState("");
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [talentIndex, setTalentIndex] = useState(0);
  const [toggle, setToggle] = useState(0);
  const[flag,setFlag]=useState(false);
  const { navigation, onMenuPress, onPersonnelPress,   onViewPress } = props;
  const [showMap, setShowMap] = useState(false);
 
  const [completeScrollBarHeight, setCompleteScrollBarHeight] = useState(1);
  const [visibleScrollBarHeight, setVisibleScrollBarHeight] = useState(0);
  const scrollIndicator = useRef(new Animated.Value(0)).current;

  const scrollIndicatorSize =
    completeScrollBarHeight > visibleScrollBarHeight
      ? (visibleScrollBarHeight * visibleScrollBarHeight) /
        completeScrollBarHeight
      : visibleScrollBarHeight;

  const difference =
    visibleScrollBarHeight > scrollIndicatorSize
      ? visibleScrollBarHeight - scrollIndicatorSize
      : 1;

  const scrollIndicatorPosition = Animated.multiply(
    scrollIndicator,
    visibleScrollBarHeight / completeScrollBarHeight
  ).interpolate({
    extrapolate: "clamp",
    inputRange: [0, difference],
    outputRange: [50, difference],
  });

  const onContentSizeChange = (_, contentHeight) =>
    setCompleteScrollBarHeight(contentHeight);

  const onLayout = ({
    nativeEvent: {
      layout: { height },
    },
  }) => {
    setVisibleScrollBarHeight(height);
  };

 


  const addClosestSecurity =  (index) => {
    let listArray = [...clientDetail];
      // setFlag(!flag)
    listArray[index].select = !listArray[index].select;
    if(listArray[index].select){
      Toast.show('Security hire successfully.')
    }else{
      Toast.show('Remove from list.')
    }

   setClientDetail(listArray);
  }

  const addTopSecurity =  (index) => {
    let listArray = [...clientDetail1];
      // setFlag(flag=>!flag)
    listArray[index].select = !listArray[index].select;

   setClientDetail1(listArray);
  }

  const addRisingSecurity =  (index) => {
    let listArray =[...clientDetail2];
    listArray[index].select = !listArray[index].select;

   setClientDetail2(listArray);
  }
  /****************************************************************************/

  return (
                 <View>
                        {clientDetail.map((item,index) => (
                          <ClosestTalentList item={item} 
                          onPress={()=>addClosestSecurity(index)}
                          onProfilePress={()=>onViewPress.navigate('Overview',{item:item})}/>
                        ))}
                   
                   </View>
  );
};

/****************************************************************************/

export default ClosestTalent;

const styles = StyleSheet.create({
  map: {
    width: "100%",
    borderRadius: 10,
    marginTop: "4%",
  },
  activeButton: {
    borderWidth: 1,
    width: "50%",
    borderColor: AppColors.Theme_Red,
    alignItems: "center",
    justifyContent: "center",
    borderLeftWidth: 0,
  },
  inactiveButton: {
    borderWidth: 1,
    borderColor: AppColors.Theme_Buttons,
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    borderRightWidth: 0,
  },
  buttonContainer: {
    // position: 'absolute',
    // bottom: 0,
    flexDirection: "row",
    height: 40,
    width: "100%",
    backgroundColor: AppColors.Theme_Background,
    marginBottom: 0,
  },
  talentTitle: {
    textAlign: "center",
    color: "white",
    fontFamily: AppFonts.BoldFont,
    fontSize: 18,
    paddingBottom: 2,
  },
  talentListContainer: {
    width: "95%",
    height: 300,
    borderWidth: 1,
    borderColor: AppColors.Theme_Buttons,
    marginTop: "7%",
    borderRadius: 15,
    // marginHorizontal: '2%',
  },
  talentListSubContainer: {
    flexDirection: "row",
    height: 300,
    alignItems: "center",
    alignSelf: "center",
  },
  customScrollBar: {
    backgroundColor: "yellow",
    borderRadius: 3,
    width: 10,
    height: 0,
    position: "absolute",
    marginTop: 20,
  },
  scrollContainer: {
    flexDirection: "row",
    width: "100%",
    // marginTop:'50%',
  },
  petItemListContainer: {
    width: "100%",
  },
  customScrollBar: {
    backgroundColor: AppColors.Theme_Buttons,
    borderRadius: 3,
    marginLeft: 3,
    width: 6.5,
  },
  // customScrollBarBackground: {
  //   // backgroundColor: '#232323',
  //   // marginTop:-30,
  //   borderRadius: 3,
  //   height: '100%',
  //   width: 6,
  //   // position:'absolute',
  //   // left:'6%'
  // },
});
