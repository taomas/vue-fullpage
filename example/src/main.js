import Vue from 'vue'
import App from './App.vue'
import '../../vue-fullpage.css'
import 'animate.css'
import VueFullpage from '../../index.js'

Vue.use(VueFullpage)

/* eslint-disable */
new Vue({
  el: '#app',
  render: h => h(App)
})
/* eslint-enable */
