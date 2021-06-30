import React from 'react';
import Loading from '../../components/Loading';

// Lazily load routes and code split with webpack
const LazyTethersPage = React.lazy(() => import(/* webpackChunkName: "LoginPage" */ './Tethers'));

const TethersPage = () => (
  <React.Suspense fallback={<Loading />}>
    <LazyTethersPage />
  </React.Suspense>
);

export default TethersPage;