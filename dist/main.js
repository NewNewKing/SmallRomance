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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const config = (function(){
	return {
		width:375,
		height:667,
		random({min = 0,max} = {}){
			return min + (max - min) * Math.random();
		},
		skyColor:'hsla(210, 60%, {skyColor}, 0.2)'
	}
})();

/* harmony default export */ __webpack_exports__["a"] = (config);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_global__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__particle__ = __webpack_require__(2);

//下的雪花继承微粒类


class Snowflake extends __WEBPACK_IMPORTED_MODULE_1__particle__["a" /* default */]{
	constructor({x,y,minSize = 5,maxSize = 7.5,size,speed = 0.5,color = '#eee',opacity = 0.8} = {}){
		super({x,y,minSize,maxSize,size});
		this.opacity = __WEBPACK_IMPORTED_MODULE_0__config_global__["a" /* default */].random({min:opacity,max:1});	
		this.speed = speed * (1 + Math.random());
		this.direction = Math.random() > 0.5 ? 0.5 : -0.5;
		this.color = color;
	}

	fall(){
		this.x += Math.random() * this.direction;
		this.y += this.speed;
	}	

	render(ctx){
		this.fall();
		if(this.outOfBounds()) return false;
		
		this.g = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size);
		this.g.addColorStop(0, `hsla(255,255%,255%,${this.opacity})`);
		this.g.addColorStop(1, 'hsla(255,255%,255%,0)');
		ctx.beginPath();
		ctx.fillStyle = this.g;
		ctx.arc(this.x,this.y,this.size,0,2 * Math.PI,false);
		ctx.fill();
		return true;
	}
}

/* harmony default export */ __webpack_exports__["a"] = (Snowflake);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_global_js__ = __webpack_require__(0);


//微粒类
class Particle {
	constructor({x,y,minSize = 5,maxSize = 7.5,size,opacity = 1} =  {}){
		this.size = size ? size : __WEBPACK_IMPORTED_MODULE_0__config_global_js__["a" /* default */].random({max:maxSize,min:minSize});
		this.x = x ? x : __WEBPACK_IMPORTED_MODULE_0__config_global_js__["a" /* default */].random({max:__WEBPACK_IMPORTED_MODULE_0__config_global_js__["a" /* default */].width  - this.size});
		this.y = y ? y : -this.size;
		this.opacity = opacity;
	}

	outOfBounds ({height = __WEBPACK_IMPORTED_MODULE_0__config_global_js__["a" /* default */].height,width = __WEBPACK_IMPORTED_MODULE_0__config_global_js__["a" /* default */].width} = {}){
		if(this.x >= -this.size && this.x <= width && this.y <= height && this.y >= -this.size){
			return false;
		}else{
			return true;
		}
	}

}

/* harmony default export */ __webpack_exports__["a"] = (Particle);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__snowflake__ = __webpack_require__(1);
const random = Math.random;

//下心心
class Heart extends __WEBPACK_IMPORTED_MODULE_0__snowflake__["a" /* default */]{
	constructor({x = 0,y = 0,minSize = 15,maxSize = 20,size,speed = 1} = {}) {
		super({minSize,maxSize,x,y,size,speed});
		this.color = `hsla(${random() * 360}, 90%, 65%, 1)`;
	}
	render(ctx){
		this.fall();
		if(this.outOfBounds()) return false;

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

		return true;
	}
}

/* harmony default export */ __webpack_exports__["a"] = (Heart);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__particle__ = __webpack_require__(2);

class FireworkParticle extends __WEBPACK_IMPORTED_MODULE_0__particle__["a" /* default */]{
	constructor({x,y,size = 1,circle}){
		super({x,y,size});
		this.rate = Math.random();
		this.angle = Math.PI * 2 * Math.random();
		this.vx = circle * Math.cos(this.angle) * this.rate;
		this.vy = circle * Math.sin(this.angle) * this.rate;
	}

	go(){
		this.x += this.vx;
		this.y += this.vy; 
		this.vy += 0.02;
		this.vx *= 0.98;
		this.vy *= 0.98;
	}

