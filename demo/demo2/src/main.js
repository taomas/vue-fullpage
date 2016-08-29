// import 'normalize.css'
import '../mobile-console.min.css'
import Vue from 'vue'
import App from './App'
import VueFullpage from '../npm/vue-fullpage'
var mobileConsole = require('../mobile-console.min.js')
Vue.use(VueFullpage)

mobileConsole.show()
/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})
