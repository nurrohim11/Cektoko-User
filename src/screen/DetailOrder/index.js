import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { stylesheet } from '../../assets'
import { Header } from '../../components'

const DetailOrder = () => {
  return (
    <View style={stylesheet.container}>
      <Header title="Detail Pesanan" type="icon-only" icon="white" onPress={()=>navigation.goBack()}/>
      <ScrollView>
        <View style={stylesheet.pages}>
          <View style={{flex: 1, flexDirection: 'row', flexWrap: 'nowrap', alignSelf: 'stretch', justifyContent:'center', }}>
            <Text style={{width: 100, flexGrow:1, paddingLeft:10, height:40, textAlign:align, justifyContent:'center', textAlignVertical:'center', }}>
              No. Pesanan
            </Text>
            <Text style={{width: 10, flexGrow:1, paddingLeft:10, height:40, textAlign:align, justifyContent:'center', textAlignVertical:'center', }}>
              :
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default DetailOrder

const styles = StyleSheet.create({})
