import { fromJS, List } from 'immutable';
import {
  SAVE_TO_DB,
  RETRIEVE_FROM_DB,
  DELETE_FROM_DB,
  EDIT_TO_DB,
  DBUD_SUCCESS,
  DB_SUCCESS,
  DB_FAIL,
  GRAB_KEY,
} from './constants';
import placeholder from './placeholderData';

const initialState = fromJS({
  loading: false,
  error: false,
  success: false,
  oneLiners: [],
  key: '',
});

function globalReducer(state = initialState, action) {
  const oldArrState = state.get('oneLiners');
  let newArrState;
  switch (action.type) {
    case SAVE_TO_DB:
      return state.set('loading', true).set('error', false);
    case RETRIEVE_FROM_DB:
      return state.set('loading', true).set('error', false);
    case DELETE_FROM_DB:
      return state.set('loading', true).set('error', false);
    case GRAB_KEY:
      return state.set('key', action.key);
    case EDIT_TO_DB:
      return state
        .set('loading', true)
        .set('error', false)
        .set('key', action.key);

    case DBUD_SUCCESS:
      if (action.update) {
        newArrState = oldArrState.update(action.key, () => action.update);
      } else {
        newArrState = oldArrState.splice(action.key, 1);
      }
      return state
        .set('loading', false)
        .set('error', false)
        .set('success', true)
        .set('oneLiners', newArrState);

    case DB_SUCCESS:
      if (oldArrState.size === 0) {
        newArrState =
          action.payload.length > 0 ? List(action.payload) : List(placeholder);
      } else {
        newArrState = oldArrState.unshift(action.payload);
      }
      return state
        .set('loading', false)
        .set('error', false)
        .set('success', true)
        .set('oneLiners', newArrState);
    case DB_FAIL:
      return state.set('loading', false).set('error', action.error);

    default:
      return state;
  }
}

export default globalReducer;
