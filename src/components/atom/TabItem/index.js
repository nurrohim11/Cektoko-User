import React,{useState, useEffect} from 'react'
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { ILBeranda,ILBerandaActive, ILInfo, ILInfoActive, ILProduk, ILProdukActive, ILProfile, ILProfileActive } from '../../../assets'
import { colors, fonts } from '../../../utils'

const TabItem = ({title, active, onPress, onLongPress}) => {

  const [titleTab, setTitleTab] = useState(title)

  useEffect(() => {
    if(title === "KategoriProduk"){
      setTitleTab("Produk")
    }
  }, [])

  const Icon=()=>{
    if(title=="Beranda"){
      return active ? <ILBerandaActive/> : <ILBeranda/>
    }
    if(title =="KategoriProduk"){
      return active ? <ILProdukActive/> : <ILProduk/>
    }
    if(title =="Info"){
      return active ? <ILInfoActive/> : <ILInfo/>
    }
    if(title =="Profil"){
      return active ? <ILProfileActive/> : <ILProfile/>
    }
    return active ? <ILBerandaActive/> : <ILBeranda/>
  }
  
  return (
    <TouchableOpacity activeOpacity={0.2} style={styles.container} onPress={onPress} onLongPress={onLongPress}>
      <Icon/>
      <Text style={styles.title(active)}>{titleTab}</Text>
    </TouchableOpacity>
  )
}

export default TabItem

const styles = StyleSheet.create({
  container:{
    alignItems:'center'
  },
  title:(active)=>({
    fontSize:10,
    color: active ? colors.text.menuActive : colors.text.menuInactive,
    fontFamily: active ? fonts.primary[600] : fonts.primary[600],
    marginTop:4
  }),
  icon:{
    width:22, height:22
  }
})
