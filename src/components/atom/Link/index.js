import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors, fonts } from '../../../utils'

const Link = ({text, fontSize, align, color, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text(fontSize,align,color)}>{text}</Text>
    </TouchableOpacity>
  )
}

export default Link

const styles = StyleSheet.create({
  text:(fontSize,align,color)=>({
    fontSize:fontSize,
    color:color ? color : colors.text.secondary,
    fontFamily:fonts.primary[600],
    textDecorationLine:'underline',
    textAlign:align
  })
})
