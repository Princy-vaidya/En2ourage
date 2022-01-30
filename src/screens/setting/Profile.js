// import React, { useState, useRef } from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   SafeAreaView,
//   TouchableWithoutFeedback,
//   TouchableOpacity,
//   Image,
//   Platform,
//   ImageBackground,
//   ScrollView,
//   Dimensions,
//   Modal,
//   KeyboardAvoidingView,
//   Pressable,
//   Animated,
//   TextInput,
//   FlatList
// } from "react-native";
// import AppStyles from "../../utils/AppStyles";
// import AppImage from "../../utils/AppImages";
// import SettingHeader from "../../components/atoms/header/SettingHeader";
// import AccountInput from "../../components/atoms/input/AccountInput";
// import AppFonts from "../../utils/AppFonts";
// import AppColors from "../../utils/AppColors";
// import StepInput from "../../components/atoms/input/StepInput";
// import DateTimePicker from "@react-native-community/datetimepicker";
// import moment from "moment";
// import Button from "../../components/atoms/button/Button";
// import { Formik } from "formik";
// import * as Yup from "yup";
// import AppImages from "../../utils/AppImages";
// import { Validate } from "../../components/atoms/input/SetlocationValidation";
// import { KeyboardAwareScrollView } from "@codler/react-native-keyboard-aware-scroll-view";
// import * as Animatable from 'react-native-animatable';
// import * as ImagePicker from "react-native-image-picker";
// import Dialog from "../../components/molecule/state/State";
// import ProfileImages from "../../screens/accountslider/profileImages"

// const { width, height } = Dimensions.get("window");
// const movies = [
//   { url: require('../../assets/images/james_batson2.png') },
//   { url: require('../../assets/images/james_batson.png') },
//   { url: require('../../assets/images/security/ben_thomson.png') },
//   { url: require('../../assets/images/security/roberto_alonzo.png') },
//   { url: require('../../assets/images/security/don_mitchelle.png') },
//   { url: require('../../assets/images/security/nancy_thomas.png') },
//   { url: require('../../assets/images/security/roberto_alonzo.png') },

//   // { url: 'https://image.tmdb.org/t/p/w1280/z7FCF54Jvzv9Anxyf82QeqFXXOO.jpg' },
//   // { url: 'https://image.tmdb.org/t/p/w1280/3Nt3v1uzUgfSuVARD1AnI9g9Zl9.jpg' },
//   // { url: 'https://image.tmdb.org/t/p/w1280/pThyQovXQrw2m0s9x82twj48Jq4.jpg' },
//   // { url: 'https://image.tmdb.org/t/p/w1280/tgcrYiyG75iDcyk3en9NzZis0dh.jpg' },
//   // { url: 'https://image.tmdb.org/t/p/w1280/y95lQLnuNKdPAzw9F9Ab8kJ80c3.jpg' },
//   // { url: 'https://image.tmdb.org/t/p/w1280/h6Wi81XNXCjTAcdstiCLRykN3Pa.jpg' },
//   // { url: 'https://image.tmdb.org/t/p/w1280/d9PhCnofBEeQGR3lwywTjWKBiXj.jpg' },
//   // { url: 'https://image.tmdb.org/t/p/w1280/qR2sOAnLcdysU1be1PO6Y0pfuR5.jpg' },
//   // { url: 'https://image.tmdb.org/t/p/w1280/yTIsWzMUsrKdNngIEf15Iz1n3SS.jpg' }
// ]
// const AccountScreen = (props) => {
//   const [date, setDate] = useState(new Date());
//   const [dob, setDOB] = useState(moment());
//   const [show, setShow] = useState(false);
//   const [dobShow, setDOBShow] = useState(false);
//   const [mode, setMode] = useState("date");
//   const [showPersonalInfo, setShowPersonalInfo] = useState(false);
//   const [showLocation, setShowLocation] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
//   const [issue, setIssue] = useState("");
//   const [issueList, setIssueList] = useState([
//     { name: "Male", id: 1, select: false },
//     { name: "Female", id: 2, select: false },
//   ]);
//   const [selectIssue, setSelectIssue] = useState(false);
//   const [selectState, setSelectState] = useState(false);
//   const [statename,setStateName]=useState({name:'AL'});
//   const [toggle, setToggle] = useState(false);
//   const [option, setOption] = useState('Male');
//   const [animation,setAnimation]=useState(new Animated.Value(1));
//   const [slide,setSlide]=useState(new Animated.Value(1));
//   const [pic,setPic]=useState('');
//   const [statelist,setStateList]=useState(
//     [
//       { name: "AL"},
//       { name: "AK"},
//       { name: "AZ"},
//       { name: "AR"},
//       { name: "CA"},
//       { name: "CO"},
//       { name: "CT"}, 
//       { name: "GA"},
//       { name: "HI"},
//       { name: "ID"},
//       { name: "IS"},
//       { name: "IN"},
//       { name: "KY"},
//       { name: "LA"},
//       { name: "MA"},
//       { name: "MD"},
//       { name: "MN"},
//       { name: "MS"},
//       { name: "MO"},
//       { name: "ND"},
//       { name: "OH"},
//       { name: "OK"},
//       { name: "OR"},
//       { name: "PA"},
//       { name: "RI"}, { name: "SC"},
//       { name: "SD"},
//       { name: "TN"},
//       { name: "TX"},
//     ]
//   );
//   const [focus,setFocus]=useState(false);
//   const [statelist1,setStateList1]=useState(
//     [
//       { name: "AL"},
//       { name: "AK"},
//       { name: "AZ"},
//       { name: "AR"},
//       { name: "CA"},
//       { name: "CO"},
//       { name: "CT"}, 
//       { name: "GA"},
//       { name: "HI"},
//       { name: "ID"},
//       { name: "IS"},
//       { name: "IN"},
//       { name: "KY"},
//       { name: "LA"},
//       { name: "MA"},
//       { name: "MD"},
//       { name: "MN"},
//       { name: "MS"},
//       { name: "MO"},
//       { name: "ND"},
//       { name: "OH"},
//       { name: "OK"},
//       { name: "OR"},
//       { name: "PA"},
//       { name: "RI"}, { name: "SC"},
//       { name: "SD"},
//       { name: "TN"},
//       { name: "TX"},
//     ]
//   )
//   const [searchValue, setSearchValue] = useState("");
//   const [message,setMessage]=useState('');

