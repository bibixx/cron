import { createContext } from 'react';

const AuthContext = createContext({
  isLoggedIn: false,
  userData: {},
  login: () => {},
});

export const { Provider, Consumer } = AuthContext;

export default AuthContext;
