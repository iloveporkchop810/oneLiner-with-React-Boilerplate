import { CHANGE_TEXT_INPUT, CHANGE_AUTHOR } from './constants';

// ----------User Input--------//
export function changeTextInput(text) {
  return {
    type: CHANGE_TEXT_INPUT,
    text,
  };
}

export function changeAuthor(author) {
  return {
    type: CHANGE_AUTHOR,
    author,
  };
}
