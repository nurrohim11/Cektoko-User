import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { stylesheet } from '../../assets';
import { Gap, Header, List } from '../../components';
import { colors } from '../../utils';

const Iklan = ({navigation}) => {

  const [item, setItem] = useState(
    [
      {
        "id":1,
        "image":"https://cdn.pixabay.com/photo/2019/08/11/13/41/pen-4398998_960_720.jpg"
      },
      {
        "id":2,
        "image":"https://p4.wallpaperbetter.com/wallpaper/194/704/861/code-wallpaper-preview.jpg"
      },
      {
        "id":3,
        "image":"https://c1.wallpaperflare.com/preview/704/134/461/black-and-white-business-code-coding.jpg"
      },
      {
        "id":4,
        "image":"https://www.mpssoft.co.id/blog/wp-content/uploads/2018/11/3-Situs-Kerja-Yang-Paling-Sering-Digunakan-Oleh-Generasi-Millenial.jpg"
      },
      {
        "id":5,
        "image":"https://wallpaperaccess.com/full/1167985.jpg"
      },
      // {
      //   "id":6,
      //   "image":"https://cdn-2.tstatic.net/jabar/foto/bank/images/ilustrasi-lowongan-kerja12.jpg"
      // },
    ]
  )

  return (
    <View style={stylesheet.container}>
      <Header title="Iklan" icon="white" type="icon-only" onPress={()=> navigation.goBack()}/>
      <View style={stylesheet.pages}>
        <View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Gap height={16}/>
            {
              item.map(it=>{
                return (
                  <List 
                    key={it.id} 
                    image={it.image} 
                    type="iklan" 
                    onPress={()=> navigation.navigate('DetailIklan',{
                      id:it.id,
                      image:it.image
                    })}
                  />
                )
              })
            }
            <Gap height={60}/>
          </ScrollView>
        </View>
      </View>
    </View>
  )
}

export default Iklan

const styles = StyleSheet.create({
  container:{
    backgroundColor:colors.background,
    flex:1
  },
  pages:{
    padding:16
  }
})
