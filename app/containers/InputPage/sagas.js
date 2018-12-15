import { call, put, select, takeEvery } from 'redux-saga/effects';
import { SAVE_TO_DB } from '../App/constants';
import { dbSuccess, dbFail } from '../App/actions';
import { makeSelectUserInput, makeSelectAuthor } from './selectors';

function postRequest(url, data) {
  return fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(data),
  })
    .then(response =>
      console.log('save successful: ', JSON.stringify(response)),
    )
    .catch(error => console.error('error: ', error));
}

export function* saveToDatabase() {
  const dataObj = {
    userInput: yield select(makeSelectUserInput()),
    author: yield select(makeSelectAuthor()),
  };
  const dbPath = 'http://localhost:3000/api/oneliners/save';

  try {
    yield call(postRequest, dbPath, dataObj);
    yield put(dbSuccess(dataObj));
  } catch (error) {
    yield put(dbFail(error));
  }
}

export default function* watchForSave() {
  yield takeEvery(SAVE_TO_DB, saveToDatabase);
}
