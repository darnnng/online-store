import React, { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { RoutePath } from './../constants/routeVariables';

interface IPrivateRouteProps {
  children: React.ReactNode | JSX.Element;
}

export const PrivateRoute: FC<IPrivateRouteProps> = ({ children }) => {
  const isAuth = false;

  if (!isAuth) {
    return <Navigate to={`/${RoutePath.LOGIN}`} replace />;
  }

  return <>{children}</>;
};
