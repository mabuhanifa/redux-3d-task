import { filter, search } from "../constants/blogConstants";

export const SEARCH = (value) => {
  return {
    type: search,
    payload: value,
  };
};
export const FILTER = (value) => {
  return {
    type: filter,
    payload: value,
  };
};
