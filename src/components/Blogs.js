import React from "react";
import { useSelector } from "react-redux";
const Blogs = () => {
  const state = useSelector((state) => state);
  console.log(state);
  return (
    <div>
      <div>hi</div>
    </div>
  );
};

export default Blogs;
