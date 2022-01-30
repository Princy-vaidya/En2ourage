import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  Keyboard,
  Dimensions,
  Pressable,
  Animated,
} from "react-native";
import AppStyles from "../../utils/AppStyles";
import AppColors from "../../utils/AppColors";
import AppFonts from "../../utils/AppFonts";
import Stars from "react-native-stars";
import AppImages from "../../utils/AppImages";

const { width, height } = Dimensions.get("window");

const PersonnelList = (props) => {
  const { item, onPressItem, index, type, onPress, onAddItem } = props;
  const [animation, setAnimation] = useState(new Animated.Value(1));
  const [slide, setSlide] = useState(new Animated.Value(1));
  const [selected, setSelected] = useState(false);

  console.log("item", item.select);
  const animatedStyle = {
    opacity: animation,

    transform: [
      { scale: animation },
      {
        translateX: animation.interpolate({
          inputRange: [0, 1.2],
          outputRange: selected ? [-width * 3, width * 0.7] : [0, 0],
          //  extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        }),
      },
    ],

    // NEW CODE
    height: slide.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 220],
      extrapolate: "clamp",
    }),
  };

  const startAnimation = () => {
    setSelected(true);
    //setting isThisCardSelected to true to apply the above style which will trigger fade & after fading is done, applying height animation which will give the slide effect.
    Animated.timing(animation, {
      toValue: 0,
      timing: 500,
    }).start(() => {
      Animated.timing(slide, {
        toValue: 0,
        duration: 500,
      }).start(() => {
        //do you logic/actions
       onPressItem();
        slide.setValue(0);
      })
        //do you logic/actions
      });
    
  };

  return (
    <Animated.View style={[animatedStyle]}>
      <View
        style={{
          borderWidth: 2,
          borderColor: AppColors.Theme_Buttons,
          padding: 10,
          marginTop: 20,
          paddingRight: "5%",
          borderRadius: 10,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <View style={{ width: "20%" }}>
            <Image source={item.pic} style={{ width: 65, height: 65 }} />
          </View>
          <View style={{ width: "80%" }}>
           
            <View
              style={{
                flexDirection: "row",
                marginTop: "1%",
                justifyContent: "space-between",
              }}
            >
              <View>
                <Text
                  style={[AppStyles.whiteMediumLargeText, { marginLeft: 10 }]}
                  numberOfLines={1}
                  adjustsFontSizeToFit
                >
                  {item.clientname}
                </Text>
                <View
                  style={{ flexDirection: "row", marginTop: 5, marginLeft: 10 }}
                >
                  <Image source={item.image1} style={styles.imageStyle} />
                  <Image source={item.image2} style={styles.imageStyle} />
                  <Image source={item.image3} style={styles.imageStyle} />
                </View>
              </View>
              <View style={{ alignItems: "flex-end" }}>
                {type === "Personnel" ? (
                  <Pressable onPress={onAddItem}>
                    {!item.select ? (
                      <Image source={AppImages.plus} />
                    ) : (
                      <Image
                        source={AppImages.check}
                        style={{ height: 30, width: 30 }}
                      />
                    )}
                  </Pressable>
                ) : (
                  <Pressable onPress={startAnimation}>
                    <Image source={AppImages.cross} />
                  </Pressable>
                )}

                <Text
                  style={[
                    AppStyles.whiteMediumText,
                    { textAlign: "right", marginTop: 5, fontSize: 20 },
                  ]}
                >
                  {"$" + " " + item.price + " " + "/hr"}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <Text style={AppStyles.whiteMediumText} numberOfLines={3}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </Text>
        <View
          style={{
            marginLeft: -5,
            marginTop: 5,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Stars
              display={item.rating}
              spacing={8}
              count={5}
              starSize={21}
              fullStar={AppImages.star}
              emptyStar={AppImages.emptyStar}
            />
            <Text style={AppStyles.normalBoldText}>4.3</Text>
          </View>
          <Pressable
            style={{
              backgroundColor: AppColors.Theme_Buttons,
              borderRadius: 10,
              justifyContent: "center",
              marginRight: -4,
            }}
            onPress={onPress}
          >
            <Text
              style={{
                paddingHorizontal: 25,
                fontSize: 14,
                color: "white",
                fontFamily: AppFonts.BoldFont,
                padding: 3,
              }}
            >
              VIEW
            </Text>
          </Pressable>
        </View>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    marginTop: 15,
    borderRadius: 5,
    padding: 10,
  },
  firstColumn: {
    flexDirection: "row",
    width: "100%",
    margin: 2,
  },
  buttonContainer: {
    borderWidth: 2,
    borderColor: AppColors.Theme_Buttons,
    borderRadius: 15,
    marginTop: 15,
  },
  details: {
    borderWidth: 2,
    borderBottomColor: "white",
    width: "60%",
  },
  activityContainer: {
    flexDirection: "row",
    margin: 10,
    marginBottom: 20,
  },
  container: {
    borderWidth: 2,
    borderColor: AppColors.Theme_Buttons,
    margin: 10,
    borderRadius: 10,
  },
  imageStyle: {
    width: 30,
    height: 30,
    marginRight: 5,
  },
});

export default PersonnelList;
