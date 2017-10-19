(function(){
	class Canvas {
		constructor(){
			//画布宽高
			this.height = 667;
			this.width = 375;

			//首先获取画笔
			this.bgCtx = document.querySelector('#bg').getContext('2d');
			this.titleCtx = document.querySelector('#title').getContext('2d');

			this.snowCtx = document.querySelector('#snow').getContext('2d');						

			//加载图片
			ImgLoader.load(imgList).then(imgs => {
				document.querySelector('#loading').style.display = 'none';
				this.imgs = this.dealImgs(imgs);				
				this.init();
			}).catch(err => {
				console.log(2);
				console.log(err);
			});

			//雪花的数组
			this.snowflake = [];
			//字的数组
			this.wordsList = [];
			//组成字的微粒数组
			this.dots = [];
			//动画的时间
			this.time = 0;

			//下的类型('snow','heart')
			this.drop = "snow";
		}

		init(){
			// 测试代码
			const shape = new Shape();
			shape.write({words:'圣诞节快乐',size:70});
			const dots = shape.getShape({minSize:5,maxSize:8,mini:10});
			// this.titleCtx.drawImage(shape.canvas,0,0,375,667);
			console.log(dots.length);
			let i;
			for(i in dots){
				dots[i].draw(this.titleCtx);
			}
			// 测试代码结束

			const bg = this.imgs.bg2;
			const snowflake = this.imgs.snowflake;

			this.bgCtx.drawImage(bg,0,0,this.width,this.height);

			this.draw();

		}

		//处理图片为需要的对象类型
		dealImgs(imgs){
			const obj = {};
			imgs.forEach(item => {
				obj[item.key] = item.img;
			});

			return obj;
		}
		//动画效果
		draw(){
			let j = 0,item = null;
			const that = this;
			snowing();

			// this.titleCtx.fillStyle = '#fff';
			// this.titleCtx.textBaseline = 'middle';
			// this.titleCtx.textAlign = 'center';
			// this.titleCtx.font = 'bold 20px sans-serif';
			// this.titleCtx.fillText('Merry Christmas',100,50);

			let data = this.titleCtx.getImageData(0,0,2,2);
			function snowing () {
				// 清空画布
				that.snowCtx.clearRect(0,0,that.width,that.height);

				// 控制雪花产生速度
				++that.time >= 60000 ? 0 : that.time;
				that.time % 15 == 0 && that.snowflake.push(new HeartParticles())
				that.drop == 'snow' && that.time % 60 == 0 && that.snowflake.push(new Snowflake());
				that.drop == 'heart' && that.time % 15 == 0 && that.snowflake.push(new HeartParticles());


				//执行雪花飘落
				for(j in that.snowflake){
					item = that.snowflake[j];
					item.drop();
					item.outBoundary() && that.snowflake.splice(j,1);
					item.draw(that.snowCtx);
				}

				// for(j = 0;j < that.dots.length;j++){

				// }
				// for(j in that.dots){
				// 	item = that.dots[j];
				// 	item.draw(that.snowCtx);
				// }

				requestAnimationFrame(snowing);
			}			
		}
	}

	new Canvas();

})();