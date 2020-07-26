import ACTIONS from './actions';

export const DEFAULT_STATE = {
  jobs: [],
  loading: false,
  error: false,
};

export default function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.API_REQUEST:
      return { ...DEFAULT_STATE, loading: true };
    case ACTIONS.API_SUCCESS:
      return { ...DEFAULT_STATE, jobs: action.payload };
    case ACTIONS.API_ERROR:
      return { ...DEFAULT_STATE, error: action.payload };
    default:
      return state;
  }
}
