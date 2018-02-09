/**
* version v0.1
*/

// 基础配置
import config from '../config/global'
import util from '../config/util'

// 读取图片
import imgList from '../config/imgList'
import ImgLoader from './imgLoader'

// 飘落装饰
import Snowflake from './fall/snowflake'
import Heart from './fall/heart'

//烟花
import Firework from './fireworks/fireworks'
import ShapeMaker from './shape'

//最后
import TitleParticle from './TitleParticle'



(function(){
	class Canvas {
		constructor(){
			//初始化属性
			this.initProperty();

			//加载图片
			ImgLoader.load(imgList).then(imgs => {
				document.querySelector('#loading').style.display = 'none';
				//bg
				this.imgs = this.dealImgs(imgs);
				this.init();
			}).catch(err => {
				console.log(err);
			});		
		}
		//创建本例属性
		initProperty(){
			//画布宽高
			this.height = config.height;
			this.width = config.width;

			//获取画笔
			//fall、bg、fireworks、title
			config.canvases.forEach(canvasId => {
				this[canvasId + 'Ctx'] = document.querySelector(`#${canvasId}`).getContext('2d');
			});			
			// this.mbCtx = document.querySelector('#mb').getContext('2d');

			//天空颜色
			this.skyColor = {
				hue: 210,
				lightness: 0
			};

			// 飘落微粒
			this.fallDots = [];

			// 飘落的类型('snow', 'heart', 'mix')
			this.fallType = config.fallType,

			//烟花的数组
			this.fireworks = [];
			this.fireworkTime = util.random(...config.fireworkInterval) | 0;
			

			//大标题
			this.title = '';
			//组成字的微粒数组
			this.titleDots = [];

			//动画的时间
			this.time = 0;

			
		}
		//创建缓存画布
		createCacheCanvas(){
			// this.cache = document.createElement('canvas');
			// this.cache.width = this.width;
			// this.cache.height = this.height;
			// this.cacheCtx = this.cache.getContext('2d');
		}
		init(){
			//画背景图
			this.drawBg(this.bgCtx, this.imgs.bg);

			//文字形状maker
			this.shapeMaker = new ShapeMaker(this.width, this.height);

			// const words = '你的眸|清澈动人|你的手|温柔细腻|你的心|晶莹剔透';
			// this.showFireworkWords(words.split('|'));

			//创建缓存画布
			// this.createCacheCanvas();

			//测试代码块
			this.test();

			// 循环体
			this.loop();

		}

		test(){
			// let dots = this.getDotsPostion('我爱你', true);
			// dots.forEach(dot => {
			// 	const option = {
			// 		x: dot.x,
			// 		y: dot.y,
			// 		xStart: util.random(0, config.width),
			// 		yStart: util.random(-100, 0),
			// 		size: 6
			// 	}
			// 	this.titleDots.push(new TitleParticle(option));
			// });
			// this.fallType = 'mix';
			// this.count = 1;

		}		

		testLoop(ctx){
			// if(this.time > 240 && this.count == 1){
			// 	this.count = 2;
			// 	config.word.y = 240;
			// 	let dots = this.getDotsPostion('我要照顾你', true);
			// 	dots.forEach(dot => {
			// 		const option = {
			// 			x: dot.x,
			// 			y: dot.y,
			// 			xStart: util.random(0, config.width),
			// 			yStart: util.random(-100, 0),
			// 			size: 6
			// 		}
			// 		this.titleDots.push(new TitleParticle(option));
			// 	});
			// }
			// if(this.time > 480 && this.count == 2){
			// 	this.count = 3;
			// 	config.word.y = 360;
			// 	let dots = this.getDotsPostion('一生一世', true);
			// 	dots.forEach(dot => {
			// 		const option = {
			// 			x: dot.x,
			// 			y: dot.y,
			// 			xStart: util.random(0, config.width),
			// 			yStart: util.random(-100, 0),
			// 			size: 6
			// 		}
			// 		this.titleDots.push(new TitleParticle(option));
			// 	});
			// }
		}
		//动画效果
		loop(){

			//下一帧继续调用loop;
			requestAnimationFrame(this.loop.bind(this));
			// console.time('label');
 
			// 清空画布
			this.fallCtx.clearRect(0,0,this.width,this.height);

			this.fireworkCtx.fillStyle = config.skyColor.replace('{lightness}', 5 + this.skyColor.lightness * 15).replace('{hue}' , this.skyColor.hue);
			this.fireworkCtx.fillRect(0,0,this.width,this.height);
			// this.fireworkCtx.clearRect(0,0,this.width,this.height);

			this.titleCtx.clearRect(0,0,this.width,this.height);

			// 控制雪花产生速度
			++this.time >= 60000 ? 0 : this.time;

			// 控制飘落装饰类型
			switch(this.fallType){
				case 'snow': this.time % config.snowInterval == 0 && this.fallDots.push(new Snowflake(config.snow));
				break;
 				case 'heart': this.time % config.heartInterval == 0 && this.fallDots.push(new Heart(config.heart));
 				break;
 				case 'mix': 

 				this.time % config.snowInterval == 0 && this.fallDots.push(new Snowflake(config.snow));
 				this.time % config.heartInterval == 0 && this.fallDots.push(new Heart(config.heart));
 				break;
			}

			let i = 0;
			// 雪花飘落
			for(i = this.fallDots.length - 1; i >= 0; --i){
				!this.fallDots[i].render(this.fallCtx) && this.fallDots.splice(i,1);
			}
						
			// 放烟花
			this.createFireworks();
			this.skyColor = {
				lightness: 0,
				hue: 210
			};
			for(i = this.fireworks.length - 1; i >= 0; --i){
				!this.fireworks[i].render(this.fireworkCtx) && this.fireworks.splice(i,1);
				this.skyColor = this.skyColor.lightness >= this.fireworks[i].getSkyColor().lightness ? this.skyColor : this.fireworks[i].getSkyColor();
			}

			//文字的动作
			for(i in this.titleDots){
				this.titleDots[i].render(this.titleCtx);
			}	
			// console.timeEnd('label');

			this.testLoop(this.fallCtx);
		}


		showFireworkWords(wordsArr){
			if(wordsArr.length == 0) return ;
			setTimeout(function(){

				this.getDotsPostion(wordsArr);
					
				this.showFireworkWords(wordsArr);
			}.bind(this), config.wordDelay);		
		}

		getDotsPostion(wordsArr, noFireworks){
			const words = typeof wordsArr == 'string' ? wordsArr.split('') : wordsArr.shift().split('');
			const length = words.length;
			const size = config.word.size;
			const y = config.word.y;
			const dotsArr = [];

			words.forEach((item,index)=> {
				let x;
				//文字居中
				length % 2 == 0 ? x = config.width / 2 + (index - length / 2) * size + 1 / 2 * size : x = config.width / 2 + (index - Math.floor(length / 2)) * size;
				this.shapeMaker.write({txt:item, x, y, size});
				const dots = this.shapeMaker.getDots(config.shape);
				dotsArr.push(...dots);
				const prtOption = {};
				!noFireworks && this.fireworks.push(new Firework({wait:30, radius:2, x, yEnd: y, dots, prtOption}));
			});

			return dotsArr;
		}

		// 随机创建烟花
		createFireworks(){
			if(--this.fireworkTime <= 0){
				this.fireworks.push(new Firework(config.fireworks));
				this.fireworkTime = util.random(...config.fireworkInterval) | 0;
			}
		}

		//画背景
		drawBg(ctx,img){
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