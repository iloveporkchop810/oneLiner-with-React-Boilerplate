import { fromJS } from 'immutable';
import { CHANGE_TEXT_INPUT, CHANGE_AUTHOR } from './constants';

export const initialInputState = fromJS({
  userInput: '',
  author: '',
});

function inputReducer(state = initialInputState, action) {
  switch (action.type) {
    case CHANGE_TEXT_INPUT:
      return state.set('userInput', action.text);
    case CHANGE_AUTHOR:
      return state.set('author', action.author);

    default:
      return state;
  }
}

export default inputReducer;
