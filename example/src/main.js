import Vue from 'vue'
import App from './App.vue'
import TouchEmulator from 'hammer-touchemulator/touch-emulator.js'
import '../../vue-fullpage.css'
import 'normalize.css'
import 'animate.css'
import VueFullpage from '../../index.js'

Vue.use(VueFullpage)
TouchEmulator()

/* eslint-disable */
new Vue({
  el: '#app',
  render: h => h(App)
})
/* eslint-enable */
