<template>
  <div class="home">
    <div class="app-header ly-row-flex flex-middle">
      <h1 class="header-name">vue-fullpage</h1>
    </div>
    <div class="app-content ly-row-flex flex-start">
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
        loop: false
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
        <a href="https://github.com/wendaosanshou/vue-fullpage" class="github-link">view on github</a>
      </div>
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
