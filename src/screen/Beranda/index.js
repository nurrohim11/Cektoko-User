import React, { useEffect, useState } from 'react';
import { BackHandler, Dimensions, Platform, ScrollView, StyleSheet, Text, View } from 'react-native';
import { stylesheet } from '../../assets';
import { CardItem, Gap, Header, Link } from '../../components';
import FlatListSlider from '../../components/slider/FlatListSlider';
import { colors, fonts } from '../../utils';

const IS_IOS = Platform.OS === 'ios';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp (percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

const slideHeight = viewportHeight * 0.25;
const slideWidth = wp(90);
const itemHorizontalMargin = wp(1);

const sliderWidth = viewportWidth;
const itemWidth = slideWidth + itemHorizontalMargin * 2;

const Beranda = ({navigation}) => {

  const [slider, setSlider] = useState(
    [
      {
        image:
          'https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
        desc: 'Silent Waters in the mountains in midst of Himilayas',
      },
      {
        image:
          'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
        desc:
          'Red fort in India New Delhi is a magnificient masterpeiece of humans',
      },
      {
        image:
          'https://images.unsplash.com/photo-1477587458883-47145ed94245?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        desc:
          'Sample Description below the image for representation purpose only',
      },
      {
        image:
          'https://images.unsplash.com/photo-1568700942090-19dc36fab0c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        desc:
          'Sample Description below the image for representation purpose only',
      },
      {
        image:
          'https://images.unsplash.com/photo-1584271854089-9bb3e5168e32?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80',
        desc:
          'Sample Description below the image for representation purpose only',
      },
    ]
  )
  
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  useEffect(() => {
    // const backAction = () => {
    //   BackHandler.exitApp()
    //   return true;
    // };
    // const backHandler = BackHandler.addEventListener("hardwareBackPress",backAction);
    // return () => backHandler.remove();
  }, []);

  return (
    <View style={styles.container}>
      <Header title="CEKTOKO" type="icon-only" flag/>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View  style={stylesheet.pages}>
          <CardItem type="location"/>
          <Text style={styles.sectionLabel}>Anda sedang belanja di</Text>
          <CardItem type="merchant"/>
          <Gap height={24}/>
          <View style={{borderRadius:20}}>
            {/* <FlatListSlider
              data={slider}
              height={slideHeight}
              width={itemWidth}
              timer={5000}
              onPress={item => alert(JSON.stringify(item))}
              indicatorContainerStyle={{position:'absolute', bottom: 10}}
              indicatorActiveColor={colors.primary}
              indicatorInActiveColor={'#ffffff'}
              indicatorActiveWidth={20}
              animation
            /> */}
          </View>
          <Gap height={10}/>
          <Link text="Lihat semua iklan" onPress={()=>navigation.navigate('Iklan')} color={colors.primary} align="right"/>
        </View>
      </ScrollView>
    </View>
  )
}

export default Beranda

const styles = StyleSheet.create({
  container:{
    backgroundColor:colors.background,
    flex:1
  },
  pages:{
    padding:16
  },
  sectionLabel:{
    fontFamily:fonts.primary[600],
    marginTop:24,
    marginBottom:14
  }
})
