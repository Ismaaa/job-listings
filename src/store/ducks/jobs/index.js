import data from '../../../database/data';

// constants
const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
const REQUEST_ERROR = 'REQUEST_ERROR';
const UPDATE_FILTERS = 'UPDATE_FILTERS';

export const INITIAL_STATE = {
  jobs: [],
  filters: [],
  error: false,
};

// reducer
export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST_SUCCESS:
      return { ...state, jobs: data };
    case REQUEST_ERROR:
      return { ...state, error: action.payload };
    case UPDATE_FILTERS:
      return { ...state, filters: action.payload };
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

export const toggleFilter = (tag) => (dispatch, getState) => {
  const { filters } = getState().jobs;
  let updatedFilters;

  // remove
  if (filters.includes(tag)) {
    updatedFilters = filters.filter((filter) => filter !== tag);
  } else {
    // Add
    filters.push(tag);
    updatedFilters = filters.filter(
      (item, index) => filters.indexOf(item) === index
    );
  }

  dispatch({
    type: UPDATE_FILTERS,
    payload: updatedFilters,
  });
};
