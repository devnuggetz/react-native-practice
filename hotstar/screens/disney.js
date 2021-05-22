import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Disney = () => {
  return (
    <View style={styles.container}>
      <Text>Disney</Text>
    </View>
  );
};

export default Disney;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
