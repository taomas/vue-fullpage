# vue-fullpage

README：[中文版](https://github.com/wendaosanshou/vue-fullpage/blob/master/README_CN.md)
> A sigle-page scroll plugin based on vue.js

## overview
To achieve sigle-page scroll in mobile, support horizontal scroll and vertical scroll, support all the animation instructions of animate.css.

## Online demo
here's a [jsfiddle demo](https://jsfiddle.net/wendaosanshou/4b6p5ujt/12/)

## Installation
```
npm install vue-fullpage --save
```
If you want use animate instruction, please install animate.css
```
npm install animate.css --save
```
[animate.css usage](https://daneden.github.io/animate.css/)

## Document
[api document](https://github.com/wendaosanshou/vue-fullpage/blob/master/doc/api.md)

## getting started

#### main.js
Import the plugin of css and js file in main.js

```js
import 'animate.css'
import 'vue-fullpage/vue-fullpage.css'
import VueFullpage from 'vue-fullpage'
Vue.use(VueFullpage)
```

#### app.vue

**template**

``fullpage-container``、``fullpage-wp``、``page``are default class name.
Add the ``v-fullpage`` command to the ``page-wp`` container.
Add the ``v-animate`` command to the ``page`` container.
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

**script**

``vue-fullpage`` value please refer to [api document](https://github.com/wendaosanshou/vue-fullpage/blob/master/doc/api.md)
```js
export default {
  data() {
    return {
      opts: {
        start: 0,
        dir: 'v',
        duration: 500,
        beforeChange: function (prev, next) {
        },
        afterChange: function (prev, next) {
        }
      }
    }
  }
}
```

**style**

Set the ``page-container`` container's width and height what do you want, and the ``v-fullpage`` command will adapt the width and height of the parent element.
The following settings allow the scrolling page to fill the full screen.
```
<style>
.page-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
</style>
```
