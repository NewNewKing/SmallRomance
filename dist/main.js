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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__particle__ = __webpack_require__(5);
const random = Math.random;
//下的雪花继承微粒类


class Snowflake extends __WEBPACK_IMPORTED_MODULE_0__particle__["a" /* default */]{
	constructor({x,y,minSize = 5,maxSize = 7.5,size,speed = 0.5,color = '#eee',opacity = 0.8} = {}){
		super({x,y,minSize,maxSize,size});
		this.opacity = opacity + (1 - opacity) * random();		
		this.speed = speed * (1 + random());
		this.direction = random() > 0.5 ? 0.5 : -0.5;
		this.color = color;
	}

	fall(){
		this.x += random() * this.direction;
		this.y += this.speed;
	}	

	render(ctx){
		this.g = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size);
		this.g.addColorStop(0, `hsla(255,255%,255%,${this.opacity})`);
		this.g.addColorStop(1, 'hsla(255,255%,255%,0)');
		ctx.beginPath();
		// ctx.fillStyle = '#fff';
		ctx.fillStyle = this.g;
		ctx.arc(this.x,this.y,this.size,0,2 * Math.PI,false);
		ctx.fill();
	}
}

/* harmony default export */ __webpack_exports__["a"] = (Snowflake);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__snowflake__ = __webpack_require__(0);
const random = Math.random;

//下心心
class Heart extends __WEBPACK_IMPORTED_MODULE_0__snowflake__["a" /* default */]{
	constructor({x = 0,y = 0,minSize = 15,maxSize = 20,size,speed = 1,stop} = {}) {
		super({minSize,maxSize,x,y,size,speed});
		this.color = `hsla(${random() * 360}, 90%, 65%, 1)`;
		this.stop = stop;
	}
	render(ctx){
		ctx.save();
		ctx.beginPath();
		ctx.fillStyle = this.color;
		ctx.moveTo(this.x + 0.5 * this.size, this.y + 0.3 * this.size);
		ctx.bezierCurveTo(this.x + 0.1 * this.size, this.y, this.x, 
                        this.y + 0.6 * this.size, this.x + 0.5 * 
                        this.size, this.y + 0.9 * this.size);
        ctx.bezierCurveTo(this.x + 1 * this.size, this.y + 0.6 * 
                        this.size, this.x + 0.9 * this.size, this.y, 
                        this.x + 0.5 * this.size,
                        this.y + 0.3 * this.size);
		ctx.closePath();
		ctx.fill();
		ctx.restore();
	}
	update(){
		this.x -= Math.sin(Math.random() * 3.142);
        this.y -= Math.sin(Math.random() * 3.142);
	}
}

/* harmony default export */ __webpack_exports__["a"] = (Heart);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_imgList__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__imgLoader__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__snowflake__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__heart__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tree__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shape__ = __webpack_require__(6);
// 读取图片








