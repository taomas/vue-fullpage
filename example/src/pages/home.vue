<template>
  <div class="home">
    <div class="header ly-row-flex flex-middle">
      <h1 class="header-name">vue-fullpage</h1>
    </div>
    <div class="main">
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
      <p class="part-1" v-animate="{value: 'bounceInLeft'}">vue-fullpage</p>
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
```
          </textarea>
        </marked>
        <a href="https://github.com/wendaosanshou/vue-fullpage" target="_blank" class="github-link">view on github</a>
      </div>
      <div class="demo-wrapper">
        <phone></phone>
      </div>
    </div>
  </div>
</template>

<script>
import Mark from '../components/mark.vue'
import Phone from '../components/phone.vue'
export default {
  name: 'home',
  data() {
    return {
    }
  },
  created() {
  },
  components: {
    marked: Mark,
    phone: Phone
  }
}
</script>

<style lang='postcss' scoped>
.header {
  box-sizing: border-box;
  width: 100%;
  height: 90px;
  padding-left: 60px;
  color: #fff;
  border-bottom: 1px solid #eee;
  .header-name {
    color: #eee;
    font-size: 36px;
    margin: 0;
    text-shadow: 2px 3px 0 rgba(0,0,0,.2);
  }
}

.main {
  box-sizing: border-box;
  width: 100%;
  height: auto;
  min-height: calc(100% - 90px);
  padding: 30px;
  color: #eee;
  .sub-content {
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
  }
  .doc-desc {
    box-sizing: border-box;
    width: calc(100% - 350px);
    height: auto;
    padding: 0 30px;
  }
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
}
</style>
