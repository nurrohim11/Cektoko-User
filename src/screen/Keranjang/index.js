import React, {useState,useEffect} from 'react'
import { Alert, ScrollView, StyleSheet, Text, View, Dimensions, TouchableHighlight, TouchableOpacity } from 'react-native'
import { stylesheet } from '../../assets'
import { Button, Gap, Header, Input } from '../../components'
import { colors, width, height, fonts, useForm } from '../../utils'
import Format from '../../utils/Format'
import Modal from "react-native-modalbox";

const Keranjang = ({navigation,route}) => {

  const {flag} = (route.params) ? route.params : false
  console.log(flag)
  const [modalVisible, setModalVisible] = useState(false);
  const [form, setForm] = useForm({
    name: '',
    jumlah: '',
    satuan: '1'
  });
  const [keranjang, setKeranjang] = useState(
    [
      {
        "id":1,
        "nama_produk":"Makaan sehat 5 sempurna",
        "jumlah":1,
        "satuan":"BOX",
        "harga":20000
      },
      {
        "id":2,
        "nama_produk":"Kopi selasa",
        "jumlah":2,
        "satuan":"PCS",
        "harga":40000
      },
      {
        "id":3,
        "nama_produk":"Nasi goreng usus",
        "jumlah":1,
        "satuan":"BOX",
        "harga":20000
      },
      {
        "id":4,
        "nama_produk":"Nasi goreng usus",
        "jumlah":1,
        "satuan":"BOX",
        "harga":20000
      },
      {
        "id":5,
        "nama_produk":"Nasi goreng usus",
        "jumlah":1,
        "satuan":"BOX",
        "harga":20000
      }
    ]
  )
  const [itemSatuan, setItemSatuan] = useState([
    {
      id: 1,
      label: 'PCS',
      value:1
    },
    {
      id: 2,
      label: 'BOX',
      value:1
    },
    {
      id: 3,
      label: 'Gram',
      value:1
    },
    {
      id: 4,
      label: 'KG',
      value:1
    },
    {
      id: 5,
      label: 'Ton',
      value:1
    },
  ]);

  useEffect(() => {
    if(flag){
      addProduk()
    }
  }, [])

  const addProduk=()=>{
    setModalVisible(true) 
  }

  const closeProduk=()=>{
    setModalVisible(false)
  }

  const getModal = () => {
    return (
      <Modal
        entry="bottom"
        backdropPressToClose={false}
        isOpen={modalVisible}
        style={styles.modalBox}
        onClosed={() => setModalVisible(false)}
      >
        <View style={styles.content}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.title}>Produk apa yang ingin kamu tambahkan ?</Text>
            <Gap height={30}/>
            <Input type="label" label="Nama produk"  value={form.name} onChangeText={value => setForm('name', value)}/>
            <Gap height={12}/>
            <Input type="label" label="Jumlah" value={form.jumlah} onChangeText={value => setForm('jumlah', value)} isNumber/>
            <Gap height={12}/>
            <Input
              type="label"
              label="Satuan"
              select
              value={form.satuan}
              onValueChange={value => setForm('satuan', value)}
              selectItem={itemSatuan}
            />
            <Gap height={30}/>
            <View style={{justifyContent:"flex-end", alignItems:"center", alignSelf:"flex-end",flex:1}}>
              <View style={{flex:1, flexDirection:'row'}}>
                <View style={{width:(width / 2)-30, marginRight:10}}>
                  <Button type="secondary" title="Batal" onPress={closeProduk}/>
                </View>
                <View style={{width:(width / 2)-30, marginLeft:10}}>
                  <Button type="primary" title="Simpan" onPress={saveProduk}/>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </Modal>
    );
  };

  const saveProduk=()=>{
    console.log(form)
  }

  return (
    <>
      {getModal()}
      <View style={stylesheet.container}>
        <Header title="Keranjang" type="icon-btn" icon="red" navigation={navigation} flag onPress={addProduk}/>
        <View style={{flex:1, flexDirection:'column'}}>
          <ScrollView>
          <View style={styles.wrapper}>
            <Text style={styles.colNameProduk('left',colors.white)} >Nama Produk</Text>
            <Text style={styles.colJumlah('left',colors.white)} >Jumlah</Text>
            <Text style={styles.colSatuan('left',colors.white)} >Satuan</Text>
            <Text style={styles.colHarga('left',colors.white)} >Harga</Text>
            <Text style={styles.colAction('left',colors.white)} >#</Text>
          </View>
          {/* <ScrollView> */}
            {
              keranjang.map((item,index)=>{
                const bg = index % 2 == 0 ? colors.white : colors.backgroundStripped
                return (
                  <View key={item.id} style={styles.bodyWrapper(bg)}>
                    <Text style={styles.colNameProduk('left',colors.black)} >{item.nama_produk}</Text>
                    <Text style={styles.colJumlah('center',colors.black)} >{item.jumlah} item</Text>
                    <Text style={styles.colSatuan('left',colors.black)} >{item.satuan}</Text>
                    <Text style={styles.colHarga('left',colors.black)} ><Format value={item.harga} decimal="0" type="currency" /></Text>
                    <Text style={styles.colAction('center')} ><Button type="icon-only" icon="remove"/></Text>
                  </View>
                )
              })
            }
          {/* </ScrollView> */}
          </ScrollView>
        </View>
      </View>
    </>
  )
}

export default Keranjang

const styles = StyleSheet.create({
  wrapper:{
    flex: 1, 
    flexDirection: 'row', 
    flexWrap: 'nowrap',
    alignSelf: 'stretch', 
    justifyContent:'center', 
    backgroundColor:colors.black
  },
  colNameProduk:(align,color)=>({
    width: 100,
    flexGrow:1, 
    paddingLeft:10, 
    height:50, 
    textAlign:align,
    justifyContent:'center',
    textAlignVertical:'center', 
    color:color
  }),
  colJumlah:(align,color)=>({
    width: 40,
    flexGrow:1, 
    height:50, 
    textAlign:align,
    justifyContent:'center',
    textAlignVertical:'center', 
    color:color
  }),
  colSatuan:(align,color)=>({
    width: 50,
    flexGrow:1, 
    height:50, 
    textAlign:align,
    justifyContent:'center',
    textAlignVertical:'center', 
    color:color
  }),
  colHarga:(align,color)=>({
    width: 60,
    flexGrow:1, 
    height:50, 
    textAlign:align,
    justifyContent:'center',
    textAlignVertical:'center', 
    color:color
  }),
  colAction:(align,color)=>({
    width: 30,
    flexGrow:1,
    paddingRight:10,
    height:50, 
    textAlign:align,
    justifyContent:'center',
    textAlignVertical:'center', 
    color:color
  }),
  bodyWrapper:(bg)=>({
    flex: 1, 
    flexDirection: 'row', 
    flexWrap: 'nowrap',
    alignSelf: 'stretch', 
    justifyContent:'center', 
    backgroundColor:bg, 
    marginBottom:4, 
    paddingTop:2, 
    paddingBottom:2
  }),
  modalBox: {
    overflow: "hidden",
    alignItems: "flex-end",
    // justifyContent: "flex-end",
    flex:1,
    height:height,
    width:width,
    backgroundColor: "transparent"
  },
  content: {
    position: "absolute",
    bottom: 0,
    width:width,
    height: 400,
    flex:1,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    padding:20,
    backgroundColor: "white"
  },
  title: {
    fontSize: 18,
    fontFamily:fonts.primary[600],
    color:colors.primary
  }
})
