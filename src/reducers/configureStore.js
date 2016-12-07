import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from 'reducers';

export default function configureStore(initialState) {

  // Store enhancer: Thunk middleware
  let enhancer = applyMiddleware(thunk);

  // Add development tools
  if (__ENVIRONMENT__ === 'development' && window.__REDUX_DEVTOOLS_EXTENSION__) {
    if(window) {
      enhancer = compose(
        enhancer,
        window.__REDUX_DEVTOOLS_EXTENSION__()
      )
    }
  }

  const store = createStore(rootReducer, initialState, enhancer);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('reducers', () => {
      const nextReducer = require('reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
