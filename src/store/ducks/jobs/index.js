import data from '../../../database/data';

// constants
const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
const REQUEST_ERROR = 'REQUEST_ERROR';

export const INITIAL_STATE = {
  jobs: [],
  error: false,
};

// reducer
export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST_SUCCESS:
      return { ...state, jobs: data };
    case REQUEST_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}

// actions
export const fetchJobs = () => (dispatch) => {
  if (data.length === 0) {
    return dispatch({ type: REQUEST_ERROR, payload: 'Error loading database' });
  }
  return dispatch({ type: REQUEST_SUCCESS });
};

// export const requestSuccess = (data) => ({
//   type: REQUEST_SUCCESS,
//   payload: data,
// });
