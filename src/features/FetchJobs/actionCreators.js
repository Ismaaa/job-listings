import ACTIONS from './actions';

export const requestData = () => ({ type: ACTIONS.REQUEST_DATA });
export const requestSuccess = (data) => ({
  type: ACTIONS.REQUEST_SUCCESS,
  payload: data,
});