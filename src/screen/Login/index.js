import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import {IlImageLogin} from '../../assets'
import { Button, Gap, Input } from '../../components/atom'
import { colors, fonts } from '../../utils'

const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Gap height={30}/>
          <View style={styles.wrapper}>
            <Image style={styles.logo} source={IlImageLogin}/>
          </View>
          <Gap height={30}/>
          <Input label="Email Address"/>
          <Gap height={20} />
          <Input label="Pasword"/>
          <Gap height={22} />
          <View style={{alignItems:'center'}}>
            <Button width={150} title="Login" icon="red" type="secondary" onPress={()=> navigation.replace('Main')}/>
          </View>
          <Gap height={22}/>
          <Text style={styles.sectionLabel}>Atau Login Dengan</Text>
          <Gap height={22}/>
          <Button title="Google" icon="red" type="primary"/>
          <Gap height={22}/>
          <View style={styles.labelRegister}>
            <Text style={styles.ketBelum}>Belum punya akun ?</Text>
            <TouchableOpacity  onPress={()=> navigation.navigate('Register')}>
              <Text style={styles.ketDaftar}>Daftar disini</Text>
            </TouchableOpacity>
          </View>
          <Gap height={30}/>
        </ScrollView>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container:{
    backgroundColor:colors.background,
    justifyContent:'center',
    flex:1,
  },
  content:{
    backgroundColor:colors.background,
    justifyContent:'center',
    flex:1,
    padding:30
  }, 
  wrapper:{
    alignItems:'center'
  },
  logo:{
    width:280,
    height:260
  },
  sectionLabel:{
    fontFamily:fonts.primary[600],
    textAlign:'center'
  },
  labelRegister:{
    flexDirection:'row',
    justifyContent:'center'
  },
  ketBelum:{
    fontFamily:fonts.primary[300],
  },
  ketDaftar:{
    fontFamily:fonts.primary[600],
    color:colors.text.red,
    marginLeft:10
  }
})