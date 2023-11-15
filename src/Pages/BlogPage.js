import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../Context/appContext";
import { BaseUrl } from "../baseUrl";
import Header from "../components/Header";
import DetailBlog from "../components/DetailBlog";
const BlogPage = () => {
  const [blog, setBlog] = useState(null);
  const [relatedBlog, setRelatedBlog] = useState([]);
  const location = useLocation();
  const { loading, setLoading } = useContext(AppContext);
  const blogId = location.pathname.split("/").at(-1);
  const navigation = useNavigate();

  async function fetchRelatedBlog() {
    setLoading(true);

    let url = `${BaseUrl}/get-blog?blogId=${blogId}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setBlog(data.blog);
      setRelatedBlog(data.relatedBlogs);
    } catch (error) {
      console.log("error in Blog page");
      setBlog(null);
      setRelatedBlog([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    if (blogId) {
      fetchRelatedBlog();
    }
  }, [location.pathname]);

  return (
    <div>
      <Header />
      <div>
        <button onClick={() => navigation(-1)}>back</button>
      </div>
      <div>
        {loading ? (
          <div>
            <p>Loading</p>
          </div>
        ) : blog ? (
          <div>
            <DetailBlog post={blog} />
            <h2>relatedBlog</h2>
            {relatedBlog &&
              relatedBlog.map((post) => (
                <div key={blogId}>
                  <DetailBlog post={post} />
                </div>
              ))}
          </div>
        ) : (
          <div>
            <h2>Blog not found</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
