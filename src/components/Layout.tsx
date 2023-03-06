import { Link, Outlet } from 'react-router-dom';
import '../index.css';

const Layout = () => {
  return (
    <>
      <header>
        <Link to='/'>Home</Link>
        <Link to='/blogs'>Blog</Link>
        <Link to='/about'>About</Link>
      </header>

      <main className='container'>
        <Outlet />
      </main>

      <footer className='footer'>2023</footer>
    </>
  );
};

export default Layout;
