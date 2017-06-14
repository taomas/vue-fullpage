# vue-fullpage document
vue-fullpage is a plugin to implement sigle page scroll, based on vue.js, Only support vue2.0 version.

## instruction
## v-fullpage
A instruction for initialization vue-fullpage, need to be placed on the ``page-wp`` container.

### the value of v-fullpage instruction

#### a typical custom params
vue-fullpage support no parameter, every parameter has a default value, if want to custom function, you'd better to use custom parameter, there is a typical custom params:
```js
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

#### start
Starting from the start screen, The default is first screen。

#### duration
The shortest display time for every screen, switch next screen muse after the ``duration`` time, the default tiem is 500ms. d

#### loop
Whether support loop scroll, the default value is false.

#### dir
This is the scrolling direction, the default value is ``v``, it's vertical scrolling.
vertical scrolling: ``v``.
horizontal scrolling: ``h``.

#### der
The minimum slide distance, only slide distance more than the ``der``, the page will scroll.
the default value is ``0.1``.

#### beforeChange
The function will handle when page after scroll.
contains two parameters `` prev`` and `` next``, referring to the current page and the page after the index.
in the ``beforeChange`` method ``return false`` can prevent the page from sliding.

#### afterChange
Slide the page to the next page when after ``duration`` time period.
contains two parameters ``prev`` and ``next``, referring to the current page's ``index`` and the after page's ``index``.


## v-animate
Add an animation to the element.

### The value of v-animate instruction

#### Here is a typical custom params
```js
{
	value:'bounceInLeft',
	delay: 0
}
```
#### value
This property is the animation type of the element, its value reference [animate.css](https://daneden.github.io/animate.css/).
you need add one of the following class as the property value.
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
This property is used for animation delay, when a page has multiple animation elements you need to use it.
