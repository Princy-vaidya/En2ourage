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
  Pressable
  // Button
} from 'react-native';
import AppColors from '../../utils/AppColors';
import AppStyles from '../../utils/AppStyles';
import Button from '../../components/atoms/button/Button';
import DrawerMenu from "../../components/atoms/button/DrawerMenu";
import TinyButtons from '../../components/atoms/button/TinyButton';
import AppImages from '../../utils/AppImages';
import Animated from 'react-native-reanimated';
import * as ImagePicker from "react-native-image-picker";
import {
  getValuesFormStorage,
  setValuesInStorage,
} from '../../storage/AsyncDataStorage'


const {width, height} = Dimensions.get('window');
const {
  interpolate,
  Extrapolate
} = Animated;

const NavigationDrawer = (props) => {
  const { state, progress, navigation } = props;
const { index, routes } = state;
const opacity = interpolate(progress, {
inputRange: [0, 0.5, 1],
outputRange: [0, 0.1, 1],
extrapolate: Extrapolate.CLAMP
});
const [pic,setPic]=useState('')

  /****************************************************************************/
  const onAddPhoto = async () => {
    ImagePicker.launchImageLibrary(
      {
        mediaType: "photo",
        includeBase64: false,
        maxHeight: 200,
        maxWidth: 200,
      },
      async (response) => {
        if(response.didCancel==true){
          const profile = await getValuesFormStorage("pic");
        setPic(profile)
        }
       else{
       setPic(  
        response.uri,
       
);

try {
  await setValuesInStorage("pic", response.uri);
 
} catch (e) {
  console.log("user detail", e);
}

       }
console.log('ooo',response)

        
      }
    );
  };
  /****************************************************************************/

  /****************************************************************************/

  /****************************************************************************/

  return (
    <Animated.View style={[
      styles.container, {
      opacity: opacity
      }]}>
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={AppColors.Theme_Background}
      />

<Pressable style={{margin:'13%',}}
  onPress={()=>props.navigation.toggleDrawer()}>
        <Image source={AppImages.drawerCloser} />
      </Pressable>
      <View style={styles.menu}>
        {/* <Text style={AppStyles.boldWhiteText}>Menu</Text> */}
        <Pressable style={{marginTop:10,width:80}}
        onPress={()=>onAddPhoto()}>
          {pic===""?
        <Image source={AppImages.emmaWatson} style={{width:80,height:80,borderRadius:80}}/>
        :
        <Image source={{uri:pic}} style={{width:80,height:80,borderRadius:80}}/>
    }
        <View style={{backgroundColor:AppColors.Theme_Gray_Text,width:22,height:22,borderRadius:25,position:'absolute',bottom:5,right:0,alignItems:'center',justifyContent:'center'}}>
          <Image source={require('../../assets/images/camera.png')}
          style={{width:15,height:11,tintColor:'black'}}/>
        </View>
        </Pressable>
        <Text style={[AppStyles.authHeadingText,{margin:10}]}
        numberOfLines={1}
        adjustsFontSizeToFit>Emma Watson</Text>
      </View>

      {/* <View style={{flexDirection:'row'}}>
       <Image source={AppImages.clientPic}/>
      </View> */}
    <DrawerMenu title="Notification" onPress={()=>props.navigation.navigate('Notification')}/>
    {/* <DrawerMenu title="Active Jobs" onPress={()=>props.navigation.navigate('Activejobs')}/> */}
    <DrawerMenu title="Bookings" onPress={()=>props.navigation.navigate('Booking')}/>
    <DrawerMenu title="Favorites" onPress={()=>props.navigation.navigate('FavouriteList')}/>
    <DrawerMenu title="Settings" onPress={()=>props.navigation.navigate('Setting')}/>

     <View style={{ 
   marginLeft:'10%',
   marginTop:'10%'
   }}>
    <TinyButtons title="Log Out" onPress={()=>props.navigation.navigate('Login')} 
    buttonColor={AppColors.Theme_Red}/>
     </View>
    </SafeAreaView>
    </Animated.View>
  );
};

/****************************************************************************/

export default NavigationDrawer ;

const styles = StyleSheet.create({
  container:{
  flex:1,
  backgroundColor:'#323232',
  },
 menu:{
  margin:'10%',
  marginBottom:15,
  marginTop:'20%',
  flexDirection:'row',
  // borderBottomWidth:2,
  // borderColor:AppColors.Theme_Buttons,
  paddingBottom:10,
  // justifyContent:'space-between',
  alignItems:'center'
 },
 container: {
  flex: 1
  },
});
