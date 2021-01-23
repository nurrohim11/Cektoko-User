import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {Beranda, Info, Login, KategoriProduk, Profil, Register, Iklan, DetailIklan, Produk, ChangeProfile} from '../screen'
import { BottomNavigation } from '../components';

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator()

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
    </Stack.Navigator>
  )
}

export default Router