import React from 'react';
import {StyleSheet, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {theme} from '../../theme/theme';

export const PhotoScreen = (props) => {
  return (
    <View style={styles.photoContainer}>
      <FastImage
        style={styles.photo}
        source={{
          uri: props.route.params.urls.regular,
          priority: FastImage.priority.high,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  photoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.backgroundColor,
  },
  photo: {
    width: '100%',
    height: '100%',
  },
});
