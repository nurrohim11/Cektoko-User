import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { colors, fonts } from '../../../utils'

const ListTransaksi = ({date, no_pesanan, tgl_pengiriman, jam, onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.container} onPress={onPress}>
      <Text style={styles.date}>{date}</Text>
      <Text style={styles.title}>No. Pesanan</Text>
      <Text style={styles.desc}>{no_pesanan}</Text>
      <Text style={styles.title}>Pengiriman</Text>
      <Text style={styles.desc}>{tgl_pengiriman}</Text>
      <Text style={styles.title}>Jam</Text>
      <Text style={styles.desc}>{jam}</Text>
    </TouchableOpacity>
  )
}

export default ListTransaksi

const styles = StyleSheet.create({
  container:{
    shadowColor: "#000",
    backgroundColor:colors.white,
    marginBottom:12,
    borderRadius:6,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    paddingVertical:12,
    paddingHorizontal:14,
    elevation: 4,
  },
  date:{
    textAlign:'right',
    fontSize:12,
    color:colors.text.secondary,
    fontFamily:fonts.primary.normal
  },
  title:{
    textAlign:'left',
    fontSize:12,
    marginTop:6,
    color:colors.text.secondary,
    fontFamily:fonts.primary[600],
    fontWeight:'bold'
  },
  desc:{
    fontSize:14,
    color:colors.text.primary,
    fontFamily:fonts.primary.normal,
    marginTop:0
  }
})