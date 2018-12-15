import { call, put, takeLatest } from 'redux-saga/effects';
import { RETRIEVE_FROM_DB } from '../App/constants';
import { dbSuccess, dbFail } from '../App/actions';

function getRequest(url) {
  return fetch(url, {
    method: 'GET',
    contentType: 'json',
  })
    .then(response => response.json())
    .catch(error => console.error('error: ', error));
}

export function* getFromDatabase() {
  const dbPath = 'http://localhost:3000/api/oneliners/retrieve';
  try {
    const result = yield call(getRequest, dbPath);
    yield put(dbSuccess(result));
  } catch (error) {
    yield put(dbFail(error));
  }
}

export default function* watchForGet() {
  yield takeLatest(RETRIEVE_FROM_DB, getFromDatabase);
}
