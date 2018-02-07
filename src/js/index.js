/**
* version v0.1
*/

// 基础配置
import config from '../config/global'
import util from '../config/util'
import '../js/resize'

// 读取图片
import imgList from '../config/imgList'
import ImgLoader from './imgLoader'

// 飘落装饰
import Snowflake from './fall/snowflake'
import Heart from './fall/heart'


// import tree from './tree'
// import Shape from './shape'
import Firework from './fireworks/fireworks'



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
			//fall、bg、fireworks
			config.canvases.forEach(canvasId => {
				this[canvasId + 'Ctx'] = document.querySelector(`#${canvasId}`).getContext('2d');
			});
			// this.titleCtx = document.querySelector('#title').getContext('2d');			
			// this.mbCtx = document.querySelector('#mb').getContext('2d');
			// this.skyColor = 'hsla(210,60%,%sky%,0.2)';
			// this.skyLight = 0;

			// 飘落微粒
			this.fallDots = [];

			// 飘落的类型('snow', 'heart', 'mix')
			this.fallType = config.fallType,

			//烟花的数组
			this.fireworkTime = util.random(...config.fireworkInterval);
			this.fireworks = [];

			//字的数组
			// this.wordsList = [];
			//组成字的微粒数组
			// this.dots = [];

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


			//创建缓存画布
			// this.createCacheCanvas();

			//显示烟花文字
			// this.shape = new Shape();

			// const words = '效果修改中|资金不够|演员未定|剧本暂无|不知道|还有没有|之后的故事'		
			// this.showFireworkWords(words.split('|'));

			//测试代码块
			this.test();

			// 循环体
			this.loop();

		}
		test(){

		}		

		testLoop(ctx){

		}
		//动画效果
		loop(){

			//下一帧继续调用loop;
			requestAnimationFrame(this.loop.bind(this));
			// console.time('label');
 
			// 清空画布
			this.fallCtx.clearRect(0,0,this.width,this.height);
			this.fireworkCtx.clearRect(0,0,this.width,this.height);
			// this.titleCtx.clearRect(0,0,this.width,this.height);
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
						
			//渲染烟花
			this.createFireworks();
			// this.skyLight = 0;
			for(i = this.fireworks.length - 1; i >= 0; --i){
				// this.skyLight = Math.max(this.skyLight,this.fireworks[j].getOpacity());
				!this.fireworks[i].render(this.fireworkCtx) && this.fireworks.splice(i,1);
			}
			// this.skyRender();

			// tree.render(this.titleCtx);

			//文字的动作
			// for(j in this.dots){
			// 	this.dots[j].render(this.dropCtx);
			// }	
			// console.timeEnd('label');

			this.testLoop(this.fallCtx);
		}
		skyRender(){
			this.mbCtx.clearRect(0,0,this.width,this.height);
			// console.log(this.skyLight);
			this.mbCtx.fillStyle = this.skyColor.replace('%sky',5 + this.skyLight * 15);
			this.mbCtx.fillRect(0,0,this.width,this.height);
		}

		showFireworkWords(wordsArr){
			if(wordsArr.length == 0) return ;
			setTimeout(function(){
				const words = wordsArr.shift().split('');
				const length = words.length;
				const size = 70;
				words.forEach((item,index)=> {
					let x;
					length % 2 == 0 ? x = config.width / 2 + (index - length / 2) * size + 1 / 2 * size : x = config.width / 2 + (index - Math.floor(length / 2)) * size;
					this.shape.write({words:item,x,size:size});
					this.fireworks.push(new Firework({ctx:this.fireworkCtx,wait:30,circle:2,x,yEnd:100,particles:this.shape.getDots({type:'firework'})}));
				});
				this.showFireworkWords(wordsArr);
			}.bind(this),2000);		
		}
		createFireworks(){
			if(--this.fireworkTime <= 0){
				this.fireworks.push(new Firework({ctx:this.fireworkCtx}));
				this.fireworkTime = util.random(...config.fireworkInterval);
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