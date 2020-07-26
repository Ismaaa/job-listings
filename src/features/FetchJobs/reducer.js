import ACTIONS from './actions';

export const DEFAULT_STATE = {
  jobs: [],
  loading: false,
  error: false,
};

export default function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.REQUEST_DATA:
      return { ...DEFAULT_STATE, loading: true };
    case ACTIONS.REQUEST_SUCCESS:
      return { ...DEFAULT_STATE, jobs: action.payload };
    default:
      throw new Error('Unhandled action type');
  }
}
