import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import AppStyles from '../../utils/AppStyles';
import Button from "../../components/atoms/button/Button"

const DemoScreen = () => {
    return (
        <View style={AppStyles.container}>
           <View>
               <Button title="" onPress={()=>{}}/>
           </View>
        </View>
    )
}

export default DemoScreen

const styles = StyleSheet.create({})
