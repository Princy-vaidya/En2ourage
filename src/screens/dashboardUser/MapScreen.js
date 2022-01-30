import React, { useState, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TextInput,
  Dimensions,
} from "react-native";
import AppImages from "../../utils/AppImages";
import AppFonts from "../../utils/AppFonts";
import AppColors from "../../utils/AppColors";
import { KeyboardAwareScrollView } from "@codler/react-native-keyboard-aware-scroll-view";
const { width, height } = Dimensions.get("window");

const MapScreen = (props) => {
  const [destination, setDestination] = useState("");
  const { onPress } = props;
  return (
    <View style={{ flex: 1 }}>
      <KeyboardAwareScrollView>
        <Image
          source={AppImages.maps}
          style={{ width: "100%", height: height * 0.84 }}
        />

        <Pressable>
          <View style={styles.buttonContainer}>
            {/* <Text style={styles.buttonText}>SET DESTINATION</Text> */}
            <TextInput
              style={styles.textInput}
              placeholderTextColor="#9B9B9B"
              placeholder="SET PIN"
              onChangeText={(text) => setDestination(text)}
              value={destination}
              returnKeyType="next"
              // multiline={true}
            />
            <Image
              source={AppImages.mapNext}
              style={{ alignSelf: "center", marginRight: "3%" }}
            />
          </View>
        </Pressable>
      </KeyboardAwareScrollView>
      <Pressable onPress={onPress} style={styles.backButton}>
        <Image
          source={AppImages.back}
          style={{ alignSelf: "center", tintColor: "black" }}
        />
      </Pressable>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  buttonContainer: {
    borderWidth: 1,
    borderColor: "#68707C",
    height: 64,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    marginHorizontal: "3%",
  },
  buttonText: {
    fontSize: 18,
    fontFamily: AppFonts.RegularFont,
    color: "#9B9B9B",
    marginLeft: "5%",
  },
  backButton: {
    backgroundColor: "white",
    width: 50,
    height: 50,
    justifyContent: "center",
    borderRadius: 50,
    position: "absolute",
    margin: 15,
    top: 0,
    shadowColor: AppColors.Theme_Gray_Text,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 2,
    elevation: 1,
  },
  textInput: {
    // height: 130,
    // flex: 1,
    width: "80%",
    marginLeft: 15,
    fontSize: 18,
    color: AppColors.Theme_white,
    // alignSelf: "center",
    // textAlign: "center",
  },
});
