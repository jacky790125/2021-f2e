import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/tour',
    name: 'Tour',
    component: () => import('../views/Tour.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
