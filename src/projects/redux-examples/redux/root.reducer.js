/* istanbul ignore file */

import { combineReducers } from 'redux';
import counterReducer from './counter/counter.reducer';
import apiCallReducer from './api-call/api-call.reducer';

export default combineReducers({
  counter: counterReducer,
  apiCall: apiCallReducer,
});
