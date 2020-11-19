import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {theme} from '../../theme/theme';

export const PhotoItem = React.memo((props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() =>
        props.navigation.navigate('PhotoScreen', {
          urls: props.photo.item.urls,
        })
      }>
      <View style={styles.photoContainer}>
        <FastImage
          style={styles.photo}
          source={{
            uri: props.photo.item.urls.regular,
            priority: FastImage.priority.normal,
          }}
        />
      </View>
      <View style={styles.photoDescriptionContainer}>
        <Text style={styles.photoAuthor}>{props.photo.item.user.name}</Text>
        <Text style={styles.photoTitle}>
          {props.photo.item.alt_description || 'Beautiful place'}
        </Text>
      </View>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  photoContainer: {
    alignItems: 'center',
    margin: 10,
  },
  photo: {
    width: 300,
    height: 300,
  },
  photoDescriptionContainer: {
    paddingVertical: 2,
  },
  photoAuthor: {
    fontSize: 20,
    fontFamily: theme.boldText,
    textAlign: 'center',
  },
  photoTitle: {
    fontSize: 17,
    fontFamily: theme.regularText,
    paddingHorizontal: 10,
    textAlign: 'center',
  },
});
