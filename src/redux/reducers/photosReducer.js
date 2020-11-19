import {types} from '../types/types';

let initialState = {
  photos: [],
  isFetching: false,
  isFetchingError: false,
};

export const photosReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_PHOTOS:
      return {
        ...state,
        photos: [...state.photos, ...action.photos],
      };
    case types.SET_INITIAL_PHOTOS:
      return {
        ...state,
        photos: [...action.photos],
      };
    case types.TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case types.TOGGLE_IS_FETCHING_ERROR:
      return {
        ...state,
        isFetchingError: action.isFetchingError,
      };
    default:
      return state;
  }
};
