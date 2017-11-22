/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var config = function () {
	return {
		width: 375,
		height: 667,
		random: function random() {
			var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
			    _ref$min = _ref.min,
			    min = _ref$min === undefined ? 0 : _ref$min,
			    max = _ref.max;

			return min + (max - min) * Math.random();
		},

		skyColor: 'hsla(210, 60%, {skyColor}, 0.2)'
	};
}();

exports.default = config;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _global = __webpack_require__(0);

var _global2 = _interopRequireDefault(_global);

var _particle = __webpack_require__(2);

var _particle2 = _interopRequireDefault(_particle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//下的雪花继承微粒类


var Snowflake = function (_Particle) {
	_inherits(Snowflake, _Particle);

	function Snowflake() {
		var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
		    x = _ref.x,
		    y = _ref.y,
		    _ref$minSize = _ref.minSize,
		    minSize = _ref$minSize === undefined ? 5 : _ref$minSize,
		    _ref$maxSize = _ref.maxSize,
		    maxSize = _ref$maxSize === undefined ? 7.5 : _ref$maxSize,
		    size = _ref.size,
		    _ref$speed = _ref.speed,
		    speed = _ref$speed === undefined ? 0.5 : _ref$speed,
		    _ref$color = _ref.color,
		    color = _ref$color === undefined ? '#eee' : _ref$color,
		    _ref$opacity = _ref.opacity,
		    opacity = _ref$opacity === undefined ? 0.8 : _ref$opacity;

		_classCallCheck(this, Snowflake);

		var _this = _possibleConstructorReturn(this, (Snowflake.__proto__ || Object.getPrototypeOf(Snowflake)).call(this, { x: x, y: y, minSize: minSize, maxSize: maxSize, size: size }));

		_this.opacity = _global2.default.random({ min: opacity, max: 1 });
		_this.speed = speed * (1 + Math.random());
		_this.direction = Math.random() > 0.5 ? 0.5 : -0.5;
		_this.color = color;
		return _this;
	}

	_createClass(Snowflake, [{
		key: 'fall',
		value: function fall() {
			this.x += Math.random() * this.direction;
			this.y += this.speed;
		}
	}, {
		key: 'render',
		value: function render(ctx) {
			this.fall();
			if (this.outOfBounds()) return false;

			this.g = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size);
			this.g.addColorStop(0, 'hsla(255,255%,255%,' + this.opacity + ')');
			this.g.addColorStop(1, 'hsla(255,255%,255%,0)');
			ctx.beginPath();
			ctx.fillStyle = this.g;
			ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI, false);
			ctx.fill();
			return true;
		}
	}]);

	return Snowflake;
}(_particle2.default);

exports.default = Snowflake;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _global = __webpack_require__(0);

var _global2 = _interopRequireDefault(_global);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//微粒类
var Particle = function () {
	function Particle() {
		var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
		    x = _ref.x,
		    y = _ref.y,
		    _ref$minSize = _ref.minSize,
		    minSize = _ref$minSize === undefined ? 5 : _ref$minSize,
		    _ref$maxSize = _ref.maxSize,
		    maxSize = _ref$maxSize === undefined ? 7.5 : _ref$maxSize,
		    size = _ref.size,
		    _ref$opacity = _ref.opacity,
		    opacity = _ref$opacity === undefined ? 1 : _ref$opacity;

		_classCallCheck(this, Particle);

		this.size = size ? size : _global2.default.random({ max: maxSize, min: minSize });
		this.x = x ? x : _global2.default.random({ max: _global2.default.width - this.size });
		this.y = y ? y : -this.size;
		this.opacity = opacity;
	}

	_createClass(Particle, [{
		key: 'outOfBounds',
		value: function outOfBounds() {
			var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
			    _ref2$height = _ref2.height,
			    height = _ref2$height === undefined ? _global2.default.height : _ref2$height,
			    _ref2$width = _ref2.width,
			    width = _ref2$width === undefined ? _global2.default.width : _ref2$width;

			if (this.x >= -this.size && this.x <= width && this.y <= height && this.y >= -this.size) {
				return false;
			} else {
				return true;
			}
		}
	}]);

	return Particle;
}();

exports.default = Particle;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _snowflake = __webpack_require__(1);

var _snowflake2 = _interopRequireDefault(_snowflake);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var random = Math.random;