	render(ctx){
		this.go();
		ctx.beginPath();
		ctx.arc(this.x,this.y,this.size,0,Math.PI * 2,false);
		ctx.fill();
	}
}


/* harmony default export */ __webpack_exports__["a"] = (FireworkParticle);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_global__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_imgList__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__imgLoader__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__snowflake__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__heart__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tree__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shape__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__fireworks__ = __webpack_require__(12);
/**
* version v0.1
*/


// 读取图片









(function(){
	let j = 0,item = null;

	class Canvas {
		constructor(){
			//加载图片
			__WEBPACK_IMPORTED_MODULE_2__imgLoader__["a" /* default */].load(__WEBPACK_IMPORTED_MODULE_1__config_imgList__["a" /* default */]).then(imgs => {
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
			this.height = __WEBPACK_IMPORTED_MODULE_0__config_global__["a" /* default */].height;
			this.width = __WEBPACK_IMPORTED_MODULE_0__config_global__["a" /* default */].height;

			//获取画笔
			this.bgCtx = document.querySelector('#bg').getContext('2d');
			this.fireworkCtx = document.querySelector('#firework').getContext('2d');
			this.titleCtx = document.querySelector('#title').getContext('2d');
			this.dropCtx = document.querySelector('#snow').getContext('2d');						



			//飘落微粒的数组
			this.dropDots = [];
			//飘落的类型('snow','heart')
			this.dropType = "snow";

			//烟花的数组
			this.fireworkTime = __WEBPACK_IMPORTED_MODULE_0__config_global__["a" /* default */].random({min:30,max:120});
			this.fireworks = [];

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
			this.cache.width = this.width;
			this.cache.height = this.height;
			this.cacheCtx = this.cache.getContext('2d');
		}
		init(){
			//创建属性
			this.createProperty();
			//创建缓存画布
			this.createCacheCanvas();

			//画背景图

			this.drawBg({img:this.imgs.bg2,ctx:this.bgCtx});

			//显示烟花文字
			this.shape = new __WEBPACK_IMPORTED_MODULE_6__shape__["a" /* default */]();

			const words = '效果修改中|敬请期待|祝大家|万事如意|心想事成|开发者：|王兴欣&缪宇'		
			this.showFireworkWords(words.split('|'));

			//测试代码块
			this.test();

			//循环体
			this.loop();

		}
		test(){

			// this.shape.write({words:'敬请期待!',size:85});
			// this.dots = this.shape.getDots({minSize:4,maxSize:6,mini:1,gap:5});
		}		
		//动画效果
		loop(){
			//下一帧继续调用loop;
			requestAnimationFrame(this.loop.bind(this));
			// console.time('label');
 
			// 清空画布
			this.dropCtx.clearRect(0,0,this.width,this.height);
			this.fireworkCtx.clearRect(0,0,this.width,this.height);
			this.titleCtx.clearRect(0,0,this.width,this.height);

			// 控制雪花产生速度
			++this.time >= 60000 ? 0 : this.time;
			this.time % 15 == 0 && this.dropDots.push(new __WEBPACK_IMPORTED_MODULE_4__heart__["a" /* default */]())
			this.dropType == 'snow' && this.time % 60 == 0 && this.dropDots.push(new __WEBPACK_IMPORTED_MODULE_3__snowflake__["a" /* default */]());
			this.dropType == 'heart' && this.time % 15 == 0 && this.dropDots.push(new __WEBPACK_IMPORTED_MODULE_4__heart__["a" /* default */]());

			//雪花飘落
			for(j = this.dropDots.length - 1;j >= 0;--j){
				!this.dropDots[j].render(this.dropCtx) && this.dropDots.splice(j,1);
			}
						
			//渲染烟花
			this.createFireworks();
			for(j = this.fireworks.length - 1;j >= 0;--j){
				!this.fireworks[j].render(this.fireworkCtx) && this.fireworks.splice(j,1);
			}

			// tree.render(this.titleCtx);

			//文字的动作
			// for(j in this.dots){
			// 	this.dots[j].render(this.dropCtx);
			// }	
			// console.timeEnd('label');
		}
		showFireworkWords(wordsArr){
			if(wordsArr.length == 0) return ;
			setTimeout(function(){
				const words = wordsArr.shift().split('');
				const length = words.length;
				const size = 70;
				words.forEach((item,index)=> {
					let x;
					length % 2 == 0 ? x = __WEBPACK_IMPORTED_MODULE_0__config_global__["a" /* default */].width / 2 + (index - length / 2) * size + 1 / 2 * size : x = __WEBPACK_IMPORTED_MODULE_0__config_global__["a" /* default */].width / 2 + (index - Math.floor(length / 2)) * size;
					this.shape.write({words:item,x,size:size});
					this.fireworks.push(new __WEBPACK_IMPORTED_MODULE_7__fireworks__["a" /* default */]({ctx:this.fireworkCtx,wait:30,circle:2,x,yEnd:100,particles:this.shape.getDots({type:'firework'})}));
				});
				this.showFireworkWords(wordsArr);
			}.bind(this),2000);

			
			
		}
		createFireworks(){
			if(--this.fireworkTime <= 0){
				this.fireworks.push(new __WEBPACK_IMPORTED_MODULE_7__fireworks__["a" /* default */]({ctx:this.fireworkCtx}));
				this.fireworkTime = __WEBPACK_IMPORTED_MODULE_0__config_global__["a" /* default */].random({min:30,max:120});
			}
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
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const imgList = {
	bg2:'./img/bg2.jpg',
	// snowflake:'./img/snowflake.png'
}
/* harmony default export */ __webpack_exports__["a"] = (imgList);


/***/ }),
/* 7 */
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
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 *  create by miaoyu  2017/10/22 
 */
const tree = (function(){


	//
	const MAX_FLOWER_AGE = 50;
	//
	const MAX_GROWTH_TICKS = 15;
	// 树枝颜色
	const BRANCH_COLOR = "rgb(101, 67, 33)";
	// 树枝分叉层数
	const MAX_BRANCHING = 8;
	// 树干初始宽度
	const TRUNK_WIDTH = 12;
	// 递减因子
	const BRANCH_SHRINKAGE = 0.8;
	// 树杈分开度因子
	const MAX_ANGLE_DELTA = Math.PI / 2;
	// 动画延迟
	const DELAY = 0;

	const canvas = document.getElementById("title");
	// canvas高度
	const CANVAS_HEIGHT = canvas.height;
	// canvas宽度
	const CANVAS_WIDTH = canvas.width;

	// save random to cache
	const cacheRandom = [];

	let ctx;


	const renderBranch = ({ x1, y1, x2, y2, branchWidth }) => {
		ctx.beginPath();
		ctx.lineWidth = branchWidth;
		ctx.strokeStyle="rgb(101, 67, 33)";
		ctx.moveTo(x1,y1);
		ctx.lineTo(x2,y2);
		ctx.stroke();
	};

	const growBranch = ({ x1, y1, length, angle, depth, branchWidth }) => {

		const x2 = x1 + length * Math.cos(angle);
		const y2 = y1 + length * Math.sin(angle);
		renderBranch({ x1, y1, x2, y2, branchWidth });

		const newDepth = depth - 1;
		if (newDepth == 0) {
			return
		}

		// 生成分叉
		const newBranchWidth = branchWidth * BRANCH_SHRINKAGE;

		// Promise.all(
			[1,-1].map(direction => {

				// save to cahce
				const toObject = a => (a ? a : {});
				cacheRandom[newDepth] = toObject(cacheRandom[newDepth])
				cacheRandom[newDepth][direction] = cacheRandom[newDepth][direction] ? cacheRandom[newDepth][direction] : {"0":Math.random(), "1":Math.random()}

				const newAngle = angle + MAX_ANGLE_DELTA * (cacheRandom[newDepth][direction][0] * 0.5 * direction);
				const newLength = length * (BRANCH_SHRINKAGE + cacheRandom[newDepth][direction][1]* (1.0 - BRANCH_SHRINKAGE));

				growBranch({ 
					x1: x2, 
					y1: y2, 
					length: newLength,
					angle: newAngle, 
					depth: newDepth, 
					branchWidth:newBranchWidth 
				})

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
				
			})
		// ).then(() => {console.log('done')})

		
	}

	const growTree = () => {
		return growBranch({
			// 树的出生位置
			x1: Math.floor(CANVAS_WIDTH / 2),
			y1: Math.floor(CANVAS_HEIGHT / 1.02),
			length: 60,
			depth: MAX_BRANCHING,
			angle: -Math.PI / 2,
			branchWidth: TRUNK_WIDTH
		});
	}

	return {
		render(drawPen){

			ctx = drawPen
			growTree()
			console.log(cacheRandom)
		}
	}
})()


/* unused harmony default export */ var _unused_webpack_default_export = (tree);


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wordParticle__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fireworkWords__ = __webpack_require__(11);


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
	write({words,size=50,fontFamily='sans-serif',x = this.canvas.width / 2,y=100} = {}){
		this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
		this.ctx.font = `bold ${size}px ${fontFamily}`;
		this.ctx.fillText(words,x,y);
		//记录的当前字的坐标
		this.x = x;
		this.y = y;
	}


	//获取字的坐标点集合。
	getDots({mini=1,minSize=8,maxSize=10,size,gap = 5,type} = {}){
		const data = this.ctx.getImageData(0,50,this.canvas.width,150).data;
		let dots = [],x = 0, y = 50,count = 0;
		for(let i = 0,len = data.length;i <= len ;i+=(4*gap)){
			if(data[i+3] > 0){
				if(type == 'firework'){
					++count % mini == 0 && dots.push(new __WEBPACK_IMPORTED_MODULE_1__fireworkWords__["a" /* default */]({x,y,type:'words',xStart:this.x,yStart:this.y}));
				}else{
					++count % mini == 0 && dots.push(new __WEBPACK_IMPORTED_MODULE_0__wordParticle__["a" /* default */]({x,y,minSize,maxSize,size}));
				}		
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
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__heart__ = __webpack_require__(3);


class WordParticle extends __WEBPACK_IMPORTED_MODULE_0__heart__["a" /* default */]{
	constructor({x,y,minSize,maxSize,size}){
		super({x,y,minSize,maxSize,size});
		this.y0 = y;
		this.x0 = x;
	}
	render(ctx){
		ctx.save();
		ctx.beginPath();
		ctx.fillStyle = this.color;
		this.x0 = this.x + Math.sin(Math.PI * 2 * Math.random())*1;
		this.y0 = this.y + Math.sin(Math.PI * 2 * Math.random())*1;
		ctx.moveTo(this.x0 + 0.5 * this.size , this.y0 + 0.3 * this.size);
		ctx.bezierCurveTo(this.x0 + 0.1 * this.size, this.y0, this.x0, 
                        this.y0 + 0.6 * this.size, this.x0 + 0.5 * 
                        this.size, this.y0 + 0.9 * this.size);
        ctx.bezierCurveTo(this.x0 + 1 * this.size, this.y0 + 0.6 * 
                        this.size, this.x0 + 0.9 * this.size, this.y0, 
                        this.x0 + 0.5 * this.size,
                        this.y0 + 0.3 * this.size);
		ctx.closePath();
		ctx.fill();
		ctx.restore();

		return true;
	}
}

/* harmony default export */ __webpack_exports__["a"] = (WordParticle);

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fireworkParticle__ = __webpack_require__(4);

class FireworkWords extends __WEBPACK_IMPORTED_MODULE_0__fireworkParticle__["a" /* default */]{
	constructor({x,y,size = 1,circle = 1,xStart,yStart}){
		super({x,y,size,circle});
		this.time = 60;
		const e = 80;
		this.dx = (x - xStart) / e;
		this.dy = (y - yStart) / e;
		this.xStart = xStart;
		this.yStart = yStart;
	}

	go(){
		this.x += this.vx;
		this.y += this.vy; 
		this.vy += 0.02;
		this.vx *= 0.98;
		this.vy *= 0.98;
	}

	show(){
		this.xStart += this.dx;
		this.yStart += this.dy;
	}

	render(ctx){
		this.show();
		// (--this.time <= 0 ) && this.go();
		ctx.beginPath();
		ctx.arc(this.xStart,this.yStart,this.size,0,Math.PI * 2,false);
		ctx.fill();
	}
}


/* harmony default export */ __webpack_exports__["a"] = (FireworkWords);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_global__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fireworkParticle__ = __webpack_require__(4);


class Firework {
	constructor({ctx,color,x,y = __WEBPACK_IMPORTED_MODULE_0__config_global__["a" /* default */].height,xEnd,yEnd,size = 2,circle = 1.2,velocity = 3,opacity = 0.8,count=200,wait,particles} = {}){
		//自身属性
		this.x = x ? x : __WEBPACK_IMPORTED_MODULE_0__config_global__["a" /* default */].random({max:__WEBPACK_IMPORTED_MODULE_0__config_global__["a" /* default */].width * 7 / 8,min:__WEBPACK_IMPORTED_MODULE_0__config_global__["a" /* default */].width / 8});
		this.y = y;
		this.xEnd = xEnd ? xEnd : this.x;
		this.yEnd = yEnd ? yEnd : __WEBPACK_IMPORTED_MODULE_0__config_global__["a" /* default */].random({min:__WEBPACK_IMPORTED_MODULE_0__config_global__["a" /* default */].height/8,max:3*__WEBPACK_IMPORTED_MODULE_0__config_global__["a" /* default */].height/8});
		this.size = size;
		this.opacity = opacity;
		this.velocity = -Math.abs(velocity);
		this.status = 1;
		this.wait = wait ? wait : __WEBPACK_IMPORTED_MODULE_0__config_global__["a" /* default */].random({min:30,max:60});
		
		this.circle = circle;		
		this.color = color ? color : `hsla(${360 * Math.random()},80%,60%,1)`;
		
		if(!particles){
			this.count = count;
			this.particles = [];
			this.createParticles();
			this.type = 'normal';
		}else{
			this.type = 'words';
			this.particles = particles;
		}
		this.ctx = ctx;
		
	}
	createParticles(){
		for(let i = 0;i < this.count;++i){
			this.particles.push(new __WEBPACK_IMPORTED_MODULE_1__fireworkParticle__["a" /* default */]({x:this.xEnd,y:this.yEnd,circle:this.circle}));
		}
	}
	render(ctx){
		switch (this.status){
			case 1:
				ctx.save();
				ctx.beginPath();
				ctx.globalCompositeOperation = 'lighter';
				ctx.globalAlpha = this.opacity;
				ctx.translate(this.x,this.y);
				ctx.scale(0.8,2.3);
				ctx.translate(-this.x,-this.y);
				ctx.fillStyle = this.color;
				ctx.arc(this.x + Math.sin(Math.PI * 2 * Math.random())/2,this.y,this.size,0,Math.PI * 2,false);
				ctx.fill();
				ctx.restore();
				this.rise();
				return true;
			break;

			case 2:

				if(--this.wait <= 0){

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
				for(let i = 0;i < this.particles.length;++i){
					this.particles[i].render(this.ctx);
				}
				ctx.restore();

				this.opacity -= 0.01;
				return this.opacity > 0;
			break;
		}
	}
	rise(){
		this.y += this.velocity;
		if(this.y - this.yEnd <= 50){
			this.opacity = (this.y - this.yEnd) / 50;
		}
		if(this.y <= this.yEnd){
			this.status = 2;
		}
	}
}

/* harmony default export */ __webpack_exports__["a"] = (Firework);

/***/ })
/******/ ]);