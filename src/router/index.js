import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'tendencias',
      meta: { title: "Tendencias" },
      component: () => import('../views/TrendView.vue')
    },
    {
      path: '/descubrir',
      name: 'descubrir',
      meta: { title: "Descubrir" },
      component: () => import('../views/DiscoverView.vue')
    },
    {
      path: '/buscar',
      name: 'buscar',
      meta: { title: "Buscar" },
      component: () => import('../views/SearchView.vue')
    },
    {
      path: '/info',
      name: 'info',
      meta: { title: "Información" },
      component: () => import('../views/InfoView.vue')
    },
    
  ]
})
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  next();
});
export default router
