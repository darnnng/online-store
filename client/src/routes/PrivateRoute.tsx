import React, { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import userStore from './../store/UserStore';
import { RoutePath } from './../constants/routeVariables';
import { IPrivateRouteProps } from './PrivateRoute.interface';

export const PrivateRoute: FC<IPrivateRouteProps> = observer(({ children }) => {
  const isAuth = userStore.isAuth;

  if (!isAuth) {
    return <Navigate to={`/${RoutePath.LOGIN}`} replace />;
  }

  return <>{children}</>;
});
