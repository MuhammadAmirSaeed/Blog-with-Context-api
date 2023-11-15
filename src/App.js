import "./App.css";

import { useContext, useEffect } from "react";
import { AppContext } from "./Context/appContext";
import { Routes, Route, useLocation, useSearchParams } from "react-router-dom";
import Home from "./Pages/Home";
import TagPage from "./Pages/TagPage";
import CategoryPage from "./Pages/CategoryPage";
import BlogPage from "./Pages/BlogPage";

function App() {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const { fetchPostData } = useContext(AppContext);

  useEffect(() => {
    const page = searchParams.get("page") ?? 1;

    if (location.pathname.includes("tags")) {
      const tag = location.pathname.split("/").at(-1).replaceAll("-", " ");
      fetchPostData(Number(page), tag);
    } else if (location.pathname.includes("categories")) {
      const category = location.pathname.split("/").at(-1).replaceAll("-", " ");
      fetchPostData(Number(page), null, category);
    } else {
      fetchPostData(Number(page));
    }
  }, [location.pathname, location.search]);

  return (
    <div className=" flex flex-col text-center">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:blogId" element={<BlogPage />} />
        <Route path="/tags/:tag" element={<TagPage />} />
        <Route path="/categories/:category" element={<CategoryPage />} />
      </Routes>
    </div>
  );
}

export default App;
