import { call, put, takeLatest } from 'redux-saga/effects';
import https from 'https';
import { REQUEST_BOT_WISDOM } from './constants';
import { botWisdomSuccess, botWisdomFail } from './actions';

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
    yield put(botWisdomSuccess(wisdom));
  } catch (error) {
    yield put(botWisdomFail(error));
  }
}

export default function* watchCallToBot() {
  yield takeLatest(REQUEST_BOT_WISDOM, callBotSaga);
}
