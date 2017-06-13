# vue-fullpage document
vue-fullpage is a plugin to implement sigle page scroll, based on vue.js, Only support vue2.0 version.

## instruction
#### v-fullpage
a instruction for initialization vue-fullpage, need to be placed on the ``page-wp`` container.

#### v-animate
a instruction from add animation action to element.

## parameter
vue-fullpage support no parameter, every parameter has a default value, if want to custom function, you'd better to use custom parameter, there is a typical custom params:
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

#### start
starting from the start screen, The default is first screen。

#### duration
the shortest display time for every screen, switch next screen muse after the ``duration`` time, the default tiem is 500ms. d

#### loop
whether support loop scroll, the default value is false.

#### dir
this is the scrolling direction, the default value is ``v``, it's vertical scrolling.
vertical scrolling: ``v``.
horizontal scrolling: ``h``.

#### der
the minimum slide distance, only slide distance more than the ``der``, the page will scroll.
the default value is ``0.1``.

#### beforeChange
the function will handle when page after scroll.
contains two parameters `` prev`` and `` next``, referring to the current page and the page after the index.
in the ``beforeChange`` method ``return false`` can prevent the page from sliding.

#### afterChange
slide the page to the next page when after ``duration`` time period.
contains two parameters ``prev`` and ``next``, referring to the current page's ``index`` and the after page's ``index``.
