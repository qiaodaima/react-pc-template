const routes = [
  { path: '/', redirect: '/index', exact: true },
  {
    path: '/index',
    component: 'index',
    title: '首页',
    exact: true,
  },
];

export default routes;
