import expect from 'expect';
import books from '../books';
import { SET_BOOKS, CREATE_BOOK } from 'constants/ActionTypes';

describe('books reducer', () => {
  it('sets the books collection upon SET_BOOKS', () => {
    const state = {
      collection: []
    };
    const action = {
      type: SET_BOOKS,
      payload: [
        {
          isbn: 1,
          title: "Hallo"
        },
        {
          isbn: 2,
          title: "Welt"
        }
      ]
    };

    const newState = books(state, action);

    expect(newState.collection.length).toEqual(action.payload.length);
  });

  it('creates a book upon CREATE_BOOK', () => {
    const state = {
      collection: [{
        isbn: 666,
        title: "Necronomicon"
      },
      {
        isbn: 0,
        title: "The Bible"
      }]
    }
    const action = {
      type: CREATE_BOOK,
      payload: {
        isbn: 3,
        title: "Coders Dilemma"
      }
    }

    const newState = books(state, action);

    expect(newState.collection.length).toEqual(state.collection.length + 1);
  });

});
