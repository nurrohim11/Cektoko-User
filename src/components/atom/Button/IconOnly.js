import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { ILBackRed, ILBackWhite } from '../../../assets'

const IconOnly = ({onPress, icon}) => {

  const Icon = ()=>{
    if(icon === 'red'){
      return <ILBackRed/>
    }
    else if(icon ==='white'){
      return <ILBackWhite/>
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
