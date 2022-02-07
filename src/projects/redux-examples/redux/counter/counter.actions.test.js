import { cleanup } from '../../tests/test.utils';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as actions from './counter.actions';
import types from './counter.types';

// Note: when testing actions we only want to test the action
// and payload being create so we use a mock store

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('counterActions', () => {
  let store;
  beforeEach(() => {
    store = mockStore({ counter: { count: 0, margin: 1 } });
  });

  afterEach(cleanup);

  it('test run', () => {
    expect(true).toEqual(true);
  });

  // INCREMENT //
  it('increment action fired', () => {
    const expectedActions = [
      {
        type: types.COUNTER_INCREMENT,
      },
    ];
    store.dispatch(actions.counterIncrement());
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('increment action fired with different margin', () => {
    // using storeOverride to have a diffent default state
    let storeOverride = mockStore({
      counter: { count: 0, margin: 4 },
    });
    const expectedActions = [
      {
        type: types.COUNTER_INCREMENT,
      },
    ];
    storeOverride.dispatch(actions.counterIncrement());
    expect(storeOverride.getActions()).toEqual(expectedActions);
  });

  // DECREMENT //
  it('decrements 1', () => {
    const expectedActions = [
      {
        type: types.COUNTER_DECREMENT,
      },
    ];
    store.dispatch(actions.counterDecrement());
    expect(store.getActions()).toEqual(expectedActions);
  });

  // RESET //
  it('reset', () => {
    const expectedActions = [
      {
        type: types.COUNTER_RESET,
      },
    ];
    store.dispatch(actions.counterReset());
    expect(store.getActions()).toEqual(expectedActions);
  });

  // MARGIN //
  it('updates margin', () => {
    const updatedMargin = 4;
    const expectedActions = [
      {
        type: types.COUNTER_UPDATE_MARGIN,
        payload: { margin: updatedMargin },
      },
    ];
    store.dispatch(actions.counterUpdateMargin(updatedMargin));
    expect(store.getActions()).toEqual(expectedActions);
  });
  it('updates margin by negitive number', () => {
    const updatedMargin = -6;
    const expectedActions = [
      {
        type: types.COUNTER_UPDATE_MARGIN,
        payload: { margin: updatedMargin },
      },
    ];
    store.dispatch(actions.counterUpdateMargin(updatedMargin));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
