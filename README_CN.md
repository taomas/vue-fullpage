# vue-fullpage

README：[English Version](https://github.com/wendaosanshou/vue-fullpage/blob/master/README.md)
> 一个基于vue.js的页面滚动插件

## 线上demo
这里有一个[线上的demo](http://vue.fecss.com/vue-fullpage/)和一个[jsfiddle demo](https://jsfiddle.net/wendaosanshou/4b6p5ujt/12/)

## 功能概述
实现了移动端的单页滚动效果，支持横向滚动和纵向滚动，支持animate.css里的所有动画指令

## 安装
```
npm install vue-fullpage --save
```
如果你想使用动画指令，请安装``animate.css``
```
npm install animate.css --save
```
[animate.css用法](https://daneden.github.io/animate.css/)

## 文档
[api文档](https://github.com/wendaosanshou/vue-fullpage/blob/master/doc/api_cn.md)

## 快速上手

#### main.js
在main.js需要引入该插件的css和js文件

```js
import 'vue-fullpage/vue-fullpage.css'
import VueFullpage from 'vue-fullpage'
Vue.use(VueFullpage)
```

#### app.vue

**template**

在``page-wp``容器上加``v-fullpage``指令,``v-fullpage``的值是fullpage的配置
在``page``容器上加``v-animate``指令,``v-animate``的值是``animate.css``的动画效果
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

**js**

``vue-fullpage``的值请参考[api文档](https://github.com/wendaosanshou/vue-fullpage/blob/master/doc/api_cn.md)
```js
export default {
  data() {
    return {
      opts: {
        start: 0,
        dir: 'v',
        duration: 500
      }
    }
  }
}
```

**style**
``page-container``需要固定宽度和高度，``fullpage``会自适应父元素的宽度和高度。  
如下设置可使滚动页面充满全屏
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
