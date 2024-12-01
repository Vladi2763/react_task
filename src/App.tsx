import { Routes, Route } from 'react-router-dom';
import CommentsPage from 'pages/comments';
import PostsPages from 'pages/posts';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PostsPages />} />
      <Route path="posts/:postid/comments" element={<CommentsPage />} />
    </Routes>
  );
};

export default App;
