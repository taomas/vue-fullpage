import Vue from 'vue'
import App from './App.vue'
import '../../vue-fullpage.css'
import VueFullpage from 'vue-fullpage'

Vue.use(VueFullpage)

/* eslint-disable */
new Vue({
  el: '#app',
  render: h => h(App)
})
/* eslint-enable */
