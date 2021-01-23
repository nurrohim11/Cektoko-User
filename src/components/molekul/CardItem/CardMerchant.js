import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { color } from 'react-native-reanimated'
import { DummyPicProfil } from '../../../assets'
import { colors } from '../../../utils/Colors'
import { fonts } from '../../../utils/Fonts'
import { Gap } from '../../atom'
import Rating from '../Rating'

const CardMerchant = () => {
  return (
    <View style={styles.wrapper}>
      <Gap height={4}/>
      <View style={styles.merchant}>
        <Image source={DummyPicProfil} style={styles.avatar}/>
        <View style={styles.parent}>
          <Text style={styles.title}>TOKO SEMESTA</Text>
          <Text style={styles.address}>Jalan mangga no. 129292</Text>
          <Gap height={12}/>
          <View style={styles.border}></View>
          <Gap height={12}/>
          <Rating ket="Rating kelengkapan produk" rate="5" icon="yellow"/>
          <Rating ket="Rating harga produk" rate="5" icon="grey"/>
          <Rating ket="Rating pelayanan merchant" rate="5" icon="yellow"/>
        </View>
      </View>
    </View>
  )
}

export default CardMerchant

const styles = StyleSheet.create({
  wrapper:{
    backgroundColor:colors.white,
    paddingVertical:23,
    paddingHorizontal:16,
    borderRadius:10,
  },
  container:{
    paddingVertical:23,
    paddingHorizontal:13,
    backgroundColor:colors.white,
    borderRadius:10,
  },
  avatar:{
    width:100,
    height:100
  },
  title:{
    fontFamily:fonts.primary[900],
    fontSize:19,
    color:colors.text.primary
  },
  address:{
    fontFamily:fonts.primary[400],
    fontSize:14,
    marginTop:4,
    color:colors.text.primary
  },
  parent:{
    flex:1,
    marginLeft:14
  },
  border:{
    borderWidth:1,
    borderColor:colors.border
  },
  merchant:{
    flexDirection:'row'
  }
})
