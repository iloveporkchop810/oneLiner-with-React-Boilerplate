import { createSelector } from 'reselect';
import { initialInputState } from './reducer';

const selectInput = state => state.get('inputPage', initialInputState);

const makeSelectUserInput = () =>
  createSelector(selectInput, inputState => inputState.get('userInput'));

const makeSelectAuthor = () =>
  createSelector(selectInput, inputState => inputState.get('author'));

export { selectInput, makeSelectUserInput, makeSelectAuthor };