//   const [invalid,setInvalid]=useState(false)

//   /****************************************************************************/
//   const onAddPhoto = async () => {
//     ImagePicker.launchImageLibrary(
//       {
//         mediaType: "photo",
//         includeBase64: false,
//         maxHeight: 200,
//         maxWidth: 200,
//       },
//       async (response) => {

       
//        setPic(  
//         response.uri,
       
// )
        
//       }
//     );
//   };


//   const ref_input1 = useRef();
//   const ref_input2 = useRef();
//   const ref_input3 = useRef();
//   const ref_input4 = useRef();
//   const ref_input5 = useRef();


//   const searchState=(text)=>{


//     let currentData = [];
//     if (text === "")
//      {    setInvalid(false)
//           setStateList(statelist1)
//      } else
//      {
//        currentData = statelist.filter(x =>
//          String(x.name.toLowerCase()).includes(
//            text.toLowerCase()
//          )
//        );
 
//        if( currentData.length ==0){
//          setInvalid(true)
//          setMessage('Not found.')
//        }
 
//      setStateList(currentData)
//          }
    
//   }
//   /***********************************************************************/
//   const onSelect = (item) => {
//     let data = issueList;
//     setToggle(!toggle);
//     data.forEach((elem) => {
//       elem.select = false;
//       if (elem.id === item.id) {
//         elem.select = true;
//       }
//     });
//     setIssueList(data);
//     setOption(item.name)
//     setSelectIssue(false);
//   };

//   const ValidateInfo = Yup.object().shape({
//     fullname: Yup.string()
//       .min(3, "First name is required.")
//       .required("Required."),
//     sex: Yup.string().required("Required."),
//     phone: Yup.string().required("Required."),
//   });

//   /***********************************************************************/
//   const onChange = (event, selectedDate) => {
//     const currentDate = selectedDate || date;
//     setShow(Platform.OS === "ios");
//     setDate(currentDate);
//     setDOB(currentDate);
//   };

//   const showMode = (currentMode) => {
//     setShow(true);
//     setMode(currentMode);
//   };

//   const showDatepicker = () => {
//     showMode("date");
//   };
//   /***********************************************************************/

//   const renderDriverBottomPersonalInfo = () => {
//     return (
//       <Modal
//         visible={showPersonalInfo}
//         onRequestClose={() => setShowPersonalInfo(false)}
//         transparent={true}
//         animationType={"fade"}
//         onRequestClose={() => {}}
//       >
//         <TouchableWithoutFeedback onPress={() => setShowPersonalInfo(false)}>
//           <View style={styles.modalView}>
//             <View style={[styles.modalContainer]}>
//               <Pressable onPress={() => setShowPersonalInfo(false)}>
//                 <Image source={AppImages.rectangle} style={{ margin: "5%" }} />
//               </Pressable>
//               {/* <ScrollView> */}
//                 <KeyboardAwareScrollView>
//                   <Text
//                     style={[
//                       AppStyles.whiteMediumText,
//                       { textAlign: "center", margin: "3%" },
//                     ]}
//                   >
//                     Personal Information{" "}
//                   </Text>
//                   <Formik
//                     initialValues={{
//                       fullname: "",
//                       sex: "",
//                       phone: "",
//                     }}
//                     onSubmit={(values) => setShowPersonalInfo(false)}
//                     validationSchema={ValidateInfo}
//                   >
//                     {({
//                       values,
//                       handleChange,
//                       errors,
//                       handleSubmit,
//                       touched,
//                       setFieldTouched,
//                     }) => (
//                       <>
//                         <View style={styles.formikContainer}>
//                           <StepInput
//                             value={values.fullname}
//                             onChange={handleChange("fullname")}
//                             type="fullname"
//                             label="Full Name"
//                             onBlur={() => setFieldTouched("fullname")}
//                             max={100}
//                             placeholder="Full Name"
//                             borderColor={
//                               touched.fullname && errors.fullname
//                                 ? AppColors.Theme_Red
//                                 : AppColors.Theme_Buttons
//                             }
//                             onSubmitEditing={() => ref_input1.current.focus()}
//                             returnKeyType="next"
//                           />

//                           {touched.fullname && errors.fullname && (
//                             <Text style={styles.formError}>
//                               {errors.fullname}
//                             </Text>
//                           )}

//                           <View>
//                             <TouchableOpacity
//                               onPress={showDatepicker}
//                               style={styles.input}
//                             >
//                               <Text style={styles.dobBirth}>Date of Birth</Text>
//                               <Text style={[styles.textInput]}>
//                                 {moment(dob).format("YYYY-MM-DD")}
//                               </Text>
//                             </TouchableOpacity>
//                           </View>

