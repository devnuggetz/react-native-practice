import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Home from './screens/home';
import {NavigationContainer} from '@react-navigation/native';
import Bottom from './navigator/bottom';

const App = () => {
  return (
    <NavigationContainer>
      <Bottom />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
