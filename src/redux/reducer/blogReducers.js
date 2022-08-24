const initialState = [
  {
    title: "Redux",
  },
];

const blogReducer = (state = initialState, action) => {
  const { type, payload } = action;
  console.log(type);
  switch (type) {
    case "INCREMENT":
      const newState = {
        ...state,
        [payload.id]: {
          ...state[payload.id],
          qty: state[payload.id].qty + 1,
        },
      };
      return newState;
    case "DECREMENT":
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
