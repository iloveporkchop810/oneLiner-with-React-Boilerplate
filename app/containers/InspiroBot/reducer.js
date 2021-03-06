import { fromJS } from 'immutable';
import {
  REQUEST_BOT_WISDOM,
  BOT_WISDOM_SUCCESS,
  BOT_WISDOM_FAIL,
} from './constants';

export const initialState = fromJS({
  loading: false,
  error: false,
  botWisdom: '',
});

function botReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_BOT_WISDOM:
      return state.set('loading', true).set('error', false);
    case BOT_WISDOM_SUCCESS:
      return state
        .set('loading', false)
        .set('error', false)
        .set('botWisdom', action.url);
    case BOT_WISDOM_FAIL:
      return state.set('loading', false).set('error', action.error);
    default:
      return state;
  }
}

export default botReducer;
