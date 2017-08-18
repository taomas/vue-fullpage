<template>
    <div class="fullpage-container">
      <div class="fullpage-wp" v-fullpage="opts">
        <div class="page-1 page">
          <p class="part-1" v-animate="{value: 'bounceInLeft'}" @click="showMessage">vue-fullpage</p>
        </div>
        <div class="page-2 page">
          <p class="part-2" v-animate="{value: 'bounceInRight'}">vue-fullpage</p>
        </div>
        <div class="page-3 page">
          <p class="part-3" v-animate="{value: 'bounceInLeft', delay: 0}">vue-fullpage</p>
          <p class="part-3" v-animate="{value: 'bounceInRight', delay: 600}">vue-fullpage</p>
          <p class="part-3" v-animate="{value: 'zoomInDown', delay: 1200}">vue-fullpage</p>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'demo',
  data() {
    return {
      isShowPage: true,
      opts: {
        start: 0,
        dir: 'v',
        loop: false,
        duration: 500,
        preventWechat: true,
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
    showMessage() {
    }
  },
  created() {
    setTimeout(() => {
      this.isShowPage = false
    }, 2000)
  }
}
</script>

<style lang='postcss' scoped>


.page p {
  display: block;
  text-align: center;
  font-size: 26px;
  color: #eee;
}
.page-1 {
  padding-top: 100px;
  background: #1bbc9b;
}
.page-2 {
  padding-top: 100px;
  background: #000000;
}
.page-3 {
  padding-top: 50px;
  background: #aabbcc;
}
</style>
