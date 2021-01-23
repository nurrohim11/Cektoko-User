import React from 'react'
import { Image, StyleSheet, Text, View, TouchableOpacity,TextInput } from 'react-native'
import { colors, fonts } from '../../../utils'
import { IconLocation, ILFilter, ILSearch } from '../../../assets'
import Gap from '../Gap'

const InputSearch = ({label, type, value, onChangeText, icon}) => {
  const Label=()=>{
    if(type === 'label'){
      return (<Text style={styles.label}>{label}</Text>)
    }
    return <Gap/>
  }

  const Icon=()=>{

  }
  return (
    <View style={{flexDirection:'row', alignItems:'center'}}>
      <Label/>
      <View style={styles.wrapper}>
        <ILSearch/>
        <TextInput 
          returnKeyType="search"  
          style={styles.input} 
          placeholder={label} 
          value={value}
          onChangeText={onChangeText}/>
      </View>
      <Gap width={10}/>
      <TouchableOpacity>
        <ILFilter/>
      </TouchableOpacity>
    </View>
  )
}

export default InputSearch

const styles = StyleSheet.create({
  wrapper:{
    borderRadius:8,
    borderWidth:1,
    borderColor:colors.border,
    backgroundColor:colors.white,
    paddingHorizontal:12,
    flex:1,
    flexDirection:'row',
    alignItems:'center'
  },
  input:{
    flex:1,
    paddingLeft:10,
    height:42
  },
  label:{
    fontSize:14,
    color:colors.text.secondary,
    marginBottom:6,
    fontFamily:fonts.primary[400],
  }
})
