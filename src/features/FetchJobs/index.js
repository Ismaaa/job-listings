import { useEffect, useReducer } from 'react';

import reducer, { DEFAULT_STATE } from './reducer';
import { requestData, requestSuccess, requestError } from './actionCreators';

export default function useFetchJobs() {
  const [state, dispatch] = useReducer(reducer, DEFAULT_STATE);
  useEffect(() => {
    dispatch(requestData());
    dispatch(requestSuccess());
    dispatch(requestError());
  }, []);

  return state;
}