//                           {/* <StepInput
//                             value={values.sex}
//                             onChange={handleChange("sex")}
//                             type="Sex"
//                             label="Sex"
//                             onBlur={() => setFieldTouched("sex")}
//                             max={100}
//                             placeholder="Sex"
//                             borderColor={
//                               touched.sex && errors.sex
//                                 ? AppColors.Theme_Red
//                                 : AppColors.Theme_Buttons
//                             }
//                             onSubmitEditing={() => ref_input2.current.focus()}
//                             refInput={ref_input1}
//                             returnKeyType="next"
//                           />

//                           {touched.sex && errors.sex && (
//                             <Text style={styles.formError}>{errors.sex}</Text>
//                           )} */}


//        <Pressable onPress={()=> setSelectIssue(!selectIssue)}>
        
//         <View style={styles.buttonContainer}>
//           <View>
//         <Text style={{
//            textAlign:'left',
//            fontSize:14,
//            color:'#9B9B9B',
//            marginLeft:15
//         }}>Sex</Text>

//           <Text style={styles.buttonText}>{option}</Text>
//           </View>
//         </View>
//         <Pressable style={{position:'absolute',right:0,alignItems:'center',margin:10}}
//         onPress={()=> setSelectIssue(!selectIssue)}>
//           {!selectIssue?
//         <Image source={AppImages.downArrow} style={{alignSelf:'center',width:15,height:10,tintColor:'white',marginTop:17,marginRight:5}}/>
//         :        <Image source={AppImages.upArrow} style={{alignSelf:'center',width:25,height:25,tintColor:'white',marginTop:12}}/>
//           }
//         </Pressable>
//       </Pressable>
        

//           {selectIssue && (
//           //  <View style={{borderWidth:2,
//           //   borderTopWidth:0,
//           //   borderColor:AppColors.Theme_Buttons,height:240,width:width / 1.1,alignSelf:'center',marginTop:'5%',

//           //  borderRadius:5}}>
//             <Animatable.View 
//           animation="fadeIn"
//           //  easing="ease"
//             style={[styles.dropDownConatiner]}>
//               {issueList.map((item) => (
//                 <View>
//                 <Pressable
//                   style={styles.unselect}
//                   onPress={() => onSelect(item)}
//                   keyboardShouldPersistTaps="handled"
//                 >
//                   <Animated.Text
//                     style={[
//                       item.select
//                         ? AppStyles.normalRegularGrayText
//                         : AppStyles.normalRegularGrayText,
//                       { color: "white" },
//                     ]}
//                    >
//                     {item.name}
//                   </Animated.Text>
//                 </Pressable>
//                 {item.select &&
//                 <Image source={AppImages.check} style={{position:'absolute',right:0,margin:10}} />
//                 }
//                 </View>
//               ))}
//             </Animatable.View>
//           //  </View>
//           )}

//                           <StepInput
//                             value={values.phone}
//                             onChange={handleChange("phone")}
//                             type="Phone Number"
//                             label="Phone Number"
//                             onBlur={() => setFieldTouched("phone")}
//                             max={100}
//                             placeholder="Phone Number"
//                             borderColor={
//                               touched.phone && errors.phone
//                                 ? AppColors.Theme_Red
//                                 : AppColors.Theme_Buttons
//                             }
//                             refInput={ref_input2}
//                             keyboard="phone-pad"
//                             returnKeyType="done"
//                           />

//                           {touched.phone && errors.phone && (
//                             <Text style={styles.formError}>{errors.phone}</Text>
//                           )}

//                           <View
//                             style={{  marginBottom: "3%" }}
//                           >
//                             <Button
//                               title="SAVE INFORMATION"
//                               onPress={handleSubmit}
//                             />
//                           </View>
//                         </View>
//                       </>
//                     )}
//                   </Formik>
//                   {/* </KeyboardAvoidingView> */}
//                 </KeyboardAwareScrollView>
//               {/* </ScrollView> */}

//               {Platform.OS === "android" && show && (
//                 <DateTimePicker
//                   testID="dateTimePicker"
//                   value={date}
//                   mode={mode}
//                   is24Hour={false}
//                   display="default"
//                   onChange={onChange}
//                   style={{
//                     width: 320,
//                     height: 400,
//                     borderWidth: 0.4,
//                     backgroundColor: "white",
//                   }}
//                 />
//               )}

//               <Modal
//                 visible={Platform.OS === "ios" && show}
//                 transparent={true}
//                 animationType={"fade"}
//                 onRequestClose={() => {}}
//               >
//                 <View style={[styles.modalView]}>
//                   <View
//                     style={{
//                       backgroundColor: AppColors.Theme_Background,
//                       width: "90%",
//                       height: "40%",
//                       alignItems: "center",
//                       borderRadius: 6,
//                       elevation: 4,
//                       flexDirection: "column",
//                       borderRadius: 20,
//                     }}
//                   >
//                     <DateTimePicker
//                       testID="dateTimePicker"
//                       value={date}
//                       mode={mode}
//                       is24Hour={false}
//                       display="default"
//                       onChange={onChange}
//                       style={styles.datepickerContainer}
//                       textColor="white"
//                     />
//                     <View
//                       style={{
//                         position: "absolute",
//                         bottom: 10,
//                         width: "90%",
//                         margin: 10,
//                       }}
//                     >
//                       <Button title="OK" onPress={() => setShow(false)} />
//                     </View>
//                   </View>
//                 </View>
//               </Modal>
//             </View>
//           </View>
//         </TouchableWithoutFeedback>
//       </Modal>
//     );
//   };

