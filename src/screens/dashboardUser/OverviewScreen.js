import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  Pressable,
  ScrollView,
  Dimensions,
} from "react-native";
import AppImages from "../../utils/AppImages";
import Slideshow from "react-native-image-slider-show";
import AppFonts from "../../utils/AppFonts";
import AppStyles from "../../utils/AppStyles";
import AppColors from "../../utils/AppColors";
import TinyButton from "../../components/atoms/button/TinyButton";
import TinyButtons from "../../components/atoms/button/TinyButton";
import Review from "../../components/organisms/Review";
import Stars from "react-native-stars";
import Header from "../../components/atoms/header/Header";
import Toast from 'react-native-simple-toast';
import Swiper from "react-native-custom-swiper";


const { width, height } = Dimensions.get("window");

export default function OverviewScreen(props) {
  const [tabIndex, setTabIndex] = useState(0);
  const [addto, setAddTo] = useState(false);
  const [like, setLike] = useState(false);
  const [imageArray,setImageArray]= useState([
   props.route.params.item.pic,
  AppImages.jamesBatson2,
],)
const [currentIndex,setCurrentIndex]= useState(0);
const [imageArray1,setImageArray1]= useState([
  props.route.params.item.pic,
],)


  const onChangeTab = (index) => {
    setTabIndex(index);
  };
 const screenChange = index => {
   setCurrentIndex(index)
};

 const renderImageSwipeItem = item => {
    return (
        <View>
          {item ===AppImages.jamesBatson2 ?
            <Image style={{width: width,backgroundColor:AppColors.Theme_Background}} source={item} resizeMode="cover" />
            :
            <Image style={{width: width,backgroundColor:AppColors.Theme_Background}} source={item} resizeMode="contain" />
          }
        </View>
    );
};
  return (
    <SafeAreaView style={AppStyles.container}>
      <Header title={props.route.params.item.clientname} onPress={() => props.navigation.goBack()} />
     {/* { props.route.params.item.clientname==="Prince Wilson" ?
      <Slideshow
        dataSource={
        [
          { url:props.route.params.item.pic, title: "1/2" },
           { url: AppImages.jamesBatson2, title: "1/2" },
          //  { url: "https://placeimg.com/640/640/beer", title: "1/2" },
        ]}
        height={height * 0.45}
        scrollEnabled={true}
        arrowLeft={<Image source={AppImages.leftArrow} style={{}} />}
        arrowRight={ <Image source={AppImages.rightArrow} style={{}} />}
        titleStyle={styles.numberStyle}
        containerStyle={{width:width}}
        indicatorSize={0}
      />
   :
   <Slideshow
        dataSource={
          [
          { url:props.route.params.item.pic, title: "1/1" },
          // { url: AppImages.jamesBatson2, title: "2/2" },
          // { url: "https://placeimg.com/640/640/beer", title: "3/3" },
        ]}
        height={height * 0.45}
        scrollEnabled={true}
        titleStyle={styles.numberStyle}
        containerStyle={{width:width}}
        indicatorSize={0}
      />
    } */}
    {props.route.params.item.clientname==="Prince Wilson" ?
<View style={{alignItems:'center'}}>

<Swiper
    		style={{ height:height * 0.45,backgroundColor:AppColors.Theme_Background }}
    		currentSelectIndex={0}
    		swipeData={imageArray}
        renderSwipeItem={renderImageSwipeItem}
        leftButtonImage={AppImages.leftArrow}
        rightButtonImage={AppImages.rightArrow}  
        onScreenChange={screenChange}
  />
  <Text style={[AppStyles.boldText,{fontSize:24,position:'absolute',bottom:10}]}>{currentIndex+1}/{imageArray.length}</Text>
  </View>:
  <View style={{alignItems:'center'}}>

  <Swiper
    		style={{ height:height * 0.45,backgroundColor:AppColors.Theme_Background }}
    		currentSelectIndex={0}
    		swipeData={imageArray1}
        renderSwipeItem={renderImageSwipeItem}
        leftButtonImage={AppImages.leftArrow}
        rightButtonImage={AppImages.rightArrow}  
        onScreenChange={screenChange}
	/>
   <Text style={[AppStyles.boldText,{fontSize:24,position:'absolute',bottom:10}]}>{currentIndex+1}/{imageArray1.length}</Text>
  </View>
}
      <Pressable style={{position:'absolute',top:70,right:10}}
      onPress={()=>{setLike(!like);
      if(!like){
     Toast.show('Added to favourite')
      }else{
        Toast.show('Remove from list.')
      }}}>


 {like?
 <Image source={require('../../assets/images/like.png')} style={{width:25,height:20,resizeMode:'contain'}}/>
 :
 <Image source={require('../../assets/images/unlike.png')} style={{width:25,height:20,resizeMode:'contain'}}/>
 }
</Pressable>
      <View style={styles.ratingContainer}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Stars
            display={4}
            spacing={2}
            count={5}
            starSize={20}
            fullStar={AppImages.star}
            emptyStar={AppImages.emptyStar}
          />
          <Text style={[AppStyles.normalBoldText]}>4.3</Text>
        </View>
        <Pressable
          style={{ flexDirection: "row" }}
          onPress={() => {setAddTo(!addto);
            if(!addto){
            Toast.show('Added successfully.')
            }else{
              Toast.show('Remove from list.')

            }
          }
          }
        >
          <Text style={AppStyles.whiteMediumLargeText}>Add to Job</Text>
          {addto ? (
            <Image
              source={AppImages.check}
              style={{ marginLeft: 5, width: 25, height: 25 }}
            />
          ) : (
            <Image
              source={AppImages.plus}
              style={{
                marginLeft: 5,
                width: 25,
                height: 25,
                tintColor: "white",
              }}
            />
          )}
        </Pressable>
      </View>

      <View
        style={{ flexDirection: "row", marginTop: 0, marginHorizontal: 10 }}
      >
        <Pressable
          style={tabIndex === 0 ? styles.activeTab : styles.inActiveTab}
          onPress={() => onChangeTab(0)}
        >
          <Text style={AppStyles.normalBoldText}>OVERVIEW</Text>
        </Pressable>
        <Pressable
          style={[tabIndex === 1 ? styles.activeTab : styles.inActiveTab]}
          onPress={() => onChangeTab(1)}
        >
          <Text style={AppStyles.normalBoldText}>REVIEW</Text>
        </Pressable>
      </View>

      {tabIndex === 0 && (
        <ScrollView>
          <View style={{ margin: "3%" }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: "2%",
              }}
            >
              {/* <View>
          <Text style={[AppStyles.boldWhiteText,{fontSize:22}]}>JAMOS BATSON</Text>
          <Text style={[AppStyles.mediumWhiteText]}>$55/hr</Text>

          </View>
          <TinyButtons title="BOOK" buttonColor={AppColors.Theme_Buttons}
          onPress={()=>props.navigation.navigate('Book')}/> */}
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image source={AppImages.securityA} style={styles.imageStyle} />
                <Image source={AppImages.gun} style={styles.imageStyle} />
                <Image source={AppImages.a1} style={styles.imageStyle} />
              </View>
              <Pressable
                onPress={() => props.navigation.navigate("CheckOutFirst")}
              >
                <View style={styles.buttonContainer}>
                  <Text style={styles.buttonText}>BOOK ( $55 /hr )</Text>
                </View>
              </Pressable>
            </View>

            <Text style={AppStyles.normalMediumText}>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </Text>
          </View>
        </ScrollView>
      )}

      {tabIndex == 1 && <Review />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  numberStyle: {
    color: "white",
    marginLeft: "47%",
    marginBottom: -20,
    fontSize: 20,
    fontFamily: AppFonts.BoldFont,
  },
  ratingContainer: {
    flexDirection: "row",
    margin: "3%",
    justifyContent: "space-between",
  },
  inActiveTab: {
    flex: 0.5,
    borderWidth: 1,
    borderColor: AppColors.Theme_Buttons,
    alignItems: "center",
    height: 50,
    justifyContent: "center",
  },
  activeTab: {
    flex: 0.5,
    borderWidth: 1,
    borderColor: AppColors.Theme_Buttons,
    alignItems: "center",
    height: 50,
    justifyContent: "center",
    borderBottomColor: AppColors.Theme_Red,
    borderBottomWidth: 4,
  },
  imageStyle: {
    width: 30,
    height: 30,
    marginRight: 5,
  },
  buttonContainer: {
    height: 48,
    borderRadius: 5,
    width: width * 0.6,
    justifyContent: "center",
    backgroundColor: AppColors.Theme_Buttons,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 20,
    fontFamily: AppFonts.BoldFont,
    color: AppColors.Theme_white,
  },
});
