import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Provider } from './AuthContext';

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState({});

  const login = async (username, password) => {
    await new Promise(resolve => setTimeout(resolve, 500));

    if (username !== 'admin' || password !== 'password1') {
      return {
        errors: {
          password: 'Incorrect username or password.',
        },
      };
    }

    setLoggedIn(true);
    setUserData({
      username,
    });

    return {};
  };

  return (
    <Provider value={{
      isLoggedIn,
      userData,
      login,
    }}
    >
      {children}
    </Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

AuthProvider.defaultProps = {
  children: null,
};

export default AuthProvider;
