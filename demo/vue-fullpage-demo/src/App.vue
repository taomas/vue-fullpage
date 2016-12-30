<template>
  <div id="app">
    <div class="fullpage-wrap">
      <div class="vue-fullpage-demo" v-fullpage>
        <div class="page-1 page">
          <p class="part-1" v-animate="'fadeInLeft'">{{msg}}</p>
        </div>
        <div class="page-2 page">
          <p class="part-2" v-animate="'fadeInRight'">{{msg}}</p>
        </div>
        <div class="page-3 page">
          <p class="part-3" v-animate="'fadeInTop'">{{msg}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'VueFullpage'
    }
  }
}
</script>

<style>
@import './assets/lib/vue-fullpage.css';
body {
  margin: 0;
  padding: 0;
}

.fullpage-wrap {
  position: absolute;
  width: 100%;
  height: 100%;
  font-size: 100px;
  text-align: center;
}

.page-1 {
  background: #1bbc9b;
}
.page-2 {
  background: #000;
}
.page-3 {
  background: #abc;
}

.part-1 {
  padding-top: 500px;
  color: #fff;
}

.part-2 {
  padding-top: 500px;
  color: #fff;
}

.part-3 {
  padding-top: 500px;
  color: #fff;
}

p {
  margin: 0;
}
</style>
