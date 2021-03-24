import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/angebote',
    name: 'Angebote',
    // route level code-splitting
    // this generates a separate chunk (angebote.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "angebote" */ '../views/Angebote.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
