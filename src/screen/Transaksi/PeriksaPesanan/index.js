import React,{useState} from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { stylesheet } from '../../../assets';
import { Gap, ListTransaksi } from '../../../components';
import { fonts } from '../../../utils';

const PeriksaPesanan = ({navigation}) => {

  const [item, setItem] = useState(
    [
      {
        id:1,
        no_pesanan:'001',
        tgl_pengiriman:'Jalan lorem ipsum ckckckckc',
        jam: '15:00 - 16:00'
      },
      {
        id:2,
        no_pesanan:'002',
        tgl_pengiriman:'Jalan lorem ipsum ckckckckc',
        jam: '15:00 - 16:00'
      },
      {
        id:3,
        no_pesanan:'003',
        tgl_pengiriman:'Jalan lorem ipsum ckckckckc',
        jam: '15:00 - 16:00'
      },
      {
        id:4,
        no_pesanan:'004',
        tgl_pengiriman:'Jalan lorem ipsum ckckckckc',
        jam: '15:00 - 16:00'
      },
      {
        id:5,
        no_pesanan:'005',
        tgl_pengiriman:'Jalan lorem ipsum ckckckckc',
        jam: '15:00 - 16:00'
      },
    ]
  )

  return (
    <View style={stylesheet.container}>
      <View style={stylesheet.pages}>
        <Text style={styles.title}>Periksa Pesanan</Text>
        <Gap height={10}/>
        <View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Gap height={10}/>
              {
                item.map(it=>{
                  return (
                    <ListTransaksi key={it.id} date={it.date} no_pesanan={it.no_pesanan} tgl_pengiriman={it.tgl_pengiriman} jam={it.jam}/>
                  )
                })
              }
              <Gap height={50}/>
          </ScrollView>
        </View>
      </View>
    </View>
  )
}

export default PeriksaPesanan

const styles = StyleSheet.create({
  title:{
    fontSize:20,
    textAlign:'center',
    fontFamily:fonts.primary.normal,
  }
})
