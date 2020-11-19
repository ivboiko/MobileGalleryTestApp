import React, {useEffect, useState} from 'react';
import {Alert, FlatList, RefreshControl, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Preloader} from '../utils/Preloader';
import {ListFooter} from '../flatlistParts/ListFooter';
import {PhotoItem} from '../flatlistParts/PhotoItem';
import {ListSeparator} from '../flatlistParts/ListSeparator';
import {connect} from 'react-redux';
import {getPhotos} from '../../redux/thunk/thunk';
import {theme} from '../../theme/theme';

const MainScreen = (props) => {
  const [
    onEndReachedCalledDuringMomentum,
    setOnEndReachedCalledDuringMomentum,
  ] = useState(true);
  const [pageNumber, setPageNumber] = useState(2);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    if (props.isFetchingError) {
      Alert.alert('Cannot load photos :(');
    }
  }, [props.isFetchingError]);

  const renderPhoto = (photo) => {
    return <PhotoItem photo={photo} navigation={props.navigation} />;
  };

  const renderItemSeparator = () => {
    return <ListSeparator />;
  };

  const renderListFooter = () => (
    <ListFooter photos={props.photos} isFetching={props.isFetching} />
  );

  const onRefresh = () => {
    setRefreshing(true);
    props.getPhotos(1, true);
  };

  const onEndReached = () => {
    if (!onEndReachedCalledDuringMomentum) {
      props.getPhotos(pageNumber, false);
      if (!props.isFetchingError) {
        setPageNumber(pageNumber + 1);
      }
      setOnEndReachedCalledDuringMomentum(true);
    }
  };

  if (props.isFetching && props.photos.length === 0) {
    return <Preloader />;
  }

  if (!props.isFetching && refreshing) {
    setRefreshing(false);
  }

  return (
    <SafeAreaView style={styles.photosContainer}>
      <FlatList
        data={props.photos}
        renderItem={renderPhoto}
        initialNumToRender={2}
        keyExtractor={(photo, index) => String(index)}
        ItemSeparatorComponent={renderItemSeparator}
        ListFooterComponent={renderListFooter}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        onEndReached={onEndReached}
        onEndReachedThreshold={0.5}
        onMomentumScrollBegin={() => {
          setOnEndReachedCalledDuringMomentum(false);
        }}
      />
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => {
  return {
    photos: state.photos,
    isFetching: state.isFetching,
    isFetchingError: state.isFetchingError,
  };
};

export default connect(mapStateToProps, {getPhotos})(MainScreen);

const styles = StyleSheet.create({
  photosContainer: {
    marginBottom: 10,
    backgroundColor: theme.backgroundColor,
  },
});
