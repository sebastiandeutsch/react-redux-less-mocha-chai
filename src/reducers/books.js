import * as Actions from 'constants/ActionTypes';

const initialState = {
  collection: []
}

const actionsMap = {
  [Actions.SET_BOOKS]: (state, action) => {
    state = { ...state };
    state.collection = action.payload;
    return state;
  },

  [Actions.CREATE_BOOK]: (state, action) => {
    state = { ...state };
    state.collection = [...state.collection, action.payload];
    return state;
  }
};

export default function books(state = initialState, action) {
  const reduceFn = actionsMap[ action.type ];

  if (!reduceFn) {
    return state;
  }

  return reduceFn(state, action);
}
