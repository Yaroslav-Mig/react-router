import { useContext } from 'react';
import { AuthContext, AuthContextType } from './AuthProvider';

export const useAuthContext = (): AuthContextType => useContext(AuthContext);
