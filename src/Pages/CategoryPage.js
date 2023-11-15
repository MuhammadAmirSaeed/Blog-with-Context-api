import React from "react";
import Header from "../components/Header";
import { useNavigate, useLocation } from "react-router-dom";
import Blogs from "../components/Blogs";
import Pagination from "../components/Pagination";

const CategoryPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const category = location.pathname.split("/").at(-1);
  return (
    <div>
      <Header />
      <div>
        <button onClick={() => navigate(-1)}>back</button>
        <h2>
          blog Category <span>{category}</span>
        </h2>
      </div>
      <Blogs />
      <Pagination />
    </div>
  );
};

export default CategoryPage;
