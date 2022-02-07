import { cleanup } from '../../tests/test.utils';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import * as actions from './api-call.actions';
import types from './api-call.types';
import * as fixtures from './__test__/api-call.fixtures';

// Note: when testing actions we only want to test the action
// and payload being create so we use a mock store

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('apiCall Actions', () => {
  let store;
  beforeEach(() => {
    store = mockStore({ apiCall: { data: {}, isLoaded: false, error: '' } });
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
    cleanup;
  });

  it('should get data start and get data success', (done) => {
    const response = {
      status: 200,
      response: fixtures.fakeApiCallSuccess,
    };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(response);
    });

    const payload = { data: response.response.quotes[0] };

    const expectedActions = [
      { type: types.GET_DATA_START },
      { type: types.GET_DATA_SUCCESS, payload },
    ];

    store.dispatch(actions.getData()).then(() => {
      const actualActions = store.getActions();
      expect(actualActions).toEqual(expectedActions);
      done();
    });
  });

  it('should get data start and get data failure', (done) => {
    const error = {
      status: 404,
      message: 'Network Error',
    };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.reject(error);
    });

    const payload = { error: error.message };

    const expectedActions = [
      { type: types.GET_DATA_START },
      { type: types.GET_DATA_FAILURE, payload },
    ];

    store.dispatch(actions.getData()).then(() => {
      const actualActions = store.getActions();
      expect(actualActions).toEqual(expectedActions);
      done();
    });
  });
});
