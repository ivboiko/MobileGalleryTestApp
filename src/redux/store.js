import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {photosReducer} from './reducers/photosReducer';

export default createStore(photosReducer, applyMiddleware(thunk));