//   const renderDriverBottomPassworChnage = () => {
//     return (
//       <Modal
//         visible={showPassword}
//         onRequestClose={() => setShowPassword(false)}
//         transparent={true}
//         animationType={"fade"}
//         onRequestClose={() => {}}
//       >
//         <TouchableWithoutFeedback onPress={() => setShowPassword(false)}>
//           <View style={styles.modalView}>
//             <View style={[styles.modalContainer]}>
//               <Pressable onPress={() => setShowPassword(false)}>
//                 <Image source={AppImages.rectangle} style={{ margin: "5%" }} />
//               </Pressable>
//               {/* <ScrollView> */}
//                 <KeyboardAwareScrollView>
//                   <Text
//                     style={[
//                       AppStyles.whiteMediumText,
//                       { textAlign: "center", margin: "3%" },
//                     ]}
//                   >
//                     Password Change{" "}
//                   </Text>
//                   <Formik
//                     initialValues={{
//                       oldpass: "",
//                       newpass: "",
//                       cfpass: "",
//                     }}
//                     onSubmit={(values) => setShowPersonalInfo(false)}
//                     validationSchema={ValidateInfo}
//                   >
//                     {({
//                       values,
//                       handleChange,
//                       errors,
//                       handleSubmit,
//                       touched,
//                       setFieldTouched,
//                     }) => (
//                       <>
//                         <View style={styles.formikContainer}>
//                           <StepInput
//                             value={values.oldpass}
//                             onChange={handleChange("oldpass")}
//                             type="oldpass"
//                             label="Old Password"
//                             onBlur={() => setFieldTouched("oldpass")}
//                             max={50}
//                             placeholder="Old Password"
//                             borderColor={
//                               touched.oldpass && errors.oldpass
//                                 ? AppColors.Theme_Red
//                                 : AppColors.Theme_Buttons
//                             }
//                             onSubmitEditing={() => ref_input2.current.focus()}
//                             // refInput={ref_input2}
//                             returnKeyType="done"
//                           />
//                           {touched.oldpass && errors.oldpass && (
//                             <Text
//                               style={[styles.formError, { marginBottom: -15 }]}
//                             >
//                               {errors.oldpass}
//                             </Text>
//                           )}
//   <View style={styles.forgotPassContainer}>
//               <Pressable style={{alignSelf:'flex-end'}}
//                 // onPress={()=>props.navigation.navigate('Forgotpass')}
//                 >
//                     <View style={{flexDirection:'row'}}>
//                 <Text style={[AppStyles.whiteMediumText,{fontSize:15}]}>
//                  Forgot your password?
//                 </Text>
              
//                   <Image
//                     source={AppImages.next}
//                     style={{width: 35, height: 20,tintColor:AppColors.Theme_Buttons}}
//                   />
//                   </View>
//                 </Pressable>
//               </View>
//                           <StepInput
//                             value={values.newpass}
//                             onChange={handleChange("newpass")}
//                             type="New Password"
//                             label="New Password"
//                             onBlur={() => setFieldTouched("newpass")}
//                             max={50}
//                             placeholder="New Password"
//                             borderColor={
//                               touched.newpass && errors.newpass
//                                 ? AppColors.Theme_Red
//                                 : AppColors.Theme_Buttons
//                             }
//                             onSubmitEditing={() => ref_input2.current.focus()}
//                             refInput={ref_input1}
//                             returnKeyType="done"
//                           />
//                           {touched.newpass && errors.newpass && (
//                             <Text
//                               style={[styles.formError, { marginBottom: -15 }]}
//                             >
//                               {errors.newpass}
//                             </Text>
//                           )}

//                           <StepInput
//                             value={values.cfpass}
//                             onChange={handleChange("cfpass")}
//                             type="Repaeat New Password"
//                             label="Repaeat New Password"
//                             onBlur={() => setFieldTouched("cfpass")}
//                             max={50}
//                             placeholder="Repaeat New Password"
//                             borderColor={
//                               touched.cfpass && errors.cfpass
//                                 ? AppColors.Theme_Red
//                                 : AppColors.Theme_Buttons
//                             }
//                             refInput={ref_input2}
//                             returnKeyType="done"
//                           />
//                           {touched.cfpass && errors.cfpass && (
//                             <Text
//                               style={[styles.formError, { marginBottom: -15 }]}
//                             >
//                               {errors.cfpass}
//                             </Text>
//                           )}
//                           <View
//                             style={{  marginBottom: "3%" }}
//                           >
//                             <Button
//                               title="SAVE PASSWORD"
//                               onPress={()=>setShowPassword(false)}
//                             />
//                           </View>
//                         </View>
//                       </>
//                     )}
//                   </Formik>
//                   {/* </KeyboardAvoidingView> */}
//                 </KeyboardAwareScrollView>
//               {/* </ScrollView> */}
//             </View>
//           </View>
//         </TouchableWithoutFeedback>
//       </Modal>
//     );
//   };
//   /***********************************************************************/

