import React, { useState,useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  Keyboard,
  Dimensions,
  Pressable,
} from "react-native";
import AppStyles from "../../utils/AppStyles";
import AppColors from "../../utils/AppColors";
import AppFonts from "../../utils/AppFonts";
import TinyButtons from "../../components/atoms/button/TinyButton";
import AppImages from "../../utils/AppImages";
import Button from "../../components/atoms/button/Button";
import { useFocusEffect } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const BookingList = (props) => {
  const { item, onPress, onReviewPress,submit } = props;
  const [job, setJob] = useState(false);
  const [jobRequirementNo, setJobRequirementNo] = useState(false);
  const [jobRequirementYes, setJobRequirementYes] = useState(false);
  const [continueJobNo, setContinueJobNo] = useState(false);
  const [continueJobYes, setContinueJobYes] = useState(false);
  const [jobComplete, setJobComplete] = useState(false);


 console.log('submit',submit)



 useFocusEffect(
  React.useCallback(() => {
  //  alert(submit)
  setTimeout(() => {
   setJobComplete(!jobComplete)
  }, 2000);
  setJobComplete(jobComplete)
  }, [])
);



  return (
    <View
      style={{
        borderWidth: 2,
        borderColor: AppColors.Theme_Buttons,
        margin: 10,
      }}
    >
      <View style={styles.mainContainer}>
        <View style={{ width: "65%" }}>
          <View style={styles.firstColumn}>
            <Text style={[AppStyles.boldText, { width: "30%" }]}>Name</Text>
            <Text style={[AppStyles.boldText, { width: "10%" }]}
            numberOfLines={1}
            adjustsFontSizeToFit>:</Text>
            <View style={styles.details}>
              <Text style={[AppStyles.boldText]}>James Baton</Text>
            </View>
          </View>
          <View style={styles.firstColumn}>
            <Text style={[AppStyles.boldText, { width: "30%" }]}>Start</Text>
            <Text style={[AppStyles.boldText, { width: "10%" }]}>:</Text>
            <View style={styles.details}>
              <Text style={[AppStyles.boldText]}
              >7:00 AM</Text>
            </View>
          </View>
          <View style={styles.firstColumn}>
            <Text style={[AppStyles.boldText, { width: "30%" }]}>End</Text>
            <Text style={[AppStyles.boldText, { width: "10%" }]}>:</Text>
            <View style={styles.details}>
              <Text style={[AppStyles.boldText]}>4 AM</Text>
            </View>
          </View>
          <View style={styles.firstColumn}>
            <Text style={[AppStyles.boldText, { width: "30%" }]}>Date</Text>
            <Text style={[AppStyles.boldText, { width: "10%" }]}>:</Text>
            <View style={styles.details}>
              <Text style={[AppStyles.boldText]}>2/2/2021</Text>
            </View>
          </View>
        </View>
        <View style={{ width: "40%", alignItems: "center" }}>
          <Image source={AppImages.clientPic} />
          <Pressable style={styles.buttonContainer}
          onPress={onPress}>
            <Text
              style={[
                AppStyles.boldText,
                { padding: 5, paddingHorizontal: 10, fontSize: 14 },
              ]}
            >
              DETAILS
            </Text>
          </Pressable>
        </View>
      </View>

      {!job ? (
        <Pressable style={styles.jobButton} onPress={() => setJob(!job)}>
          <Text style={[AppStyles.normalBoldText, styles.jobText]}>
            JOB START IN
            <Text
              style={[AppStyles.normalBoldText, { color: AppColors.colorRed }]}
            >
              {" "}
              {" " + "60 MIN"}
            </Text>
          </Text>
        </Pressable>
      ) : (
        <View>
          {!jobRequirementNo &&
          !jobRequirementYes &&
          !continueJobNo &&
          !continueJobYes ? (
            <View>
              <Pressable style={styles.jobButton}>
                <Text style={[AppStyles.normalBoldText, styles.jobText]}>
                  MEET JOB REQUIREMENT ?
                </Text>
              </Pressable>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "90%",
                  alignSelf: "center",
                }}
              >
                <View style={styles.activityContainer}>
                  <TinyButtons
                    title="No"
                    buttonColor={AppColors.Theme_Red}
                    onPress={() => setJobRequirementNo(true)}
                  />
                  <View style={{ marginLeft: 10 }}>
                    <TinyButtons
                      title="Yes"
                      buttonColor={AppColors.Theme_Green}
                      onPress={() => setJobRequirementYes(true)}
                    />
                  </View>
                </View>
              </View>
            </View>
          ) : jobRequirementNo ? (
            <View>
              <Pressable style={styles.jobButton}>
                <Text style={[AppStyles.normalBoldText, styles.jobText]}>
                  ALLOW HIM TO CONTINUE JOB
                </Text>
              </Pressable>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "90%",
                  alignSelf: "center",
                }}
              >
                <View style={[styles.activityContainer]}>
                  <TinyButtons
                    title="No"
                    buttonColor={AppColors.Theme_Red}
                    onPress={() => {
                      setContinueJobNo(true), setJobRequirementNo(false);
                      setJobRequirementYes(false), setContinueJobYes(false);
                    }}
                  />
                  <View style={{ marginLeft: 10 }}>
                    <TinyButtons
                      title="Yes"
                      buttonColor={AppColors.Theme_Green}
                      onPress={() => {
                        setContinueJobNo(false), setJobRequirementNo(false);
                        setJobRequirementYes(false);
                        setContinueJobYes(false);
                      }}
                    />
                  </View>
                </View>
                <Text
                  style={[
                    AppStyles.normalBoldText,
                    { color: AppColors.colorRed },
                  ]}
                >
                  00:00
                </Text>
              </View>
            </View>
          ) : jobRequirementYes ? (
            <View>
              <Pressable style={styles.jobButton}>
                <Text style={[AppStyles.normalBoldText, styles.jobText]}>
                  MARK JOB AS A COMPLETE
                </Text>
              </Pressable>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "90%",
                  alignSelf: "center",
                }}
              >
                <View style={[styles.activityContainer]}>
                  <TinyButtons
                    title="No"
                    buttonColor={AppColors.Theme_Red}
                    onPress={() => setJobRequirementNo(true)}
                  />
                  <View style={{ marginLeft: 10 }}>
                    <TinyButtons
                      title="Yes"
                      buttonColor={AppColors.Theme_Green}
                      onPress={() => {
                        setContinueJobNo(false), setJobRequirementNo(false);
                        setJobRequirementYes(false);
                        setContinueJobYes(true);
                      }}
                    />
                  </View>
                </View>
                <Text
                  style={[
                    AppStyles.normalBoldText,
                    { color: AppColors.colorRed },
                  ]}
                >
                  45:00
                </Text>
              </View>
            </View>
          ) : continueJobNo ? (
            <View>
              <Pressable style={styles.jobButton}>
                <Text style={[AppStyles.normalBoldText, styles.jobText]}>
                  REFUNDED
                </Text>
              </Pressable>
            </View>
          ) : (
            <View>
              {submit ==="check"?
            <Pressable style={styles.jobActiveutton}
            onPress={onReviewPress}>
              <Text style={[AppStyles.normalBoldText, styles.jobActiveText]}>
               REVIEW AND SUBMIT
              </Text>
            </Pressable>
            :!jobComplete ?
              <Pressable style={[styles.jobActiveutton,{flexDirection:'row',justifyContent:'space-evenly'}]}
           >
              <Text style={[AppStyles.normalBoldText, styles.jobActiveText,{marginLeft:'30%'}]}>
              THANK YOU
              </Text>
              <Image source={AppImages.check} style={{alignSelf:'center',marginLeft:'25%'}}/>
            </Pressable>:
            <Pressable style={styles.jobButton}>
            <Text style={[AppStyles.normalBoldText, styles.jobText]}>
             JOB COMPLETED
            </Text>
          </Pressable>
            
            } 
            </View>
          )}
        </View>
      )}
    </View>
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
    borderRadius: 20,
    paddingHorizontal: "5%",
    marginTop: 15,
  },
  details: {
    borderWidth: 2,
    borderBottomColor: "white",
    width: "60%",
  },
  activityContainer: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginBottom: 20,
  },
  jobText: {
    textAlign: "center",
    paddingVertical: "3%",
    color: "#9B9B9B",
  },
  jobActiveText: {
    textAlign: "center",
    paddingVertical: "3%",
    color: "white",
  },
  jobButton: {
    backgroundColor: "#4B4B4B",
    margin: "5%",
    borderRadius: 5,
    height: 40,
  },
  jobActiveutton: {
    backgroundColor: AppColors.Theme_Buttons,
    margin: "5%",
    borderRadius: 5,
    height: 40,
  },
  activityContainer: {
    flexDirection: "row",
    marginTop: -5,
    marginBottom: 25,
  },
});

export default BookingList;
