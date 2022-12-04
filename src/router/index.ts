import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

import HomeView from '../views/HomeView.vue'
// import CategoriScreen1 from '../views/Categori_1_ScreenView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
    {
      path: '/cianjur',
      name: 'cianjur',
      component: () => import('../views/CianjurView.vue')
    },
    // {
    //   path: '/cat-1',
    //   name: 'categori-1',
    //   component: CategoriScreen_1
    // }
  ]
})

export default router
