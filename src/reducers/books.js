import { SET_BOOKS, CREATE_BOOK } from 'constants/ActionTypes';

const initialState = {
  collection: [{
    isbn: 1,
    title: "Hitchhikers Guide to the Galaxy"
  },
  {
    isbn: 2,
    title: "Clean code"
  }]
}

const actionsMap = {
  [SET_BOOKS]: (state, action) => {
    state = {...state }
    state.collection = action.payload;
    return state;
  },

  [CREATE_BOOK]: (state, action) => {
    state = {...state }
    state.collection = [...state.collection, action.payload];
    return state;
  }
}

export default function books(state = initialState, action) {
  const reducerFn = actionsMap[action.type];

  if(reducerFn) {
    return reducerFn(state, action);
  } else {
    return state;
  }
}