//   const renderDriverBottomLocationSheet = () => {
//     return (
//       <Modal
//         visible={showLocation}
//         transparent={true}
//         animationType={"fade"}
//         onRequestClose={() => {}}
//       >
//         <TouchableWithoutFeedback onPress={() => setShowLocation(false)}>
//           <View style={styles.modalView}>
//             <View style={[styles.modalContainer]}>
//               <Pressable onPress={() => setShowLocation(false)}>
//                 <Image source={AppImages.rectangle} style={{ margin: "5%" }} />
//               </Pressable>

//               {/* <ScrollView
//                 style={{ flexGrow: 1 }}
//                 showsVerticalScrollIndicator={false}
//                 keyboardShouldPersistTaps="handled"
//               > */}
//                 <KeyboardAwareScrollView>
//                   <Text
//                     style={[
//                       AppStyles.whiteMediumLargeText,
//                       { textAlign: "center", margin: "3%" },
//                     ]}
//                   >
//                     Address Change{" "}
//                   </Text>
//                   <Formik
//                     initialValues={{
//                       fullname: "",
//                       address: "",
//                       city: "",
//                       state: "",
//                       zipcode: "",
//                       country: "",
//                     }}
//                     onSubmit={(values) => setShowLocation(false)}
//                     validationSchema={Validate}
//                   >
//                     {({
//                       values,
//                       handleChange,
//                       errors,
//                       handleSubmit,
//                       touched,
//                       setFieldTouched,
//                     }) => (
//                       <>
//                         <View style={styles.formikContainer}>
//                           <StepInput
//                             value={values.fullname}
//                             onChange={handleChange("fullname")}
//                             type="fullname"
//                             label="Full Name"
//                             onBlur={() => setFieldTouched("fullname")}
//                             max={100}
//                             placeholder="Full Name"
//                             borderColor={
//                               touched.fullname && errors.fullname
//                                 ? AppColors.Theme_Red
//                                 : AppColors.Theme_Buttons
//                             }
//                             onSubmitEditing={() => ref_input1.current.focus()}
//                             returnKeyType="next"
//                           />

//                           {touched.fullname && errors.fullname && (
//                             <Text style={styles.formError}>
//                               {errors.fullname}
//                             </Text>
//                           )}

//                           <StepInput
//                             value={values.address}
//                             onChange={handleChange("address")}
//                             type="address"
//                             label="Address"
//                             onBlur={() => setFieldTouched("address")}
//                             max={100}
//                             placeholder="Address"
//                             borderColor={
//                               touched.address && errors.address
//                                 ? AppColors.Theme_Red
//                                 : AppColors.Theme_Buttons
//                             }
//                             onSubmitEditing={() => ref_input2.current.focus()}
//                             refInput={ref_input1}
//                             returnKeyType="next"
//                           />

//                           {touched.address && errors.address && (
//                             <Text style={styles.formError}>
//                               {errors.address}
//                             </Text>
//                           )}

//                           <StepInput
//                             value={values.city}
//                             onChange={handleChange("city")}
//                             type="city"
//                             label="city"
//                             onBlur={() => setFieldTouched("city")}
//                             max={100}
//                             placeholder="City"
//                             borderColor={
//                               touched.city && errors.city
//                                 ? AppColors.Theme_Red
//                                 : AppColors.Theme_Buttons
//                             }
//                             onSubmitEditing={() => ref_input3.current.focus()}
//                             refInput={ref_input2}
//                             returnKeyType="next"
//                           />

//                           {touched.city && errors.city && (
//                             <Text style={styles.formError}>{errors.city}</Text>
//                           )}

// <Pressable onPress={()=> setSelectState(!selectState)}>
        
//         <View style={styles.buttonContainer}>
//           <View>
//         <Text style={{
//            textAlign:'left',
//            fontSize:14,
//            color:'#9B9B9B',
//            marginLeft:15
//         }}>State</Text>

//           <Text style={styles.buttonText}>{statename.name}</Text>
//           </View>
//         </View>
//         <Pressable style={{position:'absolute',right:0,alignItems:'center',margin:10}}
//         onPress={()=> setSelectState(!selectState)}>
//           {!selectState?
//         <Image source={AppImages.downArrow} style={{alignSelf:'center',width:15,height:10,tintColor:'white',marginTop:17,marginRight:5}}/>
//         :        <Image source={AppImages.upArrow} style={{alignSelf:'center',width:25,height:25,tintColor:'white',marginTop:12}}/>
//           }
//         </Pressable>
//       </Pressable>
//       <Dialog
//               isVisible={selectState}
//               title="Select State"
//               onValueSelected={(value) => {
//                 setStateName(value);
//                 setSelectState(false);
//               }}
//               onCancel={() => setSelectState(false)}
//               activityList={statelist}
//               onSearchState={(value)=>{
//                 searchState(value)
//               }}
//              invalid={invalid}
//              message={message}
//             />


         
//                           <StepInput
//                             value={values.zipcode}
//                             onChange={handleChange("zipcode")}
//                             type="zipcode"
//                             label="zipcode"
//                             onBlur={() => setFieldTouched("zipcode")}
//                             max={100}
//                             placeholder="Zipcode"
//                             borderColor={
//                               touched.zipcode && errors.zipcode
//                                 ? AppColors.Theme_Red
//                                 : AppColors.Theme_Buttons
//                             }
//                             keyboard="number-pad"
//                             onSubmitEditing={() => ref_input5.current.focus()}
//                             refInput={ref_input4}
//                             returnKeyType="next"
//                           />

//                           {touched.zipcode && errors.zipcode && (
//                             <Text style={styles.formError}>
//                               {errors.zipcode}
//                             </Text>
//                           )}

