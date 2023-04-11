import React, { lazy } from 'react';
import { Routes, Route, Navigate, BrowserRouter, Outlet } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Layout } from '../layout';
import { RoutePath } from '../../constants/routeVariables';
import { useAuth } from '../../hooks/useAuth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

const LogInPage = lazy(() => import('../pages/LogInPage'));
const SignUpPage = lazy(() => import('../pages/SignUpPage'));
const CatalogPage = lazy(() => import('../pages/CatalogPage'));
const BasketPage = lazy(() => import('../pages/BasketPage'));
const AdminPage = lazy(() => import('../pages/AdminPage'));
const ItemPage = lazy(() => import('../pages/ItemPage'));

export const AppRouter = observer(() => {
  const isAuth = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutePath.HOME} element={<Layout />}>
          <Route
            index
            element={
              isAuth ? (
                <Navigate to={`/${RoutePath.CATALOG}`} replace />
              ) : (
                <Navigate to={`/${RoutePath.LOGIN}`} replace />
              )
            }
          />
          <Route path="/" element={<Navigate to={RoutePath.CATALOG} replace />} />
          <Route
            path={RoutePath.LOGIN}
            element={
              <PublicRoute>
                <LogInPage />
              </PublicRoute>
            }
          />
          <Route
            path={RoutePath.SIGNUP}
            element={
              <PublicRoute>
                <SignUpPage />
              </PublicRoute>
            }
          />
          {/* --TO-DO CHANGE PRIVACY ROUTES */}
          <Route path={RoutePath.CATALOG} element={<Outlet />}>
            <Route index element={<CatalogPage />} />
            <Route path=":id" element={<ItemPage />} />
          </Route>

          <Route
            path={RoutePath.BASKET}
            element={
              <PrivateRoute>
                <BasketPage />
              </PrivateRoute>
            }
          />
          <Route
            path={RoutePath.ADMIN}
            element={
              <PrivateRoute>
                <AdminPage />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
});
