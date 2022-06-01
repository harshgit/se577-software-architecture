import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('src/pages/AppPages/Home.vue') },
    { path: '/gitrepos', component: () => import('pages/AppPages/GitRepoPage.vue') },
    { path: '/about', component: () => import('pages/AppPages/About.vue') },
    { path: '/repodetails', component: () => import('pages/AppPages/GitRepoDetailsPage.vue') },
    { path: '/gist', component: () => import('pages/AppPages/GitGistPage.vue') }
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
