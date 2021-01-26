import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, StatusBar } from 'react-native'
import { ILCart, ILSettings } from '../../../assets'
import { colors } from '../../../utils/Colors'
import { fonts } from '../../../utils/Fonts'
import { Button } from '../../atom'

const HeaderDark = ({title, type, icon, navigation, onPress}) => {
  const Icon=()=>{
    if(type == 'icon-only'){
      return(
        <>
          <View style={{flexDirection:'row'}}>
            <TouchableOpacity onPress={()=>navigation.navigate('Keranjang')}>
              <ILCart/>
            </TouchableOpacity>
            <TouchableOpacity>
              <ILSettings/>
            </TouchableOpacity>
          </View>
        </>
      )
    }
    if(type=='icon-btn'){
      return (
        <TouchableOpacity onPress={onPress} style={{backgroundColor:colors.button.secondary.background, padding:10, borderRadius:4}}>
          <Text>Tambah Pesanan Lain</Text>
        </TouchableOpacity>
      )
    }
    return <></>
  }
  return (
    <View style={styles.wrapper}>
      {
        icon && <Button type="icon-only" icon="red" onPress={()=>navigation.goBack()} />
      }
      <Text style={styles.title(icon)}>{title}</Text>
      <Icon/>
    </View>
  )
}

export default HeaderDark

const styles = StyleSheet.create({
  wrapper:{
    paddingHorizontal:16,
    paddingVertical:16,
    backgroundColor:colors.background,
    flexDirection:'row',
    alignItems:'center',
  },
  title:(icon)=>({
    flex:1,
    fontFamily:fonts.primary[700],
    fontWeight:'bold',
    marginLeft:icon ? 20 : 0,
    fontSize:22,
    color:colors.primary
  }),
  icon:(type)=>({
    width:26,
    height:26,
    marginRight: type == 'cart' ? 22 : 0
  })
})
