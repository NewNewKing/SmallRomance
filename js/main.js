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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var util = {
	random: function random() {
		var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
		var max = arguments[1];

		return min + (max - min) * Math.random();
	},
	extend: function extend(origin) {
		for (var _len = arguments.length, arg = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
			arg[_key - 1] = arguments[_key];
		}

		arg.forEach(function (item) {
			for (var key in item) {
				origin[key] = item[key];
			}
		});
		return origin;
	},


	//ms => 帧
	transTime: function transTime(time, defult) {
		return +time / 1000 * 60 | 0 || defult;
	}
};

exports.default = util;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _resize = __webpack_require__(7);

var _resize2 = _interopRequireDefault(_resize);

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var width = 360;
var height = 600;

var config = function () {

	return {
		// 整体宽高
		width: width, //---不建议改动
		height: height, //---不建议改动
		//canvas
		canvases: ['fall', 'bg', 'firework', 'dialogue'],
		// 飘落微粒产生间隔
		snowInterval: 60,
		heartInterval: 15,
		// 飘落微粒属性
		snow: {
			x: undefined,
			y: undefined,
			minSize: 5,
			maxSize: 10,
			size: undefined,
			speed: 0.5,
			opacity: 0.8
		},
		heart: {
			x: undefined,
			y: undefined,
			minSize: 15,
			maxSize: 20,
			size: undefined,
			speed: 1
		},
		// 飘落的类型('snow', 'heart', 'mix')
		fallType: 'snow',

		// 阶段一
		dialogueOpt: {
			interval: 2000, //两句话的间隔时间
			speed: 100, //语速
			color1: '#ff00ff',
			font1: '14px Arial',
			color2: '#f97afb',
			color3: 'red',
			color4: '#ffff00',
			color5: '#00ff00',
			color6: '#0000ff',
			color7: '#fff'
		},
		dialogue: [{ type: 1, name: '马飞飞', txt: '同志们，正月十五晚上，我们怎么玩？' }, { type: 2, name: '软软', txt: '想怎么玩！就怎么玩！安排巴适！' }, { type: 3, name: '安安', txt: '真的？带我去喝茶！我要喝10个！' }, { type: 4, name: '轩轩', txt: '喝啥子茶哦，大家都拖家带口的。' }, { type: 5, name: '小勇、灿灿', txt: '就是，都带了家属的，还是炸金花算了。' }, { type: 6, name: '李湘江', txt: '还是放火炮嘛，好耍！' }, { type: 7, name: '王兴欣', txt: '就是，放火炮！走起！' }],
		// 阶段二
		sunset: 10000,

		// 阶段三
		fireworkInterval: [60, 240], // 烟花产生间隔 //---不建议改动
		//烟花的属性
		fireworks: {
			x: undefined,
			y: height,
			xEnd: undefined,
			yEnd: undefined,
			size: 2,
			radius: 2, //烟花半径
			velocity: 3, //速率
			opacity: 0.8,
			count: 300, //炸裂后粒子数
			wait: undefined, //消失后 => 炸裂  等待时间
			color: undefined //烟花颜色
		},
		fireWords: '正月里来|是新年呐啊|恭喜发财|红包拿来',
		// hue:210 lightness 0
		skyColor: 'hsla({hue}, 60%, {lightness}%, 0.2)',
		fireOpt: {
			wordInterval: 3000, //每段话出现的间隔时间
			denseTime: 10000
		},

		//阶段四
		titleWords: '新年快乐|万事如意|心想事成',
		titleOpt: {
			delay: 4000, //
			distance: 120, //行间距
			e: 5000 //速率
		},

		//字的参数
		shape: { //---不建议改动
			mini: 1, //组成字的粒子数  mini越大 粒子数越少
			gap: 4 //粒子的间隔数 必须能被width整除
		},
		word: { //---不建议改动
			size: 70,
			y: 120
		} //---不建议改动


	};
}();

//ms => 帧
config.dialogueOpt.interval = _util2.default.transTime(config.dialogueOpt.interval, 120);
config.dialogueOpt.speed = _util2.default.transTime(config.dialogueOpt.speed, 18);