//下心心
var Heart = function (_Snowflake) {
	_inherits(Heart, _Snowflake);

	function Heart() {
		var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
		    _ref$x = _ref.x,
		    x = _ref$x === undefined ? 0 : _ref$x,
		    _ref$y = _ref.y,
		    y = _ref$y === undefined ? 0 : _ref$y,
		    _ref$minSize = _ref.minSize,
		    minSize = _ref$minSize === undefined ? 15 : _ref$minSize,
		    _ref$maxSize = _ref.maxSize,
		    maxSize = _ref$maxSize === undefined ? 20 : _ref$maxSize,
		    size = _ref.size,
		    _ref$speed = _ref.speed,
		    speed = _ref$speed === undefined ? 1 : _ref$speed;

		_classCallCheck(this, Heart);

		var _this = _possibleConstructorReturn(this, (Heart.__proto__ || Object.getPrototypeOf(Heart)).call(this, { minSize: minSize, maxSize: maxSize, x: x, y: y, size: size, speed: speed }));

		_this.color = 'hsla(' + random() * 360 + ', 90%, 65%, 1)';
		return _this;
	}

	_createClass(Heart, [{
		key: 'render',
		value: function render(ctx) {
			this.fall();
			if (this.outOfBounds()) return false;

			ctx.save();
			ctx.beginPath();
			ctx.fillStyle = this.color;
			ctx.moveTo(this.x + 0.5 * this.size, this.y + 0.3 * this.size);
			ctx.bezierCurveTo(this.x + 0.1 * this.size, this.y, this.x, this.y + 0.6 * this.size, this.x + 0.5 * this.size, this.y + 0.9 * this.size);
			ctx.bezierCurveTo(this.x + 1 * this.size, this.y + 0.6 * this.size, this.x + 0.9 * this.size, this.y, this.x + 0.5 * this.size, this.y + 0.3 * this.size);
			ctx.closePath();
			ctx.fill();
			ctx.restore();

			return true;
		}
	}]);

	return Heart;
}(_snowflake2.default);

exports.default = Heart;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _particle = __webpack_require__(2);

