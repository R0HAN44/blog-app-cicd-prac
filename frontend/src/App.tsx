import PostForm from "./components/PostForm";
import PostList from "./components/PostList";


export default function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>📝 Blog App</h1>
      <PostForm />
      <hr />
      <PostList />
    </div>
  );
}
