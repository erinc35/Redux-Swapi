import { FETCHING, FETCHED, ERROR } from '../actions';

const initialState = {
  chars: [],
  fetching: false,
  fetched: false,
  error: null
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    case FETCHING:
      return Object.assign({}, state, {
        fetching: true
      });
    case FETCHED:
      return Object.assign({}, state, { fetched: true, fetching: false, chars: action.payload })
    case ERROR:
      return null;
    default:
      return state;
  }
};
