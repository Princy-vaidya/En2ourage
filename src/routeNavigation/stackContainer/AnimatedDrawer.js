import React from 'react';
import {
ImageBackground,
StyleSheet,
StatusBar,
View
} from 'react-native';
import {
NavigationContainer
} from '@react-navigation/native';
import {
createDrawerNavigator
} from '@react-navigation/drawer';
import Animated from 'react-native-reanimated';
import NavigationDrawer from '../../screens/NavigationDrawer/NavigationDrawer';
import DashboardBottomTab from "../../screens/dashboardUser/DashboardBottomTab";
import { createStackNavigator } from '@react-navigation/stack';

const {
  interpolate,
  Extrapolate
} = Animated;
const Drawer = createDrawerNavigator();
let screenStyle = null;

const Stack = createStackNavigator();

const Screens = ({ navigation, style }) => {
    return (
        <Animated.View style={[styles.animatedView, style]}>

        <Stack.Navigator
        //   screenOptions={{
        //     headerTransparent: true,
        //     headerTitle: null,
        //     headerLeft: () => (
        //       <Button transparent onPress={() => navigation.openDrawer()}>
        //         <Feather name="menu" size={18} color="black" style={{ paddingHorizontal: 10 }} />
        //       </Button>
        //     ),
        //   }}
          >
          <Stack.Screen name="BottomTab">{props => <DashboardBottomTab {...props} />}</Stack.Screen>
          {/* <Stack.Screen name="Messages">{props => <Messages {...props} />}</Stack.Screen>
          <Stack.Screen name="Contact">{props => <Contact {...props} />}</Stack.Screen> */}
        </Stack.Navigator>
        </Animated.View>

    );
  };
  
const AnimateStackOnDrawerToggle = () => {
return (
<ImageBackground
style={styles.backgroundImage}
source={require('../../assets/images/back.png')}
resizeMode='cover'
>
<StatusBar translucent barStyle='light-content' 
backgroundColor='transparent' />
<View style={styles.transparentView}>
<NavigationContainer>
<Drawer.Navigator
drawerType='back'
overlayColor='transparent'
sceneContainerStyle={styles.sceneContainerStyle}
drawerStyle={styles.drawerStyle}
drawerContent={props => {
const scale = interpolate(props.progress, {
inputRange: [0, 1],
outputRange: [1, 0.85],
extrapolate: Extrapolate.CLAMP
});
const borderRadius = interpolate(props.progress, {
inputRange: [0, 1],
outputRange: [0, 20],
extrapolate: Extrapolate.CLAMP
});
screenStyle = {
transform: [{
scaleY: scale
}],
                borderRadius
};
return <NavigationDrawer {...props} />
}}
>
<Drawer.Screen name="Screens">
          {props => <Screens {...props} style={...screenStyle} />}
        </Drawer.Screen>

</Drawer.Navigator>
</NavigationContainer>
</View>
</ImageBackground>
)
};
const styles = StyleSheet.create({
backgroundImage: {
width: '100%',
height: '100%'
},
transparentView: {
    ...StyleSheet.absoluteFill,
backgroundColor: 'rgba(0,0,0,0.75)'
},
drawerStyle: {
backgroundColor: 'transparent',
width:  '55%'
},
sceneContainerStyle: {
    backgroundColor: 'transparent'
    },
    animatedView: {
        flex: 1,
        overflow: 'hidden'
        },
        
    });
    
export default AnimateStackOnDrawerToggle;