config.sunset = _util2.default.transTime(config.sunset, 600);

config.fireOpt.wordInterval = _util2.default.transTime(config.fireOpt.wordInterval, 180);
config.fireOpt.denseTime = _util2.default.transTime(config.fireOpt.denseTime, 600);

config.titleOpt.delay = _util2.default.transTime(config.titleOpt.delay, 240);
config.titleOpt.e = _util2.default.transTime(config.titleOpt.e, 240);

(0, _resize2.default)(config.width, config.height, config.canvases);

exports.default = config;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _global = __webpack_require__(1);

var _global2 = _interopRequireDefault(_global);

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

var _particle = __webpack_require__(3);

var _particle2 = _interopRequireDefault(_particle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// 继承微粒类


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
		    _ref$opacity = _ref.opacity,
		    opacity = _ref$opacity === undefined ? 0.8 : _ref$opacity;

		_classCallCheck(this, Snowflake);

		var _this = _possibleConstructorReturn(this, (Snowflake.__proto__ || Object.getPrototypeOf(Snowflake)).call(this, { x: x, y: y, minSize: minSize, maxSize: maxSize, size: size }));

		_this.opacity = _util2.default.random(opacity, 1);
		_this.speed = speed * (1 + Math.random());
		_this.direction = Math.random() > 0.5 ? 0.5 : -0.5;
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _global = __webpack_require__(1);

var _global2 = _interopRequireDefault(_global);

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

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

		this.size = size ? size : _util2.default.random(minSize, maxSize);
		this.x = x ? x : _util2.default.random(0, _global2.default.width - this.size);
		this.y = y ? y : -this.size;
		this.opacity = opacity;
	}

	_createClass(Particle, [{
		key: 'outOfBounds',
		value: function outOfBounds() {
			var height = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _global2.default.height;
			var width = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _global2.default.width;

			if (this.x >= -this.size && this.x <= width && this.y <= height && this.y >= -this.size) return false;

			return true;
		}
	}]);

	return Particle;
}();

exports.default = Particle;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _snowflake = __webpack_require__(2);

var _snowflake2 = _interopRequireDefault(_snowflake);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var random = Math.random;

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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _particle = __webpack_require__(3);

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
		    size = _ref$size === undefined ? 1.5 : _ref$size,
		    radius = _ref.radius;

		_classCallCheck(this, FireworkParticle);

		var _this = _possibleConstructorReturn(this, (FireworkParticle.__proto__ || Object.getPrototypeOf(FireworkParticle)).call(this, { x: x, y: y, size: size }));

		_this.rate = Math.random();
		_this.angle = Math.PI * 2 * Math.random();

		// radius = (1 - Math.pow(Math.random(), 6)) * radius;

		_this.vx = radius * Math.cos(_this.angle) * _this.rate;
		_this.vy = radius * Math.sin(_this.angle) * _this.rate;
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * version v0.1
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     */

// 基础配置


// 读取图片


// 飘落装饰


//烟花


//最后


var _global = __webpack_require__(1);

var _global2 = _interopRequireDefault(_global);

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

var _imgList = __webpack_require__(8);

var _imgList2 = _interopRequireDefault(_imgList);

var _imgLoader = __webpack_require__(10);

var _imgLoader2 = _interopRequireDefault(_imgLoader);

var _snowflake = __webpack_require__(2);

var _snowflake2 = _interopRequireDefault(_snowflake);

var _heart = __webpack_require__(4);

var _heart2 = _interopRequireDefault(_heart);

var _fireworks = __webpack_require__(11);

var _fireworks2 = _interopRequireDefault(_fireworks);

var _shape = __webpack_require__(13);

var _shape2 = _interopRequireDefault(_shape);

var _TitleParticle = __webpack_require__(14);

