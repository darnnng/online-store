import React, { lazy } from 'react';
import { Routes, Route, Navigate, BrowserRouter, Outlet } from 'react-router-dom';
import ItemPage from './../components/pages/ItemPage';
import { Layout } from './../components/layout';
import { RoutePath } from './../constants/routeVariables';

const LogInPage = lazy(() => import('./../components/pages/LogInPage'));
const SignUpPage = lazy(() => import('./../components/pages/SignUpPage'));
const CatalogPage = lazy(() => import('./../components/pages/CatalogPage'));
const BasketPage = lazy(() => import('./../components/pages/BasketPage'));
const AdminPage = lazy(() => import('./../components/pages/AdminPage'));

export const AppRouter = () => {
  const isAuth = false;
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path={RoutePath.HOME} element={<Layout />}>
          {' '}
        </Route> */}
        {/* <Route
          index
          element={
            isAuth ? (
              <Navigate to={`/${RoutePath.CATALOG}`} replace />
            ) : (
              <Navigate to={`/${RoutePath.LOGIN}`} replace />
            )
          }
        ></Route> */}
        <Route path="/" element={<Navigate to={RoutePath.LOGIN} replace />} />
        <Route path={RoutePath.LOGIN} element={<LogInPage />} />
        <Route path={RoutePath.SIGNUP} element={<SignUpPage />} />

        <Route path={RoutePath.CATALOG} element={<CatalogPage />} />

        <Route path={RoutePath.BASKET} element={<BasketPage />} />
        <Route path={RoutePath.ADMIN} element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  );
};
