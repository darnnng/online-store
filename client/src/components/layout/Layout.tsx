import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './../header';
import { Spinner } from './../spinner';

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
