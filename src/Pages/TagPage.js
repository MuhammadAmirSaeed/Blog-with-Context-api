import React from "react";
import Header from "../components/Header";
import { useLocation, useNavigate } from "react-router-dom";
import Blogs from "../components/Blogs";
import Pagination from "../components/Pagination";
const TagPage = () => {
  const navigation = useNavigate();
  const location = useLocation();
  const tag = location.pathname.split("/").at(-1);
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <button onClick={() => navigation(-1)}>back</button>
        <h2>
          blog Tagged <span>{tag}</span>
        </h2>
      </div>
      <Blogs />
      <Pagination />
    </div>
  );
};

export default TagPage;
