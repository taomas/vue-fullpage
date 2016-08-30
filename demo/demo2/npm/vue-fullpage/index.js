(function() {
  'use strict'
  require('./vue-fullpage.css')

  var fullpage = {}
  var opt = {
    start: 0,
    duration: 500,
    loop: false,
    drag: false,
    dir: 'v',
    der: 0.1,
    movingFlag: false,
    stopBoundaryScroll: false,
    beforeChange: function(data) {},
    afterChange: function(data) {}
  }

  fullpage.install = function(Vue) {
    var that = fullpage
    Vue.directive('page', {
      bind: function() {
      },
      update: function(value) {
        that.init.call(this, value)
      },
      unbind: function() {

      }
    })
    Vue.directive('animate', {
      bind: function() {

      },
      update: function(value) {
        that.initAnimate.call(this, value)
      },
      unbind: function() {

      }
    })
  }

  fullpage.initAnimate = function (value) {
    var that = fullpage,
      el = this.el,
      vm = this.vm
    vm.$on('evtAfterChange', function (ctx) {
      var curPage = +el.parentNode.getAttribute('data-id')
      if (ctx.nextIndex === curPage) {
        that.addAnimate(el, value)
      } else {
        that.removeAnimate(el, value)
      }
    })
  }

  fullpage.addAnimate = function (el, animate) {
    el.classList.add('animate-' + animate)
  }

  fullpage.removeAnimate = function (el, animate) {
    var classList = el.classList
    for (var i = 0; i < classList.length; i++) {
      if (classList[i].indexOf('animate-') !== -1) {
        el.classList.remove(classList[i])
      }
    }
  }

  fullpage.initOpts = function(option) {
    var that = fullpage
    var o = option ? option : {}
    for (var key in opt) {
      if (!o.hasOwnProperty(key)) {
        o[key] = opt[key]
      }
    }
    that.o = o;
  }

  fullpage.init = function(value) {
    var that = fullpage
    that.initOpts(value)

    that.dirEl = this
    that.curIndex = that.o.start

    that.el = this.el
    that.el.classList.add('fullPage-wp')

    that.parentEle = that.el.parentNode
    that.parentEle.classList.add('fullPage-container')

    that.pageEles = that.el.children
    that.total = that.pageEles.length

    if (that.o.dir !== 'v') {
      that.el.classList.add('fullPage-wp-h')
    }

    that.evtStopBoundaryScroll()
    that.evtResize()

    window.setTimeout(function() {
      that.width = that.parentEle.offsetWidth
      that.height = that.parentEle.offsetHeight
      for (var i = 0; i < that.pageEles.length; i++) {
        var pageEle = that.pageEles[i]
        pageEle.setAttribute('data-id', i)
        pageEle.style.width = that.width + 'px'
        pageEle.style.height = that.height + 'px'
        that.bindEvent(pageEle)
      }
      that.moveTo(that.curIndex, false)
    }, 0)
  }

  fullpage.update = function () {
    var that = fullpage
    that.width = that.parentEle.offsetWidth
    that.height = that.parentEle.offsetHeight
    for (var i = 0; i < that.pageEles.length; i++) {
      var pageEle = that.pageEles[i]
      pageEle.style.width = that.width + 'px'
      pageEle.style.height = that.height + 'px'
    }
  }

  fullpage.bindEvent = function(el) {
    var that = fullpage
    that.prevIndex = that.curIndex
    el.addEventListener('touchstart', function(e) {
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
      var preIndex = that.curIndex
      var dir = that.o.dir
      var sub = dir === 'v' ? (e.changedTouches[0].pageY - that.startY) / that.height : (e.changedTouches[0].pageX - that.startX) / that.width;
      var der = Math.abs(sub) > that.o.der ? (sub > 0 ? -1 : 1) : 0
      that.curIndex += der

      if (that.curIndex >= 0 && that.curIndex < that.total) {
        that.moveTo(that.curIndex, true)
      } else {
        if (!!that.o.loop) {
          that.curIndex = that.curIndex < 0 ? that.total - 1 : 0
          that.moveTo(that.curIndex, true)
        } else {
          that.curIndex = that.curIndex < 0 ? 0 : that.total - 1
        }
      }
    })
  }

  fullpage.moveTo = function(curIndex, anim) {
    var that = fullpage
    var vm = that.dirEl.vm
    that.dist = that.o.dir === 'v' ? (curIndex) * (-that.height) : curIndex * (-that.width)

    that.nextIndex = curIndex;
    that.o.movingFlag = true
    var flag = that.o.beforeChange(that.prevIndex, that.nextIndex)

    // beforeChange中返回false则阻止滚屏发生
    if (flag === false) {
      return false;
    }

    if (anim) {
      that.el.classList.add('anim')
    } else {
      that.el.classList.remove('anim')
    }

    that.move(that.dist)
    window.setTimeout(function () {
      that.o.afterChange(that.prevIndex, that.nextIndex)
      that.o.movingFlag = false
      that.prevIndex = curIndex
      vm.$emit('evtAfterChange', {prevIndex: that.prevIndex, nextIndex: that.nextIndex})
    }, that.o.duration)
  }

  fullpage.move = function(dist) {
    var xPx = '0px',
      yPx = '0px'
    if (this.o.dir === 'v') {
      yPx = dist + 'px'
    } else {
      xPx = dist + 'px'
    }
    this.el.style.cssText += (';-webkit-transform : translate3d(' + xPx + ', ' + yPx + ', 0px);' +
      'transform : translate3d(' + xPx + ', ' + yPx + ', 0px);')
  }

  fullpage.evtStopBoundaryScroll = function () {
    var that = fullpage
    if (that.o.stopBoundaryScroll) {
      document.querySelector('body').addEventListener('touchstart', function (e) {
        e.preventDefault()
      })
    }
  }

  fullpage.evtResize = function () {
    var that = fullpage
    window.addEventListener('resize', function (e) {
      that.update()
      that.moveTo(that.curIndex, false)
    })
  }

  if (typeof exports == "object") {
    module.exports = fullpage
  } else if (typeof define == "function" && define.amd) {
    define([], function() {
      return fullpage
    })
  } else if (window.Vue) {
    window.VueFullpage = fullpage
    Vue.use(fullpage)
  }
})()
