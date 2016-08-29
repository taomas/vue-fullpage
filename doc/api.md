# api.fullpage文档
实现移动端的单页滚动效果,基于vue.js

## 参数
fullPage支持无参数的调用，每个参数都会有默认值，如果想实现自定义的功能，可以使用自定义参数。一个典型的自定义参数如下：
```
opts: {
	dir: 'v',
	loop: false,
	duration: 500,
	beforeChange: function (prev, next) {
		console.log('before', prev, next)
	},
	change: function (prev, next) {
		console.log('change', prev, next)
	},
	afterChange: function (prev, next) {
		console.log('after', prev, next)
	}
}
```
