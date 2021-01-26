import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { ILBackRed, ILBackWhite, ILRemove } from '../../../assets'

const IconOnly = ({onPress, icon}) => {

  const Icon = ()=>{
    if(icon === 'red'){
      return <ILBackRed/>
    }
    if(icon ==='white'){
      return <ILBackWhite/>
    }
    if(icon ==='remove'){
      return <ILRemove/>
    }
    return <ILBackRed/>
  }
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon/>
    </TouchableOpacity>
  )
}

export default IconOnly

const styles = StyleSheet.create({
  icon:{
    width:22,
    height:22,
  }
})
