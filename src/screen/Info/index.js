import React, { useEffect } from 'react';
import { BackHandler, ScrollView, StyleSheet, View } from 'react-native';
import { stylesheet } from '../../assets';
import { Header, List } from '../../components';
import { colors } from '../../utils';

const Info = ({navigation}) => {

  useEffect(() => {
    const backAction = () => {
      BackHandler.exitApp()
      return true;
    };
    const backHandler = BackHandler.addEventListener("hardwareBackPress",backAction);
    return () => backHandler.remove();
  }, []);

  return (
    <View style={stylesheet.container}>
      <Header title="Info" type="icon-only" flag  navigation={navigation}/>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View  style={stylesheet.pages}>
          <List type='info' date="18 des 2020" title="This is message for youre eat in bottom table" desc="Hahaha lorem ipsum is not text but this is writen. tester list information"/>
          <List type='info' date="18 des 2020" title="This is message for youre eat in bottom table" desc="Hahaha lorem ipsum is not text but this is writen. tester list information"/>
          <List type='info' date="18 des 2020" title="This is message for youre eat in bottom table" desc="Hahaha lorem ipsum is not text but this is writen. tester list information"/>
          <List type='info' date="18 des 2020" title="This is message for youre eat in bottom table" desc="Hahaha lorem ipsum is not text but this is writen. tester list information"/>
          <List type='info' date="18 des 2020" title="This is message for youre eat in bottom table" desc="Hahaha lorem ipsum is not text but this is writen. tester list information"/>
          <List type='info' date="18 des 2020" title="This is message for youre eat in bottom table" desc="Hahaha lorem ipsum is not text but this is writen. tester list information"/>
          <List type='info' date="18 des 2020" title="This is message for youre eat in bottom table" desc="Hahaha lorem ipsum is not text but this is writen. tester list information"/>
          <List type='info' date="18 des 2020" title="This is message for youre eat in bottom table" desc="Hahaha lorem ipsum is not text but this is writen. tester list information"/>
          <List type='info' date="18 des 2020" title="This is message for youre eat in bottom table" desc="Hahaha lorem ipsum is not text but this is writen. tester list information"/>
          <List type='info' date="18 des 2020" title="This is message for youre eat in bottom table" desc="Hahaha lorem ipsum is not text but this is writen. tester list information"/>
          <List type='info' date="18 des 2020" title="This is message for youre eat in bottom table" desc="Hahaha lorem ipsum is not text but this is writen. tester list information"/>
          <List type='info' date="18 des 2020" title="This is message for youre eat in bottom table" desc="Hahaha lorem ipsum is not text but this is writen. tester list information"/>
          <List type='info' date="18 des 2020" title="This is message for youre eat in bottom table" desc="Hahaha lorem ipsum is not text but this is writen. tester list information"/>
        </View>
      </ScrollView>
    </View>
  )
}

export default Info

const styles = StyleSheet.create({
  container:{
    backgroundColor:colors.background,
    flex:1
  },
  pages:{
    padding:16
  }
})
