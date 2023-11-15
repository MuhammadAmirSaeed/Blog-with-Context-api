import React, { useContext } from "react";
import { AppContext } from "../Context/appContext";
import Spinner from "./Spinner";
import DetailBlog from "./DetailBlog";

const Blogs = () => {
  const { loading, posts } = useContext(AppContext);
  return (
    <div className="w-11/12 max-w-[580px] py-3 flex flex-col gap-y-7 mt-[78px] mb-[78px] justify-center items-center min-h-screen ">
      {loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <div>
          <h1>No Blogs Found</h1>
          <p>Please try again later</p>
        </div>
      ) : (
        posts.map((post) => (
          <DetailBlog key={post.id} post={post} />
          /* <div key={post.id}>
            <p className="text-lg font-bold ">{post.title}</p>
            <p className="text-sm ">
              By <span className="italic">{post.author}</span> on{" "}
              <span className="font-bold underline ">{post.category}</span>
            </p>
            <p className="mt-1 text-sm">Posted on {post.date}</p>
            <p className="mt-4 text-md">{post.content}</p>
            <div className="flex mt-2 gap-x-2">
              {post.tags.map((tag) => {
                return (
                  <span className="text-xs font-bold text-blue-700 underline ">{`#${tag}`}</span>
                );
              })}
            </div>
          </div> */
        ))
      )}
    </div>
  );
};

export default Blogs;
