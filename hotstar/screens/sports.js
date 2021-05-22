import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Sports = () => {
  return (
    <View style={styles.container}>
      <Text>Sports</Text>
    </View>
  );
};

export default Sports;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
