import types from './api-call.types';

export const initialState = {
  data: {},
  isLoaded: false,
  error: '',
};

const apiCallReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_DATA_START:
      return { ...state, isLoaded: false };
    case types.GET_DATA_SUCCESS:
      return { ...state, ...action.payload, isLoaded: true, error: '' };
    case types.GET_DATA_FAILURE:
      return { ...state, ...action.payload, isLoaded: true };
    default:
      return state;
  }
};

export default apiCallReducer;
