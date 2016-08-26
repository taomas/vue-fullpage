(function() {
  var fullpage = {}
  var opt = {
    start: 0,
    duration: 500,
    loop: false,
    drag: false,
    dir: 'v',
    der: 0.1,
    change: function(data) {},
    beforeChange: function(data) {},
    afterChange: function(data) {},
    orientationchange: function(orientation) {}
  }

  fullpage.install = function(Vue) {
    var that = this
    Vue.directive('page', {
      bind: function() {
        that.init(this.el)
      },
      update: function(value) {
        that.updateOpts(value)
      }
    })
    Vue.directive('cover', {
      bind: function() {
        this.el.style.display = 'none'
        that.coverEle = this.el
      },
      update: function() {}
    })
  }

  fullpage.updateOpts = function(option) {
    var that = this
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

  fullpage.init = function(el) {
    var that = this
    that.curIndex = 0;

    that.startY = 0;
    that.movingFlag = false;

    that.el = el;
    that.el.classList.add('fullPage-wp');

    that.parentEle = that.el.parentNode;
    that.pageEles = that.el.children;

    that.total = that.pageEles.length;

    window.setTimeout(function() {
      if (that.coverEle) {
        that.coverEle.style.display = 'block'
      }

      that.width = that.parentEle.offsetWidth
      that.height = that.parentEle.offsetHeight
      for (var i = 0; i < that.pageEles.length; i++) {
        var pageEle = that.pageEles[i]
        pageEle.classList.add('fullPage-page')
        pageEle.style.width = that.width + 'px'
        pageEle.style.height = that.height + 'px'
        that.initEvent(pageEle)
      }
    }, 0)
  }

  fullpage.initEvent = function(el) {
    var that = this
    el.addEventListener('touchstart', function(e) {
      that.startX = e.targetTouches[0].pageX;
      that.startY = e.targetTouches[0].pageY;
    })
    el.addEventListener('touchend', function(e) {
      var dir = that.o.dir;
      var sub = dir === 'v' ? (e.changedTouches[0].pageY - that.startY) / that.height : (e.changedTouches[0].pageX - that.startX) / that.width;
      var der = sub > 0 ? -1 : 1;
      that.curIndex += der
      console.log(sub, that.curIndex);
      if (that.curIndex >= 0 && that.curIndex < that.total) {
        that.moveTo(that.curIndex)
      } else {
        that.curIndex = that.curIndex < 0 ? 0 : that.total - 1
      }
      console.log(that.curIndex);
    })
  }

  fullpage.moveTo = function(curIndex) {
    var dist = this.o.dir === 'v' ? curIndex * (-this.height) : curIndex * (-this.width)
    this.move(dist)
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
