import DashboardLayout from '@/views/Layout/DashboardLayout.vue';
import AuthLayout from '@/views/Pages/AuthLayout.vue';

import NotFound from '@/views/NotFoundPage.vue';

const routes = [
  {
    path: '/',
    redirect: 'dashboard',
    component: DashboardLayout,
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('../views/Dashboard.vue')
      },
      {
        path: '/icons',
        name: 'icons',
        component: () => import('../views/Icons.vue')
      },
      {
        path: '/profile',
        name: 'profile',
        component: () => import('../views/Pages/UserProfile.vue')
      },
      {
        path: '/maps',
        name: 'maps',
        component: () => import('../views/GoogleMaps.vue')
      },
      {
        path: '/tables',
        name: 'tables',
        component: () => import('../views/RegularTables.vue')
      }
    ]
  },
  {
    path: '/',
    redirect: 'login',
    component: AuthLayout,
    children: [
      {
        path: '/login',
        name: 'login',
        component: () => import('../views/Pages/Login.vue')
      },
      {
        path: '/register',
        name: 'register',
        component: () => import('../views/Pages/Register.vue')
      },
      { path: '*', component: NotFound }
    ]
  }
];

export default routes;