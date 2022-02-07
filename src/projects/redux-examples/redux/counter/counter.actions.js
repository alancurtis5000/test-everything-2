import types from './counter.types';

export const counterIncrement = () => ({
  type: types.COUNTER_INCREMENT,
});

export const counterDecrement = () => ({
  type: types.COUNTER_DECREMENT,
});

export const counterUpdateMargin = (updatedMargin) => ({
  type: types.COUNTER_UPDATE_MARGIN,
  payload: { margin: updatedMargin },
});

export const counterReset = () => ({
  type: types.COUNTER_RESET,
});
