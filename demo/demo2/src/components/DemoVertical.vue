<template>
  <div class="page-container">
    <div v-page="opts" class="page-wp">
      <div class="page page1">
        <p class="part part1" v-animate="'slideIn'">
          vue-fullpage
        </p>
      </div>
      <div class="page page2">
        <p class="part part2" v-animate="'slideIn'">
          vue-fullpage
        </p>
      </div>
      <div class="page page3">
        <p class="part part3" v-animate="'slideIn'">
          vue-fullpage
        </p>
      </div>
      <div class="page page4">
        <p class="part part4" v-animate="'fadeIn'">
          vue-fullpage
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      opts: {
        start: 0,
        dir: 'h',
        loop: false,
        duration: 500,
        stopPageScroll: true,
        beforeChange: function (prev, next) {
        },
        afterChange: function (prev, next) {
        }
      }
    }
  }
}
</script>

<style>
.page-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

.page {
  position: relative;
  font-size: 20px;
  text-align: center;
  line-height: 50px;
  color: #000;
}

.page1 {
  background: rgb(75, 191, 195);
}

.page2 {
  background: rgb(123, 170, 190);
}

.page3 {
  background: rgb(27, 188, 155);
}

.page4 {
  background: rgb(123, 170, 190);
}

.part {
  width: 100%;
  height: 500px;
  line-height: 500px;
  text-align: center;
  font-size: 50px;
  color: #fff;
}

.part1 {
  transform: translateX(-100%);
}

.part2 {
  transform: translateX(100%);
}

.part3 {
  transform: translateY(-100%);
}

.part4 {
  opacity: 0;
}

.animate-slideIn {
  transition: all 0.3s;
  transform: translate(0, 0);
}

.animate-fadeIn {
  transition: all 0.3s;
  opacity: 1;
}
</style>
