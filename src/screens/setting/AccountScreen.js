import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image,
  Platform,
  ImageBackground,
  ScrollView,
  Dimensions,
  Modal,
  KeyboardAvoidingView,
  Pressable,
  Animated,
  TextInput,
  FlatList,
} from "react-native";
import AppStyles from "../../utils/AppStyles";
import AppImage from "../../utils/AppImages";
import SettingHeader from "../../components/atoms/header/SettingHeader";
import AccountInput from "../../components/atoms/input/AccountInput";
import AppFonts from "../../utils/AppFonts";
import AppColors from "../../utils/AppColors";
import StepInput from "../../components/atoms/input/StepInput";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";
import Button from "../../components/atoms/button/Button";
import { Formik } from "formik";
import * as Yup from "yup";
import AppImages from "../../utils/AppImages";
import { Validate } from "../../components/atoms/input/SetlocationValidation";
import { KeyboardAwareScrollView } from "@codler/react-native-keyboard-aware-scroll-view";
import * as Animatable from "react-native-animatable";
import * as ImagePicker from "react-native-image-picker";
import Dialog from "../../components/molecule/state/State";
import {
  getValuesFormStorage,
  setValuesInStorage,
} from "../../storage/AsyncDataStorage";

const { width, height } = Dimensions.get("window");

