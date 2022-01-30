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
import AppColors from "../../utils/AppColors";
import AppStyles from "../../utils/AppStyles";
import AppImages from "../../utils/AppImages";
import Search from "../../components/molecule/search/Search";
import ClosestTalentList from "../../components/organisms/ClosestTalentList";
import RisingTalentList from "../../components/organisms/RisingTalentList";
import TopTalentList from "../../components/organisms/TopTalentList";
import AppFonts from "../../utils/AppFonts";
import LargeButton from "../../components/atoms/button/largeButton";
import MenuHeader from "../../components/atoms/header/MenuHeader";
import Swiper from "react-native-swiper";
import MapScreen from "./MapScreen";
const { width, height } = Dimensions.get("window");
import ClosestTalent from "./Talents/ClosestTalent";
import TopTalent from "./Talents/TopTalent";
import RisingTalent from "./Talents/RisingTalent"



const DashboardUserScreen = (props) => {
  const [clientDetail, setClientDetail] = useState([
    {
      clientname: "Don Mitchelles",
      distance: "1.3 miles",
      image1: AppImages.securityA,
      image2: AppImages.gun,
      image3: AppImages.a1,
      pic:require('../../assets/images/security/don_mitchelle.png'),
      select:false
    },
    {
      clientname: "Abdel khader",
      distance: "1.2 miles",
      image1: AppImages.notavail,
      image2: AppImages.gun,
      image3: AppImages.a2,
      pic:require('../../assets/images/security/abdel_khader.png'),
      select:false

    },
    {
      clientname: "Ben Thomas",
      distance: "1.6 miles",
      image1: AppImages.notavail,
      image2: AppImages.notavail,
      image3: AppImages.a3,
      pic:require('../../assets/images/security/ben_thomson.png'),
      select:false
    },
    {
      clientname: "Ray Charlies",
      distance: "1.6 miles",
      image1: AppImages.notavail,
      image2: AppImages.notavail,
      image3: AppImages.a3,
      pic:require('../../assets/images/security/soloman_verghesse.png'),
      select:false
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
  const [clientDetail1,setClientDetail1]=useState([
    {
      clientname: "Ray Charlies",
      distance: "1.3 miles",
      image1: AppImages.securityA,
      image2: AppImages.gun,
      image3: AppImages.a1,
      pic:require('../../assets/images/security/javier_estarossa.png'),
      select:false,
      flag:false
    },
    {
      clientname: "Nancy Thomas",
      distance: "1.2 miles",
      image1: AppImages.notavail,
      image2: AppImages.gun,
      image3: AppImages.a2,
      pic:require('../../assets/images/security/nancy_thomas.png'),
      select:false,
      flag:false
    },
    {
      clientname: "Patrick Wilson",
      distance: "1.3 miles",
      image1: AppImages.securityA,
      image2: AppImages.gun,
      image3: AppImages.a1,
      pic:require('../../assets/images/security/patrick_wilson.png'),
      select:false,
      flag:false
    },
    {
      clientname: "Roberto Alonz",
      distance: "1.2 miles",
      image1: AppImages.notavail,
      image2: AppImages.gun,
      image3: AppImages.a2,
      pic:require('../../assets/images/security/roberto_alonzo.png'),
      select:false,
      flag:false
    },
   

  ])

  const [clientDetail2,setClientDetail2]=useState([
    {
      clientname: "Ben Thomson",
      distance: "1.2 miles",
      image1: AppImages.notavail,
      image2: AppImages.gun,
      image3: AppImages.a2,
      pic:require('../../assets/images/security/ben_thomson.png'),
      select:false

    },
    {
      clientname: "Abdel Khader",
      distance: "1.6 miles",
      image1: AppImages.notavail,
      image2: AppImages.notavail,
      image3: AppImages.a3,
      pic:require('../../assets/images/security/abdel_khader.png'),
      select:false

    },
   
  ])
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

  const onTabChange = (tabIndex, route) => {
    setActiveTabIndex(tabIndex);
    props.navigation.navigate(route);
  };

  /****************************************************************************/
  const onNextPress = () => {
    setToggle(!toggle);
    if (talentIndex === data.length - 1) {
      setTalentIndex(0);
    } else {
      setTalentIndex(talentIndex + 1);
    }
  };
  /****************************************************************************/
  const onBackPress = () => {
    setToggle(!toggle);

    if (talentIndex === 0) {
      setTalentIndex(2);
    } else {
      setTalentIndex(talentIndex - 1);
    }
  };



  const addClosestSecurity =  (index) => {
    let listArray = [...clientDetail];
      // setFlag(!flag)
    listArray[index].select = !listArray[index].select;

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
    <SafeAreaView style={[AppStyles.container]}>
      {!showMap &&
      <MenuHeader
        title="EN2OURAGE"
        navigation={navigation}
        onMenuPress={onMenuPress}
      />}
      {!showMap ?
      <View
        style={{
          width: "95%",
          alignSelf: "center",
          marginTop:0,
          flex: 1,
        }}
      >
        <ScrollView nestedScrollEnabled={true}>
          <Search
            value={searchValue}
            onChange={(serchValue) => setSearchValue(serchValue)}
            placeholder={"Search Security"}
            inputwidth="90%"
          />
          <Pressable onPress={()=>setShowMap(!showMap)}>
          <Image source={AppImages.map2} style={styles.map} />
          </Pressable>

          <View style={styles.talentListSubContainer}>
          
            <View style={styles.talentListContainer}>
                           <View style={{ flexDirection: "row", height: "95%" }}>
                <View style={styles.customScrollBarBackground}>
                  <Animated.View
                    style={[
                      styles.customScrollBar,
                      {
                        height:50,
                        // marginTop:height*0.01,
                        transform: [{ translateY: scrollIndicatorPosition }],
                      },
                    ]}
                  />
                </View>

                <View style={{ flex: 1 }}>
                  <Swiper
                    dotStyle={{
                      width: 8,
                      height: 8,
                      backgroundColor: "white",
                      borderRadius: 20,
                      marginBottom: -40,
                      marginHorizontal: 15,
                    }}
                    activeDotStyle={{
                      width: 11,
                      height: 11,
                      backgroundColor: "red",
                      borderRadius: 20,
                      marginBottom: -40,
                      marginHorizontal: 15,
                    }}
                    loop={true}
                    removeClippedSubviews={false}
                    bounces={false}
                    automaticallyAdjustContentInsets={true}
                    animated={false}
                  >
                    <View style={{ flex: 1 ,width:'100%'}}>
                      <Text style={styles.talentTitle}>CLOSEST TALENT</Text>

                      <View
                        style={{
                          width: 40,
                          height: 2,
                          borderBottomWidth: 2,
                          borderColor: AppColors.Theme_Red,
                          alignSelf: "center",
                        }}
                      />

                      <Animated.ScrollView
                        contentContainerStyle={{ paddingRight: 14 }}
                        onContentSizeChange={onContentSizeChange}
                        onLayout={onLayout}
                        onScroll={Animated.event(
                          [
                            {
                              nativeEvent: {
                                contentOffset: { y: scrollIndicator },
                              },
                            },
                          ],
                          { useNativeDriver: false }
                        )}
                        scrollEventThrottle={16}
                        showsVerticalScrollIndicator={false}
                        nestedScrollEnabled={true}
                      >
                        <ClosestTalent
                        onViewPress={onViewPress}/>
                      </Animated.ScrollView>
                    </View>

                    <View style={{ flex: 1 ,width:'100%'}}>
                      <Text style={styles.talentTitle}>TOP TALENT</Text>

                      <View
                        style={{
                          width: 40,
                          height: 2,
                          borderBottomWidth: 2,
                          borderColor: AppColors.Theme_Red,
                          alignSelf: "center",
                        }}
                      />

                      <Animated.ScrollView
                        contentContainerStyle={{ paddingRight: 14 }}
                        onContentSizeChange={onContentSizeChange}
                        onLayout={onLayout}
                        onScroll={Animated.event(
                          [
                            {
                              nativeEvent: {
                                contentOffset: { y: scrollIndicator },
                              },
                            },
                          ],
                          { useNativeDriver: false }
                        )}
                        scrollEventThrottle={16}
                        showsVerticalScrollIndicator={false}
                        nestedScrollEnabled={true}
                      >
                       <TopTalent
                       onViewPress={onViewPress}/>
                      </Animated.ScrollView>
                    </View>

                    <View style={{ flex: 1 ,width:'100%'}}>
                      <Text style={styles.talentTitle}>RISING TALENT</Text>

                      <View
                        style={{
                          width: 40,
                          height: 2,
                          borderBottomWidth: 2,
                          borderColor: AppColors.Theme_Red,
                          alignSelf: "center",
                        }}
                      />

                      <Animated.ScrollView
                        contentContainerStyle={{ paddingRight: 14 }}
                        onContentSizeChange={onContentSizeChange}
                        onLayout={onLayout}
                        onScroll={Animated.event(
                          [{ nativeEvent: { contentOffset: { y: scrollIndicator} } }],
                          { useNativeDriver: false }
                        )}
                        scrollEventThrottle={16}
                        showsVerticalScrollIndicator={false}
                        nestedScrollEnabled={true}
                      >
                       <RisingTalent
                       onViewPress={onViewPress}
                       />
                      </Animated.ScrollView>
                    </View>
                 

                  </Swiper>
                </View>

                {/* </ScrollView> */}
              </View>
            </View>

            {/* <Pressable style={{marginTop: 15}} onPress={() => onNextPress()}>
                  <Image source={AppImages.nexts} />
                </Pressable> */}
          </View>

          <View style={{ marginTop: "7%" }}>
            <LargeButton
              title="VIEW ALL SECURITY PERSONNELS"
              onPress={onPersonnelPress}
            />
          </View>
        </ScrollView>
      </View>:
     <MapScreen onPress={()=>setShowMap(!showMap)}/>
      }
      
    </SafeAreaView>
  );
};

/****************************************************************************/

export default DashboardUserScreen;

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
