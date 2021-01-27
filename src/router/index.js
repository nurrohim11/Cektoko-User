import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Dimensions } from 'react-native';
import { BottomNavigation, TransactionNavigation } from '../components';
import { Beranda, ChangeProfile, CheckOrder, CompleteDelivery, DetailIklan, Iklan, InDelivery, Info, KategoriProduk, Keranjang, Login, NewOrder, Produk, Profil, Register, WaitingDelivery } from '../screen';

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator()
const TransactionTabs = createMaterialTopTabNavigator()

const MainApps = () =>{
  return (
    <Tabs.Navigator tabBar={props=> <BottomNavigation {...props}/>}>
      <Tabs.Screen name="Beranda" component={Beranda}/>
      <Tabs.Screen name="KategoriProduk" component={KategoriProduk}/>
      <Tabs.Screen name="Info" component={Info}/>
      <Tabs.Screen name="Profil" component={Profil}/>
    </Tabs.Navigator>
  )
}

const TransactionApps=()=>{
  return (
    <TransactionTabs.Navigator 
      tabBarOptions={{
        style:{
          width: Dimensions.get('window').width 
        },
        tabStyle: {
          width: 'auto'
        }
      }}
      tabBar={props=> <TransactionNavigation {...props}/>}>
      <TransactionTabs.Screen name="Pesanan Baru" component={NewOrder}/>
      <TransactionTabs.Screen name="Periksa Pesanan" component={CheckOrder}/>
      <TransactionTabs.Screen name="Pesanan Menunggu Dikirim" component={WaitingDelivery}/>
      <TransactionTabs.Screen name="Dalam Pengiriman" component={InDelivery}/>
      <TransactionTabs.Screen name="Selesaikan Pengiriman" component={CompleteDelivery}/>
    </TransactionTabs.Navigator>
  )
}

const Router=()=>{
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown:false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown:false}}
      />
      <Stack.Screen
        name="Main"
        component={MainApps}
        options={{headerShown:false}}
      />
      <Stack.Screen
        name="Iklan"
        component={Iklan}
        options={{headerShown:false}}
        />
      <Stack.Screen 
        name="DetailIklan"
        component={DetailIklan}
        options={{headerShown:false}}
      />
      <Stack.Screen 
        name="Produk"
        component={Produk}
        options={{headerShown:false}}
      />
      <Stack.Screen 
        name="ChangeProfile"
        component={ChangeProfile}
        options={{headerShown:false}}
      />
      <Stack.Screen 
        name="Transaction"
        component={TransactionApps}
        options={{headerShown:false}}
      />
      <Stack.Screen 
        name="Keranjang"
        component={Keranjang}
        options={{headerShown:false}}
      />
    </Stack.Navigator>
  )
}

export default Router