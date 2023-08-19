import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/AboutView.vue')
  },
  {
    path: '/zoodogood',
    name: 'zoodogood',
    component: () => import(/* webpackChunkName: "zoodogood" */ '@/views/ZoodogoodPage.vue')
  },
  {
    path: '/yakyzzza',
    name: 'yakyzzza',
    component: () => import(/* webpackChunkName: "yakyzzza" */ '@/views/YakyzzzaPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export { routes };
export default router
