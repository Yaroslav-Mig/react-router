import { NavLink, Outlet } from 'react-router-dom';
import '../index.css';
import CustomLink from './CustomLink';

const setActive = ({ isActive }: { isActive: boolean }): string | undefined => {
  return isActive ? 'active-link' : undefined;
};

const Layout = () => {
  return (
    <>
      <header>
        <NavLink to='/' className={setActive}>
          Home
        </NavLink>
        <NavLink to='/blogs' className={setActive}>
          Blog
        </NavLink>
        <CustomLink to='/about'>
          About
				</CustomLink>
      </header>

      <main className='container'>
        <Outlet />
      </main>

      <footer className='footer'>React Router tutorial 2023</footer>
    </>
  );
};

export default Layout;
