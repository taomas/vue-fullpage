# vue-fullpage

> 基于vue的fullpage.js

## 功能概述
可实现移动端的单页滚动效果，支持横向滚动和纵向滚动

## 安装

```
npm install vue-fullpage --save
```
---
#### commonjs

```js
import VueFullpage from 'vue-fullpage'
Vue.use(VueFullpage)
```
或
```js
var vueFullpage = require('vue-fullpage')
Vue.use(vueFullpage)
```
---
## 快速上手

#### main.js
在main.js需要引入该插件的css和js文件
```js
import VueFullpage from 'vue-fullpage'
Vue.use(VueFullpage)
```

#### app.vue

**模板部分：**
在``page-container``容器加入``v-cover``指令防止闪烁
在``page-wp``容器上加``v-page``指令，指令值是``fullpage``的配置
```html
<template>
  <div id="app">
    <div class="page-container" v-cover>
      <div v-page="opts" class="page-wp">
        <div class="page page1">
          1
        </div>
        <div class="page page2">
          2
        </div>
        <div class="page page3">
          3
        </div>
      </div>
    </div>
  </div>
</template>
```
**js部分：**
提供``vue-fullpage``的自定义指令  
```js
<script>
export default {
  data () {
    return {
      opts: {
        dir: 'v',
        loop: true,
        beforeChange: function (cur) {
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
  }
}
</script>
```
**css部分：**
``page-container``需要固定宽度和高度，``fullpage``会使用父元素的宽度和高度。  
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
---
## demo

地址：
[http://vue.wendaosanshou.top/vue_fullpage_demo/](http://vue.wendaosanshou.top/vue_fullpage_demo/)

感谢：
代码参考 **颜海镜** 大神的项目：[zepto.fullpage.js](https://github.com/yanhaijing/zepto.fullpage)
