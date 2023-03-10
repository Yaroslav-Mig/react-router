import { Navigate, Route, Routes } from 'react-router-dom';

import Layout from './components/Layout';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import BlogPage from './pages/Blog';
import PostPage from './pages/Post';
import EditPost from './pages/EditPost';
import CreatePost from './pages/CreatePost';
import LoginPage from './pages/LogIn';
import NotFoundPage from './pages/NotFound';

import RequiredAuth from './hoc/RequiredAuth';
import AuthProvider from './hoc/AuthProvider';

function App() {
	return (
		<AuthProvider>
			<Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='about-us' element={<Navigate to='/about' replace />} />
        <Route path='posts' element={<BlogPage />} />
        <Route path='posts/:id' element={<PostPage />} />
        <Route path='posts/:id/edit' element={<EditPost />} />
        <Route path='posts/new' element={
            <RequiredAuth>
              <CreatePost />
            </RequiredAuth>
          }
        />
        <Route path='/login' element={<LoginPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
		</AuthProvider>
  );
}

export default App;
