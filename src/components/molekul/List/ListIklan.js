import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const ListIklan = ({image, onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.wrapper} onPress={onPress}>
      <Image source={{uri: image}} style={styles.imgIklan}/>
    </TouchableOpacity>
  )
}

export default ListIklan

const styles = StyleSheet.create({
  imgIklan:{
    height:230,
    marginBottom:16
    // width:'100%'
  }
})