var _particle2 = _interopRequireDefault(_particle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FireworkParticle = function (_Particle) {
	_inherits(FireworkParticle, _Particle);

	function FireworkParticle(_ref) {
		var x = _ref.x,
		    y = _ref.y,
		    _ref$size = _ref.size,
		    size = _ref$size === undefined ? 1 : _ref$size,
		    circle = _ref.circle;

		_classCallCheck(this, FireworkParticle);

		var _this = _possibleConstructorReturn(this, (FireworkParticle.__proto__ || Object.getPrototypeOf(FireworkParticle)).call(this, { x: x, y: y, size: size }));

		_this.rate = Math.random();
		_this.angle = Math.PI * 2 * Math.random();
		_this.vx = circle * Math.cos(_this.angle) * _this.rate;
		_this.vy = circle * Math.sin(_this.angle) * _this.rate;
		return _this;
	}

	_createClass(FireworkParticle, [{
		key: 'go',
		value: function go() {
			this.x += this.vx;
			this.y += this.vy;
			this.vy += 0.02;
			this.vx *= 0.98;
			this.vy *= 0.98;
		}
	}, {
		key: 'render',
		value: function render(ctx) {
			this.go();
			ctx.beginPath();
			ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
			ctx.fill();
		}
	}]);

	return FireworkParticle;
}(_particle2.default);

exports.default = FireworkParticle;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * version v0.1
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     */

// 读取图片


var _global = __webpack_require__(0);

var _global2 = _interopRequireDefault(_global);

var _imgList = __webpack_require__(6);

var _imgList2 = _interopRequireDefault(_imgList);

var _imgLoader = __webpack_require__(8);

var _imgLoader2 = _interopRequireDefault(_imgLoader);

var _snowflake = __webpack_require__(1);

var _snowflake2 = _interopRequireDefault(_snowflake);

var _heart = __webpack_require__(3);

var _heart2 = _interopRequireDefault(_heart);

var _tree = __webpack_require__(9);

var _tree2 = _interopRequireDefault(_tree);

var _shape = __webpack_require__(10);

var _shape2 = _interopRequireDefault(_shape);

var _fireworks = __webpack_require__(13);

var _fireworks2 = _interopRequireDefault(_fireworks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
	var j = 0,
	    item = null;

	var Canvas = function () {
		function Canvas() {
			var _this = this;

			_classCallCheck(this, Canvas);

			//加载图片
			_imgLoader2.default.load(_imgList2.default).then(function (imgs) {
				document.querySelector('#loading').style.display = 'none';
				_this.imgs = _this.dealImgs(imgs);
				_this.init();
			}).catch(function (err) {
				console.log(err);
			});
		}
		//创建本例属性


		_createClass(Canvas, [{
			key: 'createProperty',
			value: function createProperty() {
				//画布宽高
				this.height = _global2.default.height;
				this.width = _global2.default.width;

				//获取画笔
				this.bgCtx = document.querySelector('#bg').getContext('2d');
				this.fireworkCtx = document.querySelector('#firework').getContext('2d');
				this.titleCtx = document.querySelector('#title').getContext('2d');
				this.fallCtx = document.querySelector('#fall').getContext('2d');
				this.mbCtx = document.querySelector('#mb').getContext('2d');
				this.skyColor = 'hsla(210,60%,%sky%,0.2)';
				this.skyLight = 0;

				//飘落微粒的数组
				this.fallDots = [];
				//飘落的类型('snow','heart')
				this.fallType = "snow";

				//烟花的数组
				this.fireworkTime = _global2.default.random({ min: 30, max: 120 });
				this.fireworks = [];

				//字的数组
				this.wordsList = [];
				//组成字的微粒数组
				this.dots = [];

				//动画的时间
				this.time = 0;
			}
			//创建缓存画布

		}, {
			key: 'createCacheCanvas',
			value: function createCacheCanvas() {
				this.cache = document.createElement('canvas');
				this.cache.width = this.width;
				this.cache.height = this.height;
				this.cacheCtx = this.cache.getContext('2d');
			}
		}, {
			key: 'init',
			value: function init() {
				//创建属性
				this.createProperty();
				//创建缓存画布
				this.createCacheCanvas();

				//画背景图

				this.drawBg({ img: this.imgs.bg2, ctx: this.bgCtx });

				//显示烟花文字
				this.shape = new _shape2.default();

				var words = '效果修改中|资金不够|演员未定|剧本暂无|不知道|还有没有|之后的故事';
				this.showFireworkWords(words.split('|'));

				//测试代码块
				this.test();

				//循环体
				this.loop();
			}
		}, {
			key: 'test',
			value: function test() {}

			// this.shape.write({words:'敬请期待!',size:85});
			// this.dots = this.shape.getDots({minSize:4,maxSize:6,mini:1,gap:5});

			//动画效果

		}, {
			key: 'loop',
			value: function loop() {
				//下一帧继续调用loop;
				requestAnimationFrame(this.loop.bind(this));
				// console.time('label');

				// 清空画布
				this.fallCtx.clearRect(0, 0, this.width, this.height);
				this.fireworkCtx.clearRect(0, 0, this.width, this.height);
				this.titleCtx.clearRect(0, 0, this.width, this.height);
				// 控制雪花产生速度
				++this.time >= 60000 ? 0 : this.time;
				this.time % 15 == 0 && this.fallDots.push(new _heart2.default());
				this.fallType == 'snow' && this.time % 60 == 0 && this.fallDots.push(new _snowflake2.default());
				this.fallType == 'heart' && this.time % 15 == 0 && this.fallDots.push(new _heart2.default());

				//雪花飘落
				for (j = this.fallDots.length - 1; j >= 0; --j) {
					!this.fallDots[j].render(this.fallCtx) && this.fallDots.splice(j, 1);
				}

				//渲染烟花
				this.createFireworks();
				this.skyLight = 0;
				for (j = this.fireworks.length - 1; j >= 0; --j) {
					this.skyLight = Math.max(this.skyLight, this.fireworks[j].getOpacity());
					!this.fireworks[j].render(this.fireworkCtx) && this.fireworks.splice(j, 1);
				}
				this.skyRender();

				// tree.render(this.titleCtx);

				//文字的动作
				// for(j in this.dots){
				// 	this.dots[j].render(this.dropCtx);
				// }	
				// console.timeEnd('label');
			}
		}, {
			key: 'skyRender',
			value: function skyRender() {
				this.mbCtx.clearRect(0, 0, this.width, this.height);
				// console.log(this.skyLight);
				this.mbCtx.fillStyle = this.skyColor.replace('%sky', 5 + this.skyLight * 15);
				this.mbCtx.fillRect(0, 0, this.width, this.height);
			}
		}, {
			key: 'showFireworkWords',
			value: function showFireworkWords(wordsArr) {
				if (wordsArr.length == 0) return;
				setTimeout(function () {
					var _this2 = this;

					var words = wordsArr.shift().split('');
					var length = words.length;
					var size = 70;
					words.forEach(function (item, index) {
						var x = void 0;
						length % 2 == 0 ? x = _global2.default.width / 2 + (index - length / 2) * size + 1 / 2 * size : x = _global2.default.width / 2 + (index - Math.floor(length / 2)) * size;
						_this2.shape.write({ words: item, x: x, size: size });
						_this2.fireworks.push(new _fireworks2.default({ ctx: _this2.fireworkCtx, wait: 30, circle: 2, x: x, yEnd: 100, particles: _this2.shape.getDots({ type: 'firework' }) }));
					});
					this.showFireworkWords(wordsArr);
				}.bind(this), 2000);
			}
		}, {
			key: 'createFireworks',
			value: function createFireworks() {
				if (--this.fireworkTime <= 0) {
					this.fireworks.push(new _fireworks2.default({ ctx: this.fireworkCtx }));
					this.fireworkTime = _global2.default.random({ min: 30, max: 120 });
				}
			}

			//画背景

		}, {
			key: 'drawBg',
			value: function drawBg(_ref) {
				var ctx = _ref.ctx,
				    img = _ref.img;

				ctx.drawImage(img, 0, 0, this.width, this.height);
			}
			//处理图片为需要的对象类型[] => {};

		}, {
			key: 'dealImgs',
			value: function dealImgs(imgs) {
				var obj = {};
				imgs.forEach(function (item) {
					obj[item.key] = item.img;
				});

				return obj;
			}
		}]);

		return Canvas;
	}();

	new Canvas();
})();

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var imgList = {
	bg2: __webpack_require__(7)
	// snowflake:'./img/snowflake.png'
};
exports.default = imgList;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bg2.jpg";

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// 读取图片
var ImgLoader = function () {
	function ImgLoader() {
		_classCallCheck(this, ImgLoader);
	}

	_createClass(ImgLoader, null, [{
		key: "loadImg",

		// 读取单个图片
		value: function loadImg(url, key) {
			return new Promise(function (resolve, reject) {
				var img = new Image();
				img.onload = function () {
					resolve({ key: key, img: img });
				};
				img.onerror = reject;
				img.src = url;
			});
		}

		// 读取图片数组

	}, {
		key: "load",
		value: function load(imgs) {
			var promises = [];

			for (var key in imgs) {
				promises.push(this.loadImg(imgs[key], key));
			}

			return Promise.all(promises);
		}
	}]);

	return ImgLoader;
}();

