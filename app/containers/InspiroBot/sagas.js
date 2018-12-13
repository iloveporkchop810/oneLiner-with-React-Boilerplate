import { call, put, takeLatest, takeEvery } from 'redux-saga/effects';
import https from 'https';
import { REQUEST_BOT_WISDOM } from './constants';
// from '../App/constants';
import { botWisdomSuccess, botWisdomFail } from './actions';
// from '../App/actions';

function generateWisdom() {
  return new Promise((resolve, reject) => {
    const url = 'https://inspirobot.me/api?generate=true';
    let imageUrl = '';
    https
      .get(url, res => {
        res.on('data', chunk => {
          imageUrl += chunk;
        });
        res.on('end', () => {
          resolve(imageUrl);
        });
      })
      .on('error', reject);
  });
}

export function* callBotSaga() {
  try {
    const wisdom = yield call(generateWisdom);
    console.log(wisdom);
    yield put(botWisdomSuccess(wisdom));
  } catch (error) {
    yield put(botWisdomFail(error));
  }
}

export default function* watchCallToBot() {
  console.log('watching bot');
  // yield takeEvery(REQUEST_BOT_WISDOM, callBotSaga);
  yield takeLatest(REQUEST_BOT_WISDOM, callBotSaga);
}
