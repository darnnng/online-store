import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Spinner } from '../UI/spinner';
import { Header } from './../header';

export const Layout = observer(() => {
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Header />
        <Outlet />
      </Suspense>
    </>
  );
});
