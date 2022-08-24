import { FILTER, SEARCH } from "../actions/blogActions";
import { initialState } from "./initialState";

const blogReducer = (state = initialState, action) => {
  const { type, payload } = action;
  console.log(type);
  switch (type) {
    case FILTER:
      const newState = {
        ...state,
        [payload.id]: {
          ...state[payload.id],
          qty: state[payload.id].qty + 1,
        },
      };
      return newState;
    case SEARCH:
      const newUpdatedState = {
        ...state,
        [payload.id]: {
          ...state[payload.id],
          qty: state[payload.id].qty - 1,
        },
      };
      return newUpdatedState;

    default:
      return state;
  }
};

export default blogReducer;
