import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { colors, fonts } from '../../../utils'
import Gap from '../Gap'
import InputSearch from './InputSearch'

const Input = ({label, type, value, onChangeText, isSecure, icon}) => {
  const Label=()=>{
    if(type === 'label'){
      return (<Text style={styles.label}>{label}</Text>)
    }
    return <></>
  }

  if(icon =='search'){
    return <InputSearch label={label} value={value} onChangeText={onChangeText}/>
  }

  return (
    <View>
      <Label/>
      <View style={styles.wrapper}>
        <TextInput style={styles.input} placeholder={label} value={value} onChangeText={onChangeText} secureTextEntry={isSecure}/>
      </View>
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
  wrapper:{
    borderRadius:8,
    borderWidth:1,
    borderColor:colors.border,
    paddingHorizontal:12,
    // paddingVertical:10,
    flexDirection:'row',
    alignItems:'center'
  },
  input:{
    flex:1,
    paddingLeft:6,
    height:42
  },
  label:{
    fontSize:16,
    color:colors.text.primary,
    marginBottom:6,
    fontFamily:fonts.primary[400],
  }
})
