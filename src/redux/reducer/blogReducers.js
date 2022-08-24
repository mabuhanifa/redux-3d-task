const initialState = [
  {
    id:1,
    category: "Article",
    img: "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    title: "Boost your conversion rate",
    author: "Learn with sumit",
    a_img: "https://avatars.githubusercontent.com/u/73503432?v=4",
    date: "11 Jul, 2022",
    time: "6 min read",
  },
  {
    id:2,
    category: "Article",
    img: "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    title: "Boost your conversion rate",
    author: "Learn with sumit",
    a_img: "https://avatars.githubusercontent.com/u/73503432?v=4",
    date: "11 Jul, 2022",
    time: "6 min read",
  },
  {
    id:3,
    category: "Article",
    img: "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    title: "Boost your conversion rate",
    author: "Learn with sumit",
    a_img: "https://avatars.githubusercontent.com/u/73503432?v=4",
    date: "11 Jul, 2022",
    time: "6 min read",
  },
  {
    id:4,
    category: "Article",
    img: "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    title: "Boost your conversion rate",
    author: "Learn with sumit",
    a_img: "https://avatars.githubusercontent.com/u/73503432?v=4",
    date: "11 Jul, 2022",
    time: "6 min read",
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
