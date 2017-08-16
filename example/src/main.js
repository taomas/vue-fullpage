import Vue from 'vue'
import TouchEmulator from 'hammer-touchemulator/touch-emulator.js'
import App from './App.vue'
import 'normalize.css'
import 'animate.css'
import 'vue-fullpage/vue-fullpage.css'
// import VueFullpage from 'vue-fullpage'
// import '../../vue-fullpage.css'
import VueFullpage from '../../index.js'
import router from './route/index.js'

Vue.use(VueFullpage)
TouchEmulator()

/* eslint-disable */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
/* eslint-enable */
