import React from 'react';
import {TouchableOpacity, Image, StyleSheet, View} from 'react-native';
import { Gap } from '../atom';

export default (ChildItem = ({
  item,
  style,
  onPress,
  index,
  imageKey,
  local,
  height,
}) => {
  return (
    <View>
      <View style={styles.container} onPress={() => onPress(index)}>
        <Image
          style={[styles.image, style, {height: height}]}
          source={local ? item[imageKey] : {uri: item[imageKey]}}
        />
      </View>
      <Gap width={4}/>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    borderRadius:20,
  },
  image: {
    // height: 230,
    borderRadius:4,
    // resizeMode: 'stretch',
  },
});
