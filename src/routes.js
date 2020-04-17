import React from 'react';

const Home = React.lazy(() => import('./views/Home/Home'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/home', exact: true, name: 'Home', component: Home },
];

export default routes;
