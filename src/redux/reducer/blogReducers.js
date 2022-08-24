import { FILTER_AUTHOR, SEARCH } from "../constants/blogConstants";
import { initialState } from "./initialState";

const blogReducer = (state = initialState, action) => {
  const { type, payload } = action;
  console.log(payload);
  switch (type) {
    case FILTER_AUTHOR:
      const newState = state.filter((state) => state.author.includes(payload));
      return newState;
    case SEARCH:
      const newUpdatedState = {
        ...state,
      };
      return newUpdatedState;

    default:
      return state;
  }
};

export default blogReducer;
