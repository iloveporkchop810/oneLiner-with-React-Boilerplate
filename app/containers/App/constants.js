/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */
export const SAVE_TO_DB = 'app/App/SAVE_TO_DB';
export const RETRIEVE_FROM_DB = 'app/App/RETRIEVE_FROM_DB';
export const DELETE_FROM_DB = 'app/App/RETRIEVE_FROM_DB';
export const EDIT_TO_DB = 'app/App/DELETE_FROM_DB';

export const DBUD_SUCCESS = 'app/App/DBUD_SUCCESS';
export const DB_SUCCESS = 'app/App/SAVE_SUCCESS';
export const DB_FAIL = 'app/App/SAVE_FAIL';
export const GRAB_KEY = 'app/App/GRAB_KEY';