const AccountScreen = (props) => {
  const [date, setDate] = useState(new Date());
  const [dob, setDOB] = useState(moment());
  const [show, setShow] = useState(false);
  const [dobShow, setDOBShow] = useState(false);
  const [mode, setMode] = useState("date");
  const [showPersonalInfo, setShowPersonalInfo] = useState(false);
  const [showLocation, setShowLocation] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [issue, setIssue] = useState("");
  const [issueList, setIssueList] = useState([
    { name: "Male", id: 1, select: false },
    { name: "Female", id: 2, select: false },
  ]);
  const [address1, setAddress1] = useState("Loreum ipsum dolar sit amet.");
  const [address2, setAddress2] = useState("Loreum ipsum dolar sit amet.");
  const [address3, setAddress3] = useState("Loreum ipsum dolar sit amet.");
  const [city, setCity] = useState("New York");
  const [country, setCountry] = useState("USA");
  const [zipcode, setZipcode] = useState("40022");
  const [fullname, setFullname] = useState("Princy");
  const [selectIssue, setSelectIssue] = useState(false);
  const [selectState, setSelectState] = useState(false);
  const [statename, setStateName] = useState({ name: "AL" });
  const [toggle, setToggle] = useState(false);
  const [option, setOption] = useState({ name: "Male" });
  const [animation, setAnimation] = useState(new Animated.Value(1));
  const [slide, setSlide] = useState(new Animated.Value(1));
  const [pic, setPic] = useState("");
  const [phone, setPhone] = useState("");
  const [statelist, setStateList] = useState([
    { name: "AL" },
    { name: "AK" },
    { name: "AZ" },
    { name: "AR" },
    { name: "CA" },
    { name: "CO" },
    { name: "CT" },
    { name: "GA" },
    { name: "HI" },
    { name: "ID" },
    { name: "IS" },
    { name: "IN" },
    { name: "KY" },
    { name: "LA" },
    { name: "MA" },
    { name: "MD" },
    { name: "MN" },
    { name: "MS" },
    { name: "MO" },
    { name: "ND" },
    { name: "OH" },
    { name: "OK" },
    { name: "OR" },
    { name: "PA" },
    { name: "RI" },
    { name: "SC" },
    { name: "SD" },
    { name: "TN" },
    { name: "TX" },
  ]);
  const [focus, setFocus] = useState(false);
  const [statelist1, setStateList1] = useState([
    { name: "AL" },
    { name: "AK" },
    { name: "AZ" },
    { name: "AR" },
    { name: "CA" },
    { name: "CO" },
    { name: "CT" },
    { name: "GA" },
    { name: "HI" },
    { name: "ID" },
    { name: "IS" },
    { name: "IN" },
    { name: "KY" },
    { name: "LA" },
    { name: "MA" },
    { name: "MD" },
    { name: "MN" },
    { name: "MS" },
    { name: "MO" },
    { name: "ND" },
    { name: "OH" },
    { name: "OK" },
    { name: "OR" },
    { name: "PA" },
    { name: "RI" },
    { name: "SC" },
    { name: "SD" },
    { name: "TN" },
    { name: "TX" },
  ]);
  const [searchValue, setSearchValue] = useState("");
  const [message, setMessage] = useState("");

  const [invalid, setInvalid] = useState(false);

  /****************************************************************************/
  const onAddPhoto = async () => {
    ImagePicker.launchImageLibrary(
      {
        mediaType: "photo",
        includeBase64: false,
        maxHeight: 200,
        maxWidth: 200,
      },
      async (response) => {
        if (response.didCancel == true) {
          const profile = await getValuesFormStorage("pic");
          setPic(profile);
        } else {
          setPic(response.uri);

          try {
            await setValuesInStorage("pic", response.uri);
          } catch (e) {
            console.log("user detail", e);
          }
        }
        console.log("ooo", response);
      }
    );
  };

  const ref_input1 = useRef();
  const ref_input2 = useRef();
  const ref_input3 = useRef();
  const ref_input4 = useRef();
  const ref_input5 = useRef();

  const searchState = (text) => {
    let currentData = [];
    if (text === "") {
      setInvalid(false);
      setStateList(statelist1);
    } else {
      currentData = statelist.filter((x) =>
        String(x.name.toLowerCase()).includes(text.toLowerCase())
      );

      if (currentData.length == 0) {
        setInvalid(true);
        setMessage("Not found.");
      }

      setStateList(currentData);
    }
  };
  /***********************************************************************/
  const onSelect = (item) => {
    let data = issueList;
    setToggle(!toggle);
    data.forEach((elem) => {
      elem.select = false;
      if (elem.id === item.id) {
        elem.select = true;
      }
    });
    setIssueList(data);
    setOption(item.name);
    setSelectIssue(false);
  };

  const ValidateInfo = Yup.object().shape({
    fullname: Yup.string()
      .min(3, "First name is required.")
      .required("Required."),
    phone: Yup.string().required("Required."),
  });

  /***********************************************************************/
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
  /***********************************************************************/

  const onSaveAddress = (values) => {
    setFullname(values.fullname);
    setAddress1(values.address);
    setAddress2(values.address1);
    setAddress3(values.address2);
    setCity(values.city);
    setZipcode(values.zipcode);
    setCountry(values.country);
    setShowLocation(false);
  };

  const onSaveInfo = (values) => {
    setFullname(values.fullname);
    setShowPersonalInfo(false);
  };

  const renderDriverBottomPersonalInfo = () => {
    return (
      <Modal
        visible={showPersonalInfo}
        onRequestClose={() => setShowPersonalInfo(false)}
        transparent={true}
        animationType={"fade"}
        onRequestClose={() => {}}
      >
        <TouchableWithoutFeedback onPress={() => setShowPersonalInfo(false)}>
          <View style={styles.modalView}>
            <View style={[styles.modalContainer]}>
              <Pressable onPress={() => setShowPersonalInfo(false)}>
                <Image
                  source={AppImages.rectangle}
                  style={{ margin: "5%", alignSelf: "center" }}
                />
              </Pressable>
              {/* <ScrollView> */}
              <KeyboardAwareScrollView>
                <Text
                  style={[
                    AppStyles.whiteMediumText,
                    { textAlign: "center", margin: "3%" },
                  ]}
                >
                  Personal Information{" "}
                </Text>
                <Formik
                  initialValues={{
                    fullname: "",
                    sex: "",
                    phone: "",
                  }}
                  onSubmit={(values) => onSaveInfo(values)}
                  validationSchema={ValidateInfo}
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
                      <View style={styles.formikContainer}>
                        <StepInput
                          value={values.fullname}
                          onChange={handleChange("fullname")}
                          type="fullname"
                          label="Full Name"
                          onBlur={() => setFieldTouched("fullname")}
                          max={100}
                          placeholder="Full Name"
                          borderColor={
                            touched.fullname && errors.fullname
                              ? AppColors.Theme_Red
                              : AppColors.Theme_Buttons
                          }
                          onSubmitEditing={() => ref_input1.current.focus()}
                          returnKeyType="next"
                        />

                        {touched.fullname && errors.fullname && (
                          <Text style={styles.formError}>
                            {errors.fullname}
                          </Text>
                        )}

                        <View>
                          <TouchableOpacity
                            onPress={showDatepicker}
                            style={styles.input}
                          >
                            <Text style={styles.dobBirth}>Date of Birth</Text>
                            <Text style={[styles.textInput]}>
                              {moment(dob).format("YYYY-MM-DD")}
                            </Text>
                          </TouchableOpacity>
                        </View>

                        {/* <StepInput
                            value={values.sex}
                            onChange={handleChange("sex")}
                            type="Sex"
                            label="Sex"
                            onBlur={() => setFieldTouched("sex")}
                            max={100}
                            placeholder="Sex"
                            borderColor={
                              touched.sex && errors.sex
                                ? AppColors.Theme_Red
                                : AppColors.Theme_Buttons
                            }
                            onSubmitEditing={() => ref_input2.current.focus()}
                            refInput={ref_input1}
                            returnKeyType="next"
                          />

                          {touched.sex && errors.sex && (
                            <Text style={styles.formError}>{errors.sex}</Text>
                          )} */}

                        <Pressable onPress={() => setSelectIssue(!selectIssue)}>
                          <View style={styles.buttonContainer}>
                            <View>
                              <Text
                                style={{
                                  textAlign: "left",
                                  fontSize: 14,
                                  color: "#9B9B9B",
                                  marginLeft: 15,
                                }}
                              >
                                Sex
                              </Text>

                              <Text style={styles.buttonText}>
                                {option.name}
                              </Text>
                            </View>
                          </View>
                          <Pressable
                            style={{
                              position: "absolute",
                              right: 0,
                              alignItems: "center",
                              margin: 10,
                            }}
                            onPress={() => setSelectIssue(!selectIssue)}
                          >
                            {!selectIssue ? (
                              <Image
                                source={AppImages.downArrow}
                                style={{
                                  alignSelf: "center",
                                  width: 15,
                                  height: 10,
                                  tintColor: "white",
                                  marginTop: 17,
                                  marginRight: 5,
                                }}
                              />
                            ) : (
                              <Image
                                source={AppImages.upArrow}
                                style={{
                                  alignSelf: "center",
                                  width: 25,
                                  height: 25,
                                  tintColor: "white",
                                  marginTop: 12,
                                }}
                              />
                            )}
                          </Pressable>
                        </Pressable>

                        {/* {selectIssue && (
          //  <View style={{borderWidth:2,
          //   borderTopWidth:0,
          //   borderColor:AppColors.Theme_Buttons,height:240,width:width / 1.1,alignSelf:'center',marginTop:'5%',

          //  borderRadius:5}}>
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
                   >
                    {item.name}
                  </Animated.Text>
                </Pressable>
                {item.select &&
                <Image source={AppImages.check} style={{position:'absolute',right:0,margin:10}} />
                }
                </View>
              ))}
            </Animatable.View>
          //  </View>
           )} */}

                        <Dialog
                          isVisible={selectIssue}
                          title="Select State"
                          onValueSelected={(value) => {
                            setOption(value);
                            setSelectIssue(false);
                          }}
                          onCancel={() => setSelectIssue(false)}
                          activityList={issueList}
                          onSearchState={(value) => {
                            searchState(value);
                          }}
                          invalid={invalid}
                          message={message}
                          type="Sex"
                        />
                        <StepInput
                          value={values.phone}
                          onChange={handleChange("phone")}
                          type="Phone Number"
                          label="Phone Number"
                          onBlur={() => setFieldTouched("phone")}
                          max={10}
                          placeholder="Phone Number"
                          borderColor={
                            touched.phone && errors.phone
                              ? AppColors.Theme_Red
                              : AppColors.Theme_Buttons
                          }
                          refInput={ref_input2}
                          keyboard="phone-pad"
                          returnKeyType="done"
                        />

                        {touched.phone && errors.phone && (
                          <Text style={styles.formError}>{errors.phone}</Text>
                        )}

                        <View style={{ marginBottom: "3%" }}>
                          <Button
                            title="SAVE INFORMATION"
                            onPress={handleSubmit}
                          />
                        </View>
                      </View>
                    </>
                  )}
                </Formik>
                {/* </KeyboardAvoidingView> */}
              </KeyboardAwareScrollView>
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
                <View
                  style={[
                    styles.modalView,
                    { backgroundColor: "rgba(0,0,0,0.6)" },
                  ]}
                >
                  <View
                    style={{
                      backgroundColor: AppColors.Theme_Background,
                      width: "90%",
                      alignItems: "center",
                      borderRadius: 6,
                      elevation: 4,
                      flexDirection: "column",
                      borderWidth: 2,
                      borderColor: AppColors.Theme_Gray_Text,
                      marginBottom: "35%",
                    }}
                  >
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
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  };

  const renderDriverBottomPassworChnage = () => {
    return (
      <Modal
        visible={showPassword}
        onRequestClose={() => setShowPassword(false)}
        transparent={true}
        animationType={"fade"}
        onRequestClose={() => {}}
      >
        <TouchableWithoutFeedback onPress={() => setShowPassword(false)}>
          <View style={styles.modalView}>
            <View style={[styles.modalContainer]}>
              <ScrollView>
                <Pressable onPress={() => setShowPassword(false)}>
                  <Image
                    source={AppImages.rectangle}
                    style={{ margin: "5%", alignSelf: "center" }}
                  />
                </Pressable>
                {/* <ScrollView> */}
                <Text
                  style={[
                    AppStyles.whiteMediumText,
                    { textAlign: "center", margin: "3%" },
                  ]}
                >
                  Password Change{" "}
                </Text>
                <Formik
                  initialValues={{
                    oldpass: "",
                    newpass: "",
                    cfpass: "",
                  }}
                  onSubmit={(values) => setShowPersonalInfo(false)}
                  validationSchema={ValidateInfo}
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
                      <View style={styles.formikContainer}>
                        <StepInput
                          value={values.oldpass}
                          onChange={handleChange("oldpass")}
                          type="oldpass"
                          label="Old Password"
                          onBlur={() => setFieldTouched("oldpass")}
                          max={50}
                          placeholder="Old Password"
                          borderColor={
                            touched.oldpass && errors.oldpass
                              ? AppColors.Theme_Red
                              : AppColors.Theme_Buttons
                          }
                          onSubmitEditing={() => ref_input2.current.focus()}
                          // refInput={ref_input2}
                          returnKeyType="done"
                        />
                        {touched.oldpass && errors.oldpass && (
                          <Text
                            style={[styles.formError, { marginBottom: -15 }]}
                          >
                            {errors.oldpass}
                          </Text>
                        )}
                        <View style={styles.forgotPassContainer}>
                          <Pressable
                            style={{ alignSelf: "flex-end" }}
                            // onPress={()=>props.navigation.navigate('Forgotpass')}
                          >
                            <View style={{ flexDirection: "row" }}>
                              <Text
                                style={[
                                  AppStyles.whiteMediumText,
                                  { fontSize: 15 },
                                ]}
                              >
                                Forgot your password?
                              </Text>

                              <Image
                                source={AppImages.next}
                                style={{
                                  width: 35,
                                  height: 20,
                                  tintColor: AppColors.Theme_Buttons,
                                }}
                              />
                            </View>
                          </Pressable>
                        </View>
                        <StepInput
                          value={values.newpass}
                          onChange={handleChange("newpass")}
                          type="New Password"
                          label="New Password"
                          onBlur={() => setFieldTouched("newpass")}
                          max={50}
                          placeholder="New Password"
                          borderColor={
                            touched.newpass && errors.newpass
                              ? AppColors.Theme_Red
                              : AppColors.Theme_Buttons
                          }
                          onSubmitEditing={() => ref_input2.current.focus()}
                          refInput={ref_input1}
                          returnKeyType="done"
                        />
                        {touched.newpass && errors.newpass && (
                          <Text
                            style={[styles.formError, { marginBottom: -15 }]}
                          >
                            {errors.newpass}
                          </Text>
                        )}

                        <StepInput
                          value={values.cfpass}
                          onChange={handleChange("cfpass")}
                          type="Repaeat New Password"
                          label="Repaeat New Password"
                          onBlur={() => setFieldTouched("cfpass")}
                          max={50}
                          placeholder="Repaeat New Password"
                          borderColor={
                            touched.cfpass && errors.cfpass
                              ? AppColors.Theme_Red
                              : AppColors.Theme_Buttons
                          }
                          refInput={ref_input2}
                          returnKeyType="done"
                        />
                        {touched.cfpass && errors.cfpass && (
                          <Text
                            style={[styles.formError, { marginBottom: -15 }]}
                          >
                            {errors.cfpass}
                          </Text>
                        )}
                        <View style={{ marginBottom: "3%" }}>
                          <Button
                            title="SAVE PASSWORD"
                            onPress={() => setShowPassword(false)}
                          />
                        </View>
                      </View>
                    </>
                  )}
                </Formik>
                {/* </KeyboardAvoidingView> */}
              </ScrollView>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  };
  /***********************************************************************/

  const renderDriverBottomLocationSheet = () => {
    return (
      <Modal
        visible={showLocation}
        transparent={true}
        animationType={"fade"}
        onRequestClose={() => {}}
      >
        <TouchableWithoutFeedback onPress={() => setShowLocation(false)}>
          <View style={styles.modalView}>
            <View style={[styles.modalContainer]}>
              <ScrollView>
                <Pressable onPress={() => setShowLocation(false)}>
                  <Image
                    source={AppImages.rectangle}
                    style={{ margin: "5%", alignSelf: "center" }}
                  />
                </Pressable>

                {/* <ScrollView
                style={{ flexGrow: 1 }}
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps="handled"
              > */}

                <Text
                  style={[
                    AppStyles.whiteMediumLargeText,
                    { textAlign: "center", margin: "3%" },
                  ]}
                >
                  Address Change{" "}
                </Text>
                <Formik
                  initialValues={{
                    fullname: "",
                    address: "",
                    address1: "",
                    address2: "",
                    city: "",
                    state: "",
                    zipcode: "",
                    country: "",
                  }}
                  onSubmit={(values) => onSaveAddress(values)}
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
                      <View style={styles.formikContainer}>
                        <StepInput
                          value={values.fullname}
                          onChange={handleChange("fullname")}
                          type="fullname"
                          label="Full Name"
                          onBlur={() => setFieldTouched("fullname")}
                          max={100}
                          placeholder="Full Name"
                          borderColor={
                            touched.fullname && errors.fullname
                              ? AppColors.Theme_Red
                              : AppColors.Theme_Buttons
                          }
                          onSubmitEditing={() => ref_input1.current.focus()}
                          returnKeyType="next"
                        />

                        {touched.fullname && errors.fullname && (
                          <Text style={styles.formError}>
                            {errors.fullname}
                          </Text>
                        )}

                        <StepInput
                          value={values.address}
                          onChange={handleChange("address")}
                          type="address"
                          label="Address 1"
                          onBlur={() => setFieldTouched("address")}
                          max={100}
                          placeholder="Address 1"
                          borderColor={
                            touched.address && errors.address
                              ? AppColors.Theme_Red
                              : AppColors.Theme_Buttons
                          }
                          onSubmitEditing={() => ref_input2.current.focus()}
                          refInput={ref_input1}
                          returnKeyType="next"
                        />

                        {touched.address && errors.address && (
                          <Text style={styles.formError}>{errors.address}</Text>
                        )}

                        <StepInput
                          value={values.address1}
                          onChange={handleChange("address1")}
                          type="address1"
                          label="Address 2"
                          onBlur={() => setFieldTouched("address1")}
                          max={100}
                          placeholder="Address 2"
                          borderColor={AppColors.Theme_Buttons}
                          onSubmitEditing={() => ref_input3.current.focus()}
                          refInput={ref_input2}
                          returnKeyType="next"
                        />
                        <StepInput
                          value={values.address2}
                          onChange={handleChange("address2")}
                          type="address2"
                          label="Address 3"
                          onBlur={() => setFieldTouched("address2")}
                          max={100}
                          placeholder="Address 3"
                          borderColor={AppColors.Theme_Buttons}
                          onSubmitEditing={() => ref_input4.current.focus()}
                          refInput={ref_input3}
                          returnKeyType="next"
                        />
                        <StepInput
                          value={values.city}
                          onChange={handleChange("city")}
                          type="city"
                          label="city"
                          onBlur={() => setFieldTouched("city")}
                          max={100}
                          placeholder="City"
                          borderColor={
                            touched.city && errors.city
                              ? AppColors.Theme_Red
                              : AppColors.Theme_Buttons
                          }
                          onSubmitEditing={() => ref_input5.current.focus()}
                          refInput={ref_input4}
                          returnKeyType="next"
                        />

                        {touched.city && errors.city && (
                          <Text style={styles.formError}>{errors.city}</Text>
                        )}

                        <Pressable onPress={() => setSelectState(!selectState)}>
                          <View style={styles.buttonContainer}>
                            <View>
                              <Text
                                style={{
                                  textAlign: "left",
                                  fontSize: 14,
                                  color: "#9B9B9B",
                                  marginLeft: 15,
                                }}
                              >
                                State
                              </Text>

                              <Text style={styles.buttonText}>
                                {statename.name}
                              </Text>
                            </View>
                          </View>
                          <Pressable
                            style={{
                              position: "absolute",
                              right: 0,
                              alignItems: "center",
                              margin: 10,
                            }}
                            onPress={() => setSelectState(!selectState)}
                          >
                            {!selectState ? (
                              <Image
                                source={AppImages.downArrow}
                                style={{
                                  alignSelf: "center",
                                  width: 15,
                                  height: 10,
                                  tintColor: "white",
                                  marginTop: 17,
                                  marginRight: 5,
                                }}
                              />
                            ) : (
                              <Image
                                source={AppImages.upArrow}
                                style={{
                                  alignSelf: "center",
                                  width: 25,
                                  height: 25,
                                  tintColor: "white",
                                  marginTop: 12,
                                }}
                              />
                            )}
                          </Pressable>
                        </Pressable>
                        <Dialog
                          isVisible={selectState}
                          title="Select State"
                          onValueSelected={(value) => {
                            setStateName(value);
                            setSelectState(false);
                          }}
                          onCancel={() => setSelectState(false)}
                          activityList={statelist}
                          onSearchState={(value) => {
                            searchState(value);
                          }}
                          invalid={invalid}
                          message={message}
                        />

                        <StepInput
                          value={values.zipcode}
                          onChange={handleChange("zipcode")}
                          type="zipcode"
                          label="zipcode"
                          onBlur={() => setFieldTouched("zipcode")}
                          max={5}
                          placeholder="Zipcode"
                          borderColor={
                            touched.zipcode && errors.zipcode
                              ? AppColors.Theme_Red
                              : AppColors.Theme_Buttons
                          }
                          keyboard="number-pad"
                          // onSubmitEditing={() => ref_input6.current.focus()}
                          refInput={ref_input5}
                          returnKeyType="next"
                        />

                        {touched.zipcode && errors.zipcode && (
                          <Text style={styles.formError}>{errors.zipcode}</Text>
                        )}

                        <StepInput
                          value={values.country}
                          onChange={handleChange("country")}
                          type="country"
                          label="country"
                          onBlur={() => setFieldTouched("country")}
                          max={100}
                          placeholder="Country"
                          borderColor={
                            touched.country && errors.country
                              ? AppColors.Theme_Red
                              : AppColors.Theme_Buttons
                          }
                          refInput={ref_input5}
                          returnKeyType="done"
                        />

                        {touched.country && errors.country && (
                          <Text style={styles.formError}>{errors.country}</Text>
                        )}

                        <View style={{ marginBottom: "3%" }}>
                          <Button title="SAVE ADDRESS" onPress={handleSubmit} />
                        </View>
                      </View>
                    </>
                  )}
                </Formik>
                {/* </KeyboardAvoidingView> */}
              </ScrollView>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  };
  /***********************************************************************/

  return (
    <SafeAreaView style={AppStyles.container}>
      <View style={{ height: 140, marginTop: 15 }}>
        <ImageBackground
          source={AppImages.setting}
          resizeMode="cover"
          style={styles.image}
        >
          <Text style={styles.text}>Account</Text>
          <Pressable
            onPress={() => props.navigation.navigate("Setting")}
            style={{ position: "absolute", margin: 15 }}
          >
            <Image source={AppImages.back} style={{ height: 28, width: 28 }} />
          </Pressable>
        </ImageBackground>
      </View>

      <ScrollView style={{ width: "95%", alignSelf: "center" }}>
        <Pressable
          style={{ marginTop: 10, width: 80 }}
          onPress={() => onAddPhoto()}
        >
          {pic === "" ? (
            <Image
              source={AppImages.emmaWatson}
              style={{ width: 80, height: 80, borderRadius: 80 }}
            />
          ) : (
            <Image
              source={{ uri: pic }}
              style={{ width: 80, height: 80, borderRadius: 80 }}
            />
          )}
          <View
            style={{
              backgroundColor: AppColors.Theme_Gray_Text,
              width: 22,
              height: 22,
              borderRadius: 25,
              position: "absolute",
              bottom: 5,
              right: 0,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={require("../../assets/images/camera.png")}
              style={{ width: 15, height: 11, tintColor: "black" }}
            />
          </View>
        </Pressable>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: "3%",
          }}
        >
          <Text style={styles.headingTitle}>Personal Information</Text>
          <Pressable onPress={() => setShowPersonalInfo(true)}>
            <Text style={styles.headingTitleLeft}>Change</Text>
          </Pressable>
        </View>
        <AccountInput label="Full Name" title={fullname} />
        <AccountInput
          label="Date of Birth"
          title={moment(dob).format("DD/MM/YYYY")}
        />
        <AccountInput label="Sex" title={option.name} />

        <AccountInput label="Phone Number" title="XXX-XXX-XXXX" />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: "5%",
          }}
        >
          <Text style={styles.headingTitle}>Password</Text>
          <Pressable onPress={() => setShowPassword(true)}>
            <Text style={styles.headingTitleLeft}>Change</Text>
          </Pressable>
        </View>

        <AccountInput label="Password" title="******" />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: "5%",
          }}
        >
          <Text style={styles.headingTitle}>Home/Work Address</Text>
          <Pressable onPress={() => setShowLocation(true)}>
            <Text style={styles.headingTitleLeft}>Change</Text>
          </Pressable>
        </View>
        <AccountInput label="Address line 1" title={address1} />
        <AccountInput label="Address line 2" title={address2} />
        <AccountInput label="Address line 3" title={address3} />
        <AccountInput label="City" title={city} />
        <AccountInput label="State" title={statename.name} />
        <AccountInput label="Zipcode" title={zipcode} />
        <AccountInput label="Country" title={country} />
      </ScrollView>

      {renderDriverBottomPersonalInfo()}
      {renderDriverBottomLocationSheet()}
      {renderDriverBottomPassworChnage()}
    </SafeAreaView>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  headingTitle: {
    fontSize: 15,
    fontFamily: AppFonts.MediumFont,
    color: AppColors.Theme_white,
  },
  headingTitleLeft: {
    fontSize: 15,
    fontFamily: AppFonts.MediumFont,
    color: AppColors.Theme_Gray_Text,
  },

  modalView: {
    alignItems: "center",
    justifyContent: "flex-end",
    flex: 1,

    // backgroundColor: "rgba(52, 52, 52, 0.6)",
  },
  modalContainer: {
    backgroundColor: "#2f2f2f",
    width: "100%",
    // height: "55%",
    alignItems: "center",
    borderRadius: 6,
    elevation: 4,
    flexDirection: "column",
    // position: "absolute",
    // bottom: 0,
    borderTopEndRadius: 30,
    borderTopLeftRadius: 30,
  },
  reportTo: {
    marginTop: "3%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  dobBirth: {
    textAlign: "left",
    color: AppColors.Theme_Gray_Text,
    marginLeft: 15,
    marginTop: 5,
  },
  forgotPassContainer: {
    width: "90%",
    alignSelf: "flex-end",
    // flexDirection: 'row',
    marginVertical: height * 0.025,
    marginTop: height * 0.015,
  },
  input: {
    borderRadius: 5,
    borderWidth: 2,
    borderColor: AppColors.Theme_Buttons,
    marginBottom: 10,
    width: width / 1.1,
    height: 60,
    fontSize: 16,
    justifyContent: "space-between",
  },
  textInput: {
    height: 60,
    flex: 1,
    fontSize: 18,
    fontFamily: AppFonts.RegularFont,
    marginLeft: 15,
    marginTop: 5,
    textAlign: "left",
    color: AppColors.Theme_white,
  },
  datepickerContainer: {
    width: "90%",
    height: "20%",
    borderWidth: 0.4,
    marginTop: 10,
    backgroundColor: AppColors.Theme_Gray_Text,
  },
  formError: {
    color: "red",
    marginTop: -8,
    marginBottom: 10,
  },
  image: {
    flex: 1,
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
    overflow: "hidden",
    // height:150,
  },

  text: {
    color: "white",
    fontSize: 26,
    lineHeight: 60,
    fontFamily: AppFonts.BoldFont,
    fontWeight: "700",
    textAlign: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  unselect: {
    height: 50,
    alignItems: "center",
    // borderBottomWidth: 1,
    // borderColor: "#4B4B4B",
    justifyContent: "center",
    backgroundColor: AppColors.Theme_Buttons,
    borderRadius: 5,
    marginTop: 2,
  },
  select: {
    height: 40,
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: AppColors.Theme_Buttons,
    justifyContent: "center",
    // backgroundColor: "#4B4B4B",
    zIndex: 100,

    // borderBottomRightRadius:10,
    // borderBottomLeftRadius:10
  },
  dropDownConatiner: {
    backgroundColor: "#2f2f2f",

    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderColor: AppColors.Theme_Buttons,
    // position:'absolute',

    marginTop: -10,
  },
  image: {
    flex: 1,
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
    overflow: "hidden",
  },

  text: {
    color: "white",
    fontSize: 26,
    lineHeight: 60,
    fontFamily: AppFonts.BoldFont,
    fontWeight: "700",
    textAlign: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  buttonContainer: {
    borderColor: AppColors.Theme_Buttons,
    height: 64,
    borderRadius: 8,
    flexDirection: "row",
    borderWidth: 2,
    // justifyContent:'center',
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    textAlign: "left",
    fontSize: 18,
    fontFamily: AppFonts.RegularFont,
    color: AppColors.Theme_white,
    marginLeft: 15,
  },

  modalViews: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,

    // backgroundColor: "rgba(52, 52, 52, 0.6)",
  },
  modalContainers: {
    backgroundColor: AppColors.Theme_Background,
    width: "95%",
    height: "70%",
    alignItems: "center",
    borderRadius: 6,
    elevation: 4,
    flexDirection: "column",

    borderRadius: 10,
    borderRadius: 10,
  },
});