//                           <StepInput
//                             value={values.country}
//                             onChange={handleChange("country")}
//                             type="country"
//                             label="country"
//                             onBlur={() => setFieldTouched("country")}
//                             max={100}
//                             placeholder="Country"
//                             borderColor={
//                               touched.country && errors.country
//                                 ? AppColors.Theme_Red
//                                 : AppColors.Theme_Buttons
//                             }
//                             refInput={ref_input5}
//                             returnKeyType="next"
//                           />

//                           {touched.country && errors.country && (
//                             <Text style={styles.formError}>
//                               {errors.country}
//                             </Text>
//                           )}

//                           <View
//                             style={{ marginBottom: "3%" }}
//                           >
//                             <Button
//                               title="SAVE ADDRESS"
//                               onPress={handleSubmit}
//                             />
//                           </View>
//                         </View>
//                       </>
//                     )}
//                   </Formik>
//                   {/* </KeyboardAvoidingView> */}
//                 </KeyboardAwareScrollView>
//               {/* </ScrollView> */}
//             </View>
//           </View>
          
//         </TouchableWithoutFeedback>
//       </Modal>
//     );
//   };
//   /***********************************************************************/

//   return (
//     <SafeAreaView style={AppStyles.container}>
    
//     <View style={{height:140,marginTop:15 }}>
//           <ImageBackground source={AppImages.setting} resizeMode="cover" style={styles.image} >
//                 <Text style={styles.text}>Account</Text>
//                 <Pressable onPress={()=>props.navigation.navigate('Setting')}
//                 style={{position:'absolute',margin:15}}>
//                 <Image source={AppImages.back} style={{height:28,width:28}}/>
//                 </Pressable>
//           </ImageBackground>
//         </View>

//       <ScrollView style={{ width: "95%", alignSelf: "center" }}>
//           <View style={{flexDirection:'row',justifyContent:'space-between'}}>
//           <View >
//       <Pressable style={{marginTop:10,width:80}}
//         onPress={()=>onAddPhoto()}>
//           {pic===""?
//         <Image source={AppImages.clientPic} style={{width:80,height:80,borderRadius:80}}/>
//         :
//         <Image source={{uri:pic}} style={{width:80,height:80,borderRadius:80}}/>
//     }
//         <View style={{backgroundColor:AppColors.Theme_Gray_Text,width:22,height:22,borderRadius:25,position:'absolute',bottom:5,right:0,alignItems:'center',justifyContent:'center'}}>
//           <Image source={require('../../assets/images/camera.png')}
//           style={{width:15,height:11,tintColor:'black'}}/>
//         </View>
//         </Pressable>
//         </View>
        
//         <View style={{width:'70%',margin:10}}>
//             {/* <View style={{flexDirection:'row'}}>
//         <Pressable>
//                 <Image source={AppImage.prev} style={{marginTop:25,marginRight:10}}/>
//             </Pressable>
//          <ScrollView
//           horizontal
//           pagingEnabled
//           showsHorizontalScrollIndicator={false}
//         >
           
//           <Image source={AppImages.onboarding} style={{margin:7,width:50,height:50,borderRadius:50}}/>
//           <Image source={AppImages.profile} style={{margin:7,width:50,height:50,borderRadius:50}}/>

//           <Image source={AppImages.clientPic} style={{margin:7,width:50,height:50,borderRadius:50}}/>
//            <Image source={AppImages.startSreen} style={{margin:7,width:50,height:50,borderRadius:50}}/>

//           <Image source={AppImages.clientPic} style={{margin:7,width:50,height:50,borderRadius:50}}/>
          
//         </ScrollView>
//         <Pressable>
//                 <Image source={AppImage.nexts} style={{marginTop:25,marginLeft:10,borderRadius:50}}/>
//             </Pressable> */}
//         {/* </View> */}
//         <ProfileImages movies={movies}/>
//         <Pressable style={{flexDirection:'row',marginTop:15}}>
//             <View style={{backgroundColor:AppColors.Theme_Gray_Text,borderRadius:25,width:25}}>
//              <Image source={AppImages.plus} style={{tintColor:'black',width:25,height:25}}/>
//             </View>
       
//             <Text style={[AppStyles.whiteMediumText,{marginLeft:10}]}>Add Image</Text>
       
//         </Pressable>
//     </View>
//         </View>
//         <View
//           style={{
//             flexDirection: "row",
//             justifyContent: "space-between",
//             marginTop: "3%",
//           }}
//         >
//           <Text style={styles.headingTitle}>Personal Information</Text>
//           <Pressable onPress={() => setShowPersonalInfo(true)}>
//             <Text style={styles.headingTitleLeft}>Change</Text>
//           </Pressable>
//         </View>
//         <AccountInput label="Full Name" title="Princy" />
//         <AccountInput label="Date of Birth" title="12/12/1989" />
//         <AccountInput label="Sex" title="Male" />

//         <AccountInput label="Phone Number" title="XXX-XXX-XXXX" />

//         <View
//           style={{
//             flexDirection: "row",
//             justifyContent: "space-between",
//             marginTop: "5%",
//           }}
//         >
//           <Text style={styles.headingTitle}>Password</Text>
//           <Pressable onPress={() => setShowPassword(true)}>
//             <Text style={styles.headingTitleLeft}>Change</Text>
//           </Pressable>
//         </View>

//         <AccountInput label="Password" title="******" />

