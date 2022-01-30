import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, View, Image, FlatList,Dimensions,StatusBar,SafeAreaView} from 'react-native';
import AppColors from '../../utils/AppColors';
import AppFonts from '../../utils/AppFonts';
import AppStyles from '../../utils/AppStyles';
import AppImages from '../../utils/AppImages';
import AppStrings from '../../utils/AppStrings';
import ReviewsList from '../../components/molecule/Review/ReviewsList';
import Stars from 'react-native-stars';
import Header from "../../components/atoms/header/Header"
const {width, height} = Dimensions.get('window');

const MyReviewScreeen = (props) => {
  const [fiveStar, setFiveStar] = useState(40);
  const [fourStar, setFourStar] = useState(16);
  const [threeStar, setThreeStar] = useState(9);
  const [twoStar, setTwoStar] = useState(6);
  const [oneStar, setOneStar] = useState(2);
  const [reviewList, setReviewList] = useState([
    {name: 'Roman', rating: '4.5', date: 'June 5 2021'},
    {name: 'Nil', rating: '4', date: 'June 4 2021'},
    {name: 'Prince', rating: '3.5', date: 'June 3 2021'},
  ]);
 const[showReviews,setShowReviews]=useState(false);

  const TotalRating = fiveStar + fourStar + threeStar + twoStar + oneStar;
  const fiveStarRating = JSON.stringify((fiveStar * 100) / TotalRating) + '%';
  const fourStarRating = JSON.stringify((fourStar * 100) / TotalRating) + '%';
  const threeStarRating = JSON.stringify((threeStar * 100) / TotalRating) + '%';
  const twoStarRating = JSON.stringify((twoStar * 100) / TotalRating) + '%';
  const oneStarRating = JSON.stringify((oneStar * 100) / TotalRating) + '%';

  return (
    <SafeAreaView style={AppStyles.container}>
    <StatusBar
      barStyle="light-content"
      backgroundColor={AppColors.Theme_Background}
    />
    <Header title="My Review" onPress={()=>props.navigation.goBack()}/>
    <View style={{margin: '3%', flex: 1}}>
      <FlatList
        ListHeaderComponent={
          <>
            <View style={{flexDirection: 'row',marginBottom:20,marginTop:'5%'}}>
              <View style={{width: '20%'}}>
                <Text
                  style={styles.ratingStyle}>
                  4.3
                </Text>
                <Text style={[AppStyles.regularWhiteText,{textAlign:'center'}]}>23 ratings</Text>
              </View>
              <View style={{marginLeft: '5%', flexDirection: 'row',width:'80%'}}>
                <View style={{width:'40%'}}>
                  <View style={{alignItems: 'flex-end'}}>
                    <Stars
                      display={5}
                      spacing={2}
                      count={5}
                      starSize={20}
                      fullStar={AppImages.star}
                      emptyStar={AppImages.emptyStar}
                    />
                  </View>
                  <View style={{alignItems: 'flex-end'}}>
                    <Stars
                      display={4}
                      spacing={2}
                      count={4}
                      starSize={20}
                      fullStar={AppImages.star}
                      emptyStar={AppImages.emptyStar}
                    />
                  </View>
                  <View style={{alignItems: 'flex-end'}}>
                    <Stars
                      display={3}
                      spacing={2}
                      count={3}
                      starSize={20}
                      fullStar={AppImages.star}
                      emptyStar={AppImages.emptyStar}
                    />
                  </View>
                  <View style={{alignItems: 'flex-end'}}>
                    <Stars
                      display={2}
                      spacing={2}
                      count={2}
                      starSize={20}
                      fullStar={AppImages.star}
                      emptyStar={AppImages.emptyStar}
                    />
                  </View>
                  <View style={{alignItems: 'flex-end'}}>
                    <Stars
                      display={1}
                      spacing={2}
                      count={1}
                      starSize={20}
                      fullStar={AppImages.star}
                      emptyStar={AppImages.emptyStar}
                    />
                  </View>
                </View>

                <View style={{width: '45%'}}>
                  <View
                    style={{
                      height: 7,
                      width: fiveStarRating,
                      backgroundColor: AppColors.Theme_Buttons,
                      marginTop: height*0.009,
                    }}
                  />
                  <View
                    style={{
                      height: 7,
                      width: fourStarRating,
                      backgroundColor: AppColors.Theme_Buttons,
                      marginTop: height*0.016,
                    }}
                  />
                  <View
                    style={{
                      height: 7,
                      width: threeStarRating,
                      backgroundColor: AppColors.Theme_Buttons,
                      marginTop: height*0.018,
                    }}
                  />
                  <View
                    style={{
                      height: 7,
                      width: twoStarRating,
                      backgroundColor: AppColors.Theme_Buttons,
                      marginTop: height*0.018,
                    }}
                  />
                  <View
                    style={{
                      height: 7,
                      width: oneStarRating,
                      backgroundColor: AppColors.Theme_Buttons,
                      marginTop: height*0.015,
                    }}
                  />
                </View>

                <View style={{width:'25%'}}>
                  <Text style={[AppStyles.regularWhiteText]}>{fiveStar}</Text>
                  <Text style={[AppStyles.regularWhiteText]}>{fourStar}</Text>
                  <Text style={[AppStyles.regularWhiteText]}>{threeStar}</Text>
                  <Text style={[AppStyles.regularWhiteText]}>{twoStar}</Text>
                  <Text style={[AppStyles.regularWhiteText]}>{oneStar}</Text>
                </View>
              </View>
            </View>
            {/* <Pressable style={{alignSelf: 'center', marginTop: '5%'}} 
            onPress={()=>setShowReviews(!showReviews)}>
              <Text style={[AppStyles.normalBoldText,{fontSize:15}]}>VIEW COMMENTS</Text>
              {showReviews ?
                <Image
                source={AppImages.doubleDown}
                style={{alignSelf: 'center', height: 25, width: 25}}
              />:
                  <Image
                source={AppImages.doubleUp}
                style={{alignSelf: 'center', height: 25, width: 25}}
              />
              }
            </Pressable> */}
          </>
        }
        data={reviewList}
        renderItem={({item}) => <ReviewsList item={item} />}
        keyExtractor={item => item.id}
      />
      {/* 
     

     */}
    </View>
    </SafeAreaView>
  );
};

export default MyReviewScreeen;

const styles = StyleSheet.create({
  ratingStyle:{
    fontSize:44,
    fontFamily:'Roboto-Black',
    color:'white',
    textAlign:'center'
  }
});
