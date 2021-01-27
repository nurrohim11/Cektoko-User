import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { DummyPicProfil } from '../../assets'
import { List, MenuProfile } from '../../components'
import { colors, fonts } from '../../utils'

const Profil = ({navigation}) => {
  return (
    <>
      <View style={styles.container}>
        <MenuProfile/>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <View style={styles.headerProfile}>
              <View style={styles.contentProfile}>
                <Image source={DummyPicProfil} style={styles.avatar} />
                <View style={styles.desc}>
                  <Text style={styles.name}>Tsukishima kei</Text>
                  <Text style={styles.address}>Mata empat</Text>
                </View>
              </View>
            </View>
            <View style={styles.menu}>
              <List icon="list_order" title="Daftar Pesanan" type="menuProfile" onPress={()=>navigation.navigate('Transaction')}/>
              <List icon="change_profile" title="Ubah Profile" type="menuProfile" onPress={()=>navigation.navigate('ChangeProfile')}/>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  )
}

export default Profil

const styles = StyleSheet.create({
  wrapper:{
    paddingHorizontal:35,
    paddingVertical:16,
    backgroundColor:colors.backgroundProfile,
    flexDirection:'row',
    justifyContent:'flex-end'
  },
  container:{
    flex:1, 
    backgroundColor:colors.background
  },
  headerProfile:{
    height:160,
    backgroundColor:colors.backgroundProfile,
    paddingHorizontal:16,
    paddingTop:0,
    paddingBottom:28
  },
  contentProfile:{
    flex:1,
    flexDirection:'row',
    alignItems:'center'
  },
  avatar:{
    height:100,
    width:100,
    borderRadius:100/2
  },
  desc:{
    marginLeft:10
  },
  name:{
    color:colors.white,
    fontFamily:fonts.primary[600],
    fontWeight:'bold',
    fontSize:22
  },
  address:{
    fontFamily:fonts.primary[400],
    color:colors.white,
    marginTop:4
  },
  menu:{
    paddingHorizontal:16,
    flex:1,
    marginTop:40
  }
})
