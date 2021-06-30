import React from 'react';
import Loading from '../../components/Loading';

// Lazily load routes and code split with webpack
const LazyActivityPage = React.lazy(() => import(/* webpackChunkName: "LoginPage" */ './Activity'));

const ActivityPage = () => (
  <React.Suspense fallback={<Loading />}>
    <LazyActivityPage />
  </React.Suspense>
);

export default ActivityPage;