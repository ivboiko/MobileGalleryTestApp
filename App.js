/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {connect} from 'react-redux';
import {getRandomPhotos} from './src/redux/thunk/thunk';
import MainScreen from './src/components/screens/MainScreen';
import {PhotoScreen} from './src/components/screens/PhotoScreen';
import {theme} from './src/theme/theme';

const App: () => React$Node = (props) => {
  useEffect(() => {
    props.getRandomPhotos(1, true); // Second param says that it is an initial data fetching.
  }, [props]);

  const Stack = createStackNavigator();

  return (
    <>
      <Stack.Navigator initialRouteName="MainScreen">
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{
            title: 'Gallery',
            headerTitleStyle: {
              alignSelf: 'center',
              ...styles.headerText,
            },
          }}
        />
        <Stack.Screen
          name="PhotoScreen"
          component={PhotoScreen}
          options={{
            title: 'Photo',
            headerTitleStyle: styles.headerText,
          }}
        />
      </Stack.Navigator>
    </>
  );
};

export default connect(null, {getRandomPhotos})(App);

const styles = StyleSheet.create({
  headerText: {
    fontSize: 28,
    color: theme.mainColor,
    fontWeight: '500',
    fontFamily: theme.semiBoldText,
  },
});