exports.default = ImgLoader;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
/**
 *  create by miaoyu  2017/10/22 
 */
var tree = function () {

	//
	var MAX_FLOWER_AGE = 50;
	//
	var MAX_GROWTH_TICKS = 15;
	// 树枝颜色
	var BRANCH_COLOR = "rgb(101, 67, 33)";
	// 树枝分叉层数
	var MAX_BRANCHING = 8;
	// 树干初始宽度
	var TRUNK_WIDTH = 12;
	// 递减因子
	var BRANCH_SHRINKAGE = 0.8;
	// 树杈分开度因子
	var MAX_ANGLE_DELTA = Math.PI / 2;
	// 动画延迟
	var DELAY = 0;

	var canvas = document.getElementById("title");
	// canvas高度
	var CANVAS_HEIGHT = canvas.height;
	// canvas宽度
	var CANVAS_WIDTH = canvas.width;

	// save random to cache
	var cacheRandom = [];

	var ctx = void 0;

	var renderBranch = function renderBranch(_ref) {
		var x1 = _ref.x1,
		    y1 = _ref.y1,
		    x2 = _ref.x2,
		    y2 = _ref.y2,
		    branchWidth = _ref.branchWidth;

		ctx.beginPath();
		ctx.lineWidth = branchWidth;
		ctx.strokeStyle = "rgb(101, 67, 33)";
		ctx.moveTo(x1, y1);
		ctx.lineTo(x2, y2);
		ctx.stroke();
	};

	var growBranch = function growBranch(_ref2) {
		var x1 = _ref2.x1,
		    y1 = _ref2.y1,
		    length = _ref2.length,
		    angle = _ref2.angle,
		    depth = _ref2.depth,
		    branchWidth = _ref2.branchWidth;


		var x2 = x1 + length * Math.cos(angle);
		var y2 = y1 + length * Math.sin(angle);
		renderBranch({ x1: x1, y1: y1, x2: x2, y2: y2, branchWidth: branchWidth });

		var newDepth = depth - 1;
		if (newDepth == 0) {
			return;
		}

		// 生成分叉
		var newBranchWidth = branchWidth * BRANCH_SHRINKAGE;

		// Promise.all(
		[1, -1].map(function (direction) {

			// save to cahce
			var toObject = function toObject(a) {
				return a ? a : {};
			};
			cacheRandom[newDepth] = toObject(cacheRandom[newDepth]);
			cacheRandom[newDepth][direction] = cacheRandom[newDepth][direction] ? cacheRandom[newDepth][direction] : { "0": Math.random(), "1": Math.random() };

			var newAngle = angle + MAX_ANGLE_DELTA * (cacheRandom[newDepth][direction][0] * 0.5 * direction);
			var newLength = length * (BRANCH_SHRINKAGE + cacheRandom[newDepth][direction][1] * (1.0 - BRANCH_SHRINKAGE));

			growBranch({
				x1: x2,
				y1: y2,
				length: newLength,
				angle: newAngle,
				depth: newDepth,
				branchWidth: newBranchWidth
			});

			// return new Promise((resolve, reject) => {
			// 	setTimeout(function() {
			// 		resolve(
			// 			growBranch({ 
			// 				x1: x2, 
			// 				y1: y2, 
			// 				length: newLength,
			// 				angle: newAngle, 
			// 				depth: newDepth, 
			// 				branchWidth:newBranchWidth 
			// 			})
			// 		)
			// 	},DELAY)
			// })
		});
		// ).then(() => {console.log('done')})

	};

	var growTree = function growTree() {
		return growBranch({
			// 树的出生位置
			x1: Math.floor(CANVAS_WIDTH / 2),
			y1: Math.floor(CANVAS_HEIGHT / 1.02),
			length: 60,
			depth: MAX_BRANCHING,
			angle: -Math.PI / 2,
			branchWidth: TRUNK_WIDTH
		});
	};

	return {
		render: function render(drawPen) {

			ctx = drawPen;
			growTree();
			console.log(cacheRandom);
		}
	};
}();

