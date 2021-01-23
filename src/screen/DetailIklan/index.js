import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { stylesheet } from '../../assets'
import { Header } from '../../components'

const DetailIklan = ({route, navigation }) => {
  const { id, image } = route.params;
  console.log(image)
  return (
    <View style={stylesheet.container}>
      <Header title="Detail iklan" type="icon-only" icon="white" onPress={()=>navigation.goBack()}/>
      <ScrollView>
        <View>
          <Image source={{uri : image}} style={{height:230}}/>
          <View style={stylesheet.pages}>
            <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
            <Text>Lorem Ipsum has been the industry's standard dummy text 
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
              . It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and
              more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default DetailIklan

const styles = StyleSheet.create({})