import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {theme} from '../../theme/theme';

export const ListFooter = React.memo((props) => {
  if (!props.photos.length) {
    return null;
  } else {
    return (
      <View style={styles.footer}>
        {props.isFetching && (
          <Text style={styles.footerText}>more photos ...</Text>
        )}
      </View>
    );
  }
});

const styles = StyleSheet.create({
  footer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  footerText: {
    fontSize: 20,
    fontFamily: theme.semiBoldText,
    color: theme.mainTextColor,
  },
});
