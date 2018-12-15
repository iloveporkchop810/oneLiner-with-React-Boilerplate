import { call, put, select, takeLatest } from 'redux-saga/effects';
import { DELETE_FROM_DB } from '../App/constants';
import { dbudSuccess, dbFail } from '../App/actions';
import { makeSelectOneLiners, makeSelectKey } from '../App/selectors';

function deleteRequest(url, id) {
  return fetch(url, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ id }),
  })
    .then(response =>
      console.log('delete successful: ', JSON.stringify(response)),
    )
    .catch(error => console.error('error: ', error));
}

export function* deletFromDatabase() {
  const oneliners = yield select(makeSelectOneLiners());
  const onelinersArr = oneliners.toArray();
  const key = yield select(makeSelectKey());
  const searchId = onelinersArr[key]['_id'];
  const dbPath = 'http://localhost:3000/api/oneliners/remove';

  try {
    yield call(deleteRequest, dbPath, searchId);
    yield put(dbudSuccess(key));
  } catch (error) {
    yield put(dbFail(error));
  }
}

export default function* watchForDelete() {
  yield takeLatest(DELETE_FROM_DB, deletFromDatabase);
}
