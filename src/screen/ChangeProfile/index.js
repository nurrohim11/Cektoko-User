import React from 'react'
import { Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { DummyPicProfil, ILBackgroundProfile, ILCameraRed, stylesheet } from '../../assets'
import { Header, Input, Gap, Button } from '../../components'
import { colors, width } from '../../utils'

const ChangeProfile = ({navigation}) => {
  return (
    <View style={stylesheet.container}>
      <ImageBackground source={ILBackgroundProfile} style={{width:'100%',flex:1}}>
        <Header type="icon-only" icon="white" title="Ubah profile" onPress={()=>navigation.goBack()}/>
        <View style={{flex:1}}>
            <View style={{alignContent:'flex-start'}}>
              <View style={{border:2,borderColor:colors.border,paddingHorizontal:16}}>
                <Image source={DummyPicProfil} style={{width:100, height:100, borderRadius:100/2}}/>
                <TouchableOpacity style={{position:'absolute', bottom:10,left:100}}>
                  <ILCameraRed/>
                </TouchableOpacity>
              </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={[stylesheet.pages,{paddingTop:20}]}>
                <Input label="Nama lengkap" type="label" />
                <Gap height={16}/>
                <Input label="Username" type="label" />
                <Gap height={16}/>
                <Input label="No. HP" type="label" />
                <Gap height={16}/>
                <Input label="Email" type="label" />
                <Gap height={36}/>
                <Button title="Simpan Perubahan" type="primary"/>
              </View>
            </ScrollView>
        </View>
      </ImageBackground>
    </View>
  )
}

export default ChangeProfile

const styles = StyleSheet.create({
  header:{
    backgroundColor:colors.backgroundProfile,
    // height:50,
    flex:1,
    // width:50,
    paddingHorizontal:16
  },
  avatar:{
    height:100,
    width:100, 
    borderRadius:100/2
  },

  avatar:{
    width:110,
    height:110,
    borderRadius:110/2
  },
  avatarWrapper:{
    width:130,
    height:130,
    borderColor:colors.border,
    borderWidth:2,
    borderRadius:130/2,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:colors.white
  },
  addPhoto:{
    position:'absolute',
    right:6,
    bottom:8
  },
})
