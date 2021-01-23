import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { colors } from '../../../utils/Colors'
import { fonts } from '../../../utils/Fonts'
import { IconBackRed, IconCart, IconSettingsBlack, ILStarGrey, ILStarYellow } from '../../../assets'

const Rating = ({ket, rate, icon}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.ket}>{ket}</Text>
        {
          icon === 'yellow' ? <ILStarYellow/> : <ILStarGrey/>
        }
        <Text style={styles.rate}>{rate}/5</Text>
      </View>
  )
}

export default Rating

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    marginBottom:8,
    alignItems:'center'
  },
  ket:{
    flex:1,
    color:colors.text.secondary,
    fontSize:12.5,
    fontFamily:fonts.primary[400]
  },
  star:{
    width:20,
    height:20,
    marginRight:6
  },
  rate:{
    fontFamily:fonts.primary[800],
    color:colors.text.primary,
    fontSize:12,
    marginLeft:4
  },
  icon:(type)=>({
    width:26,
    height:26,
    marginRight: type == 'cart' ? 12 : 0
  })
})
