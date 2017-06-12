<template>
  <div id="app">
    <home></home>
  </div>
</template>

<script>
import Home from './pages/home.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: 'VueFullpage'
    }
  },
  components: {
    home: Home
  }
}
</script>

<style>
@import './assets/css/base.css';
body {
  margin: 0;
  padding: 0;
  background: #32495f;
}
</style>
