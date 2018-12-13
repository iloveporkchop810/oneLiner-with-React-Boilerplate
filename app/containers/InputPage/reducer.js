import { SAVE_TO_DB, SAVE_SUCCESS, SAVE_FAIL,
  RETRIEVE_FROM_DB, RETRIEVE_SUCCESS, RETRIEVE_FAIL} from './constants';

import { fromJS } from 'immutable';

const initialState = fromJS({
  loading: false,
  error: false,
  success: false,
  oneLiners: [],
  userInput: '',
  author: ''
})

function inputReducer(state = initialState, action) {
  switch(action.type) {
    case SAVE_TO_DB:
    case SAVE_SUCCESS:
    case SAVE_FAIL:
    case RETRIEVE_FROM_DB:
    case RETRIEVE_SUCCESS:
    case RETRIEVE_FAIL:
    default: 
  }
}