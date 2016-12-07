import * as Actions from 'constants/ActionTypes';

const initialState = {
  path: '/',
  something: '',
  debug: false
};

const actionsMap = {
  /**
   * Updates something
   */
  [Actions.CHANGE_SOMETHING]: (state, action) => {
    state = { ...state };

    state.something = action.payload.something;

    return state;
  },

  /**
   * Updates the url
   */
  [Actions.UPDATE_PATH]: (state, action) => {
    state = { ...state };

    state.path = action.payload;

    return state;
  }
};

export default function app(state = initialState, action) {
  const reduceFn = actionsMap[ action.type ];

  if (!reduceFn) {
    return state;
  }

  return reduceFn(state, action);
}
