import React from 'react';
import Loading from '../../components/Loading';

// Lazily load routes and code split with webpack
const LazyFriendsPage = React.lazy(() => import(/* webpackChunkName: "LoginPage" */ './Friends'));

const FriendsPage = () => (
  <React.Suspense fallback={<Loading />}>
    <LazyFriendsPage />
  </React.Suspense>
);

export default FriendsPage;