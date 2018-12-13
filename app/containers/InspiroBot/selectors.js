import { createSelector } from 'reselect';

const selectRouter = state => state.get('router');

const selectGlobal = state => state.get('bot');

const makeSelectLoading = () => 
  createSelector(selectGlobal, globalState => globalState.get('loading'));

const makeSelectError = () =>
  createSelector(selectGlobal, globalState => globalState.get('error'));

const makeSelectBotUrl = () =>
  createSelector(selectGlobal, globalState => globalState.get('botWisdom'));

const makeSelectLocation = () =>
  createSelector(selectRouter, routerState =>
    routerState.get('location').toJS(),
  );

export {
  selectGlobal,
  makeSelectLoading,
  makeSelectError,
  makeSelectBotUrl, 
  makeSelectLocation 
};