exports.default = tree;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wordParticle = __webpack_require__(11);

var _wordParticle2 = _interopRequireDefault(_wordParticle);

var _fireworkWords = __webpack_require__(12);

var _fireworkWords2 = _interopRequireDefault(_fireworkWords);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Shape = function () {
	function Shape() {
		_classCallCheck(this, Shape);

		// 缓存画布
		this.canvas = document.createElement('canvas');
		this.canvas.width = 375;
		this.canvas.height = 667;
		this.ctx = this.canvas.getContext('2d');

		this.ctx.fillStyle = 'red';
		this.ctx.textBaseline = 'middle';
		this.ctx.textAlign = 'center';
	}

	//写入想要渲染的字


	_createClass(Shape, [{
		key: 'write',
		value: function write() {
			var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
			    words = _ref.words,
			    _ref$size = _ref.size,
			    size = _ref$size === undefined ? 50 : _ref$size,
			    _ref$fontFamily = _ref.fontFamily,
			    fontFamily = _ref$fontFamily === undefined ? 'sans-serif' : _ref$fontFamily,
			    _ref$x = _ref.x,
			    x = _ref$x === undefined ? this.canvas.width / 2 : _ref$x,
			    _ref$y = _ref.y,
			    y = _ref$y === undefined ? 100 : _ref$y;

			this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
			this.ctx.font = 'bold ' + size + 'px ' + fontFamily;
			this.ctx.fillText(words, x, y);
			//记录的当前字的坐标
			this.x = x;
			this.y = y;
		}

		//获取字的坐标点集合。

	}, {
		key: 'getDots',
		value: function getDots() {
			var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
			    _ref2$mini = _ref2.mini,
			    mini = _ref2$mini === undefined ? 1 : _ref2$mini,
			    _ref2$minSize = _ref2.minSize,
			    minSize = _ref2$minSize === undefined ? 8 : _ref2$minSize,
			    _ref2$maxSize = _ref2.maxSize,
			    maxSize = _ref2$maxSize === undefined ? 10 : _ref2$maxSize,
			    size = _ref2.size,
			    _ref2$gap = _ref2.gap,
			    gap = _ref2$gap === undefined ? 5 : _ref2$gap,
			    type = _ref2.type;

			var data = this.ctx.getImageData(0, 50, this.canvas.width, 150).data;
			var dots = [],
			    x = 0,
			    y = 50,
			    count = 0;
			for (var i = 0, len = data.length; i <= len; i += 4 * gap) {
				if (data[i + 3] > 0) {
					if (type == 'firework') {
						++count % mini == 0 && dots.push(new _fireworkWords2.default({ x: x, y: y, type: 'words', xStart: this.x, yStart: this.y }));
					} else {
						++count % mini == 0 && dots.push(new _wordParticle2.default({ x: x, y: y, minSize: minSize, maxSize: maxSize, size: size }));
					}
				}
				x += gap;
				if (x >= this.canvas.width) {
					x = 0;
					y += gap;
					i += gap * 4 * this.canvas.width;
				}
			}
			return dots;
		}
	}]);

	return Shape;
}();

