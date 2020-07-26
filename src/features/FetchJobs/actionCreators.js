import ACTIONS from './actions';

export const requestData = () => ({ type: ACTIONS.REQUEST_DATA });
export const requestSuccess = (data) => ({
  type: ACTIONS.REQUEST_SUCCESS,
  payload: data,
});
export const requestError = (error) => ({
  type: ACTIONS.REQUEST_ERROR,
  payload: error,
});
