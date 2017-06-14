# vue-fullpage文档
实现移动端的单页滚动效果,基于vue.js,目前只支持vue2.0及以上版本

## 指令
## v-fullpage
初始化``fullpage``需要的指令，需要放在``page-wp``容器上面

### vue-fullpage指令的值
fullpage支持无参数的调用，每个参数都会有默认值，如果想实现自定义的功能，可以使用自定义参数。一个典型的自定义参数如下：
```
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
```
#### page
每屏的选择符，默认是`` .page``。  
必须给每页添加该选择符。

#### start
从第几屏开始，默认是第一屏。

#### duration
每屏动画的显示时间，切换页面后在``duration``时间过后才能再次切换下一页，默认为``500ms``

#### loop
是否支持循环滚动，默认为``false``

#### dir
滚动方向，默认为``v``，垂直滚动
垂直滚动：``v``,水平滚动：``h``

#### der
最小滑动距离，只有滑动距离大于最小滑动距离才会触发滚动效果
默认为：``0.1``

#### beforeChange
当页面在滑动后触发``beforeChange``
包含两个参数``prev``和``next``，指当前页面和滑动后页面的index
在``beforeChange``方法中``return false``可以阻止页面的滑动

#### afterChange
当页面滑动到下一页并且过了``duration``这个时间段后触发
包含两个参数``prev``和``next``，指当前页面和滑动后页面的index

## v-animate
可以通过该指令为元素添加动画。

### v-animate指令的值

#### 下面是一个典型的自定义属性
```js
{
	value:'bounceInLeft',
	delay: 0
}
```
#### value
这个属性是一个元素的动画类型, 它的值取决于[animate.css](https://daneden.github.io/animate.css/)
你需要添加以下的class中的一个为这个属性的值：
- bounce
- flash
- pulse
- rubberBand
- shake
- headShake
- swing
- tada
- wobble
- jello
- bounceIn
- bounceInDown
- bounceInLeft
- bounceInRight
- bounceInUp
- bounceOut
- bounceOutDown
- bounceOutLeft
- bounceOutRight
- bounceOutUp
- fadeIn
- fadeInDown
- fadeInDownBig
- fadeInLeft
- fadeInLeftBig
- fadeInRight
- fadeInRightBig
- fadeInUp
- fadeInUpBig
- fadeOut
- fadeOutDown
- fadeOutDownBig
- fadeOutLeft
- fadeOutLeftBig
- fadeOutRight
- fadeOutRightBig
- fadeOutUp
- fadeOutUpBig
- flipInX
- flipInY
- flipOutX
- flipOutY
- lightSpeedIn
- lightSpeedOut
- rotateIn
- rotateInDownLeft
- rotateInDownRight
- rotateInUpLeft
- rotateInUpRight
- rotateOut
- rotateOutDownLeft
- rotateOutDownRight
- rotateOutUpLeft
- rotateOutUpRight
- hinge
- jackInTheBox
- rollIn
- rollOut
- zoomIn
- zoomInDown
- zoomInLeft
- zoomInRight
- zoomInUp
- zoomOut
- zoomOutDown
- zoomOutLeft
- zoomOutRight
- zoomOutUp
- slideInDown
- slideInLeft
- slideInRight
- slideInUp
- slideOutDown
- slideOutLeft
- slideOutRight
- slideOutUp

#### delay
this property is used for animation delay, when a page has multiple animation elements you need to use it.

