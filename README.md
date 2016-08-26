# vue-fullpage

> 基于vue的fullpage.js

## 功能概述
可实现移动端的单页滚动效果，支持横向滚动和纵向滚动

## 快速上手

### main.js
main.js需要引入该插件的css和js文件
```js
import './vue-fullpage.css'
import VueFullpage from './vue-fullpage.js'
Vue.use(VueFullpage)
```

### app.vue

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
        dir: 'v'
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

meta头部分：
手机页面需要加入对应的meta头  
```html
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
```

## demo

地址：
[http://vue.wendaosanshou.top/vue_fullpage_demo/](http://vue.wendaosanshou.top/vue_fullpage_demo/)
