import { Route, Routes } from 'react-router-dom';

import Layout from './components/Layout';
import AboutPage from './pages/About';
import BlogPage from './pages/Blog';
import HomePage from './pages/Home';
import NotFoundPage from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='/blogs' element={<BlogPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
