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
    var _this = this
    Vue.directive('page', {
      bind: function() {
        var that = this

        _this.el = this.el

        fullpage.init(this.arg, this.el)
        setTimeout(function() {
          _this.width = _this.parentEle.offsetWidth
          _this.height = _this.parentEle.offsetHeight
					_this.curIndex = 0
          for (var i = 0; i < _this.childrens.length; i++) {
            if (i === 0) {
              _this.childrens[i].classList.add('active')
            }
            _this.childrens[i].classList.add('fullPage-page')
						_this.childrens[i].style.cssText += (';width: ' +  _this.width + 'px;height:' + _this.height +'px;')
            _this.initEvent(_this.childrens[i])
          }
          console.log(_this.width, _this.height)
        }, 0)

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
    that.curIndex = -1;
    that.o = o;

    that.startY = 0;
    that.movingFlag = false;

    that.el = el;
    that.el.classList.add('fullPage-wp');

    that.parentEle = that.el.parentNode;
    that.childrens = that.el.children;
  }

	fullpage.move = function(dist) {
		var xPx = '0px' , yPx = '0px';
		yPx = dist + 'px';
		this.el.style.cssText += (';-webkit-transform : translate3d(' + xPx + ', ' + yPx + ', 0px);' +
														'transform : translate3d(' + xPx + ', ' + yPx + ', 0px);');
	}

  fullpage.initEvent = function(el) {
    var _this = this
    el.addEventListener('touchstart', function(e) {
      _this.startX = e.targetTouches[0].pageX;
      _this.startY = e.targetTouches[0].pageY;
    })
    el.addEventListener('touchend', function(e) {
      var sub = (e.changedTouches[0].pageY - _this.startY) / _this.height;
			var der = sub > 0 ? -1 : 1;
			_this.curIndex += der
      _this.moveTo(_this.curIndex);
    })
  }

	fullpage.moveTo = function(curIndex) {
		var dist = curIndex * this.height
		this.move(-dist)
		console.log(dist)
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
