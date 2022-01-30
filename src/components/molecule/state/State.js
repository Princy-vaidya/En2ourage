import React, { useState } from "react";
import {
  View,
  Text,
  Modal,
  Dimensions,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
  TextInput,
  Pressable,
} from "react-native";
import AppColors from "../../../utils/AppColors";
import AppImages from "../../../utils/AppImages";
import Search from "../../molecule/search/Search";
import AppFonts from "../../../utils/AppFonts";
import Button from "../../atoms/button/Button";

export default function Dialog(props) {
  const {
    isVisible,
    onValueSelected,
    title,
    invalid,
    activityList,
    onCancel,
    onSearchState,
    searchValue,
    message,
    type,
  } = props;
  // const [searchValue, setSearchValue] = useState("");
  const [focus, setFocus] = useState(false);

  return (
    <SafeAreaView>
      <Modal
        visible={isVisible}
        transparent={true}
        animationType={"fade"}
        onRequestClose={() => {
          isVisible;
        }}
      >
        <View style={styles.modalView}>
          <View
            style={[styles.modalContainer, type !== "Sex" && { height: "70%" }]}
          >
            {type !== "Sex" && (
              <View style={styles.input}>
                {/* <View style={{alignItems:'center',justifyContent:'center',alignSelf:'center',width:'90%'}}>  */}
                <TextInput
                  style={styles.textInput}
                  placeholderTextColor="white"
                  placeholder={focus ? "" : "Search"}
                  onChangeText={(text) => onSearchState(text)}
                  onFocus={() => setFocus(true)}
                  returnKeyType="done"
                  // multiline={true}
                />
                {/* </View> */}
                {/*  */}
                <Image
                  source={AppImages.search}
                  style={{
                    margin: 10,
                    position: "absolute",
                    alignSelf: "flex-start",
                  }}
                />
              </View>
            )}

            <View
              style={[
                { width: "90%" },
                type === "Sex" ? { height: 200 } : { height: "87%" },
              ]}
            >
              {invalid == true && (
                <Text
                  style={{
                    color: "red",
                    textAlign: "center",
                    marginTop: 10,
                    fontSize: 14,
                  }}
                >
                  {message}
                </Text>
              )}
              <FlatList
                data={activityList}
                style={{ height: "70%" }}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    onPress={() => {
                      onValueSelected(item);
                    }}
                  >
                    <View
                      style={{
                        // flexDirection: 'row',
                        padding: 15,
                        borderBottomWidth: 0.5,
                        borderColor: AppColors.Theme_Gray_Text,
                      }}
                    >
                      <Text
                        style={{
                          marginLeft: 10,
                          color: "white",
                          textAlign: "center",
                        }}
                      >
                        {item.name}
                      </Text>
                    </View>
                  </TouchableOpacity>
                )}
              />
              {
         <View style={{ width: "95%", alignSelf:'center',marginVertical:'7%'}}>
                <Button onPress={onCancel} title="Cancel" />
              </View>}
            
            </View>
            {/* {type==="Sex" &&
         <View style={{ width: "90%", alignSelf:'center',marginVertical:'7%'}}>
                <Button onPress={onCancel} title="Cancel" />
              </View>} */}
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  modalView: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,

    backgroundColor: "rgba(52, 52, 52, 0.6)",
  },
  modalContainer: {
    backgroundColor: AppColors.Theme_Background,
    width: "95%",
    //  height: "70%",
    alignItems: "center",
    borderRadius: 6,
    elevation: 4,
    flexDirection: "column",

    borderRadius: 10,
    borderRadius: 10,
  },

  textInput: {
    color: "white",
    // flex:1,
    //  paddingTop:10,
    height: 45,
    fontFamily: AppFonts.RegularFont,
    // // width: width * 0.68,
    textAlign: "center",
    fontSize: 16,
    //  marginLeft:-15
  },
  input: {
    // flexDirection: 'row',
    borderWidth: 1,
    borderColor: AppColors.Theme_Buttons,
    height: 40,
    borderRadius: 30,
    width: "90%",
    backgroundColor: AppColors.Theme_Buttons,
    // alignItems:'center',
    justifyContent: "center",
    // flex:1,
    marginTop: "5%",
  },
});
