import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Header } from '@components/header';
import { Spinner } from '../UI/spinner';

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
