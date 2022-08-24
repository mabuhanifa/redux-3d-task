const initialState = [
  {
    id: 1,
    category: "Article",
    img: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "Create a new React app with Vite",
    author: "Learn with sumit",
    a_img: "https://avatars.githubusercontent.com/u/73503432?v=4",
    date: "11 Jul, 2022",
    time: "6 min read",
  },
  {
    id: 2,
    category: "Article",
    img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dGVjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "Git Concepts I Wish I Knew Years Ago",
    author: "Net Ninja",
    a_img: "https://www.filepicker.io/api/file/JIGkr7PVQeuw9rcBtGuB",
    date: "11 Jul, 2022",
    time: "6 min read",
  },
  {
    id: 3,
    category: "Article",
    img: "https://images.unsplash.com/photo-1544256718-3bcf237f3974?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbWluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "JWT (JSON Web Token)",
    author: "Edureka",
    a_img:
      "https://yt3.ggpht.com/OtB--dcR_oNUZUaUsuyk2ShT5nFYjEcj9Yxx50-Nner03vXKt4IWXtP--JrnSGQbwRSHYuVb38g=s900-c-k-c0x00ffffff-no-rj",
    date: "11 Jul, 2022",
    time: "6 min read",
  },
  {
    id: 4,
    category: "Article",
    img: "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    title: "Boost your conversion rate",
    author: "Traversy Media",
    a_img:
      "https://yt3.ggpht.com/ytc/AMLnZu-fB-c8gczS81r-VBWgzndcSZgd1zGA2QcYfACHMg=s900-c-k-c0x00ffffff-no-rj",
    date: "11 Jul, 2022",
    time: "6 min read",
  },
  {
    id: 5,
    category: "Article",
    img: "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    title: "Speech Recognition with JavaScript",
    author: "Learn with sumit",
    a_img: "https://avatars.githubusercontent.com/u/73503432?v=4",
    date: "11 Jul, 2022",
    time: "6 min read",
  },
  {
    id: 6,
    category: "Article",
    img: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    title: "Beautify GitHub profile",
    author: "Net Ninja",
    a_img: "https://www.filepicker.io/api/file/JIGkr7PVQeuw9rcBtGuB",
    date: "11 Jul, 2022",
    time: "6 min read",
  },
  {
    id: 7,
    category: "Article",
    img: "https://images.unsplash.com/photo-1573495612522-9e401cc84a4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    title: "Boost your conversion rate",
    author: "Learn with sumit",
    a_img: "https://avatars.githubusercontent.com/u/73503432?v=4",
    date: "11 Jul, 2022",
    time: "6 min read",
  },
  {
    id: 8,
    category: "Article",
    img: "https://images.unsplash.com/photo-1573495782176-b536322e5ad6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    title: "The CSS Hack You Need To Know!",
    author: "Traversy Media",
    a_img:
      "https://yt3.ggpht.com/ytc/AMLnZu-fB-c8gczS81r-VBWgzndcSZgd1zGA2QcYfACHMg=s900-c-k-c0x00ffffff-no-rj",
    date: "11 Jul, 2022",
    time: "6 min read",
  },
  {
    id: 9,
    category: "Article",
    img: "https://images.unsplash.com/photo-1599658880436-c61792e70672?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2VvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "Improve your customer experience",
    author: "Edureka",
    a_img:
      "https://yt3.ggpht.com/OtB--dcR_oNUZUaUsuyk2ShT5nFYjEcj9Yxx50-Nner03vXKt4IWXtP--JrnSGQbwRSHYuVb38g=s900-c-k-c0x00ffffff-no-rj",
    date: "11 Jul, 2022",
    time: "6 min read",
  },
  {
    id: 10,
    category: "Article",
    img: "https://images.unsplash.com/photo-1616469829718-0faf16324280?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c2VvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "Use Google like a pro",
    author: "Learn with sumit",
    a_img: "https://avatars.githubusercontent.com/u/73503432?v=4",
    date: "11 Jul, 2022",
    time: "6 min read",
  },
  {
    id: 11,
    category: "Article",
    img: "https://images.unsplash.com/flagged/photo-1556514767-5c270b96a005?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHNlb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "How to use search engine optimization to drive sales",
    author: "Net Ninja",
    a_img: "https://www.filepicker.io/api/file/JIGkr7PVQeuw9rcBtGuB",
    date: "11 Jul, 2022",
    time: "6 min read",
  },
  {
    id: 12,
    category: "Article",
    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHNlb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "Building a chat app with Socket.io and React ",
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
