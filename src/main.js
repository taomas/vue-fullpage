import 'normalize.css'
import Vue from 'vue'
import App from './App'
import VueFullpage from './vue-fullpage'
Vue.use(VueFullpage)
/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})
