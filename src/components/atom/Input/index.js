import { Picker } from '@react-native-community/picker'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { colors, fonts } from '../../../utils'
import InputSearch from './InputSearch'

const Input = ({label, type, value, onChangeText, isSecure, isNumber, icon, select, onValueChange, selectItem}) => {
  const Label=()=>{
    if(type === 'label'){
      return (<Text style={styles.label}>{label}</Text>)
    }
    return <></>
  }

  if(icon =='search'){
    return <InputSearch label={label} value={value} onChangeText={onChangeText}/>
  }

  if (select) {
    return (
      <View>
        <Label/>
        <View style={styles.picker}>
          <Picker selectedValue={value} style={{height:44}} onValueChange={onValueChange}>
            {selectItem.map(item => {
              return (
                <Picker.Item
                  key={item.id}
                  label={item.label}
                  value={item.id}
                />
              );
            })}
          </Picker>
        </View>
      </View>
    );
  }

  return (
    <View>
      <Label/>
      <View style={styles.wrapper}>
        <TextInput keyboardType={isNumber ? "numeric" : "default"} style={styles.input} placeholder={label} value={value} onChangeText={onChangeText} secureTextEntry={isSecure}/>
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
    paddingHorizontal:10,
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
    marginBottom:2,
    fontFamily:fonts.primary[400],
  },
  picker: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    paddingHorizontal: 4,
  },
})
