import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Dimensions,
  FlatList,
  Pressable,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Modal,
  // Button
} from "react-native";
import AppColors from "../../utils/AppColors";
import AppStyles from "../../utils/AppStyles";
import AppImages from "../../utils/AppImages";
import Header from "../../components/atoms/header/Header";
import JobDetailsList from "../../components/molecule/jobdetails/JobDeatilsList";
import { Formik } from "formik";
import * as Yup from "yup";
import BookInput from "../../components/atoms/input/BookInput";
import AppFonts from "../../utils/AppFonts";
import { TimePickerModal } from "react-native-paper-dates";
import "intl";
import "intl/locale-data/jsonp/en";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";
import Button from "../../components/atoms/button/Button";
import {KeyboardAwareScrollView} from '@codler/react-native-keyboard-aware-scroll-view';
import DescriptiveInput from "../../components/atoms/input/DescriptiveInput";
import { Validate } from "../../components/atoms/input/BookValidation";

const { width, height } = Dimensions.get("window");

const BookScreen = (props) => {
  const [startTime, setStartTime] = useState("00:00");
  const [endTime, setEndTime] = useState("00:00");
  const [visibleEndTime, setVisibleEndTime] = useState(false);
  const [visibleStartTime, setVisibleStartTime] = useState(false);
  const [date, setDate] = useState(new Date());
  const [dob, setDOB] = useState(moment());
  const [show, setShow] = useState(false);
  const [dobShow, setDOBShow] = useState(false);
  const [mode, setMode] = useState("date");
  const [detailAttire, setDetailAttire] = useState("");
  const [detailJob, setDetailJob] = useState("");

  /****************************************************************************/
  const onDismissStartTime = React.useCallback(() => {
    setVisibleStartTime(false);
  }, [setVisibleStartTime]);

  const onConfirmStartTime = React.useCallback(
    ({ hours, minutes }) => {
      setVisibleStartTime(false);

      let TimeType = "";

      if (hours <= 11) {
        TimeType = "AM";
      } else {
        TimeType = "PM";
      }

      if (hours > 12) {
        hours = hours - 12;
      }
      if (hours == 0) {
        hours = 12;
      }

      const starttime = `${hours}:${minutes} ${TimeType}`;
      setStartTime(starttime);
    },
    [setVisibleStartTime]
  );

  const onDismissEndTime = React.useCallback(() => {
    setVisibleEndTime(false);
  }, [setVisibleEndTime]);

  const onConfirmEndTime = React.useCallback(
    ({ hours, minutes }) => {
      setVisibleEndTime(false);

      let TimeType = "";

      if (hours <= 11) {
        TimeType = "AM";
      } else {
        TimeType = "PM";
      }

      if (hours > 12) {
        hours = hours - 12;
      }
      if (hours == 0) {
        hours = 12;
      }

      const endtime = `${hours}:${minutes} ${TimeType}`;
      setEndTime(endtime);
    },
    [setVisibleEndTime]
  );

  /****************************************************************************/
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
    setDOB(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  /****************************************************************************/

  /****************************************************************************/

  return (
    <SafeAreaView style={AppStyles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={AppColors.Theme_Background}
      />
      <Header
        title="Book"
        onPress={() => props.navigation.goBack()}
      />

      {/* <ScrollView
        // style={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      > */}
        {/* <KeyboardAwareScrollView > */}

        {/* <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : null}
          keyboardVerticalOffset={-30}
        > */}
        <Formik
          initialValues={{
            name: "",
            location: "",
            attire: "",
            firearm: "",
            work: "",
            report: "",
          }}
          onSubmit={() => props.navigation.navigate("Success", { index: 0 })}
          validationSchema={Validate}
        >
          {({
            values,
            handleChange,
            errors,
            handleSubmit,
            touched,
            setFieldTouched,
          }) => (
            <>
             <ScrollView
        style={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <KeyboardAwareScrollView>
              <View
                style={{ width: "90%", alignSelf: "center", marginTop: "5%" }}
              >
                <View style={styles.infoContainer}>
                  <Text style={[AppStyles.boldText]}>Booking Information</Text>
                </View>

                <BookInput
                  value={values.name}
                  onChange={handleChange("name")}
                  type="Client Name"
                  label="Client Name"
                  onBlur={() => setFieldTouched("name")}
                  max={50}
                  placeholder="Client Name"
                  // borderColor={
                  //   touched.name && errors.name
                  //     ? AppColors.Theme_Red
                  //     : AppColors.Theme_Buttons
                  // }
                  error={errors.name}
                  touchedError={touched.name && errors.name}
                />

                <View style={styles.mainContainer}>
                  <Text style={styles.text}>Start Time</Text>
                  <Pressable
                    style={styles.input}
                    onPress={() => setVisibleStartTime(true)}
                  >
                    <Text style={[styles.text]}>{startTime}</Text>
                  </Pressable>
                </View>

                <View style={styles.mainContainer}>
                  <Text style={styles.text}>End Time</Text>
                  <Pressable
                    style={styles.input}
                    onPress={() => setVisibleEndTime(true)}
                  >
                    <Text style={[styles.text, { textAlign: "center" }]}>
                      {endTime}
                    </Text>
                  </Pressable>
                </View>

                <View style={styles.mainContainer}>
                  <Text style={styles.text}>Date</Text>
                  <Pressable
                    style={[styles.input, {}]}
                    onPress={() => setShow(true)}
                  >
                    <Text style={[styles.text]}>
                      {moment(dob).format("DD/MM/YYYY")}
                    </Text>
                  </Pressable>
                </View>

                <BookInput
                  value={values.location}
                  onChange={handleChange("location")}
                  type="Location"
                  label="Location"
                  onBlur={() => setFieldTouched("location")}
                  max={100}
                  placeholder="Location"
                  error={errors.location}
                  touchedError={touched.location && errors.location}
                />

                <View style={[styles.infoContainer, { marginTop: "6%" }]}>
                  <Text style={[AppStyles.boldText]}>Special Requirement</Text>
                </View>

                <BookInput
                  value={values.attire}
                  onChange={handleChange("attire")}
                  type="Attire"
                  label="Attire"
                  onBlur={() => setFieldTouched("attire")}
                  max={50}
                  placeholder="Attire"
                  error={errors.attire}
                  touchedError={touched.attire && errors.attire}
                />

                <BookInput
                  value={values.firearm}
                  onChange={handleChange("firearm")}
                  type="Firearm"
                  label="Firearm"
                  onBlur={() => setFieldTouched("firearm")}
                  max={50}
                  placeholder="Firearm"
                  error={errors.firearm}
                  touchedError={touched.firearm && errors.firearm}
                />

                <BookInput
                  value={values.work}
                  onChange={handleChange("work")}
                  type="Work"
                  label="Work"
                  onBlur={() => setFieldTouched("work")}
                  max={50}
                  placeholder="Work"
                  error={errors.work}
                  touchedError={touched.work && errors.work}
                />

                <BookInput
                  value={values.report}
                  onChange={handleChange("report")}
                  type="Report To"
                  label="Report To"
                  onBlur={() => setFieldTouched("report")}
                  max={50}
                  placeholder="Report To"
                  error={errors.report}
                  touchedError={touched.report && errors.report}
                />
              </View>
              <View style={{ alignSelf: "center", marginTop: -30 }}>
                <DescriptiveInput
                  value={detailAttire}
                  onChange={(value) => setDetailAttire(value)}
                  type="Job Description"
                  placeholder="Detail description of Attire "
                />
              </View>
              <View style={{ alignSelf: "center", marginTop: -40 }}>
                <DescriptiveInput
                  value={detailJob}
                  onChange={(value) => setDetailJob(value)}
                  type="Job Description"
                  placeholder="Detail description of Job "
                />
              </View>
              <View
                style={{
                  borderWidth: 2,
                  borderColor: AppColors.Theme_Buttons,
                  height: 50,
                  width: "90%",
                  alignSelf: "center",
                  borderRadius: 5,
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <View
                  style={{
                    flex: 0.2,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRightWidth: 1,
                    borderColor: AppColors.Theme_Buttons,
                  }}
                >
                  <Image
                    source={AppImages.pay}
                    style={{ width: 45, height: 30 }}
                  />
                </View>
                <View
                  style={{
                    flex: 0.6,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 18,
                      fontFamily: AppFonts.RegularFont,
                      color: AppColors.Theme_Gray_Text,
                    }}
                  >
                    **** **** **** 3947
                  </Text>
                </View>
                <View
                  style={{
                    flex: 0.3,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text style={AppStyles.whiteSmallText}>Change</Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "90%",
                  alignSelf: "center",
                  marginTop: 5,
                }}
              >
                <View
                  style={{
                    flex: 0.3,
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={AppStyles.whiteSmallText}>Cost/Hour</Text>
                  <Text style={AppStyles.whiteSmallText}>:</Text>
                </View>
                <View style={{ flex: 0.18 }}>
                  <Text style={AppStyles.whiteSmallText}>$55</Text>
                </View>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "90%",
                  alignSelf: "center",
                  marginTop: 5,
                }}
              >
                <View
                  style={{
                    flex: 0.3,
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={AppStyles.whiteSmallText}>Total Hour</Text>
                  <Text style={AppStyles.whiteSmallText}>:</Text>
                </View>
                <View style={{ flex: 0.18 }}>
                  <Text style={AppStyles.whiteSmallText}>9 Hours</Text>
                </View>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "90%",
                  alignSelf: "center",
                  marginTop: 5,
                }}
              >
                <View
                  style={{
                    flex: 0.3,
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={AppStyles.whiteSmallText}>App Fees</Text>
                  <Text style={AppStyles.whiteSmallText}>:</Text>
                </View>
                <View style={{ flex: 0.18 }}>
                  <Text style={AppStyles.whiteSmallText}>$74.24</Text>
                </View>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "90%",
                  alignSelf: "center",
                  marginTop: 5,
                }}
              >
                <View
                  style={{
                    flex: 0.3,
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={AppStyles.whiteSmallText}>Total cost</Text>
                  <Text style={AppStyles.whiteSmallText}>:</Text>
                </View>
                <View style={{ flex: 0.18 }}>
                  <Text style={AppStyles.whiteSmallText}>$420.75</Text>
                </View>
              </View>
              </KeyboardAwareScrollView>
              </ScrollView>
              <View style={{ margin: "4%" }}>
                <Button title="BOOK" onPress={handleSubmit} />
              </View>
            </>
          )}
        </Formik>

        <TimePickerModal
          visible={visibleStartTime}
          onDismiss={onDismissStartTime}
          onConfirm={onConfirmStartTime}
          hours={12} // default: current hours
          minutes={14} // default: current minutes
          label="Select time" // optional, default 'Select time'
          cancelLabel="Cancel" // optional, default: 'Cancel'
          confirmLabel="Ok" // optional, default: 'Ok'
          animationType="fade" // optional, default is 'none'
          locale={"en"}
          style={{ color: "red" }}
        />

        <TimePickerModal
          visible={visibleEndTime}
          onDismiss={onDismissEndTime}
          onConfirm={onConfirmEndTime}
          hours={12} // default: current hours
          minutes={14} // default: current minutes
          label="Select time" // optional, default 'Select time'
          cancelLabel="Cancel" // optional, default: 'Cancel'
          confirmLabel="Ok" // optional, default: 'Ok'
          animationType="fade" // optional, default is 'no
          locale={"en"}
        />
        {/* </KeyboardAvoidingView> */}
      {/* </ScrollView> */}

      {Platform.OS === "android" && show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={false}
          display="default"
          onChange={onChange}
          style={{
            width: 320,
            height: 400,
            borderWidth: 0.4,
            backgroundColor: "white",
          }}
        />
      )}

      <Modal
        visible={Platform.OS === "ios" && show}
        transparent={true}
        animationType={"fade"}
        onRequestClose={() => {}}
      >
        <View style={styles.modalView}>
          <View style={styles.modalContainer}>
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={false}
              display="default"
              onChange={onChange}
              style={styles.datepickerContainer}
              textColor="white"
            />
            <View
              style={{
                position: "absolute",
                bottom: 10,
                width: "90%",
                margin: 10,
              }}
            >
              <Button title="OK" onPress={() => setShow(false)} />
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

/****************************************************************************/

export default BookScreen;

const styles = StyleSheet.create({
  infoContainer: {
    borderBottomWidth: 2,
    borderBottomColor: AppColors.Theme_Buttons,
    width:180,
    paddingBottom: 5,
    marginBottom: 6,
  },
  mainContainer: {
    flexDirection: "row",
    marginTop: 10,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },

  input: {
    borderRadius: 5,
    borderWidth: 2,
    borderColor: AppColors.Theme_Buttons,
    marginBottom: 10,
    width: width / 1.7,
    // marginLeft:'12%',
    height: 25,
    fontSize: 16,
    marginTop: 5,
    alignItems: "center",
  },

  text: {
    fontSize: 16,
    // fontFamily: AppFonts.BoldFont,
    color: "white",
    textAlign: "center",
    fontFamily: AppFonts.MediumFont,
  },
  formError: {
    color: "red",
    marginTop: -8,
    marginBottom: 10,
    textAlign: "center",
    marginLeft: -20,
  },
  modalView: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: "rgba(52, 52, 52, 0.2)",
  },
  modalContainer: {
    backgroundColor: AppColors.Theme_Background,
    width: "80%",
    height: "55%",
    alignItems: "center",
    borderRadius: 6,
    elevation: 4,
    flexDirection: "column",
    borderWidth: 2,
    borderColor: AppColors.Theme_Gray_Text,
  },
  datepickerContainer: {
    width: "90%",
    height: "70%",
    borderWidth: 0.4,
    marginTop: 10,
  },
});
