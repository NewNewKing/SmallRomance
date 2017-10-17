(function(){
	class Canvas {
		constructor(){
			//画布宽高
			this.height = 1334;
			this.width = 750;

			//首先获取画笔
			this.bgCanvas = document.querySelector('#bg');
			this.bgCtx = this.bgCanvas.getContext('2d');

			this.snowCanvas = document.querySelector('#snow');
			this.snowCtx = this.snowCanvas.getContext('2d');

			//加载图片
			ImgLoader.load(imgList).then(imgs => {
				this.imgs = this.dealImgs(imgs);				
				this.init();
			}).catch(err => {
				console.log(2);
				console.log(err);
			});

			//雪花的数组
			this.snowflake = [];
			//动画的时间
			this.time = 0;
		}

		init(){
			const bg = this.imgs.bg2;
			const snowflake = this.imgs.snowflake;

			this.bgCtx.drawImage(bg,0,0,this.width,this.height);

			this.animate();
		}

		//处理图片为需要的对象类型
		dealImgs(imgs){
			const obj = {};
			imgs.forEach(item => {
				obj[item.key] = item.img;
			});

			return obj;
		}
		//下雪的动画
		animate(){
			let j = 0,item = null;
			const that = this;

			function snowing () {
				requestAnimationFrame(() => {
					// 清空画布
					that.snowCtx.clearRect(0,0,that.width,that.height);

					// 控制雪花产生速度
					++that.time >= 60000 ? 0 : that.time;
					that.time % 15 == 0 && that.snowflake.push(new Snowflake());
					that.time % 15 == 0 && that.snowflake.push(new HeartParticles());

					
					//执行雪花飘落
					for(j = 0;j < that.snowflake.length; j++){
						item = that.snowflake[j];
						item.drop();
						if(item.judge()){
							that.snowflake.splice(j,1);
							--j;
							continue;
						}
						item.draw(that.snowCtx);
					}			


					snowing();
				});	
			}
			snowing();
			
		}
	}

	new Canvas();

})();