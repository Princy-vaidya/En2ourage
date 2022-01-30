import React from 'react'
import { View, Text ,SafeAreaView,ImageBackground,Dimensions, Pressable,StyleSheet} from 'react-native';
import AppImages from "../../../utils/AppImages";
import AppStyles from "../../../utils/AppStyles";
import AppColors from "../../../utils/AppColors"
import AppFonts from '../../../utils/AppFonts';


const {width, height} = Dimensions.get('window');

const FindProtectionScreen = (props) => {
    return (
        <SafeAreaView style={AppStyles.container}>
          <ImageBackground source={AppImages.startSreen}  
          resizeMode="stretch"
          style={styles.backgroundImage}>
              <View style={{width:'85%',alignSelf:'center'}}>
                    <Text style={[styles.title,{marginTop:'55%'}]}>WE WATCH</Text>
                    <Text style={styles.title}>WE GUARD</Text>
                    <Text style={styles.title}>WE SECURE</Text>
                    <Text style={styles.title}>WE PROTECT</Text>
                    <Text style={styles.title}>WE ARE EN2OURAGE</Text>

             </View>
             <Pressable  
                onPress={()=>props.navigation.navigate('DrawerUser')}
                style={styles.buttonContainer}>
                    <Text style={[AppStyles.boldWhiteText,{fontSize:25, fontFamily:'Roboto-Black'}]}>FIND PROTECTION</Text>
                </Pressable>

          </ImageBackground>
       </SafeAreaView>
    )
}

export default FindProtectionScreen;

const styles = StyleSheet.create({
   backgroundImage:{
    flex:1,
    width:'100%',
    height:'100%',
   },
   buttonContainer:{
    position:'absolute',
    bottom:height*0.060,
    height:48,
    backgroundColor:AppColors.Theme_Background,
    borderWidth:2,
    borderRadius:10,
    borderColor:'#68707C',
    width:'78%',
    alignItems:'center',
    justifyContent:'center',
alignSelf:'center'
   },
   title:{
    fontSize:25,
    fontFamily:'Roboto-Black',
    color:AppColors.Theme_white,
    marginTop:'11%'
   }
  });
  
