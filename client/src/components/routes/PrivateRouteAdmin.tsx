import { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import userStore from '../../store/UserStore';
import { RoutePath } from '../../constants/routeVariables';
import { IRouteProps } from './Route.interface';

export const PrivateRouteAdmin: FC<IRouteProps> = observer(({ children }) => {
  const isAdmin = userStore.user?.role === 'Admin';
  if (!isAdmin) {
    return <Navigate to={`/${RoutePath.CATALOG}`} replace />;
  }

  return <>{children}</>;
});
