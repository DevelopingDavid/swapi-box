import { combineReducers } from 'redux';
import { addFavoriteReducer } from './addFavoriteReducer';

const rootReducer = combineReducers({
  addFavorite: addFavoriteReducer
});