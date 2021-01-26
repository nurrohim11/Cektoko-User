import React from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'
import { colors } from '../../../utils/Colors'
import { fonts } from '../../../utils/Fonts'
import { Button, Gap } from '../../atom'
import HeaderDark from './HeaderDark'

const Header = ({title, onPress, icon, type, flag, navigation}) => {
  // type (icon-only, icon-btn)
  // icon (white, red)
  if(flag){
    return <HeaderDark title={title} type={type} icon={icon} onPress={onPress} navigation={navigation}/>
  }
  return (
    <>
      <View style={styles.wrapper}>
        <Button type={type} icon={icon} onPress={onPress}/>
        <Text style={styles.title}>{title}</Text>
      </View>
    </>
  )
}

export default Header

const styles = StyleSheet.create({
  wrapper:{
    paddingHorizontal:16,
    paddingVertical:16,
    backgroundColor:colors.header,
    flexDirection:'row',
    alignItems:'center'
  },
  title:{
    flex:1,
    fontFamily:fonts.primary[700],
    fontSize:22,
    marginLeft:20,
    color:colors.white
  }
})
