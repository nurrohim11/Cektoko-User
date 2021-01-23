import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Gap, Header, Input, Button } from '../../components'

const Register = ({navigation}) => {
  return (
    <View>
      <Header title="Register" type="icon-only" icon="white" onPress={()=> navigation.goBack()}/>
      <ScrollView alwaysBounceVertical={false}>
        <View style={styles.container}>
          <Input type="label" label="Nama Lengkap"/>
          <Gap height={16}/>
          <Input type="label" label="No. Hp"/>
          <Gap height={16}/>
          <Input type="label" label="Username"/>
          <Gap height={16}/>
          <Input type="label" label="Password"/>
          <Gap height={16}/>
          <Input type="label" label="Ulangi Password"/>
          <Gap height={36}/>
          <Button title="Daftar"  type="primary"/>
        </View>
      </ScrollView>
    </View>
  )
}

export default Register

const styles = StyleSheet.create({
  container:{
    padding:30
  }
})
