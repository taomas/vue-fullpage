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

## 文档
[api文档](https://github.com/wendaosanshou/vue-fullpage/blob/master/doc/api.md)


## 快速上手

#### main.js
在main.js需要引入该插件的css和js文件
在使用VueFullpage时配置自定义参数

```js
import 'vue-fullpage/vue-fullpage.css'
import VueFullpage from 'vue-fullpage'
Vue.use(VueFullpage, {
  start: 0,
  dir: 'v',
  duration: 500,
  beforeChange: function (prev, next) {
  },
  afterChange: function (prev, next) {
  }
})
```

#### app.vue

**模板部分：**
在``page-wp``容器上加``v-page``指令
```html
<div class="fullpage-container">
  <div class="fullpage-wp" v-fullpage>
    <div class="page-1 page">
      <p class="part-1" v-animate="'fadeInLeft'">VueFullpage</p>
    </div>
    <div class="page-2 page">
      <p class="part-2" v-animate="'fadeInRight'">VueFullpage</p>
    </div>
    <div class="page-3 page">
      <p class="part-3" v-animate="'fadeInTop'">VueFullpage</p>
    </div>
  </div>
</div>
```

**css部分：**
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
## demo
源码：[https://github.com/wendaosanshou/vue-fullpage/tree/master/demo/vue-fullpage-demo](https://github.com/wendaosanshou/vue-fullpage/tree/master/demo/vue-fullpage-demo)

地址：
> 请使用chrome的手机模拟器或手机浏览器访问

[http://vue.wendaosanshou.top/vue_fullpage_demo/](http://vue.wendaosanshou.top/vue_fullpage_demo/)

## 感谢
代码参考 **颜海镜** 大神的项目：[zepto.fullpage.js](https://github.com/yanhaijing/zepto.fullpage)
