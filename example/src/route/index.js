import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '../pages/home.vue'
import Mobile from '../pages/mobile-page.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/mobile',
    name: 'mobile',
    component: Mobile
  },
  {
    path: '*',
    redirect: '/'
  }
]

export default new VueRouter({
  routes
})