(function(){
	let j = 0,item = null;

	class Canvas {
		constructor(){
			//加载图片
			__WEBPACK_IMPORTED_MODULE_1__imgLoader__["a" /* default */].load(__WEBPACK_IMPORTED_MODULE_0__config_imgList__["a" /* default */]).then(imgs => {
				document.querySelector('#loading').style.display = 'none';
				this.imgs = this.dealImgs(imgs);				
				this.init();
			}).catch(err => {
				console.log(err);
			});		
		}
		//创建本例属性
		createProperty(){
			//画布宽高
			this.height = 667;
			this.width = 375;

			//获取画笔
			this.bgCtx = document.querySelector('#bg').getContext('2d');
			this.titleCtx = document.querySelector('#title').getContext('2d');
			this.dropCtx = document.querySelector('#snow').getContext('2d');						

			//飘落微粒的数组
			this.dropDots = [];
			//飘落的类型('snow','heart')
			this.dropType = "snow";

			//字的数组
			this.wordsList = [];
			//组成字的微粒数组
			this.dots = [];

			//动画的时间
			this.time = 0;

			
		}
		//创建缓存画布
		createCacheCanvas(){
			this.cache = document.createElement('canvas');
			this.cache.width = 375;
			this.cache.height = 667;
			this.cacheCtx = this.cache.getContext('2d');
		}
		init(){
			//创建属性
			this.createProperty();
			//创建缓存画布
			this.createCacheCanvas();

			//测试代码块
			this.test();

			//画背景图
			this.drawBg({img:this.imgs.bg2,ctx:this.bgCtx});
			//循环体
			this.loop();

		}
		test(){
			const shape = new __WEBPACK_IMPORTED_MODULE_5__shape__["a" /* default */]();
			shape.write({words:'敬请期待!',size:85});
			// const dots = shape.getDots({minSize:5,maxSize:8,mini:10});
			this.dots = shape.getDots({minSize:4,maxSize:6,mini:1,gap:5});
			// this.titleCtx.drawImage(shape.canvas,0,0,375,667);
			// console.log(this.dots.length);
			// let i;
			// for(i in this.dots){
			// 	this.dots[i].draw(this.titleCtx);
			// }
			console.log(this.dots.length);
		}		
		//动画效果
		loop(){
			//下一帧继续调用loop;
			requestAnimationFrame(this.loop.bind(this));
			// console.time('label');
 
			// 清空画布
			this.dropCtx.clearRect(0,0,this.width,this.height);
			// this.cacheCtx.clearRect(0,0,this.width,this.height);

			// 控制雪花产生速度
			++this.time >= 60000 ? 0 : this.time;
			this.time % 15 == 0 && this.dropDots.push(new __WEBPACK_IMPORTED_MODULE_3__heart__["a" /* default */]())
			this.dropType == 'snow' && this.time % 60 == 0 && this.dropDots.push(new __WEBPACK_IMPORTED_MODULE_2__snowflake__["a" /* default */]());
			this.dropType == 'heart' && this.time % 15 == 0 && this.dropDots.push(new __WEBPACK_IMPORTED_MODULE_3__heart__["a" /* default */]());

			//雪花飘落
			for(j = 0;j < this.dropDots.length;++j){
				item = this.dropDots[j];
				item.fall();
				item.outOfBounds() && this.dropDots.splice(j,1) && --j;
				item.render(this.dropCtx);
			}
			
			__WEBPACK_IMPORTED_MODULE_4__tree__["a" /* default */].render(this.titleCtx);

			//文字的动作
			for(j in this.dots){
				item = this.dots[j];
				item.render(this.dropCtx);
			}	
			// this.dropCtx.drawImage(this.cache,0,0,this.width,this.height);
			// console.timeEnd('label');
		}

		//画背景
		drawBg({ctx,img}){
			ctx.drawImage(img,0,0,this.width,this.height);
		}
		//处理图片为需要的对象类型[] => {};
		dealImgs(imgs){
			const obj = {};
			imgs.forEach(item => {
				obj[item.key] = item.img;
			});

			return obj;
		}
	}

	new Canvas();

})();

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const imgList = {
	bg2:'./img/bg2.jpg',
	// snowflake:'./img/snowflake.png'
}
/* harmony default export */ __webpack_exports__["a"] = (imgList);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// 读取图片
class ImgLoader{
	// 读取单个图片
	static loadImg(url,key) {
		return new Promise((resolve,reject) => {
			const img = new Image();
			img.onload = function(){
				resolve({key,img});
			}
			img.onerror = reject;
			img.src = url;
		});
	}

	// 读取图片数组
	static load (imgs){
		const promises = [];

		for(let key in imgs){
			promises.push(this.loadImg(imgs[key],key));
		}

		return Promise.all(promises);
	}
}

/* harmony default export */ __webpack_exports__["a"] = (ImgLoader);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const random = Math.random;

//微粒类
class Particle {
	constructor({x,y,minSize = 5,maxSize = 7.5,size,opacity = 1} =  {}){
		this.size = size ? size : minSize + ( maxSize - minSize ) * random();
		this.x = x ? x : (375 - this.size) * random();
		this.y = y ? y : -this.size;
		this.opacity = opacity;
	}

	outOfBounds ({height = 667,width = 375} = {}){
		if(this.x >= -this.size && this.x <= width && this.y <= height && this.y >= -this.size){
			return false;
		}else{
			return true;
		}
	}
}

/* harmony default export */ __webpack_exports__["a"] = (Particle);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__heart__ = __webpack_require__(1);

class Shape{
	constructor() {
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
	write({words,size=50,fontFamily='sans-serif'} = {}){
		this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
		this.ctx.font = `bold ${size}px ${fontFamily}`;
		this.ctx.fillText(words,this.canvas.width / 2,100);
	}


	//获取字的坐标点集合。
	getDots({mini=30,minSize=8,maxSize=10,size,gap=4} = {}){
		const data = this.ctx.getImageData(0,50,this.canvas.width,150).data;
		let dots = [],x = 0, y = 50,count = 0;
		for(let i = 0,len = data.length;i <= len ;i+=(4*gap)){
			if(data[i+3] > 0){
				++count % mini == 0 && dots.push(new __WEBPACK_IMPORTED_MODULE_0__heart__["a" /* default */]({x,y,minSize,maxSize,size}));
			}
			x += gap;
			if(x >= this.canvas.width){
				x = 0;
				y += gap;
				i += gap * 4 * this.canvas.width;
			}
		}
		return dots;
	}
}

/* harmony default export */ __webpack_exports__["a"] = (Shape);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const tree = (function(){

	return {
		render(ctx){

		}
	}
})()

/* harmony default export */ __webpack_exports__["a"] = (tree);


/***/ })
/******/ ]);