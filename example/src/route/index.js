import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import DocInstallation from '../components/doc-installation.vue'

const routes = [
  {
    path: '/installation',
    name: 'installation',
    component: DocInstallation
  },
  {
    path: '*',
    redirect: '/installation'
  }
]

export default new VueRouter({
  routes
})
