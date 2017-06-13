<template>
  <div class="app">
    <div class="app-header ly-row-flex flex-middle">
      <h1 class="header-name">vue-fullpage</h1>
    </div>
    <div class="app-content ly-row-flex flex-start">
      <router-view></router-view>
      <div class="demo-wrapper">
        <phone></phone>
      </div>
    </div>
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
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  color: #eee;
}

.app-header {
  box-sizing: border-box;
  width: 100%;
  height: 90px;
  padding-left: 40px;
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
  .demo-wrapper {
    box-sizing: border-box;
    position: fixed;
    right: 50px;
    top: 50%;
    width: 300px;
    height: 556px;
    transform: translate(0, -50%);
    padding: 80px 20px;
    margin-top: 30px;
    background: url('./assets/image/phone_bg.png');
    background-size: 100% 100%;
  }
}
</style>
