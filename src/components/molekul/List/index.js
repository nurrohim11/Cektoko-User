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
    <TouchableOpacity activeOpacity={0.4} onPress={onPress}>
      <CardView
        cardElevation={3}
        cardMaxElevation={7}
        cornerRadius={12}
        cornerOverlap={false}
        onPress={onPress}
        style={{marginBottom:20}}>
          <View style={{flexDirection:'row',flex:1, alignItems:'center', paddingVertical:20, paddingHorizontal:20}}>
            <Icon/>
            <Text style={{marginLeft:28, fontFamily:fonts.primary[600],fontSize:14}}>
                {title}
            </Text>
          </View>
      </CardView>
    </TouchableOpacity>
  )
}

export default List

const styles = StyleSheet.create({})
