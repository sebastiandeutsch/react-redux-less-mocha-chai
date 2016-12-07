import * as types from 'constants/ActionTypes';
import API from 'api/API';
import { browserHistory } from 'react-router';

/**
 * Action creator for redirecting
 * @param path
 */
export function redirectTo(path) {
  browserHistory.push(path);

  return {
    type: types.UPDATE_PATH,
    payload: path
  };
}

/**
 * Action creator that changes something
 * @param something
 */
export function changeSomething(something) {
  return {
    type: types.CHANGE_SOMETHING,
    payload: {
      something
    }
  };
};

/**
 * Action creator that changes something asynchronous
 * @param something
 */
export function changeSomethingAsync(something) {
  return (dispatch, getState) => {
    let api = new API();
    return api.getSomething(something).then(
      (response) => {
        dispatch({
          type: types.CHANGE_SOMETHING,
          payload: {
            something: response.data
          }
        });
        dispatch(redirectTo('/'));
      },
      (error) => {
        dispatch({
          type: types.CHANGE_SOMETHING,
          payload: error,
          error: true
        });
      }
    );
  };
};

export function loadBooks() {
  return function(dispatch) {
    console.log("loadBooks is called!")
    const api = new API();
    api.getBooks().then(
      (response) => {
        dispatch({
          type: types.SET_BOOKS,
          payload: response.data
        });
      },
      (error) => {
        console.log(error);
      }
    )
  }
}

export function createBook(book) {
  return function(dispatch) {
    const api = new API();
    dispatch({
      type: types.CREATE_BOOK,
      payload: book
    });
    return api.postBook(book).then(
      (response) => {

      },
      (error) => {
        console.log(error);
      }
    )
  }
}
