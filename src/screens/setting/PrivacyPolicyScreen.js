import React from 'react'
import { StyleSheet, Text, View,SafeAreaView ,Pressable,ImageBackground,Dimensions,ScrollView,Image} from 'react-native';
import AppStyles from "../../utils/AppStyles";
import AppImages from "../../utils/AppImages";
import AppFonts from "../../utils/AppFonts";
import SettingHeader from "../../components/atoms/header/SettingHeader";
import SettingMenu from "../../components/atoms/button/SettingMenu";
const { width, height } = Dimensions.get("window");


const PrivacyPolicyScreen = (props) => {
    return (
        <SafeAreaView style={[AppStyles.container]}>
           <View style={{height:140,marginTop:15}}>
          <ImageBackground source={AppImages.privacy} resizeMode="cover" style={styles.image} >
                <Text style={styles.text}>Privacy and Policy</Text>
                <Pressable onPress={()=>props.navigation.navigate('PrivacySecurity')}
                style={{position:'absolute',margin:15}}>
                <Image source={AppImages.back} style={{height:28,width:28}}/>
                </Pressable>
          </ImageBackground>
        </View>
             
             <View style={{margin:15}}>
             <ScrollView>
             <Text style={[AppStyles.regularText,{textAlign:'justify'}]}>
             In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called greeking, which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.
              
             </Text>
             </ScrollView>
             </View>
               
        </SafeAreaView>
    )
}

export default PrivacyPolicyScreen

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
