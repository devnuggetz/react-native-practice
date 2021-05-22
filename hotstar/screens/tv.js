import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Tv = () => {
  return (
    <View style={styles.container}>
      <Text>Tv</Text>
    </View>
  );
};

export default Tv;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
