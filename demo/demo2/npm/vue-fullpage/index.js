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
    change: function(data) {},
    beforeChange: function(data) {},
    afterChange: function(data) {}
  }

  fullpage.install = function(Vue) {
    var that = fullpage
    Vue.directive('page', {
      bind: function() {
        that.init.call(this)
      },
      update: function(value) {
        that.updateOpts(value)
      },
      unbind: function() {

      }
    })
    Vue.directive('cover', {
      bind: function() {
        this.el.style.opacity = '0'
        that.coverEle = this.el
      },
      update: function() {},
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
    var that = fullpage
    var el = this.el
    this.vm.$on('evtAfterChange', function (ctx) {
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
    el.classList.forEach(function (item) {
      if (item.indexOf('animate-') !== -1) {
        el.classList.remove(item)
      }
    })
  }

  fullpage.updateOpts = function(option) {
    var that = fullpage
    var o = option ? option : {}
    for (var key in opt) {
      if (!o.hasOwnProperty(key)) {
        o[key] = opt[key]
      }
    }

    that.o = o;
    that.updatePageEle()
  }

  fullpage.updatePageEle = function() {
    if (this.o.dir !== 'v') {
      this.el.classList.add('fullPage-wp-h')
    }
  }

  fullpage.init = function() {
    var that = fullpage
    that.updateOpts()

    that.dirEl = this
    that.curIndex = 0;

    that.startY = 0;
    that.o.movingFlag = false;

    that.el = this.el;
    that.el.classList.add('fullPage-wp');

    that.parentEle = that.el.parentNode;
    that.parentEle.classList.add('fullPage-container');

    that.pageEles = that.el.children;
    that.total = that.pageEles.length;

    window.setTimeout(function() {
      if (that.coverEle) {
        that.coverEle.style.opacity = '1'
      }

      that.width = that.parentEle.offsetWidth
      that.height = that.parentEle.offsetHeight
      for (var i = 0; i < that.pageEles.length; i++) {
        var pageEle = that.pageEles[i]
        pageEle.classList.add('fullPage-page')
        pageEle.setAttribute('data-id', i)
        pageEle.style.width = that.width + 'px'
        pageEle.style.height = that.height + 'px'
        that.initEvent(pageEle)
      }
    }, 0)
  }

  fullpage.initEvent = function(el) {
    var that = fullpage
    el.addEventListener('touchstart', function(e) {
      if (that.o.movingFlag) {
        return false;
      }
      that.startX = e.targetTouches[0].pageX;
      that.startY = e.targetTouches[0].pageY;
    })
    el.addEventListener('touchend', function(e) {
      if (that.o.movingFlag) {
        return false;
      }
      var preIndex = that.curIndex;
      var dir = that.o.dir;
      var sub = dir === 'v' ? (e.changedTouches[0].pageY - that.startY) / that.height : (e.changedTouches[0].pageX - that.startX) / that.width;
      var der = sub > that.o.der ? -1 : 1;
      that.prevIndex = that.curIndex
      that.curIndex += der

      if (that.curIndex >= 0 && that.curIndex < that.total) {
        that.moveTo(that.curIndex)
      } else {
        if (!!that.o.loop) {
          that.curIndex = that.curIndex < 0 ? that.total - 1 : 0
          that.moveTo(that.curIndex)
        } else {
          that.curIndex = that.curIndex < 0 ? 0 : that.total - 1
        }
      }
    })
  }

  fullpage.moveTo = function(curIndex) {
    var that = fullpage
    var vm = that.dirEl.vm
    var dist = that.o.dir === 'v' ? (curIndex) * (-that.height) : curIndex * (-that.width)
    that.nextIndex = curIndex;
    that.o.movingFlag = true
    var flag = that.o.beforeChange(that.prevIndex + 1, that.nextIndex + 1)

    // beforeChange中返回false则阻止滚屏发生
    if (flag === false) {
      return false;
    }

    that.move(dist)
    that.o.change(that.prevIndex + 1, that.nextIndex + 1)
    window.setTimeout(function () {
      that.o.movingFlag = false
      that.o.afterChange(that.prevIndex + 1, that.nextIndex + 1)
      vm.$emit('evtAfterChange', {prevIndex: that.prevIndex, nextIndex: that.nextIndex})
    }, that.o.duration)
  }

  fullpage.move = function(dist) {
    var xPx = '0px',
      yPx = '0px';
    if (this.o.dir === 'v') {
      yPx = dist + 'px';
    } else {
      xPx = dist + 'px'
    }
    this.el.style.cssText += (';-webkit-transform : translate3d(' + xPx + ', ' + yPx + ', 0px);' +
      'transform : translate3d(' + xPx + ', ' + yPx + ', 0px);');
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
