<template>
  <div class="main ly-row-flex flex-start">
    <div class="demo-wrapper">
      <phone></phone>
    </div>
  </div>
</template>

<script>
import Mark from '../components/mark.vue'
import DocInstallation from '../components/doc-installation.vue'
import Phone from '../components/phone.vue'
export default {
  name: 'home',
  data() {
    return {
      msg: 'vue-fullpage',
      animateClass: 'bounceInLeft',
      opts: {
        start: 0,
        dir: 'v',
        loop: false,
        duration: 500,
        beforeChange: function (prev, next) {
          console.log('before', prev, next)
        },
        afterChange: function (prev, next) {
          console.log('after', prev, next)
        }
      }
    }
  },
  methods: {
  },
  created() {
  },
  components: {
    marked: Mark,
    'phone': Phone,
    'doc-installation': DocInstallation
  }
}
</script>

<style lang='postcss' scoped>
.main {
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
  .demo-wrapper {
    box-sizing: border-box;
    position: relative;
    width: 300px;
    height: 556px;
    padding: 80px 20px;
    margin-top: 30px;
    background: url('../assets/image/phone_bg.png');
    background-size: 100% 100%;
  }
}
</style>