//         <View
//           style={{
//             flexDirection: "row",
//             justifyContent: "space-between",
//             marginTop: "5%",
//           }}
//         >
//           <Text style={styles.headingTitle}>Home/Work Address</Text>
//           <Pressable onPress={() => setShowLocation(true)}>
//             <Text style={styles.headingTitleLeft}>Change</Text>
//           </Pressable>
//         </View>
//         <AccountInput label="Address1" title="Loreum ipsum dolar sit amet." />
//         <AccountInput label="Address2" title="Loreum ipsum dolar sit amet." />

       
//       </ScrollView>
      
//       {renderDriverBottomPersonalInfo()}
//         {renderDriverBottomLocationSheet()}
//         {renderDriverBottomPassworChnage()}
//     </SafeAreaView>
//   );
// };

// export default AccountScreen;

// const styles = StyleSheet.create({
//   headingTitle: {
//     fontSize: 15,
//     fontFamily: AppFonts.MediumFont,
//     color: AppColors.Theme_white,
//   },
//   headingTitleLeft: {
//     fontSize: 15,
//     fontFamily: AppFonts.MediumFont,
//     color: AppColors.Theme_Gray_Text,
//   },

//   modalView: {
//     alignItems: "center",
//     justifyContent: "center",
//     flex: 1,

//     // backgroundColor: "rgba(52, 52, 52, 0.6)",
//   },
//   modalContainer: {
//     backgroundColor: '#2f2f2f',
//     width: "100%",
//     // height: "55%",
//     alignItems: "center",
//     borderRadius: 6,
//     elevation: 4,
//     flexDirection: "column",
//     position: "absolute",
//     bottom: 0,
//     borderTopEndRadius: 30,
//     borderTopLeftRadius: 30,
//   },
//   reportTo: {
//     marginTop: "3%",
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//   },
//   datepickerContainer: {
//     width: "90%",
//     height: "70%",
//     borderWidth: 0.4,
//     marginTop: 10,
//   },
//   dobBirth: {
//     textAlign: "left",
//     color: AppColors.Theme_Gray_Text,
//     marginLeft: 15,
//     marginTop: 5,
//   },
//   forgotPassContainer: {
//     width: '90%',
//     alignSelf: 'flex-end',
//     // flexDirection: 'row',
//     marginVertical:height*0.025,
//     marginTop:height*0.015
//   },
//   input: {
//     borderRadius: 5,
//     borderWidth: 2,
//     borderColor: AppColors.Theme_Buttons,
//     marginBottom: 10,
//     width: width / 1.1,
//     height: 60,
//     fontSize: 16,
//     justifyContent: "space-between",
//   },
//   textInput: {
//     height: 60,
//     flex: 1,
//     fontSize: 18,
//     fontFamily: AppFonts.RegularFont,
//     marginLeft: 15,
//     marginTop: 5,
//     textAlign: "left",
//     color: AppColors.Theme_white,
//   },
//   datepickerContainer: {
//     width: "90%",
//     height: "70%",
//     borderWidth: 0.4,
//     marginTop: 10,
//   },
//   formError: {
//     color: "red",
//     marginTop: -8,
//     marginBottom: 10,
//   },
//   image: {
//     flex: 1,
//     borderTopEndRadius: 30,
//     borderTopStartRadius: 30,
//     overflow: 'hidden',
//   // height:150,
//   },
  
//   text: {
//     color: 'white',
//     fontSize: 26,
//     lineHeight: 60,
//     fontFamily:AppFonts.BoldFont,
//     fontWeight: '700',
//     textAlign: 'center',
//     backgroundColor: 'rgba(0,0,0,0.3)'
//   },
//   unselect: {
//     height: 50,
//     alignItems: "center",
//     // borderBottomWidth: 1,
//     // borderColor: "#4B4B4B",
//     justifyContent: "center",
//     backgroundColor:AppColors.Theme_Buttons,
//     borderRadius:5,
//     marginTop:2
//   },
//   select: {
//     height: 40,
//     alignItems: "center",
//     borderBottomWidth: 1,
//     borderColor: AppColors.Theme_Buttons,
//     justifyContent: "center",
//     // backgroundColor: "#4B4B4B",
//     zIndex:100

//     // borderBottomRightRadius:10,
//     // borderBottomLeftRadius:10
//   },
//   dropDownConatiner:{
    
//     backgroundColor:"#2f2f2f",
//     marginTop:-10,

//     borderBottomLeftRadius:10,
//     borderBottomRightRadius:10,
//     borderColor:AppColors.Theme_Buttons,
//     // position:'absolute',

//     //  marginTop:'-5%'
//   },
//   image: {
//     flex: 1,
//     borderTopEndRadius: 30,
//     borderTopStartRadius: 30,
//     overflow: 'hidden',
  
//   },
  
//   text: {
//     color: 'white',
//     fontSize: 26,
//     lineHeight: 60,
//     fontFamily:AppFonts.BoldFont,
//     fontWeight: '700',
//     textAlign: 'center',
//     backgroundColor: 'rgba(0,0,0,0.3)'
//   },
//   buttonContainer:{
//   borderColor:AppColors.Theme_Buttons,
//     height:64,
//     borderRadius:8,
//     flexDirection:'row',
//     borderWidth:2,
//     // justifyContent:'center',
//     alignItems:'center',
//     marginBottom:10
//   },
//   buttonText:{
//     textAlign:'left',
//     fontSize:18,
//     fontFamily:AppFonts.RegularFont,
//     color:AppColors.Theme_white,
//     marginLeft:15
   
