import './assets/lib/vue-fullpage.css'

import Vue from 'vue'
import App from './App.vue'
import VueFullpage from './assets/lib/index.js'
Vue.use(VueFullpage, {
  start: 0,
  dir: 'v',
  duration: 500,
  beforeChange: function (prev, next) {
  },
  afterChange: function (prev, next) {
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
