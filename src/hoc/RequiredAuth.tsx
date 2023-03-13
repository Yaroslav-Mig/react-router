import { FC, ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthContext } from './useAuthContext';

export type HOCType = {
  children: ReactNode;
}

const RequiredAuth: FC<HOCType> = ({ children }) => {
  const location = useLocation();
  const {user} = useAuthContext();

  if (!user) {
    return <Navigate to='/login' state={{ from: location }} replace={true}  />;
  }

  return <>{children}</>;
};

export default RequiredAuth;
