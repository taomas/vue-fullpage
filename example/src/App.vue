<template>
  <div id="app">
    <div class="fullpage-container">
      <div class="fullpage-wp" v-fullpage>
        <div class="page-1 page">
          <p class="part-1" v-animate="'bounceInLeft'">{{msg}}</p>
        </div>

        <div class="page-2 page">
          <p class="part-2" v-animate="'bounceInRight'">{{msg}}</p>
        </div>
        
        <div class="page-3 page">
          <p class="part-3" v-animate="'fadeInDownBig'">{{msg}}</p>
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
body {
  margin: 0;
  padding: 0;
}

.fullpage-container {
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
