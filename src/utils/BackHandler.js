import React, { useEffect } from 'react';
import { BackHandler } from 'react-native';

const backAction = () => {
  BackHandler.exitApp()
  return true;
};
export const backHandler = BackHandler.addEventListener("hardwareBackPress",backAction);