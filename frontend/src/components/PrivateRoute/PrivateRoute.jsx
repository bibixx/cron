import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

import AuthContext from '../AuthProvider/AuthContext';

const PrivateRoute = ({
  publicComponent,
  publicRender,
  publicChildren,
  ...props
}) => {
  const { isLoggedIn } = useContext(AuthContext);

  if (!isLoggedIn) {
    if (!publicComponent && !publicRender && !publicChildren) {
      return (<Redirect path="/" />);
    }

    return (
      <Route
        {
          ...{
            ...props,
            component: publicComponent,
            render: publicRender,
            children: publicChildren,
          }
        }
      />
    );
  }

  return (
    <Route {...props} />
  );
};

PrivateRoute.propTypes = {
  publicComponent: PropTypes.func,
  publicRender: PropTypes.func,
  publicChildren: PropTypes.func,
};

PrivateRoute.defaultProps = {
  publicComponent: null,
  publicRender: null,
  publicChildren: null,
};

export default PrivateRoute;
