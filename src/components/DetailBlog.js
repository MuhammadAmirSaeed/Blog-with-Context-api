import React from "react";
import { NavLink } from "react-router-dom";

const DetailBlog = ({ post }) => {
  return (
    <div>
      <NavLink to={`/blog/${post.id}`}>
        <span className="text-lg font-bold ">{post.title}</span>
      </NavLink>
      <p className="text-sm ">
        By
        <span>{post.author}</span> on{" "}
        <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}>
          <span>{post.category}</span>
        </NavLink>
      </p>
      <p className="mt-1 text-sm">Posted on {post.date}</p>
      <p className="mt-4 text-md">{post.content}</p>
      <div className="flex mt-2 gap-x-2">
        {post.tags.map((tag, index) => {
          return (
            <NavLink key={index} to={`/tags/${tag.replaceAll(" ", "-")}`}>
              <span className="text-xs font-bold text-blue-700 underline ">{`#${tag}`}</span>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default DetailBlog;
