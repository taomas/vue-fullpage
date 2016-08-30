# vue-fullpage

> 基于vue的fullpage.js

## 功能概述
可实现移动端的单页滚动效果，支持横向滚动和纵向滚动

## 兼容性
目前还未进行大规模兼容性测试。有bug请提问至[issues](https://github.com/wendaosanshou/vue-fullpage/issues)

## 安装

```
npm install vue-fullpage --save
```
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

## 文档
[api文档](https://github.com/wendaosanshou/vue-fullpage/blob/master/doc/api.md)


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
```
**js部分：**
提供``vue-fullpage``的自定义指令  
```js
<script>
export default {
  data () {
    return {
      opts: {
        start: 0,
        dir: 'v',
        loop: false,
        duration: 500,
        stopBoundaryScroll: true,
        beforeChange: function (prev, next) {
        },
        afterChange: function (prev, next) {
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
## demo

地址：
> 请使用chrome的手机模拟器或手机浏览器访问

[http://vue.wendaosanshou.top/vue_fullpage_demo/](http://vue.wendaosanshou.top/vue_fullpage_demo/)

## 感谢
代码参考 **颜海镜** 大神的项目：[zepto.fullpage.js](https://github.com/yanhaijing/zepto.fullpage)
