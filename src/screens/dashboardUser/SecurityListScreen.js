import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Dimensions,
  FlatList,
  Image,
  Pressable,
  Switch,
  // Button
} from "react-native";
import AppColors from "../../utils/AppColors";
import AppStyles from "../../utils/AppStyles";
import TinyButton from "../../components/atoms/button/TinyButton";
import AppImages from "../../utils/AppImages";
import Search from "../../components/molecule/search/Search";
import PersonnelList from "../../components/organisms/PersonnelList";
import MenuHeader from "../../components/atoms/header/MenuHeader";
import Button from "../../components/atoms/button/Button";
import ClientDetailList from "../../components/organisms/ClientDetailList";
import Toast from 'react-native-simple-toast';

const { width, height } = Dimensions.get("window");

const SecurityListScreen = (props) => {
  const [clientDetail, setClientDetail] = useState([
    {
      clientname: "Don Mitchelle",
      price: "19",
      rating: "4.3",
      image1: AppImages.securityA,
      image2: AppImages.gun,
      image3: AppImages.a1,
      pic: require("../../assets/images/security/don_mitchelle.png"),
      id: 1,
      select: false,
    },
    {
      clientname: "Joy Brown",
      price: "22",
      rating: "3.3",
      image1: AppImages.securityA,
      image2: AppImages.gun,
      image3: AppImages.a1,
      pic: require("../../assets/images/security/abdel_khader.png"),
      id: 2,
      select: false,
    },
    {
      clientname: "Ben Thomson",
      price: "17",
      rating: "5",
      image1: AppImages.securityA,
      image2: AppImages.gun,
      image3: AppImages.a1,
      pic: require("../../assets/images/security/ben_thomson.png"),

      id: 3,
      select: false,
    },
    {
      clientname: "Javier Estarossa",
      price: "22",
      rating: "3.3",
      image1: AppImages.securityA,
      image2: AppImages.gun,
      image3: AppImages.a1,
      pic: require("../../assets/images/security/javier_estarossa.png"),

      id: 4,
      select: false,
    },
    {
      clientname: "Nancy Thomas",
      price: "17",
      rating: "5",
      image1: AppImages.securityA,
      image2: AppImages.gun,
      image3: AppImages.a1,
      pic: require("../../assets/images/security/nancy_thomas.png"),

      id: 5,
      select: false,
    },
    {
      clientname: "Patrick Wilson",
      price: "22",
      rating: "3.3",
      image1: AppImages.securityA,
      image2: AppImages.gun,
      image3: AppImages.a1,
      pic: require("../../assets/images/security/patrick_wilson.png"),

      id: 6,
      select: false,
    },
    {
      clientname: "Roberto_Alonzo",
      price: "17",
      rating: "5",
      image1: AppImages.securityA,
      image2: AppImages.gun,
      image3: AppImages.a1,
      pic: require("../../assets/images/security/roberto_alonzo.png"),

      id: 7,
      select: false,
    },
    {
      clientname: "Roman Pierce",
      price: "17",
      rating: "5",
      image1: AppImages.securityA,
      image2: AppImages.gun,
      image3: AppImages.a1,
      pic: require("../../assets/images/security/roman_pierce.png"),

      id: 8,
      select: false,
    },
    {
      clientname: "Soloman Verghesse",
      price: "17",
      rating: "5",
      image1: AppImages.securityA,
      image2: AppImages.gun,
      image3: AppImages.a1,
      pic: require("../../assets/images/security/soloman_verghesse.png"),

      id: 9,
      select: false,
    },
  ]);
  const [isToggle, setIsToggle] = useState(false);
  const toggleSwitch = () => setIsToggle((previousState) => !previousState);
  const { navigation, onMenuPress, onViewPress, onContinue } = props;

  
  /****************************************************************************/
  const deleteItemById = (id) => {
    const filteredData = clientDetail.filter((item) => item.id !== id);
    setClientDetail(filteredData);
    Toast.show('Security Deleted Successfully.')
    console.log("filter", filteredData);

  };

  /****************************************************************************/

  /****************************************************************************/

  /****************************************************************************/

  return (
    <SafeAreaView style={[AppStyles.container]}>
      <MenuHeader
        title="SECURITY LIST"
        navigation={navigation}
        onMenuPress={onMenuPress}
      />

      <View style={{ width: "90%", alignSelf: "center", flex: 1 }}>
      {clientDetail.length === 0 && <Text style={{color:'white',fontSize:18,textAlign:'center',marginTop:20}}>Empty list!</Text>}
        <FlatList
          data={clientDetail}
          renderItem={({ item, index }) => (
            <PersonnelList
              item={item}
              index={index}
              onPress={() => onViewPress.navigate("Overview", { item: item })}
              type="security"
              onPressItem={() => deleteItemById(item.id)}
              onAddItem={() => addItem(index)}
            />
          )}
          keyExtractor={(item) => item.id}
          style={{}}
          // ListFooterComponent={
          //   // <View style={{ marginVertical: "5%" }}>
          //   //   {clientDetail.length !== 0 && (
          //   //     <Button title="CONTINUE" onPress={onContinue} />
          //   //   )}
          //   // </View>
          // }
        />

<View style={{ marginBottom: "5%" }}>
{clientDetail.length !== 0 ?
                <Button title="CONTINUE" onPress={onContinue} />
                :
                <Button title="CONTINUE" onPress={()=>{}} />
}
            
            </View>
      </View>
    </SafeAreaView>
  );
};

/****************************************************************************/

export default SecurityListScreen;

const styles = StyleSheet.create({
  map: {
    width: "100%",
    borderRadius: 10,
    marginTop: "5%",
  },
  activeButton: {
    borderWidth: 1,
    width: "50%",
    borderColor: AppColors.Theme_Red,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: AppColors.Theme_Background,
    borderRightWidth: 0,
  },
  inactiveButton: {
    borderWidth: 1,
    borderColor: AppColors.Theme_Buttons,
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    borderLeftWidth: 0,
  },
  buttonContainer: {
    // position: 'absolute',
    // bottom: 0,
    flexDirection: "row",
    height: 40,
    width: "100%",
    // marginBottom:10
  },
});
