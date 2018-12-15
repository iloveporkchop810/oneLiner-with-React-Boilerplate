import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectBot = state => state.get('bot', initialState);

const makeSelectLoading = () =>
  createSelector(selectBot, botState => botState.get('loading'));

const makeSelectError = () =>
  createSelector(selectBot, botState => botState.get('error'));

const makeSelectBotUrl = () =>
  createSelector(selectBot, botState => botState.get('botWisdom'));

export { selectBot, makeSelectLoading, makeSelectError, makeSelectBotUrl };
