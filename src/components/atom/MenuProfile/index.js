import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { ILSettings, ILSettingsWhite } from '../../../assets'
import { colors } from '../../../utils'

const MenuProfile = ({onPress}) => {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={onPress}>
        <ILSettingsWhite/>
      </TouchableOpacity>
    </View>
  )
}

export default MenuProfile

const styles = StyleSheet.create({
  wrapper:{
    paddingHorizontal:16,
    paddingVertical:16,
    backgroundColor:colors.backgroundProfile,
    flexDirection:'row',
    justifyContent:'flex-end'
  }
})
