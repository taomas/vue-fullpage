<template>
  <div id="app">
    <div class="page-container">
      <div v-page="opts" class="page-wp">
        <div class="page page1">
          1
        </div>
        <div class="page page2">
          <div class="part1" v-animate="'fade'">

          </div>
          2
        </div>
        <div class="page page3">
          3
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Hello from './components/Hello'

export default {
  data () {
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
  },
  components: {
    Hello
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

.part1 {
  transform: translateX(-100px);
  width: 100px;
  height: 100px;
  background: #ccc;
}

.animate-fade {
  transition: all 0.3s;
  transform: translateX(0);
}

</style>
