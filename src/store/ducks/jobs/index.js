import data from '../../../database/data';

// constants
const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
const REQUEST_ERROR = 'REQUEST_ERROR';
const UPDATE_FILTERS = 'UPDATE_FILTERS';
const UPDATE_JOBS = 'UPDATE_JOBS';

export const INITIAL_STATE = {
  jobs: [],
  filteredJobs: [],
  filters: [],
  error: false,
};

// reducer
export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST_SUCCESS:
      return { ...state, jobs: action.payload };
    case REQUEST_ERROR:
      return { ...state, error: action.payload };
    case UPDATE_FILTERS:
      return { ...state, filters: action.payload };
    case UPDATE_JOBS:
      return { ...state, filteredJobs: action.payload };
    default:
      return state;
  }
}

// actions
export const fetchJobs = () => (dispatch) => {
  if (data.length === 0) {
    return dispatch({ type: REQUEST_ERROR, payload: 'Error loading database' });
  }
  return dispatch({ type: REQUEST_SUCCESS, payload: data });
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

export const applyFilters = () => (dispatch, getState) => {
  const { filters, jobs } = getState().jobs;
  const filteredJobs = [];

  if (filters.length === 0) {
    return dispatch({
      type: UPDATE_JOBS,
      payload: data,
    });
  }

  jobs.forEach((job) => {
    const tags = [job.level, job.role, ...job.languages, ...job.tools];
    const tagMatches = [];

    filters.forEach((filter) => {
      if (tags.includes(filter)) {
        tagMatches.push(true);
      } else {
        tagMatches.push(false);
      }
    });

    if (tagMatches.every((tagMatched) => tagMatched === true)) {
      filteredJobs.push(job);
    }
  });

  return dispatch({
    type: UPDATE_JOBS,
    payload: [...filteredJobs],
  });
};

// middleware
export const jobsMiddleware = ({ dispatch }) => (next) => (action) => {
  next(action);

  switch (action.type) {
    case UPDATE_FILTERS:
      dispatch(applyFilters());
      break;
  }
};
