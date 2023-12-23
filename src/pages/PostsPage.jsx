import { useState, useEffect } from "react";
import { JsonPlaceholderAPI } from "../api";
import { Link, useSearchParams } from "react-router-dom";

const PostsPage = () => {
  const [posts, setPosts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const page = searchParams.get("page") || 1;
  const limit = 10;
  const skip = (page - 1) * limit;

  const url = `?limit=${limit}&skip=${skip}`;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await JsonPlaceholderAPI.get(url);
        setPosts(response.data.posts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchPosts();
  }, [url]);

  console.log(page);
  const setPage = (newPage) => {
    setSearchParams({ ...searchParams, page: newPage });
  };



  return (
    <div className="pagination">
      <h3>Posts:</h3>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
      <div className="pagination_btn">
        <button onClick={() => setPage(page > 1 ? page - 1 : 1)}>◀</button>
        <span>Page {page}</span>
        <button onClick={() => setPage(page < 15 ? Number(page) + 1 : 15)}>▶</button>
      </div>
    </div>
  );
};

export default PostsPage;
