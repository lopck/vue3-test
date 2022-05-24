import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
  { path: '/router1', component: () => import('../components/router1.vue') },
  { path: '/router2', component: () => import('../components/router2.vue') },
  { path: '/router3', component: () => import('../components/router3.vue') },
  { path: '/router4', component: () => import('../components/router4.vue') }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
