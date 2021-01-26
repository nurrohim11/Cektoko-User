import React from 'react';
import { StyleSheet, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { Header } from '..';
import { colors } from '../../../utils';
import TransItem from '../../atom/TransItem';

const TransactionNavigation = ({ state, descriptors, navigation, position }) => {
  return (
    <>
      <Header type="icon-only" icon="white" title="Daftar Pesanan" onPress={()=>navigation.goBack()}/>
      <View style={styles.container}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.reset({
                index: 0,
                routes: [
                  {
                    name: route.name,
                    params:{name:route.name}
                  }
                ]
              });
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          const inputRange = state.routes.map((_, i) => i);
          const opacity = Animated.interpolate(position, {
            inputRange,
            outputRange: inputRange.map(i => (i === index ? 1 : 0)),
          });

          return (
            <TransItem key={index} title={label} active={isFocused} onPress={onPress} onLongPress={onLongPress}/>
          );
        })}
      </View>
      </>
  );
}

export default TransactionNavigation

const styles = StyleSheet.create({
  container:{ 
    flexDirection: 'row',
    justifyContent:'space-around',
    paddingHorizontal:10,
    paddingVertical:12,
    backgroundColor:colors.background
  }
})
