import types from './counter.types';
import * as util from './counter.utils';

export const initialState = {
  count: 0,
  margin: 1,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.COUNTER_INCREMENT:
      return { ...state, ...util.incrementCount(state.count, state.margin) };
    case types.COUNTER_DECREMENT:
      return { ...state, ...util.decrementCount(state.count, state.margin) };
    case types.COUNTER_UPDATE_MARGIN:
      return { ...state, ...action.payload };
    case types.COUNTER_RESET:
      return { ...initialState };
    default:
      return state;
  }
};

export default counterReducer;
