<template>
<div class="demo-wrapper">
  <div class="fullpage-container">
    <div class="fullpage-wp" v-fullpage="opts">
      <div class="page-1 page">
        <p class="part-1" v-animate="'bounceInLeft'">vue-fullpage</p>
      </div>

      <div class="page-2 page">
        <p class="part-2" v-animate="'bounceInRight'">vue-fullpage</p>
      </div>

      <div class="page-3 page">
        <p class="part-3" v-animate="'bounceInDown'">vue-fullpage</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'demo',
  data() {
    return {
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
  }
}
</script>

<style lang='postcss' scoped>
.demo-wrapper {
  box-sizing: border-box;
  position: fixed;
  top: 50%;
  right: 30px;
  width: 300px;
  height: 556px;
  padding: 80px 20px;
  transform: translate(0, -50%);
  background: url('../assets/image/phone_bg.png');
  background-size: 100% 100%;
}
  
.page p {
  display: block;
  margin-top: 100px;
  text-align: center;
  font-size: 26px;
  color: #eee;
}
.page-1 {
  background: #1bbc9b;
}
.page-2 {
  background: #000000;
}
.page-3 {
  background: #aabbcc;
}
</style>
