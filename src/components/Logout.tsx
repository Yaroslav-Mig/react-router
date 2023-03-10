import { useLocation, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../hoc/useAuthContext';
import '../index.css';

const Logout = (): JSX.Element => {
  const location = useLocation();
  const navigate = useNavigate();

  const { logout } = useAuthContext();

  const btnHandler = (): void => logout(() => {navigate(location.pathname)});

  return (
    <button className='btn-logout' onClick={btnHandler}>
      Logout
    </button>
  );
};

export default Logout;
