import { useEffect, useState } from 'react';
import axios from 'axios';
import './PostStyles.css';

interface Post {
  id: string;
  title: string;
  content: string;
}

const API_BASE = 'http://localhost:3000';

export default function PostList() {
  const [posts, setPosts] = useState<Post[]>([]);

  const fetchPosts = async () => {
    try {
      const res = await axios.get(`${API_BASE}/posts`);
      setPosts(res?.data);
    } catch (err) {
      console.error('Failed to fetch posts:', err);
    }
  };
  
  const deletePost = async (post: Post) => {
    try {
      const res = await axios.delete(`${API_BASE}/posts/${post.id}`);
      setPosts((prevPosts) => prevPosts.filter((p) => p.id !== post.id));
    } catch (err) {
      console.error('Failed to fetch posts:', err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="post-list">
      <h2 className="list-heading">All Posts</h2>
      {posts.length === 0 && <p className="no-posts">No posts yet.</p>}
      {posts?.map((post) => (
        <div key={post.id} className="post-item">
          <h3 className="post-title">{post?.title}</h3>
          <p className="post-content">{post?.content}</p>
          <button onClick={() => deletePost(post)} className="delete-button">Delete</button>
        </div>
      ))}
    </div>
  );
}