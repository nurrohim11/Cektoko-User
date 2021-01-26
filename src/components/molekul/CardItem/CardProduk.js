import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { DummyProduk1 } from '../../../assets';
import { colors, fonts, Rupiah, width } from '../../../utils';
import Format from '../../../utils/Format';

const CardProduk = ({params}) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
      <Image source={DummyProduk1} style={styles.imgProduk}/>
        <Text style={styles.title}>{params.name}</Text>
        <Text style={styles.harga}>Rp. <Format value={params.harga} decimal="0" type="currency" /></Text>
      </View>
    </View>
  )
}

export default CardProduk

const styles = StyleSheet.create({
  container:{
    width: (width - 40) / 2 - 6,
    backgroundColor:'white',
    shadowColor: "#000",
    borderRadius:6,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 2,
    shadowRadius: 4,
    elevation: 2,
    marginBottom:10
  },
  imgProduk:{
    // resizeMode:'cover',
    width:(width - 40) / 2 - 18,
    height:120,
    padding:10,
    borderRadius:10
  },
  content:{
    padding:12
  },
  title:{
    fontFamily:fonts.primary[400],
    fontSize:14,
    color:colors.text.primary
  },
  harga:{
    fontFamily:fonts.primary[600],
    fontSize:14,
    color:colors.primary,
    marginTop:2
  }
})
