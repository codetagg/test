const routes = [
  {
    path: '',
    component: () => import('../Pages/Home.vue'),
    name: 'home'
  },
 {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../Pages/Dashboard.vue'),
    },
 {
      path: '/login',
      name: 'login',
      component: () => import('../Pages/Login.vue'),
    },
]

export default routes;
