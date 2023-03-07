import { Route, Routes } from 'react-router-dom';

import Layout from './components/Layout';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import BlogPage from './pages/Blog';
import PostPage from './pages/Post';
import EditPost from './pages/EditPost';
import CreatePost from './pages/CreatePost';
import NotFoundPage from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='posts' element={<BlogPage />} />
        <Route path='posts/:id' element={<PostPage />} />
        <Route path='posts/:id/edit' element={<EditPost />} />
        <Route path='posts/new' element={<CreatePost />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
