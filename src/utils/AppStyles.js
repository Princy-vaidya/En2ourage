import { StyleSheet, Dimensions } from "react-native";
import AppColors from './AppColors';
import AppFonts from './AppFonts';

const { width, height } = Dimensions.get('window');

const AppStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.Theme_Background,
    },
    largeWhiteText:{
        fontSize:36,
        color:AppColors.colorWhite,
        textAlign:'center',
        fontFamily:AppFonts.RegularFont
       },
       regularWhiteText:{
        fontSize:14,
        color:AppColors.colorWhite,
        textAlign:'left',
        fontFamily:AppFonts.MediumFont
       },
   boldWhiteText:{
    fontSize:22,
    color:AppColors.colorWhite,
    textAlign:'center',
    fontFamily:AppFonts.BoldFont
   },
   authHeadingText:{
    fontSize:34,
    color:AppColors.colorWhite,
    textAlign:'center',
    fontFamily:AppFonts.MediumFont
   },
   boldHeadingText:{
    fontSize:26,
    color:AppColors.colorWhite,
    textAlign:'center',
    fontFamily:AppFonts.MediumFont
   },
   boldGrayText:{
    fontSize:22,
    color:AppColors.Theme_Gray_Text,
    textAlign:'center',
    fontFamily:AppFonts.BoldFont
   },
   normalBoldText:{
    fontSize:16,
    color:AppColors.colorWhite,
    fontFamily:AppFonts.BoldFont
   },
   boldText:{
    fontSize:18,
    color:AppColors.colorWhite,
    fontFamily:AppFonts.BoldFont
   },
   normalRegularText:{
    fontSize:16,
    color:AppColors.colorWhite,
    fontFamily:AppFonts.RegularFont
   },
   normalRegularGrayText:{
    fontSize:16,
    color:AppColors.Theme_Buttons,
    fontFamily:AppFonts.RegularFont
   },
   normalRegularOrangeText:{
    fontSize:16,
    color:AppColors.Theme_Orange,
    fontFamily:AppFonts.RegularFont
   },
   normalMediumText:{
    fontSize:18,
    color:AppColors.colorWhite,
    fontFamily:AppFonts.MediumFont
   },
   regularText:{
    fontSize:18,
    color:AppColors.colorWhite,
    fontFamily:AppFonts.RegularFont
   },
   redLargeText:{
    color:AppColors.Theme_Red,
    fontSize:80,
    fontFamily:AppFonts.BoldFont
   },
   redSmallText:{
    color:AppColors.Theme_Red,
    fontSize:14,
    fontFamily:AppFonts.BoldFont
   },
   whiteSmallText:{
    color:AppColors.Theme_white,
    fontSize:14,
    fontFamily:AppFonts.MediumFont
   },
   whiteMediumText:{
    color:AppColors.Theme_white,
    fontSize:18,
    fontFamily:AppFonts.MediumFont
   },
   regularLargeWhiteText:{
    color:AppColors.Theme_white,
    fontSize:34,
    fontFamily:AppFonts.MediumFont
   },
  mediumWhiteText:{
    color:AppColors.Theme_white,
    fontSize:16,
    fontFamily:AppFonts.MediumFont
   },
   whiteMediumLargeText:{
    color:AppColors.Theme_white,
    fontSize:18,
    fontFamily:AppFonts.MediumFont
   }
});

export default AppStyles;