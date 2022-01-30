import React, { useState,useEffect } from 'react';
import AppColors from '../utils/AppColors'
import AsyncStorage from '@react-native-community/async-storage';
import { View, Image, Text, StyleSheet, TouchableOpacity ,SafeAreaView} from 'react-native';

function BottomTabBar(props) {
    const [routeName, setRoutName] = useState('dashboard')


    
    const handleNavigation = (routeName) => {
        props.navigation.navigate(routeName);
        setRoutName(routeName)
    };

    return (

        <SafeAreaView style={styles.parentCont}>
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => handleNavigation('dashboard')}
                style={styles.iconContainer}
                style={styles.iconContainer}
            >
                {/* <Image source={require('../Assets/Auths/home.png')}
                    style={routeName === 'dashboard' ?
                        styles.activeIcon :
                        styles.inActiveIcon} /> */}
                <Text style={routeName === 'dashboard' ?
                    styles.activeText :
                    styles.inActiveText}>
                    Dashboard</Text>
            </TouchableOpacity>

            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => handleNavigation('Notification')}
                style={styles.iconContainer}
            >
                {/* <Image source={require('../Assets/Auths/goal.png')}
                    style={routeName === 'MyGoal' ?
                        styles.activeIcon :
                        styles.inActiveIcon} /> */}
                <Text style={routeName === 'Notification' ?
                    styles.activeText :
                    styles.inActiveText}>
                    Notification</Text>
            </TouchableOpacity>

          
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    parentCont: {
        // width: '100%',
        // height: '8%',
        // paddingTop:7,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderColor: '#DADADA',
        borderWidth: 1,
        borderStyle: 'solid',
    },

    iconContainer: {

        alignItems: 'center',
        justifyContent: 'center',
        marginTop:5
    },
    inActiveIcon: {
        width: 25,
        height: 25,
        tintColor: AppColors.colorRed
    },
    activeIcon: {
        width: 25,
        height: 25,
        tintColor: 'red'
    },
    activeText: {
        // fontFamily: FONT.FAMILY.REGULAR,
        color: AppColors.colorRed,
        fontSize: 12,
        marginTop: 5
    },
    inActiveText: {
        // fontFamily: AppColors.colorRed,
        color: AppColors.colorGrey,
        fontSize: 12,
        marginTop: 5
    }
});

export default BottomTabBar;