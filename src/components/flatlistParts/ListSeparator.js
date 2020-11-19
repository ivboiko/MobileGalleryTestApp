import React from 'react';
import {StyleSheet, View} from 'react-native';
import {theme} from '../../theme/theme';

export const ListSeparator = () => <View style={styles.itemSeparator} />;

const styles = StyleSheet.create({
  itemSeparator: {
    height: 1,
    width: '90%',
    alignSelf: 'center',
    marginTop: 5,
    backgroundColor: theme.itemSeparatorColor,
  },
});