exports.default = Shape;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _heart = __webpack_require__(3);

var _heart2 = _interopRequireDefault(_heart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WordParticle = function (_Heart) {
	_inherits(WordParticle, _Heart);

	function WordParticle(_ref) {
		var x = _ref.x,
		    y = _ref.y,
		    minSize = _ref.minSize,
		    maxSize = _ref.maxSize,
		    size = _ref.size;

		_classCallCheck(this, WordParticle);

		var _this = _possibleConstructorReturn(this, (WordParticle.__proto__ || Object.getPrototypeOf(WordParticle)).call(this, { x: x, y: y, minSize: minSize, maxSize: maxSize, size: size }));

		_this.y0 = y;
		_this.x0 = x;
		return _this;
	}

	_createClass(WordParticle, [{
		key: 'render',
		value: function render(ctx) {
			ctx.save();
			ctx.beginPath();
			ctx.fillStyle = this.color;
			this.x0 = this.x + Math.sin(Math.PI * 2 * Math.random()) * 1;
			this.y0 = this.y + Math.sin(Math.PI * 2 * Math.random()) * 1;
			ctx.moveTo(this.x0 + 0.5 * this.size, this.y0 + 0.3 * this.size);
			ctx.bezierCurveTo(this.x0 + 0.1 * this.size, this.y0, this.x0, this.y0 + 0.6 * this.size, this.x0 + 0.5 * this.size, this.y0 + 0.9 * this.size);
			ctx.bezierCurveTo(this.x0 + 1 * this.size, this.y0 + 0.6 * this.size, this.x0 + 0.9 * this.size, this.y0, this.x0 + 0.5 * this.size, this.y0 + 0.3 * this.size);
			ctx.closePath();
			ctx.fill();
			ctx.restore();

			return true;
		}
	}]);

	return WordParticle;
}(_heart2.default);

exports.default = WordParticle;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fireworkParticle = __webpack_require__(4);

var _fireworkParticle2 = _interopRequireDefault(_fireworkParticle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FireworkWords = function (_FireworkParticle) {
	_inherits(FireworkWords, _FireworkParticle);

	function FireworkWords(_ref) {
		var x = _ref.x,
		    y = _ref.y,
		    _ref$size = _ref.size,
		    size = _ref$size === undefined ? 1 : _ref$size,
		    _ref$circle = _ref.circle,
		    circle = _ref$circle === undefined ? 1 : _ref$circle,
		    xStart = _ref.xStart,
		    yStart = _ref.yStart;

		_classCallCheck(this, FireworkWords);

		var _this = _possibleConstructorReturn(this, (FireworkWords.__proto__ || Object.getPrototypeOf(FireworkWords)).call(this, { x: x, y: y, size: size, circle: circle }));

		_this.time = 60;
		var e = 80;
		_this.dx = (x - xStart) / e;
		_this.dy = (y - yStart) / e;
		_this.xStart = xStart;
		_this.yStart = yStart;
		return _this;
	}

	_createClass(FireworkWords, [{
		key: 'go',
		value: function go() {
			this.x += this.vx;
			this.y += this.vy;
			this.vy += 0.02;
			this.vx *= 0.98;
			this.vy *= 0.98;
		}
	}, {
		key: 'show',
		value: function show() {
			this.xStart += this.dx;
			this.yStart += this.dy;
		}
	}, {
		key: 'render',
		value: function render(ctx) {
			this.show();
			// (--this.time <= 0 ) && this.go();
			ctx.beginPath();
			ctx.arc(this.xStart, this.yStart, this.size, 0, Math.PI * 2, false);
			ctx.fill();
		}
	}]);

	return FireworkWords;
}(_fireworkParticle2.default);

exports.default = FireworkWords;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _global = __webpack_require__(0);

var _global2 = _interopRequireDefault(_global);

var _fireworkParticle = __webpack_require__(4);

var _fireworkParticle2 = _interopRequireDefault(_fireworkParticle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Firework = function () {
	function Firework() {
		var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
		    ctx = _ref.ctx,
		    color = _ref.color,
		    x = _ref.x,
		    _ref$y = _ref.y,
		    y = _ref$y === undefined ? _global2.default.height : _ref$y,
		    xEnd = _ref.xEnd,
		    yEnd = _ref.yEnd,
		    _ref$size = _ref.size,
		    size = _ref$size === undefined ? 2 : _ref$size,
		    _ref$circle = _ref.circle,
		    circle = _ref$circle === undefined ? 1.2 : _ref$circle,
		    _ref$velocity = _ref.velocity,
		    velocity = _ref$velocity === undefined ? 3 : _ref$velocity,
		    _ref$opacity = _ref.opacity,
		    opacity = _ref$opacity === undefined ? 0.8 : _ref$opacity,
		    _ref$count = _ref.count,
		    count = _ref$count === undefined ? 200 : _ref$count,
		    wait = _ref.wait,
		    particles = _ref.particles;

		_classCallCheck(this, Firework);

		//自身属性
		this.x = x ? x : _global2.default.random({ max: _global2.default.width * 7 / 8, min: _global2.default.width / 8 });
		this.y = y;
		this.xEnd = xEnd ? xEnd : this.x;
		this.yEnd = yEnd ? yEnd : _global2.default.random({ min: _global2.default.height / 8, max: 3 * _global2.default.height / 8 });
		this.size = size;
		this.opacity = opacity;
		this.velocity = -Math.abs(velocity);
		this.status = 1;
		this.wait = wait ? wait : _global2.default.random({ min: 30, max: 60 });

		this.circle = circle;
		this.color = color ? color : 'hsla(' + 360 * Math.random() + ',80%,60%,1)';

		if (!particles) {
			this.count = count;
			this.particles = [];
			this.createParticles();
			this.type = 'normal';
		} else {
			this.type = 'words';
			this.particles = particles;
		}
		this.ctx = ctx;
	}

	_createClass(Firework, [{
		key: 'createParticles',
		value: function createParticles() {
			for (var i = 0; i < this.count; ++i) {
				this.particles.push(new _fireworkParticle2.default({ x: this.xEnd, y: this.yEnd, circle: this.circle }));
			}
		}
	}, {
		key: 'getOpacity',
		value: function getOpacity() {
			return this.status == 3 ? this.opacity : 0;
		}
	}, {
		key: 'render',
		value: function render(ctx) {
			switch (this.status) {
				case 1:
					ctx.save();
					ctx.beginPath();
					ctx.globalCompositeOperation = 'lighter';
					ctx.globalAlpha = this.opacity;
					ctx.translate(this.x, this.y);
					ctx.scale(0.8, 2.3);
					ctx.translate(-this.x, -this.y);
					ctx.fillStyle = this.color;
					ctx.arc(this.x + Math.sin(Math.PI * 2 * Math.random()) / 2, this.y, this.size, 0, Math.PI * 2, false);
					ctx.fill();
					ctx.restore();
					this.rise();
					return true;
					break;

				case 2:

					if (--this.wait <= 0) {

						this.opacity = 1;
						this.status = 3;
					}
					return true;
					break;

				case 3:
					ctx.save();
					ctx.globalCompositeOperation = 'lighter';
					ctx.globalAlpha = this.opacity;
					ctx.fillStyle = this.color;
					for (var i = 0; i < this.particles.length; ++i) {
						this.particles[i].render(this.ctx);
					}
					ctx.restore();

					this.opacity -= 0.01;
					return this.opacity > 0;
					break;
			}
		}
	}, {
		key: 'rise',
		value: function rise() {
			this.y += this.velocity;
			if (this.y - this.yEnd <= 50) {
				this.opacity = (this.y - this.yEnd) / 50;
			}
			if (this.y <= this.yEnd) {
				this.status = 2;
			}
		}
	}]);

	return Firework;
}();

exports.default = Firework;

/***/ })
/******/ ]);