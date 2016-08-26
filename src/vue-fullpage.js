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
        fullpage.init(this.arg, this.el)
      },
      update: function(value) {
        console.log(this.arg, value)
        console.log(this)
      }
    })
  }

  fullpage.init = function (option, el) {
    var o = option ? option : {}
    for (var key in opt) {
      if(!o.hasOwnProperty(key)) {
        o[key] = opt[key]
      }
    }

    var that = this
    that.curIndex = 0;
    that.o = o;

    that.startY = 0;
    that.movingFlag = false;

    that.el = el;
    that.el.classList.add('fullPage-wp');

    that.parentEle = that.el.parentNode;
    that.childrens = that.el.children;

    that.total =  that.childrens.length;

    setTimeout(function () {
      that.width = that.parentEle.offsetWidth
      that.height = that.parentEle.offsetHeight
      for (var i = 0; i < that.childrens.length; i++) {
        that.childrens[i].classList.add('fullPage-page')
        that.initEvent(that.childrens[i])
      }
    }, 0)
  }

	fullpage.move = function(dist) {
		var xPx = '0px' , yPx = '0px';
		yPx = dist + 'px';
		this.el.style.cssText += (';-webkit-transform : translate3d(' + xPx + ', ' + yPx + ', 0px);' +
														'transform : translate3d(' + xPx + ', ' + yPx + ', 0px);');
	}

  fullpage.initEvent = function(el) {
    var that = this
    el.addEventListener('touchstart', function(e) {
      that.startX = e.targetTouches[0].pageX;
      that.startY = e.targetTouches[0].pageY;
    })
    el.addEventListener('touchend', function(e) {
      var sub = (e.changedTouches[0].pageY - that.startY) / that.height;
			var der = sub > 0 ? -1 : 1;
			that.curIndex += der

      if (that.curIndex >=0 && that.curIndex < that.total) {
        that.moveTo(that.curIndex)
      } else {
        that.curIndex = that.curIndex < 0 ? 0 : that.total - 1
      }
      console.log(that.curIndex);
    })
  }

	fullpage.moveTo = function(curIndex) {
		var dist = curIndex * (-this.height)
		this.move(dist)
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
