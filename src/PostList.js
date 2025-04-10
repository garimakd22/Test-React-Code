import React, { useEffect, useState } from "react";

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        if (!response.ok) throw new Error("Failed to fetch Data");
        const data = await response.json();
        console.log("posts are:", data);
        setPosts(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, []);

  if (loading) return <p> Loading the data...</p>;
  if (error) return <p> Error: {error}</p>;

  return (
    <div>
      <h2>Posts</h2>
      {posts.map((post) => (
        <div key={post.id} data-testid="post">
          <p>{post.title}</p>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}
