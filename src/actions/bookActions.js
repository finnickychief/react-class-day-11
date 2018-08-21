import { ADD_BOOK, UPDATE_BOOK, DELETE_BOOK } from './types';

export const createBook = (book, dispatch) => {
  dispatch({
    type: ADD_BOOK,
    payload: book
  });
};

export const updateBook = (book, dispatch) => {
  dispatch({
    type: UPDATE_BOOK,
    payload: book
  });
};

export const deleteBook = (book, dispatch) => {
  dispatch({
    type: DELETE_BOOK,
    payload: book
  });
};
