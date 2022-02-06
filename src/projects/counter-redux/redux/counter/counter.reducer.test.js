import { cleanup } from '../../tests/test.utils';
import configureAppStore from '../configure-store';
import * as actions from './example-counter.actions';
import exampleCounterReducer, { initialState } from './counter.reducer';
// Note: When writing test for reducers we are testing against
// our actual store, so we configure to our store not a mock store

describe('counterReducer', () => {
  let store;
  beforeEach(() => {
    store = configureAppStore();
  });

  afterEach(cleanup);

  it('test run', () => {
    expect(true).toEqual(true);
  });

  // INITIAL STATE //
  it('should return inital state: version 01', () => {
    expect(exampleCounterReducer(undefined, {})).toEqual(initialState);
  });

  it('should return inital state: version 02', () => {
    const state = exampleCounterReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual(initialState);
  });

  // INCREMENT //
  it('should handle INCREMENT by 1', () => {
    const actionsList = [actions.exampleCounterIncrement()];

    actionsList.forEach((action) => store.dispatch(action));

    const result = store.getState().exampleCounter;
    const expected = { count: 1, margin: 1 };
    expect(result).toEqual(expected);
  });

  it('should handle INCREMENT by 1 three times', () => {
    const actionsList = [
      actions.exampleCounterIncrement(),
      actions.exampleCounterIncrement(),
      actions.exampleCounterIncrement(),
    ];

    actionsList.forEach((action) => store.dispatch(action));

    const result = store.getState().exampleCounter;
    const expected = { count: 3, margin: 1 };
    expect(result).toEqual(expected);
  });

  // DECREMENT //
  it('should handle DECREMENT by 1', () => {
    const actionsList = [actions.exampleCounterDecrement()];

    actionsList.forEach((action) => store.dispatch(action));

    const result = store.getState().exampleCounter;
    const expected = { count: -1, margin: 1 };
    expect(result).toEqual(expected);
  });
  it('should handle DECREMENT by 1 three times', () => {
    const actionsList = [
      actions.exampleCounterDecrement(),
      actions.exampleCounterDecrement(),
      actions.exampleCounterDecrement(),
    ];

    actionsList.forEach((action) => store.dispatch(action));

    const result = store.getState().exampleCounter;
    const expected = { count: -3, margin: 1 };
    expect(result).toEqual(expected);
  });

  // RESET //
  it('should handle RESET', () => {
    const actionsList = [
      actions.exampleCounterIncrement(),
      actions.exampleCounterIncrement(),
      actions.exampleCounterDecrement(),
      actions.exampleCounterReset(),
    ];

    actionsList.forEach((action) => store.dispatch(action));

    const result = store.getState().exampleCounter;
    const expected = initialState;
    expect(result).toEqual(expected);
  });

  // MARGIN
  it('should update Magin', () => {
    const updateMargin = 5;
    const actionList = [actions.exampleCounterUpdateMargin(updateMargin)];

    actionList.forEach((action) => store.dispatch(action));

    const result = store.getState().exampleCounter;
    const expected = { count: 0, margin: updateMargin };
    expect(result).toEqual(expected);
  });

  // MIX //
  it('should handle INCREMENT, DECREMENT, MARGIN and RESET mixed up', () => {
    // default / initialState
    let result = store.getState().exampleCounter;
    let expected = { count: 0, margin: 1 };
    expect(result).toEqual(expected);
    // change margin to 5
    store.dispatch(actions.exampleCounterUpdateMargin(5));
    result = store.getState().exampleCounter;
    expected = { count: 0, margin: 5 };
    expect(result).toEqual(expected);
    // increment two times by margin
    store.dispatch(actions.exampleCounterIncrement());
    store.dispatch(actions.exampleCounterIncrement());
    result = store.getState().exampleCounter;
    expected = { count: 10, margin: 5 };
    expect(result).toEqual(expected);
    // change margin to 2
    store.dispatch(actions.exampleCounterUpdateMargin(2));
    result = store.getState().exampleCounter;
    expected = { count: 10, margin: 2 };
    expect(result).toEqual(expected);
    // decrement by new margin 3 times
    store.dispatch(actions.exampleCounterDecrement());
    store.dispatch(actions.exampleCounterDecrement());
    store.dispatch(actions.exampleCounterDecrement());
    result = store.getState().exampleCounter;
    expected = { count: 4, margin: 2 };
    expect(result).toEqual(expected);
    // increment by current margin
    store.dispatch(actions.exampleCounterIncrement());
    result = store.getState().exampleCounter;
    expected = { count: 6, margin: 2 };
    expect(result).toEqual(expected);
    // reset to inital state
    store.dispatch(actions.exampleCounterReset());
    result = store.getState().exampleCounter;
    expected = initialState;
    expect(result).toEqual(expected);
    // increment after reset
    store.dispatch(actions.exampleCounterIncrement());
    result = store.getState().exampleCounter;
    expected = { count: 1, margin: 1 };
    expect(result).toEqual(expected);
  });
});
