import Vue from 'vue'
import App from './App'
import VueFullpage from '../npm/vue-fullpage'
// import '../mobile-console.min.css'
// var mobileConsole = require('../mobile-console.min.js')
Vue.use(VueFullpage)

// mobileConsole.show()
/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})
