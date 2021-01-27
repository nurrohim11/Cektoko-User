import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { stylesheet } from '../../assets';
import { CardItem, Gap, Header, Input } from '../../components';

const Produk = ({navigation}) => {

  const [produk, setProduk] = useState(
    [
      {
        id:"1",
        name:"Good day kopi",
        harga:"2000",
        image:""
      },
      {
        id:"2",
        name:"Kopi kapal api",
        harga:"10000",
        image:""
      },
      {
        id:"3",
        name:"Bangku kosong",
        harga:"20000",
        image:""
      },
      {
        id:"4",
        name:"Beras putih",
        harga:"122000",
        image:""
      },
      {
        id:"5",
        name:"Beras putih",
        harga:"122000",
        image:""
      },
      {
        id:"6",
        name:"Beras putih",
        harga:"122000",
        image:""
      },
      {
        id:"7",
        name:"Beras putih",
        harga:"122000",
        image:""
      },
    ]
  )

  return (
    <View style={stylesheet.container} onPress={()=> navigation.goBack()}>
      <Header title="Produk Populer" flag icon="red"  navigation={navigation}/>
      <View style={stylesheet.pages}>
        <Input label="Cari produk kesukaanmu" icon="search"/>
        <Gap height={10}/>
        <FlatList
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={{justifyContent: 'space-between'}}
          data={produk}
          style={{marginBottom:100}}
          numColumns={2}
          renderItem={({item}) => {
            return (
              <>
                <CardItem key={item.id} type="produk" params={{id:item.id,name:item.name,harga:item.harga}}/>
              </>
            );
          }}
        />
      </View>
    </View>
  )
}

export default Produk

const styles = StyleSheet.create({})