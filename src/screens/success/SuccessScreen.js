import React from 'react'
import { StyleSheet, Text, View,SafeAreaView,ImageBackground } from 'react-native';
import AppStyles from "../../utils/AppStyles";
import AppImages from "../../utils/AppImages";
import Button from "../../components/atoms/button/Button";

const SuccessScreen = (props) => {
    return (
        <SafeAreaView style={AppStyles.container}>
            <ImageBackground source={AppImages.success} 
            style={{flex:1}}
            > 
            <View style={{alignItems:'center',justifyContent:'center',flex:1}}>

                  <Text style={AppStyles.regularLargeWhiteText}>Success!</Text>
                  <Text style={[AppStyles.normalBoldText,{fontSize:20}]}>Your Booking was confirmed.</Text>
                  <Text style={[AppStyles.normalBoldText,{fontSize:20}]}>Thank you for choosing our app!</Text>

                  </View>
                  
                  <View style={{margin:'5%'}}>
                  <Button title="RETURN TO HOME PAGE"
                  onPress={()=>props.navigation.navigate('BottomTab',{index:0})}/>
                  </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default SuccessScreen

const styles = StyleSheet.create({})
