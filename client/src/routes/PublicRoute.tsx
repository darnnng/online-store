import React, { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { RoutePath } from './../constants/routeVariables';
import { IRouteProps } from './Route.interface';
import userStore from './../store/UserStore';

export const PublicRoute: FC<IRouteProps> = observer(({ children }) => {
  const isAuth = userStore.isAuth;

  if (isAuth) {
    return <Navigate to={`/${RoutePath.CATALOG}`} replace />;
  }

  return <>{children}</>;
});
