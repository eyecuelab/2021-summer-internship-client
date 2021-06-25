import React from 'react';
import Loading from '../../components/Loading';
import Header from '../../components/Header'

// Lazily load routes and code split with webpack
const LazyHomePage = React.lazy(() => import(/* webpackChunkName: "HomePage" */ './Home'));

const HomePage = () => (
  <React.Suspense fallback={<Loading />}>
    <Header />
    <LazyHomePage />
  </React.Suspense>
);

export default HomePage;
