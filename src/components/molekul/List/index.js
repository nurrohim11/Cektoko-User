import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import CardView from 'react-native-cardview'
import { ILChangeProfile, ILDaftarPesanan } from '../../../assets'
import { fonts } from '../../../utils'
import ListIklan from './ListIklan'
import ListInfo from './ListInfo'

const List = ({type, image, title, desc, date, onPress, icon}) => {
  if(type === 'info'){
    return <ListInfo date={date} title={title} desc={desc}/>
  }
  if(type == 'iklan'){
    return <ListIklan image={image} onPress={onPress}/>
  }

  const Icon=()=>{
    if(icon === 'list_order'){
      return <ILDaftarPesanan/>
    }
    if(icon==='change_profile'){
      return <ILChangeProfile/>
    }
    return <ILDaftarPesanan/>
  }

  return (
    <TouchableOpacity activeOpacity={0.4} onPress={onPress} style={{flex:1}}>
      <View style={styles.wrapper}>
        <Icon/>
        <Text style={{marginLeft:28, fontFamily:fonts.primary[600],fontSize:14}}>
            {title}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default List

const styles = StyleSheet.create({
  wrapper:{
    flexDirection:'row',
    flex:1, 
    marginBottom:20,
    alignItems:'center', 
    paddingVertical:20, 
    paddingHorizontal:20,
    backgroundColor:'white',
    shadowColor: "#000",
    borderRadius:8,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 4,
    shadowRadius: 6,
    elevation: 3,
  }
})
