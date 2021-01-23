import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { colors, fonts } from '../../../utils'
import IconOnly from './IconOnly'

const Button = ({type, title, onPress, icon, width}) => {
  if(type==='icon-only'){
    return <IconOnly icon={icon} onPress={onPress}/>
  }
  
  return (
    <TouchableOpacity style={styles.container(type,width)} onPress={onPress}>
      <Text style={styles.title(type)}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
  container:(type, width)=> ({
    backgroundColor: type==='secondary' ? colors.button.secondary.background : colors.button.primary.background,
    borderRadius:10,
    paddingVertical: 10,
    width: width ? width : '100%',
  }),
  title:(type)=>({
    fontSize:14,
    paddingVertical:8,
    paddingHorizontal:52,
    fontFamily:fonts.primary[600],
    textAlign:'center',
    color:type === 'secondary' ? colors.button.secondary.text : colors.button.primary.text
  })
})
