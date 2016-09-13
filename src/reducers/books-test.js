import books from './books';

describe('Reducer', () => {
  it('SET_BOOKS test', () => {
    let state = {
      collection: []
    }
    let action = {
      type: "SET_BOOKS",
      payload: [{ title:"1" }, { title:"2" }, { title:"3" }]
    }

    let newState = books(state,action);

    expect(newState.collection.length).toEqual(action.payload.length);
  });
});
