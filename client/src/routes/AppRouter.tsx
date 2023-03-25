import React, { lazy } from 'react';
import { Routes, Route, Navigate, BrowserRouter, Outlet } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { toJS } from 'mobx';
import usersStore from './../store/UserStore';
import { Layout } from './../components/layout';
import { RoutePath } from './../constants/routeVariables';

const LogInPage = lazy(() => import('./../components/pages/LogInPage'));
const SignUpPage = lazy(() => import('./../components/pages/SignUpPage'));
const CatalogPage = lazy(() => import('./../components/pages/CatalogPage'));
const BasketPage = lazy(() => import('./../components/pages/BasketPage'));
const AdminPage = lazy(() => import('./../components/pages/AdminPage'));
const ItemPage = lazy(() => import('./../components/pages/ItemPage'));

export const AppRouter = observer(() => {
  const isAuth = toJS(usersStore.findIsAuth);
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutePath.HOME} element={<Layout />}>
          <Route path="/" element={<Navigate to={RoutePath.LOGIN} replace />} />
          <Route path={RoutePath.LOGIN} element={<LogInPage />} />
          <Route path={RoutePath.SIGNUP} element={<SignUpPage />} />

          <Route path={RoutePath.CATALOG} element={<Outlet />}>
            <Route index element={<CatalogPage />} />
            <Route path=":id" element={<ItemPage />} />
          </Route>

          <Route path={RoutePath.BASKET} element={<BasketPage />} />
          <Route path={RoutePath.ADMIN} element={<AdminPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
});