var _TitleParticle2 = _interopRequireDefault(_TitleParticle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
	var Canvas = function () {
		function Canvas() {
			var _this = this;

			_classCallCheck(this, Canvas);

			//初始化属性
			this.initProperty();

			//加载图片
			_imgLoader2.default.load(_imgList2.default).then(function (imgs) {
				document.querySelector('#loading').style.display = 'none';
				//bg
				_this.imgs = _this.dealImgs(imgs);
				_this.init();
			}).catch(function (err) {
				console.log(err);
			});
		}
		//创建本例属性


		_createClass(Canvas, [{
			key: 'initProperty',
			value: function initProperty() {
				var _this2 = this;

				//画布宽高
				this.height = _global2.default.height;
				this.width = _global2.default.width;

				//获取画笔
				//fall、bg、fireworks、mb
				_global2.default.canvases.forEach(function (canvasId) {
					_this2[canvasId + 'Ctx'] = document.querySelector('#' + canvasId).getContext('2d');
				});

				/*********通用*********/
				// 飘落微粒
				this.fallDots = [];
				// 飘落的类型('snow', 'heart', 'mix')
				this.fallType = _global2.default.fallType,
				//动画的时间
				this.time = 0;
				//当前执行的状态
				this.status = 1;

				/*********阶段一（对话）*********/
				// 对话的参数
				this.dialogueOpt = _util2.default.extend({}, _global2.default.dialogueOpt);
				// 话的文字
				this.dialogue = _global2.default.dialogue.shift();

				/*********阶段二（天黑）*********/
				this.sunsetTime = _global2.default.sunset;

				/*********阶段三（烟花）*********/
				//天空颜色
				this.skyColor = {
					hue: 210,
					lightness: 0
				};
				//烟花的数组
				this.fireworks = [];
				this.fireworkTime = _util2.default.random.apply(_util2.default, _toConsumableArray(_global2.default.fireworkInterval)) | 0;

				this.fireWords = _global2.default.fireWords.split('|');
				this.fireOpt = _util2.default.extend({
					end: false,
					time: 600,
					showWords: false
				}, _global2.default.fireOpt);

				/*********阶段四（点题）*********/
				this.titleOpt = {
					current: -1,
					start: false,
					ctx: [],
					end: false
				};
				//大标题
				this.titleWords = _global2.default.titleWords.split('|');
				//组成字的微粒数组
				this.titleDots = [];
			}
		}, {
			key: 'go',
			value: function go(currentStatus) {
				switch (currentStatus) {
					case 1:
						this.dialogueOpt = null;
						this.dialogue = null;
						this.dialogueCtx.clearRect(0, 0, _global2.default.width, _global2.default.height);
						++this.status;
						break;
					case 2:
						this.sunsetTime = null;
						++this.status;
						break;
					case 3:
						_global2.default.word.y -= _global2.default.titleOpt.distance;
						this.fireOpt = null;
						this.fireWords = null;
						++this.status;
						break;
					case 4:
						this.titleOpt = null;
						this.titleWords = null;
						this.titleDots = null;
						++this.status;
						break;
				}
			}
		}, {
			key: 'init',
			value: function init() {
				//画背景图
				this.drawBg(this.bgCtx, this.imgs.bg);

				//文字形状maker
				this.shapeMaker = new _shape2.default(this.width, this.height);

				//测试代码块
				this.test();

				// 循环体
				this.loop();
			}
		}, {
			key: 'test',
			value: function test() {}
		}, {
			key: 'testLoop',
			value: function testLoop() {}
			//动画效果

		}, {
			key: 'loop',
			value: function loop() {
				//下一帧继续调用loop;
				requestAnimationFrame(this.loop.bind(this));
				// console.time('label');

				// 动画的时间
				++this.time >= 60000 ? 0 : this.time;

				// 渲染飘落装饰
				this.renderFall();

				switch (this.status) {
					case 1:
						//对话阶段
						this.renderDialogue();
						break;
					case 2:
						//天黑过程
						this.sunset();
						break;
					case 3:
						// 放烟花
						this.controlFire();
						this.renderFireworks();
						break;
					case 4:
						this.renderTitle();
						this.renderFireworks();
						break;
					case 5:
						this.end();
						this.renderFireworks();
						break;
				}

				this.testLoop();
				// console.timeEnd('label');

			}
			//飘落的装饰

		}, {
			key: 'renderFall',
			value: function renderFall() {
				this.fallCtx.clearRect(0, 0, this.width, this.height);
				// 控制飘落装饰类型
				switch (this.fallType) {
					case 'snow':
						this.time % _global2.default.snowInterval == 0 && this.fallDots.push(new _snowflake2.default(_global2.default.snow));
						break;
					case 'heart':
						this.time % _global2.default.heartInterval == 0 && this.fallDots.push(new _heart2.default(_global2.default.heart));
						break;
					case 'mix':

						this.time % _global2.default.snowInterval == 0 && this.fallDots.push(new _snowflake2.default(_global2.default.snow));
						this.time % _global2.default.heartInterval == 0 && this.fallDots.push(new _heart2.default(_global2.default.heart));
						break;
				}
				// 雪花飘落
				for (var i = this.fallDots.length - 1; i >= 0; --i) {
					!this.fallDots[i].render(this.fallCtx) && this.fallDots.splice(i, 1);
				}
			}

			// 渲染对话

		}, {
			key: 'renderDialogue',
			value: function renderDialogue() {
				var ctx = this.dialogueCtx;
				ctx.clearRect(0, 0, _global2.default.width, _global2.default.height);

				ctx.fillStyle = this.dialogueOpt['color' + this.dialogue.type || 1];
				ctx.font = this.dialogueOpt['font' + this.dialogue.type || 1];

				//说话
				this.dialogue.current = this.dialogue.current || 0;
				if (--this.dialogueOpt.speed <= 0) {
					this.dialogueOpt.speed = _global2.default.dialogueOpt.speed;
					++this.dialogue.current;
				}

				ctx.fillText(this.dialogue.name + '\uFF1A' + this.dialogue.txt.slice(0, this.dialogue.current), 20, 50);

				//下一段话
				if (this.dialogue.current >= this.dialogue.txt.length && --this.dialogueOpt.interval <= 0) {
					if (_global2.default.dialogue.length == 0) {
						return this.go(1);
					}
					this.dialogue = _global2.default.dialogue.shift();
					this.dialogueOpt.interval = _global2.default.dialogueOpt.interval;
				}
			}
			// 天黑

		}, {
			key: 'sunset',
			value: function sunset() {
				if (--this.sunsetTime <= 0) {
					return this.go(2);
				}
				this.fireworkCtx.fillStyle = 'hsla(210, 60%, 5%, ' + 0.01 * (20 - 20 * (this.sunsetTime / _global2.default.sunset)) + ')';
				this.fireworkCtx.fillRect(0, 0, _global2.default.width, _global2.default.height);
			}

			//控制烟花的逻辑

		}, {
			key: 'controlFire',
			value: function controlFire() {
				--this.fireOpt.time;
				if (this.fireOpt.time == 0) {
					this.createDenseFire();
				}
				if (this.fireOpt.time <= -180) {
					!this.fireOpt.end && this.showFireworkWords();
				}
				if (this.fireOpt.time == -240) {
					this.fireOpt.end && this.fireworks.push(new _fireworks2.default({
						x: _global2.default.width / 2,
						y: _global2.default.height / 8,
						count: 600,
						radius: 5
					}));
				}
				if (this.fireOpt.time == -360) {
					this.fireOpt.end && this.go(3);
				}
			}
			//放文字烟花

		}, {
			key: 'showFireworkWords',
			value: function showFireworkWords() {
				if (this.fireWords.length == 0) {
					this.fireOpt.end = true;
					this.fireOpt.time = 180;
					return;
				}
				if (--this.fireOpt.wordInterval <= 0) {
					// 第二个参数控制是否产生烟花
					this.getDotsPostion(this.fireWords.shift(), true);
					this.fireOpt.wordInterval = _global2.default.fireOpt.wordInterval;
				}

				// 第二个参数控制是否产生烟花
				// this.getDotsPostion(wordsArr, true);
			}
			//创建密集的烟花

		}, {
			key: 'createDenseFire',
			value: function createDenseFire() {
				var _this3 = this;

				for (var i = 0; i < 10; i++) {
					setTimeout(function () {
						_this3.fireworks.push(new _fireworks2.default(_global2.default.fireworks));
					}, i * 100);
				}
			}
			//渲染烟花

		}, {
			key: 'renderFireworks',
			value: function renderFireworks() {
				this.fireworkCtx.fillStyle = _global2.default.skyColor.replace('{lightness}', 5 + this.skyColor.lightness * 15).replace('{hue}', this.skyColor.hue);
				this.fireworkCtx.fillRect(0, 0, this.width, this.height);
				//随机创建烟花
				this.createFireworks();

				this.skyColor = {
					lightness: 0,
					hue: 210
				};
				for (var i = this.fireworks.length - 1; i >= 0; --i) {
					this.skyColor = this.skyColor.lightness >= this.fireworks[i].getSkyColor().lightness ? this.skyColor : this.fireworks[i].getSkyColor();
					!this.fireworks[i].render(this.fireworkCtx) && this.fireworks.splice(i, 1);
				}
			}

			// 随机创建烟花

		}, {
			key: 'createFireworks',
			value: function createFireworks() {
				if (--this.fireworkTime <= 0) {
					this.fireworks.push(new _fireworks2.default(_global2.default.fireworks));
					this.fireworkTime = _util2.default.random.apply(_util2.default, _toConsumableArray(_global2.default.fireworkInterval)) | 0;
				}
			}

			// 渲染最后 文字的动作

		}, {
			key: 'renderTitle',
			value: function renderTitle() {
				this.createCanvas();
				this.createTitleDots();
				if (!this.titleOpt) return;
				var ctx = this.titleOpt.ctx[this.titleOpt.current];
				ctx.clearRect(0, 0, this.width, this.height);
				for (var i in this.titleDots) {
					this.titleDots[i].render(ctx);
				}
				if (--this.titleOpt.time <= 0) {
					this.titleOpt.start = false;
				}
			}
		}, {
			key: 'createCanvas',
			value: function createCanvas() {
				if (this.titleOpt.start) return;
				++this.titleOpt.current;
				var canvas = document.createElement('canvas');
				canvas.setAttribute('class', 'title');
				canvas.id = this.titleOpt.current;
				canvas.setAttribute('width', _global2.default.width);
				canvas.setAttribute('height', _global2.default.height);
				document.body.appendChild(canvas);
				this.titleOpt.ctx.push(canvas.getContext('2d'));
			}
		}, {
			key: 'createTitleDots',
			value: function createTitleDots() {
				var _this4 = this;

				if (this.titleOpt.start) return;
				if (this.titleWords.length == 0) {
					return this.go(4);
				}
				this.titleDots = [];
				this.titleOpt.start = true;
				this.titleOpt.time = _global2.default.titleOpt.e + _global2.default.titleOpt.delay;

				_global2.default.word.y += _global2.default.titleOpt.distance;

				var dots = this.getDotsPostion(this.titleWords.shift());
				dots.forEach(function (dot) {
					var option = {
						x: dot.x,
						y: dot.y,
						xStart: _util2.default.random(0, _global2.default.width),
						yStart: _util2.default.random(-100, 0),
						size: 6,
						e: _global2.default.titleOpt.e
					};
					_this4.titleDots.push(new _TitleParticle2.default(option));
				});
				this.fallType = 'mix';
			}
		}, {
			key: 'end',
			value: function end() {
				this.fallType = 'mix';
				this.time % 600 == 0 && this.createDenseFire();
			}

			//获取所有的dots集合。

		}, {
			key: 'getDotsPostion',
			value: function getDotsPostion(wordsArr, showFireworks) {
				var _this5 = this;

				var words = typeof wordsArr == 'string' ? wordsArr.split('') : wordsArr.shift().split('');
				var length = words.length;
				var size = _global2.default.word.size;
				var y = _global2.default.word.y;
				var dotsArr = [];

				words.forEach(function (item, index) {
					var x = void 0;
					//文字居中
					length % 2 == 0 ? x = _global2.default.width / 2 + (index - length / 2) * size + 1 / 2 * size : x = _global2.default.width / 2 + (index - Math.floor(length / 2)) * size;
					_this5.shapeMaker.write({ txt: item, x: x, y: y, size: size });
					var dots = _this5.shapeMaker.getDots(_global2.default.shape);
					dotsArr.push.apply(dotsArr, _toConsumableArray(dots));

					var prtOption = {};
					showFireworks && _this5.fireworks.push(new _fireworks2.default({ wait: 30, radius: 2, x: x, yEnd: y, dots: dots, prtOption: prtOption }));
				});

				return dotsArr;
			}

			//画背景

		}, {
			key: 'drawBg',
			value: function drawBg(ctx, img) {
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
function resize(width, height, canvases) {
	if (!/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
		var body = document.querySelectorAll('body')[0];
		body.style.width = width + 'px';
		body.style.height = height + 'px';
	}

	canvases.forEach(function (canvasId) {
		var el = document.querySelector('#' + canvasId);
		el.setAttribute('width', width);
		el.setAttribute('height', height);
	});
}

exports.default = resize;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var imgList = {
	bg: __webpack_require__(9)
	// snowflake:'./img/snowflake.png'
};
exports.default = imgList;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bg2.jpg";

/***/ }),
/* 10 */
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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _global = __webpack_require__(1);

var _global2 = _interopRequireDefault(_global);

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

var _fireworkParticle = __webpack_require__(5);

var _fireworkParticle2 = _interopRequireDefault(_fireworkParticle);

var _fireworkWords = __webpack_require__(12);

var _fireworkWords2 = _interopRequireDefault(_fireworkWords);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GRAVITY = 0.002;

var Firework = function () {
	function Firework() {
		var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
		    x = _ref.x,
		    _ref$y = _ref.y,
		    y = _ref$y === undefined ? _global2.default.height : _ref$y,
		    xEnd = _ref.xEnd,
		    yEnd = _ref.yEnd,
		    _ref$size = _ref.size,
		    size = _ref$size === undefined ? 2 : _ref$size,
		    _ref$radius = _ref.radius,
		    radius = _ref$radius === undefined ? 1.2 : _ref$radius,
		    _ref$velocity = _ref.velocity,
		    velocity = _ref$velocity === undefined ? 3 : _ref$velocity,
		    _ref$opacity = _ref.opacity,
		    opacity = _ref$opacity === undefined ? 0.8 : _ref$opacity,
		    _ref$count = _ref.count,
		    count = _ref$count === undefined ? 200 : _ref$count,
		    wait = _ref.wait,
		    color = _ref.color,
		    dots = _ref.dots,
		    _ref$prtOption = _ref.prtOption,
		    prtOption = _ref$prtOption === undefined ? {} : _ref$prtOption;

		_classCallCheck(this, Firework);

		//自身属性
		this.x = x ? x : _util2.default.random(_global2.default.width / 8, _global2.default.width * 7 / 8);
		this.y = y;
		this.xEnd = xEnd ? xEnd : this.x;
		this.yEnd = yEnd ? yEnd : _util2.default.random(_global2.default.height / 8, 3 * _global2.default.height / 8);

		this.size = size;
		this.opacity = opacity;
		this.velocity = -Math.abs(velocity);
		this.wait = wait ? wait : _util2.default.random(30, 60);

		this.radius = radius;
		this.GRAVITY = GRAVITY;

		this.hue = 360 * Math.random() | 0;
		this.color = color ? color : 'hsla(' + this.hue + ',80%,60%,1)';
		this.status = 1;
		if (!dots) {
			this.count = count;
			this.particles = [];
			this.createParticles();
			this.type = 'normal';
		} else {
			this.type = 'words';
			var option = { xStart: this.xEnd, yStart: this.yEnd };
			this.particles = dots.map(function (dot) {
				return new _fireworkWords2.default(_util2.default.extend({}, dot, option, prtOption));
			});
		}
	}

	_createClass(Firework, [{
		key: 'createParticles',
		value: function createParticles() {
			for (var i = 0; i < this.count; ++i) {
				this.particles.push(new _fireworkParticle2.default({ x: this.xEnd, y: this.yEnd, radius: this.radius }));
			}
		}
	}, {
		key: 'getSkyColor',
		value: function getSkyColor() {
			var skyColor = {
				lightness: this.status == 3 ? this.opacity : 0,
				hue: this.hue
			};
			return skyColor;
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
					ctx.arc(this.x + Math.sin(Math.PI * 2 * Math.random()) / 1.2, this.y, this.size, 0, Math.PI * 2, false);
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
						this.particles[i].render(ctx);
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
			this.y += this.velocity * 1;
			this.velocity += this.GRAVITY;
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

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fireworkParticle = __webpack_require__(5);

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
			this.xStart += this.dx;
			this.yStart += this.dy;
		}
	}, {
		key: 'render',
		value: function render(ctx) {
			this.go();
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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Shape = function () {
	function Shape() {
		var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 375;
		var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 667;

		_classCallCheck(this, Shape);

		// 缓存画布
		this.canvas = document.createElement('canvas');
		this.canvas.width = width;
		this.canvas.height = height;
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
			    txt = _ref.txt,
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
			this.ctx.fillText(txt, x, y);

			//记录的当前字的坐标
			this.x = x;
			this.y = y;
			this.size = size;
		}
	}, {
		key: 'getPosition',
		value: function getPosition() {
			return {
				x: this.x,
				y: this.y
			};
		}

		//获取字的坐标点集合。

	}, {
		key: 'getDots',
		value: function getDots() {
			var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
			    _ref2$mini = _ref2.mini,
			    mini = _ref2$mini === undefined ? 1 : _ref2$mini,
			    _ref2$gap = _ref2.gap,
			    gap = _ref2$gap === undefined ? 5 : _ref2$gap;

			var data = this.ctx.getImageData(0, this.y - this.size / 2, this.canvas.width, this.y + this.size / 2).data;
			var dots = [],
			    x = 0,
			    y = this.y - this.size / 2,
			    count = 0;
			for (var i = 0, len = data.length; i <= len; i += 4 * gap) {
				if (data[i + 3] > 0) {
					++count % mini == 0 && dots.push({ x: x, y: y });
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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _heart = __webpack_require__(4);

var _heart2 = _interopRequireDefault(_heart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TitleParticle = function (_Heart) {
	_inherits(TitleParticle, _Heart);

	function TitleParticle(_ref) {
		var xStart = _ref.xStart,
		    yStart = _ref.yStart,
		    x = _ref.x,
		    y = _ref.y,
		    minSize = _ref.minSize,
		    maxSize = _ref.maxSize,
		    size = _ref.size,
		    _ref$e = _ref.e,
		    e = _ref$e === undefined ? 240 : _ref$e;

		_classCallCheck(this, TitleParticle);

		var _this = _possibleConstructorReturn(this, (TitleParticle.__proto__ || Object.getPrototypeOf(TitleParticle)).call(this, { x: xStart, y: yStart, minSize: minSize, maxSize: maxSize, size: size }));

		_this.yEnd = y;
		_this.xEnd = x;
		_this.e = e;
		_this.dx = (_this.xEnd - _this.x) / _this.e;
		_this.dy = (_this.yEnd - _this.y) / _this.e;

		_this.status = 1;
		return _this;
	}

	_createClass(TitleParticle, [{
		key: 'go',
		value: function go() {
			if (--this.e < 0) {
				this.x = this.xEnd;
				this.y = this.yEnd;
				return true;
			}
			this.x += this.dx;
			this.y += this.dy;
			return false;
		}
	}, {
		key: 'render',
		value: function render(ctx) {
			this.go();

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

	return TitleParticle;
}(_heart2.default);

exports.default = TitleParticle;

/***/ })
/******/ ]);