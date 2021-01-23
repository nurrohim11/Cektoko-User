import React, { useEffect } from 'react';
import { FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { DummyKategori1, stylesheet } from '../../assets';
import { Button, Gap, Header } from '../../components';
import { backHandler, colors, fonts, width } from '../../utils';

const KategoriProduk = ({navigation}) => {
  const [items, setItems] = React.useState(
    [
      { name: 'TURQUOISE', code: '#1abc9c' },
      { name: 'EMERALD', code: '#2ecc71' },
      { name: 'PETER RIVER', code: '#3498db' },
      { name: 'AMETHYST', code: '#9b59b6' },
      { name: 'WET ASPHALT', code: '#34495e' },
      { name: 'GREEN SEA', code: '#16a085' },
      { name: 'NEPHRITIS', code: '#27ae60' },
      { name: 'NEPHRITIS', code: '#27ae60' },
      { name: 'NEPHRITIS', code: '#27ae60' },
    ]
  );

  useEffect(() => {
    return () => backHandler.remove();
  }, []);

  return (
    <View style={stylesheet.container}>
    <Header title="Kategori Produk" type="icon-only" flag/>
    <ScrollView verticall showsVerticalScrollIndicator={false} style={{flex: 1}}>
      <View  style={stylesheet.pages}>
          <FlatList
            columnWrapperStyle={{justifyContent: 'space-between'}}
            data={items}
            fixed
            numColumns={3}
            renderItem={({ item }) => (
                <>
                <View style={styles.wrapper}>
                  <Image style={styles.itemContainer} source={DummyKategori1}/>
                  <Text style={styles.itemName}>{item.name}</Text>
                </View>
                <Gap width={6}/>
              </>
            )}
          />
          <View style={{justifyContent:'center', flex:1, alignItems:'center', marginTop:10}}>
            <Button onPress={()=> navigation.navigate('Produk')} type="secondary" title="Lihat Semua Produk" />
            <Gap height={20}/>
            <Button type="primary" title="Tambah Pesanan Lain" />
          </View>
      </View>
    </ScrollView>
    </View>
  )
}

export default KategoriProduk

const styles = StyleSheet.create({
  container:{
    backgroundColor:colors.background,
    flex:1
  },
  pages:{
    padding:12,
    paddingBottom:20,
    flex:1
  },
  wrapper:{
    borderRadius:1,
    paddingBottom:4,
    marginBottom:10,
    width: (width-10) / 3 - 10,
  },
  itemContainer: {
    width: (width-10) / 3 - 10,
    borderRadius: 6,
    height:80
  },
  itemName: {
    fontSize: 12,
    color: colors.black,
    textAlign:'center',
    // justifyContent:'center',
    flex:1,
    marginTop:4,
    alignItems:'center',
    fontFamily:fonts.primary[600]
  },
  itemCode: {
    fontSize: 12,
    fontFamily:fonts.primary.normal,
    color: colors.black,
    textAlign:'center'
  },
})
