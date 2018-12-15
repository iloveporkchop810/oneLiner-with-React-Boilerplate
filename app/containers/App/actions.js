import {
  SAVE_TO_DB,
  RETRIEVE_FROM_DB,
  DELETE_FROM_DB,
  EDIT_TO_DB,
  DBUD_SUCCESS,
  DB_SUCCESS,
  DB_FAIL,
  GRAB_KEY,
} from './constants';

// --------CRUD to DB----------//
export function saveToDb() {
  return {
    type: SAVE_TO_DB,
  };
}

export function retrieveFromDB() {
  return {
    type: RETRIEVE_FROM_DB,
  };
}

export function deleteFromDB() {
  return {
    type: DELETE_FROM_DB,
  };
}

export function editToDB() {
  return {
    type: EDIT_TO_DB,
  };
}

// ----------other----------//
export function grabkey(key) {
  return {
    type: GRAB_KEY,
    key,
  };
}
export function dbudSuccess(key) {
  return {
    type: DBUD_SUCCESS,
    key,
  };
}

export function dbSuccess(payload) {
  return {
    type: DB_SUCCESS,
    payload,
  };
}

export function dbFail(error) {
  return {
    type: DB_FAIL,
    error,
  };
}
