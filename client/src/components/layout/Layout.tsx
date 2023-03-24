import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Spinner } from './../spinner';
//import { Header } from '../Header';
//import { Spinner } from '../Spinner';

export const Layout = () => {
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Outlet />
      </Suspense>
    </>
  );
};
