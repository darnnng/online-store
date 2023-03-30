import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Spinner } from '../UI/spinner';
import { Header } from './../header';

export const Layout = () => {
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Header />
        <Outlet />
      </Suspense>
    </>
  );
};
