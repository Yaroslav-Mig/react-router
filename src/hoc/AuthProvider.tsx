import { createContext, FC, useState } from 'react';
import { HOCType } from './RequiredAuth';

export interface AuthContextType {
  user: string;
  login: (name: string, callBack: FuncType) => void;
  logout: (callBack: FuncType) => void;
}
type FuncType = () => void;

export const AuthContext = createContext({} as AuthContextType);

const AuthProvider: FC<HOCType> = ({ children }) => {
  const [user, setUser] = useState<string>('');

  const login = (name: string, callBack: FuncType): void => {
    setUser(name);
    callBack();
	};
	
  const logout = (callBack: FuncType): void => {
    setUser('');
    callBack();
	};

  const valueContext: AuthContextType = {
    user,
    login,
    logout,
  };

  return <AuthContext.Provider value={valueContext}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
