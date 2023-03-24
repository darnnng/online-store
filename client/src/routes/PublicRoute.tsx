import React, { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { RoutePath } from './../constants/routeVariables';

interface IPublicRouteProps {
  children: React.ReactNode | JSX.Element;
}

export const PublicRoute: FC<IPublicRouteProps> = ({ children }) => {
  const isAuth = true;

  if (isAuth) {
    return <Navigate to={RoutePath.CATALOG} replace />;
  }

  return <>{children}</>;
};
