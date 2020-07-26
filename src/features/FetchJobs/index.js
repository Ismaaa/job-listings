import { useEffect, useReducer } from 'react';
import logger from 'use-reducer-logger';
import reducer, { DEFAULT_STATE } from './reducer';
import { requestData, requestSuccess } from './actionCreators';
import data from './data';

export default function useFetchJobs() {
  // const [state, dispatch] = useReducer(reducer, DEFAULT_STATE);
  const [state, dispatch] = useReducer(
    process.env.NODE_ENV === 'development' ? logger(reducer) : reducer,
    DEFAULT_STATE
  );

  useEffect(() => {
    dispatch(requestData());
    dispatch(requestSuccess(data));
  }, []);

  return state;
}
