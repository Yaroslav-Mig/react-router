import { NavLink, Outlet } from 'react-router-dom';
import { useAuthContext } from '../hoc/useAuthContext';
import '../index.css';

import Logout from './Logout';

const setActive = ({ isActive }: { isActive: boolean }): string | undefined => {
  return isActive ? 'active-link' : undefined;
};

const Layout = () => {
  const { user } = useAuthContext();
  const btnLogout = user ? <Logout /> : null;

  return (
    <>
      <header>
        <NavLink to='/' className={setActive}>
          Home
        </NavLink>
        <NavLink to='/posts' className={setActive}>
          Blog
        </NavLink>
        <NavLink to='/about' className={setActive}>
          About
        </NavLink>
        {btnLogout}
      </header>

      <main className='container'>
        <Outlet />
      </main>

      <footer className='footer'>React Router tutorial 2023</footer>
    </>
  );
};

export default Layout;
