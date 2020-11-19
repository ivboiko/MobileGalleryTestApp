import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

export const Preloader = () => {
  return (
    <View style={styles.indicatorContainer}>
      <ActivityIndicator size="large" color="#0984e3" />
    </View>
  );
};

const styles = StyleSheet.create({
  indicatorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
