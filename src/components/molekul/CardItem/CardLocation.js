import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { IconLocation, ILLocation } from '../../../assets'
import { colors } from '../../../utils/Colors'
import { fonts } from '../../../utils/Fonts'

const CardLocation = () => {
  return (
    <View style={styles.container}>
      <ILLocation/>
      <View style={styles.parent}>
        <Text styles={styles.title}>Lokasi pengiriman</Text>
        <Text style={styles.address}>Jalan mangga no. 129292</Text>
      </View>
    </View>
  )
}

export default CardLocation

const styles = StyleSheet.create({
  container:{
    paddingVertical:14,
    paddingHorizontal:15,
    backgroundColor:colors.white,
    borderRadius:10,
    flexDirection:'row',
    alignItems:'center'
  },
  icon:{
    width:34,
    height:34
  },
  title:{
    fontFamily:fonts.primary[600],
    fontSize:16,
    color:colors.text.primary
  },
  address:{
    fontFamily:fonts.primary[400],
    fontSize:12,
    marginTop:4,
    color:colors.text.primary
  },
  parent:{
    flex:1,
    marginLeft:10
  }
})