//   },
  
  
//   modalContainers: {
//     backgroundColor:AppColors.Theme_Background,
//     width: "95%",
//     height: "70%",
//     alignItems: "center",
//     borderRadius: 6,
//     elevation: 4,
//     flexDirection: "column",
  
//     borderRadius: 10,
//     borderRadius: 10,
//   },

// });

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
import ProfileImages from "../../screens/accountslider/profileImages"


const { width, height } = Dimensions.get("window");

const Profile = (props) => {
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
  const [address1,setAddress1]=useState('Loreum ipsum dolar sit amet.');
  const [address2,setAddress2]=useState('Loreum ipsum dolar sit amet.');
  const [address3,setAddress3]=useState('Loreum ipsum dolar sit amet.');
  const [city,setCity]=useState('New York');
  const [country,setCountry]=useState('USA');
  const [zipcode,setZipcode]=useState('40022');
  const [fullname,setFullname]=useState('Princy');
  const [selectIssue, setSelectIssue] = useState(false);
  const [selectState, setSelectState] = useState(false);
  const [statename, setStateName] = useState({ name: "AL" });
  const [toggle, setToggle] = useState(false);
  const [option, setOption] = useState({ name: "Male" });
  const [animation, setAnimation] = useState(new Animated.Value(1));
  const [slide, setSlide] = useState(new Animated.Value(1));
  const [pic, setPic] = useState("");
  const [phone,setPhone]=useState('');
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
  const [movies,setMovies]=useState([
   'data:image/jpeg;base64,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',
   'data:image/jpeg;base64,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',
   'data:image/jpeg;base64,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',
   'data:image/jpeg;base64,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',
   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREB7FC1k3nxOMlqRHPWG-j6mXUcysRIgm1GA&usqp=CAU'
])

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

  const onAddMultilpleImage = async () => {
    ImagePicker.launchImageLibrary(
      {
        mediaType: "photo",
        includeBase64: false,
        maxHeight: 200,
        maxWidth: 200,
      },
      async (response) => {
        if (response.didCancel == true) {
         setMovies(movies)
        } else {
         
        let data=[...movies];
        data.push(response.uri)
        setMovies(data)

        console.log('movies...',movies)
        //   try {
        //     await setValuesInStorage("pic", response.uri);
        //   } catch (e) {
        //     console.log("user detail", e);
        //   }
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

  const onSaveAddress=(values)=>{
   setFullname(values.fullname);
   setAddress1(values.address);
   setAddress2(values.address1);
   setAddress3(values.address2);
   setCity(values.city);
   setZipcode(values.zipcode);
   setCountry(values.country);
   setShowLocation(false)
  }

  const onSaveInfo=(values)=>{
    setFullname(values.fullname);
    setShowPersonalInfo(false)
  }

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
                          refInput={ref_input1}
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
                <View style={[styles.modalView]}>
                  <View
                    style={{
                      backgroundColor: AppColors.Theme_Background,
                      width: "90%",
                      height: "40%",
                      alignItems: "center",
                      borderRadius: 6,
                      elevation: 4,
                      flexDirection: "column",
                      borderRadius: 20,
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
                    address1:"",
                    address2:"",
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
                          borderColor={
                           
                              AppColors.Theme_Buttons
                          }
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
                          borderColor={
                           
                              AppColors.Theme_Buttons
                          }
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
            onPress={() => props.navigation.goBack()}
            style={{ position: "absolute", margin: 15 }}
          >
            <Image source={AppImages.back} style={{ height: 28, width: 28 }} />
          </Pressable>
        </ImageBackground>
      </View>

      <ScrollView style={{ width: "95%", alignSelf: "center" }}>
        {/* <Pressable
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
        </Pressable> */}

<View style={{flexDirection:'row',justifyContent:'space-between'}}>
           <View >
     <Pressable style={{marginTop:10,width:80}}
         onPress={()=>onAddPhoto()}>
          {pic===""?
        <Image source={AppImages.clientPic} style={{width:80,height:80,borderRadius:80}}/>
       :
        <Image source={{uri:pic}} style={{width:80,height:80,borderRadius:80}}/>
   }
       <View style={{backgroundColor:AppColors.Theme_Gray_Text,width:22,height:22,borderRadius:25,position:'absolute',bottom:5,right:0,alignItems:'center',justifyContent:'center'}}>
         <Image source={require('../../assets/images/camera.png')}
          style={{width:15,height:11,tintColor:'black'}}/>
        </View>
        </Pressable>
        </View>
        
        <View style={{width:'70%',margin:10}}>


       <ProfileImages movies={movies}/>
        <Pressable style={{flexDirection:'row',marginTop:15}}
        onPress={()=>onAddMultilpleImage()}>
           <View style={{backgroundColor:AppColors.Theme_Gray_Text,borderRadius:25,width:25}}>
             <Image source={AppImages.plus} style={{tintColor:'black',width:25,height:25}}/>
            </View>
       
           <Text style={[AppStyles.whiteMediumText,{marginLeft:10}]}>Add Image</Text>
       
         </Pressable>
     </View>
         </View>
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
        <AccountInput label="Date of Birth" title={moment(dob).format('DD/MM/YYYY')} />
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

export default Profile;

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
  datepickerContainer: {
    width: "90%",
    height: "70%",
    borderWidth: 0.4,
    marginTop: 10,
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
    height: "70%",
    borderWidth: 0.4,
    marginTop: 10,
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


