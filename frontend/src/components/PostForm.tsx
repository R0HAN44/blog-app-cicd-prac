import { useState } from 'react';
import axios from 'axios';
import './PostStyles.css';

const API_BASE = 'http://localhost:3000'; // Change if needed

export default function PostForm() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !body) return alert('Fill all fields');
    try {
      await axios.post(`${API_BASE}/posts`, { title, content: body });
      setTitle('');
      setBody('');
    } catch (err) {
      console.error('Failed to post:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="post-form">
      <h2 className="form-heading">Create Post</h2>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="form-input"
      />
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Body"
        className="form-textarea"
      />
      <button type="submit" className="submit-button">Submit</button>
    </form>
  );
}