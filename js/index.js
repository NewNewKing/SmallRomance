/**
* version v0.1
*/

import config from '../config/global'
// 读取图片
import imgList from '../config/imgList'
import ImgLoader from './imgLoader'

import Snowflake from './snowflake'
import Heart from './heart'
import tree from './tree'
import Shape from './shape'
import Firework from './fireworks'

(function(){
	let j = 0,item = null;

	class Canvas {
		constructor(){
			//加载图片
			ImgLoader.load(imgList).then(imgs => {
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
			this.height = config.height;
			this.width = config.height;

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
			this.fireworkTime = config.random({min:30,max:120});
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
			this.shape = new Shape();

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
			this.time % 15 == 0 && this.dropDots.push(new Heart())
			this.dropType == 'snow' && this.time % 60 == 0 && this.dropDots.push(new Snowflake());
			this.dropType == 'heart' && this.time % 15 == 0 && this.dropDots.push(new Heart());

			//雪花飘落
			for(j = this.dropDots.length - 1;j >= 0;--j){
				!this.dropDots[j].render(this.dropCtx) && this.dropDots.splice(j,1);
			}
						
			//渲染烟花
			this.createFireworks();
			for(j = this.fireworks.length - 1;j >= 0;--j){
				!this.fireworks[j].render(this.fireworkCtx) && this.fireworks.splice(j,1);
			}

			tree.render(this.titleCtx);

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
				this.fireworkTime = config.random({min:30,max:120});
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