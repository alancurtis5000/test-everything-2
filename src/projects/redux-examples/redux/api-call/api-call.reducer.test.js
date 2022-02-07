import { cleanup } from '../../tests/test.utils';
import configureAppStore from '../configure-store';
import * as actions from './api-call.actions';
import apiCallReducer, { initialState } from './api-call.reducer';
import * as fixtures from './__test__/api-call.fixtures';
// Note: When writing test for reducers we are testing against
// our actual store, so we configure to our store not a mock store

describe('apiCallReducer', () => {
  let store;
  beforeEach(() => {
    store = configureAppStore();
  });

  afterEach(cleanup);

  it('should return inital state', () => {
    expect(apiCallReducer(undefined, {})).toEqual(initialState);
  });

  describe('Get Data', () => {
    it('should handle GET_DATA_START', () => {
      const actionsList = [actions.getDataStart()];
      actionsList.forEach((action) => store.dispatch(action));
      const result = store.getState().apiCall;
      const expected = {
        ...initialState,
        isLoaded: false,
      };

      expect(result).toEqual(expected);
    });
    it('should handle GET_DATA_SUCCESS', () => {
      const dataPassedToAction = fixtures.fakeApiCallSuccess.quotes[0];
      const actionsList = [actions.getDataSuccess(dataPassedToAction)];
      actionsList.forEach((action) => store.dispatch(action));
      const result = store.getState().apiCall;
      const expected = {
        ...initialState,
        isLoaded: true,
        data: dataPassedToAction,
      };

      expect(result).toEqual(expected);
    });
    it('should handle GET_DATA_FAILURE', () => {
      const dataPassedToAction = 'This is an Error';
      const actionsList = [actions.getDataFailure(dataPassedToAction)];
      actionsList.forEach((action) => store.dispatch(action));
      const result = store.getState().apiCall;
      const expected = {
        ...initialState,
        isLoaded: true,
        error: dataPassedToAction,
      };

      expect(result).toEqual(expected);
    });
  });
});
