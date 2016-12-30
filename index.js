(function() {
  'use strict'

  var fullpage = {}
  var opt = {
    start: 0,
    duration: 500,
    loop: false,
    drag: false,
    dir: 'v',
    der: 0.1,
    movingFlag: false,
    beforeChange: function(data) {},
    afterChange: function(data) {}
  }

  fullpage.install = function(Vue, options) {
    var that = fullpage
    Vue.directive('fullpage', {
      inserted: function(el, binding, vnode) {
        that.init(el, options, vnode)
      }
    })

    Vue.directive('animate', {
      inserted: function(el, binding, vnode) {
        that.initAnimate(el, binding, vnode)
      }
    })
  }

  fullpage.initAnimate = function(el, binding, vnode) {
    var that = fullpage
    var vm = vnode.context,
      animateVal = binding.value;
    vm.$on('toogle_animate', function (curIndex) {
      var curPage = +el.parentNode.getAttribute('data-id')
      if (curIndex === curPage) {
        that.addAnimateActive(el, animateVal)
      } else {
        that.removeAnimateActive(el, animateVal)
      }
    })
    el.classList.add('animate-' + animateVal)
  }

  fullpage.toogleAnimate = function(ctx) {
    animates.forEach(function(item) {
      item.toogleAnimate(ctx)
    })
  }

  fullpage.addAnimateActive = function(el, animate) {
    el.classList.add('animate-' + animate + '-active')
  }

  fullpage.removeAnimateActive = function(el, animate) {
    el.classList.forEach(function(item) {
      if (item.indexOf('-active') !== -1) {
        el.classList.remove(item)
      }
    })
  }

  fullpage.assignOpts = function(option) {
    var that = fullpage
    var o = option ? option : {}
    for (var key in opt) {
      if (!o.hasOwnProperty(key)) {
        o[key] = opt[key]
      }
    }
    that.o = o;
  }

  fullpage.initScrollDirection = function() {
    if (this.o.dir !== 'v') {
      this.el.classList.add('fullpage-wp-h')
    }
  }

  fullpage.init = function(el, options, vnode) {
    console.log(options)
    var that = fullpage
    that.assignOpts(options)

    that.vm = vnode.context
    that.curIndex = that.o.start;

    that.startY = 0;
    that.o.movingFlag = false;

    that.el = el;
    that.el.classList.add('fullpage-wp');

    that.parentEle = that.el.parentNode;
    that.parentEle.classList.add('fullpage-container');

    that.pageEles = that.el.children;
    that.total = that.pageEles.length;

    that.initScrollDirection()
    window.setTimeout(function() {
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

  fullpage.initEvent = function(el) {
    var that = fullpage
    that.prevIndex = that.curIndex
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
    var dist = that.o.dir === 'v' ? (curIndex) * (-that.height) : curIndex * (-that.width)
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

    that.move(dist)
    window.setTimeout(function() {
      that.o.afterChange(that.prevIndex, that.nextIndex)
      that.o.movingFlag = false
      that.prevIndex = curIndex
      that.vm.$emit('toogle_animate', curIndex)
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
