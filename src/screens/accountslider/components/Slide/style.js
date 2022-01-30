import { StyleSheet, Dimensions } from 'react-native'
import { imageHeight, imageWidth, cardPadding } from '../../config'
const { width: screenWidth } = Dimensions.get('window')

const styles = StyleSheet.create({
  slide: {
    flexDirection: 'row',
     justifyContent: 'space-evenly',
    width: screenWidth,
    paddingHorizontal: cardPadding,
    backgroundColor:"#000000"
  },
  imageCard: {
    width:50,
    height: 50,
    borderRadius:50
  }
});

export default styles