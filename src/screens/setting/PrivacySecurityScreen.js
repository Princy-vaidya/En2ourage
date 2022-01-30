import React from 'react'
import { StyleSheet, Text, View,SafeAreaView ,ImageBackground,Dimensions,ScrollView,Pressable,Image} from 'react-native';
import AppStyles from "../../utils/AppStyles";
import SettingHeader from "../../components/atoms/header/SettingHeader";
import SettingMenu from "../../components/atoms/button/SettingMenu";
const { width, height } = Dimensions.get("window");
import AppImages from "../../utils/AppImages";
import AppFonts from "../../utils/AppFonts";

const PrivacySecurityScreen = (props) => {
    return (
        <SafeAreaView style={[AppStyles.container]}>
            
            <View style={{height:140,marginTop:15}}>
          <ImageBackground source={AppImages.privacy} resizeMode="cover" style={styles.image} >
                <Text style={styles.text}>Privacy and Security</Text>
                <Pressable onPress={()=>props.navigation.navigate('Setting')}
                style={{position:'absolute',margin:15}}>
                <Image source={AppImages.back} style={{height:28,width:28}}/>
                </Pressable>
          </ImageBackground>
        </View>
               
               <View style={{}}>
               <ScrollView>
               <SettingMenu title="Term and Condition"
               type="Privacy"
               onPress={()=>props.navigation.navigate('TermCondition')} />
                <SettingMenu title="Privacy and Policy"
                  type="Privacy" 
                onPress={()=>props.navigation.navigate('Privacy')}/>
               </ScrollView>
               </View>
               
        </SafeAreaView>
    )
}

export default PrivacySecurityScreen

const styles = StyleSheet.create({
    image: {
        flex: 1,
        borderTopEndRadius: 30,
        borderTopStartRadius: 30,
        overflow: 'hidden'
       
      },
      
      text: {
        color: 'white',
        fontSize: 26,
        lineHeight: 60,
        fontFamily:AppFonts.BoldFont,
        fontWeight: '700',
        textAlign: 'center',
        backgroundColor: 'rgba(0,0,0,0.3)'
      },
      
})
