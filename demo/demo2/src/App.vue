<template>
  <div id="app">
    <div class="page-container" v-cover>
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
      str: '123',
      opts: {
        dir: 'v',
        loop: false,
        beforeChange: function (cur) {
          // if (cur === 2) {
          //   return false
          // }
          console.log('before', cur)
        },
        change: function (cur, next) {
          console.log('change', cur, next)
        },
        afterChange: function (cur, next) {
          console.log('after', cur, next)
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
  width: 100px;
  height: 100px;
  background: #ccc;
}

.animate-fade {
  transition: all 0.3s;
  transform: translateX(100px);
}

</style>
