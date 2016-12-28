import Vue from 'vue'
import App from './App.vue'
import VueFullpage from './assets/lib/index.js'
// import './assets/lib/vue-fullpage.css'
Vue.use(VueFullpage, {
  start: 1,
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
