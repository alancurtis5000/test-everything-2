import axios from 'axios';
import types from './api-call.types';

export const getDataStart = () => ({
  type: types.GET_DATA_START,
});

export const getDataSuccess = (data) => ({
  type: types.GET_DATA_SUCCESS,
  payload: { data: data },
});

export const getDataFailure = (errorMessage) => ({
  type: types.GET_DATA_FAILURE,
  payload: { error: errorMessage },
});

export const getData = () => async (dispatch) => {
  dispatch(getDataStart());
  return axios
    .get('https://zzzzzzgoquotes-api.herokuapp.com/api/v1/random?count=1')
    .then((response) => {
      dispatch(getDataSuccess(response.data.quotes[0]));
    })
    .catch((error) => {
      dispatch(getDataFailure(error.message));
    });
};
