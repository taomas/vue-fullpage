<template>
<div class="doc-desc">
  <h1>Installation</h1>
  <marked>
    <textarea class="mark-text">
```js
npm install vue-fullpage --save
```
    </textarea>
  </marked>
  <p>if you want to use animate feature</p>
  <marked>
    <textarea class="mark-text">
```js
npm install animate.css --save
```
    </textarea>
  </marked>
  <h1>Basic Use</h1>
  <p>main.js</p>
  <marked>
    <textarea class="mark-text">
```js
import 'animate.css'
import 'vue-fullpage/vue-fullpage.css'
import VueFullpage from 'vue-fullpage'
Vue.use(VueFullpage)
```
    </textarea>
  </marked>
  <p>template</p>
  <marked>
    <textarea class="mark-text">
```html
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
```
    </textarea>
  </marked>
  <p>script</p>
  <marked>
    <textarea class="mark-text">
```js
export default {
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
```
  </textarea>
</marked>
  <p>style</p>
  <marked>
    <textarea class="mark-text">
```css
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
```
  </textarea>
</marked>
<a href="#" class="github-link">view on github</a>
</div>
</template>

<script>
import Mark from './mark.vue'
export default {
  name: 'doc-installation',
  data() {
    return {
    }
  },
  components: {
    marked: Mark
  }
}
</script>

<style lang='postcss' scoped>
.github-link {
  display: block;
  width: 300px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  font-size: 26px;
  margin: 0 auto;
  color: hsla(0,0%,100%,.6);
  background: transparent;
  border: 1px solid hsla(0,0%,100%,.6);
}
</style>
