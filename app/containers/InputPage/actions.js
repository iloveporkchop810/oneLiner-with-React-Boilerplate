import {
  SAVE_TO_DB,
  SAVE_SUCCESS,
  SAVE_FAIL,
  RETRIEVE_FROM_DB,
  RETRIEVE_SUCCESS,
  RETRIEVE_FAIL,
} from './constants';

// --------POST to DB----------//
export function saveToDb(payload) {
  return {
    type: SAVE_TO_DB,
    payload, // need to fix
  };
}

export function saveSuccess() {
  return {
    type: SAVE_SUCCESS,
  };
}

export function saveFail(error) {
  return {
    type: SAVE_FAIL,
    error,
  };
}

// ---------GET from DB----------//
export function retrieveFromDB() {
  return {
    type: RETRIEVE_FROM_DB,
  };
}

export function retrieveSuccess(payload) {
  return {
    type: RETRIEVE_SUCCESS,
    payload, // need to fix
  };
}

export function retrieveFail(error) {
  return {
    type: RETRIEVE_FAIL,
    error,
  };
}
