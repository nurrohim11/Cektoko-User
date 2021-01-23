import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors, fonts } from '../../../utils'

const ListInfo = ({date, title, desc, onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.container}>
      <Text style={styles.date}>{date}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.desc}>{desc}</Text>
    </TouchableOpacity>
  )
}

export default ListInfo

const styles = StyleSheet.create({
  container:{
    shadowColor: "#000",
    backgroundColor:colors.white,
    marginBottom:12,
    borderRadius:6,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    paddingVertical:12,
    paddingHorizontal:12,
    elevation: 6,
  },
  date:{
    textAlign:'right',
    fontSize:12,
    color:colors.text.secondary,
    fontFamily:fonts.primary.normal
  },
  title:{
    textAlign:'left',
    fontSize:14,
    marginTop:6,
    color:colors.primary,
    fontFamily:fonts.primary[600],
    fontWeight:'bold'
  },
  desc:{
    fontSize:14,
    color:colors.text.secondary,
    fontFamily:fonts.primary.normal,
    marginTop:4
  }
})
