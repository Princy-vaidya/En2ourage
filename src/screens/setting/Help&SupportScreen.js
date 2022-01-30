import React, { useState,useRef,useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Dimensions,
  FlatList,
  Image,
  TextInput,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  Pressable,
  Animated,
  Modal,

  // Button
} from "react-native";
import AppColors from "../../utils/AppColors";
import AppStyles from "../../utils/AppStyles";
import Button from "../../components/atoms/button/Button";
import SettingMenu from "../../components/atoms/button/SettingMenu";
import AppImages from "../../utils/AppImages";
import AppFonts from "../../utils/AppFonts";
import * as Animatable from 'react-native-animatable';
import SettingHeader from "../../components/atoms/header/SettingHeader";
import SelectOneButton from "../../components/atoms/button/SelectOneButton";
const { width, height } = Dimensions.get("window");

const HelpSupportScreen = (props) => {
  const [issue, setIssue] = useState("");
  const [issueList, setIssueList] = useState([
    { name: "Option 1", id: 1, select: false },
    { name: "Option 2", id: 2, select: false },
    { name: "Option 3", id: 3, select: false },
  ]);
  const [selectIssue, setSelectIssue] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [option, setOption] = useState('Select an issue');
  const [animation,setAnimation]=useState(new Animated.Value(1));
  const [slide,setSlide]=useState(new Animated.Value(1));
  
  /****************************************************************************/
  
  const animatedStyle = {
    opacity: animation,
    
  transform: [
          { scale: animation },
          {
            translateY: animation.interpolate({
              inputRange: [0, 0],
              outputRange: selectIssue ?[0,0]:[0,0],
              //  extrapolateLeft: "clamp",
              extrapolateV: "clamp",
            })
          },
    
  
        ],
  
      
        // NEW CODE
        height: slide.interpolate({
          inputRange: [0,0],
          outputRange: [0,180],
          // extrapolate: 'clamp',
        }),
   
  };
  
  const startAnimation = () => {
  //  setSelected(true)
  //setting isThisCardSelected to true to apply the above style which will trigger fade & after fading is done, applying height animation which will give the slide effect. 
        Animated.spring(animation, {
            toValue: 100,
            timing: 500,
        }).start(() => {
            Animated.timing(slide, {
                toValue:0,
                duration: 500,
            })
            .start(() => {
                //do you logic/actions
        
                    slide.setValue(1);
                });
             })
       
  };
  /****************************************************************************/
  const onSelect = (item) => {
    Keyboard.dismiss;
    let data = issueList;
    setToggle(!toggle);
    data.forEach((elem) => {
      elem.select = false;
      if (elem.id === item.id) {
        elem.select = true;
      }
    });
    setIssueList(data);
    setOption(item.name)
    setSelectIssue(false);
  };
  /****************************************************************************/
  const zoomOut = {
    0: {
      opacity: 1,
      scale: 1,
    },
    0.5: {
      opacity: 1,
      scale: 0.3,
    },
    1: {
      opacity: 0,
      scale: 0,
    },
  };
  /****************************************************************************/

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={AppStyles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={AppColors.Theme_Background}
        />
       
       <View style={{height:140,marginTop:15}}>
          <ImageBackground source={AppImages.helpsupport} resizeMode="cover" style={styles.image} >
                <Text style={styles.text}> Help and Support</Text>
                <Pressable onPress={()=>props.navigation.navigate('Setting')}
                style={{position:'absolute',margin:15}}>
                <Image source={AppImages.back} style={{height:28,width:28}}/>
                </Pressable>
          </ImageBackground>
        </View>

        <ScrollView
       keyboardShouldPersistTaps="handled"
       style={{ width:width / 1.1, alignSelf: "center", marginTop: "6%" ,flex:1}}
        >
          <View style={{width:'99%',alignSelf:'center'}}>
          {/* <SelectOneButton
            title={option}
            onPress={()=>setSelectIssue(!selectIssue)}
          /> */}

<Pressable onPress={()=> setSelectIssue(!selectIssue)}>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>{option}</Text>
        </View>
        <Pressable style={{position:'absolute',right:0,alignItems:'center',margin:10}}
        onPress={()=> setSelectIssue(!selectIssue)}>
          {!selectIssue?
        <Image source={AppImages.downArrow} style={{alignSelf:'center',width:15,height:10,tintColor:'white',marginTop:10,marginRight:5}}/>
        :        <Image source={AppImages.upArrow} style={{alignSelf:'center',width:25,height:25,tintColor:'white'}}/>
          }
        </Pressable>
      </Pressable>
          </View>

          {selectIssue && (
           <View style={{borderWidth:2,
            borderTopWidth:0,
            borderColor:AppColors.Theme_Buttons,height:240,width:width / 1.1,alignSelf:'center',marginTop:'5%',

           borderRadius:5}}>
            <Animatable.View 
          animation="fadeIn"
          //  easing="ease"
            style={[styles.dropDownConatiner]}>
              {issueList.map((item) => (
                <View>
                <Pressable
                  style={styles.unselect}
                  onPress={() => onSelect(item)}
                  keyboardShouldPersistTaps="handled"
                >
                  <Animated.Text
                    style={[
                      item.select
                        ? AppStyles.normalRegularGrayText
                        : AppStyles.normalRegularGrayText,
                      { color: "white" },
                    ]}
                    animation={zoomOut}>
                    {item.name}
                  </Animated.Text>
                </Pressable>
                {item.select &&
                <Image source={AppImages.check} style={{position:'absolute',right:0,margin:10}} />
                }
                </View>
              ))}
            </Animatable.View>
           </View>
          )}

          {/* <View style={{borderWidth:2,borderColor:AppColors.Theme_Buttons,position:'absolute',height:240,width:'99%',alignSelf:'center',top:'21%'}}/> */}

       {!selectIssue && <View style={[styles.input]}> 
          
             <TextInput
              style={styles.textInput}
              placeholderTextColor="#9B9B9B"
              placeholder="Please select an issue & specify in details of the issue you are facing and hit submit"
              onChangeText={(text) => setIssue(text)}
              value={issue}
              returnKeyType="next"
              multiline={true}
              numberOfLines={20}
              
            />
          </View>
}
        </ScrollView>
        <View style={{ margin: "5%" }}>
          <Button title="SUBMIT" />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

/****************************************************************************/

export default HelpSupportScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#323232",
  },
  menu: {
    margin: "10%",
    marginTop: "20%",
    borderBottomWidth: 2,
    borderColor: AppColors.Theme_Buttons,
    paddingBottom: 10,
  },
  textInput: {
    // height: 130,
   flex: 1,
   textAlignVertical: "top",
    // padding: 10,
    paddingTop:-5,
   marginHorizontal: "10%",
    fontSize: 18,
    color: AppColors.Theme_white,
    // alignSelf: "center",
    textAlign: "center",
    
   height:240,

  },

  input: {
    borderRadius: 5,
    borderWidth: 2,
    borderColor: AppColors.Theme_Buttons,
    marginBottom: 10,
    width: width / 1.1,
     height: 240,
    fontSize: 16,
    borderColor: AppColors.Theme_Buttons,
    marginTop: "5%",
    alignSelf: "center",
    marginBottom: "5%",
    
  },
  unselect: {
    height: 50,
    alignItems: "center",
    // borderBottomWidth: 1,
    // borderColor: "#4B4B4B",
    justifyContent: "center",
    backgroundColor:AppColors.Theme_Buttons,
    borderRadius:5,
    marginTop:2
  },
  select: {
    height: 40,
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: AppColors.Theme_Buttons,
    justifyContent: "center",
    backgroundColor: "#4B4B4B",
    zIndex:100

    // borderBottomRightRadius:10,
    // borderBottomLeftRadius:10
  },
  dropDownConatiner:{
    
    backgroundColor:AppColors.Theme_Background,
   
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
    borderColor:AppColors.Theme_Buttons,
    // position:'absolute',

     marginTop:'-5%'
  },
  image: {
    flex: 1,
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
    overflow: 'hidden',
  
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
  buttonContainer:{
    backgroundColor:AppColors.Theme_Buttons,
    height:48,
    borderRadius:8,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
  },
  buttonText:{
    textAlign:'center',
    fontSize:15,
    fontFamily:AppFonts.BoldFont,
    color:AppColors.Theme_white,
   
  }
});
