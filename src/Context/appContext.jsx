import { createContext, useState } from "react";
import { BaseUrl } from "../baseUrl";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();
export default function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page, setPages] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const navigate = useNavigate();

  async function fetchPostData(page = 1, tag = null, category) {
    setLoading(true);
    let url = `${BaseUrl}/get-blogs?page=${page}`;
    if (tag) {
      url += `&tag=${tag}`;
    }
    if (category) {
      url += `&category=${category}`;
    }
    try {
      const result = await fetch(url);
      const data = await result.json();
      setPosts(data.posts);
      setPages(data.page);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.log("error is fetching");
      setPages(1);
      setPosts([]);
      setTotalPages(null);
    }
    setLoading(false);
  }
  function handlePageChange(page) {
    setPages(page);
    navigate({ search: `?page=${page}` });
    // fetchPostData(page);
  }

  const value = {
    loading,
    setLoading,
    posts,
    setPosts,
    page,
    setPages,
    totalPages,
    setTotalPages,
    handlePageChange,
    fetchPostData,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
