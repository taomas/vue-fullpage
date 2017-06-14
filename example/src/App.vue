<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style lang='postcss'>
@import './assets/css/base.css';
body {
  margin: 0;
  padding: 0;
  background: #32495f;
}

.app {
  width: 100%;
  height: auto;
  padding-bottom: 30px;
  color: #eee;
}
</style>
