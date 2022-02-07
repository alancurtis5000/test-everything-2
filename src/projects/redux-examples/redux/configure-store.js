/* istanbul ignore file */

import rootReducer from './root.reducer';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

export default function configureAppStore(preloadedState) {
  const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk],
    preloadedState,
    devTools:
      process.env.NODE_ENV !== 'production' ? { name: 'Counter Redux' } : null,
  });

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./root.reducer', () =>
      store.replaceReducer(rootReducer)
    );
  }

  return store;
}
