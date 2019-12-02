import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/user',
    name: 'user top page ',
    component: () => import(/* webpackChunkName: "about" */ '../views/User.vue')
  },
  {
    path: '/counselor',
    name: 'counselor top page',
    component: () => import(/* webpackChunkName: "about" */ '../views/Counselor.vue')
  },
  {
    path: '/plan',
    name: 'create or modify plan',
    component: () => import(/* webpackChunkName: "about" */ '../views/Plan.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
