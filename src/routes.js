import React from 'react';

const Home = React.lazy(() => import('./views/Home/Home'));
const Projects = React.lazy(() => import('./views/Projects/Projects'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/home', exact: true, name: 'Home', component: Home },
  { path: '/projects', exact: true, name: 'Projects', component: Projects },
];

export default routes;
