import React from 'react'
import { StatusBar } from 'react-native'

const HeaderStatusBar=({color})=>{
  return (
      <StatusBar
        backgroundColor={color}
        animated={true}/>
  )
}

export default HeaderStatusBar