import React, { Component } from 'react'
import { View, Image } from 'react-native'
import styles from './style'

class CarouselSlide extends Component {
  render() {
    const { cards } = this.props
    return <View style={styles.slide}>
      {cards.map((item, index) => {
        return <Image source={{uri:item}}
        style={styles.imageCard} key={index} />
      })}
    </View>

  }
}

export default CarouselSlide