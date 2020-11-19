import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {theme} from '../../theme/theme';

export const Preloader = () => {
  return (
    <View style={styles.indicatorContainer}>
      <ActivityIndicator size="large" color={theme.mainColor} />
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
