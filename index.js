(function() {
  'use strict'

  var fullpage = {}
  var opt = {
    start: 0,
    duration: 500,
    loop: false,
    dir: 'v',
    der: 0.1,
    movingFlag: false,
    preventWechat: false,
    beforeChange: function(data) {},
    afterChange: function(data) {}
  }

  fullpage.install = function (Vue, options) {
    var that = fullpage
    Vue.directive('fullpage', {
      inserted: function (el, binding, vnode) {
        var opts = binding.value || {}
        that.init(el, opts, vnode)
      },
      componentUpdated: function (el, binding, vnode) {
        var opts = binding.value || {}
        that.init(el, opts, vnode)
      }
    })

    Vue.directive('animate', {
      inserted: function (el, binding, vnode) {
        if (binding.value) {
          that.initAnimate(el, binding, vnode)
        }
      }
    })
  }

  fullpage.initAnimate = function (el, binding, vnode) {
    var that = fullpage
    var vm = vnode.context
    var aminate = binding.value
    el.style.opacity = '0'
    vm.$on('toogle_animate', function (curIndex) {
      var curPage = +el.parentNode.getAttribute('data-id')
      if (curIndex === curPage) {
        that.addAnimated(el, aminate)
      } else {
        el.style.opacity = '0'
        that.removeAnimated(el, aminate)
      }
    })
  }

  fullpage.addAnimated = function (el, animate) {
    var delay = animate.delay || 0
    el.classList.add('animated')
    window.setTimeout(function () {
      el.style.opacity = '1'
      el.classList.add(animate.value)
    }, delay)
  }

  fullpage.removeAnimated = function (el, animate) {
    if (el.getAttribute('class').indexOf('animated') > -1) {
      el.classList.remove(animate.value)
    }
  }

  fullpage.assignOpts = function (option) {
    var that = fullpage
    var o = option || {}
    for (var key in opt) {
      if (!o.hasOwnProperty(key)) {
        o[key] = opt[key]
      }
    }
    that.o = o
  }

  fullpage.initScrollDirection = function () {
    if (this.o.dir !== 'v') {
      this.el.classList.add('fullpage-wp-h')
    }
  }

  fullpage.init = function (el, options, vnode) {
    var that = fullpage
    that.assignOpts(options)

    that.vm = vnode.context
    that.vm.$fullpage = that
    that.curIndex = that.o.start

    that.startY = 0
    that.o.movingFlag = false

    that.el = el
    that.el.classList.add('fullpage-wp')

    that.parentEle = that.el.parentNode
    that.parentEle.classList.add('fullpage-container')

    that.pageEles = that.el.children
    that.total = that.pageEles.length

    that.initScrollDirection()
    window.setTimeout(function () {
      that.width = that.parentEle.offsetWidth
      that.height = that.parentEle.offsetHeight

      for (var i = 0; i < that.pageEles.length; i++) {
        var pageEle = that.pageEles[i]
        pageEle.setAttribute('data-id', i)
        pageEle.classList.add('page')
        pageEle.style.width = that.width + 'px'
        pageEle.style.height = that.height + 'px'
        that.initEvent(pageEle)
      }
      that.moveTo(that.curIndex, false)
    }, 0)
  }

  fullpage.initEvent = function (el) {
    var that = fullpage
    that.prevIndex = that.curIndex
    el.addEventListener('touchstart', function (e) {
      if (that.o.movingFlag) {
        return false
      }
      that.startX = e.targetTouches[0].pageX
      that.startY = e.targetTouches[0].pageY
    })
    el.addEventListener('touchend', function(e) {
      if (that.o.movingFlag) {
        return false
      }
      var dir = that.o.dir
      var sub = dir === 'v' ? (e.changedTouches[0].pageY - that.startY) / that.height : (e.changedTouches[0].pageX - that.startX) / that.width
      var der = sub > that.o.der ? -1 : sub < -that.o.der ? 1 : 0
      // that.curIndex推迟到moveTo执行完之后再更新
      var nextIndex = that.curIndex + der

      if (nextIndex >= 0 && nextIndex < that.total) {
        that.moveTo(nextIndex, true)
      } else {
        if (that.o.loop) {
          nextIndex = nextIndex < 0 ? that.total - 1 : 0
          that.moveTo(nextIndex, true)
        } else {
          that.curIndex = nextIndex < 0 ? 0 : that.total - 1
        }
      }
    })
    if (that.o.preventWechat) {
      el.addEventListener('touchmove', function(e) {
        e.preventDefault()
      })
    }
  }

  fullpage.moveTo = function (curIndex, anim) {
    var that = fullpage
    var dist = that.o.dir === 'v' ? (curIndex) * (-that.height) : curIndex * (-that.width)
    that.o.movingFlag = true
    var flag = that.o.beforeChange(that.prevIndex, curIndex)
    if (flag === false) {
      // 重置movingFlag
      that.o.movingFlag = false
      return false
    }
    that.curIndex = curIndex

    if (anim) {
      that.el.classList.add('anim')
    } else {
      that.el.classList.remove('anim')
    }

    that.move(dist)
    window.setTimeout(function () {
      that.o.afterChange(that.prevIndex, curIndex)
      that.o.movingFlag = false
      that.prevIndex = curIndex
      that.vm.$emit('toogle_animate', curIndex)
    }, that.o.duration)
  }

  fullpage.move = function (dist) {
    var xPx = '0px'
    var yPx = '0px'
    if (this.o.dir === 'v') {
      yPx = dist + 'px'
    } else {
      xPx = dist + 'px'
    }
    this.el.style.cssText += ('-webkit-transform:translate3d(' + xPx + ', ' + yPx + ', 0px);transform:translate3d(' + xPx + ', ' + yPx + ', 0px);')
  }

  if (typeof exports === 'object') {
    module.exports = fullpage
  } else if (typeof define === 'function' && define.amd) {
    define([], function() {
      return fullpage
    })
  } else if (window.Vue) {
    window.VueFullpage = fullpage
    Vue.use(fullpage)
  }
})()
