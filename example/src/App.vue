<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
import phone from './components/phone.vue'
export default {
  data () {
    return {
    }
  },
  components: {
    'phone': phone
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

.app-header {
  box-sizing: border-box;
  width: 100%;
  height: 90px;
  padding-left: 60px;
  color: #fff;
  border-bottom: 1px solid #eee;
  .header-name {
    color: #eee;
    font-size: 36px;
    margin: 0;
    text-shadow: 2px 3px 0 rgba(0,0,0,.2);
  }
}

.app-content {
  box-sizing: border-box;
  width: 100%;
  height: auto;
  min-height: calc(100% - 90px);
  padding: 30px;
  color: #eee;
  .sub-content {
    position: relative;
    box-sizing: border-box;
    width: 75%;
    height: auto;
    border-left: 1px solid #ccc;
    .doc-desc {
      box-sizing: border-box;
      width: calc(100% - 350px);
      height: auto;
      padding: 0 30px;
    }
  }
  .doc-desc {
    box-sizing: border-box;
    width: calc(100% - 350px);
    height: auto;
    padding: 0 30px;
  }
}
</style>
