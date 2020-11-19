import {types} from '../types/types';

export const setPhotos = (photos) => {
  return {
    type: types.SET_PHOTOS,
    photos,
  };
};

export const setInitialPhotos = (photos) => {
  return {
    type: types.SET_INITIAL_PHOTOS,
    photos,
  };
};

export const toggleIsFetching = (isFetching) => {
  return {
    type: types.TOGGLE_IS_FETCHING,
    isFetching,
  };
};

export const toggleIsFetchingError = (isFetchingError) => {
  return {
    type: types.TOGGLE_IS_FETCHING_ERROR,
    isFetchingError,
  };
};
