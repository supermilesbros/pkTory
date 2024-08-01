
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/HomePage.vue') },
      { path: 'inventory', component: () => import('pages/InventoryPage.vue') },
      { path: 'account', component: () => import('pages/AccountPage.vue') },
      { path: 'settings', component: () => import('pages/SettingsPage.vue') },

    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
