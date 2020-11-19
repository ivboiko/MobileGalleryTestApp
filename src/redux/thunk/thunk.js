import {
  setInitialPhotos,
  setPhotos,
  toggleIsFetching,
  toggleIsFetchingError,
} from '../actions/actions';
import {unsplashAPI} from '../../api/api';

export const getRandomPhotos = (pageNumber, isInitial = false) => (
  dispatch,
) => {
  dispatch(toggleIsFetching(true));
  dispatch(toggleIsFetchingError(false));
  unsplashAPI
    .getRandomPhotos(pageNumber)
    .then((res) => {
      isInitial ? dispatch(setInitialPhotos(res)) : dispatch(setPhotos(res));
    })
    .catch(() => {
      dispatch(toggleIsFetchingError(true));
    })
    .finally(() => {
      dispatch(toggleIsFetching(false));
    });
};
