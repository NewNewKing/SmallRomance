(function(){
	//读取图片
	function imgLoader (imgs) {
		function loadImg (url,key){
			return new Promise((resolve,reject) => {
				const img = new Image();
				img.onload = function(){
					resolve({key,img});
				}
				img.onerror = reject;
				img.src = url;
			});
		}

		const promises = [];

		for(let key in imgs){
			promises.push(loadImg(imgs[key],key));
		}

		return Promise.all(promises);
	}

	//处理图片格式
	function dealImgs (imgs) {
		const obj = {};
		imgs.forEach(item => {
			obj[item.key] = item.img;
		});

		return obj;
	}

	class Draw {
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
			imgLoader(imgList).then(imgs => {
				this.imgs = dealImgs(imgs);				
				this.init();
			}).catch(err => {
				console.log(2);
				console.log(err);
			});

			//雪花的数组
			this.snowflake = [];
		}

		init(){
			const bg = this.imgs.bg2;
			const snowflake = this.imgs.snowflake;

			this.bgCtx.drawImage(bg,0,0,this.width,this.height);

			this.animate();
		}

		//下雪的动画
		animate(){
			let i = 0;
			let j = 0,item = null;

			const that = this;

			this.snowflake.push(new Snowflake());
			function snowing () {
				requestAnimationFrame(() => {
					++i >= 60000 ? 0 : i;
					if(i % 10 == 0) that.snowflake.push(new Snowflake());

					that.snowCtx.clearRect(0,0,that.width,that.height);

					for(j = 0;j < that.snowflake.length; j++){
						item = that.snowflake[j];
						item.drop();
						if(item.judge()){
							that.snowflake.splice(j,1);
							--j;
							continue;
						}
						item.draw(that.snowCtx);
						// that.snowCtx.save();
						// that.snowCtx.globalAlpha = item.opacity;
						// that.snowCtx.translate(item.x + item.size / 2,item.y + item.size / 2);
						// that.snowCtx.rotate(item.rotate * Math.PI / 180);
						// that.snowCtx.translate(-item.x - item.size / 2,-item.y - item.size / 2);
						// that.snowCtx.drawImage(that.imgs.snowflake,item.x,item.y,item.size,item.size);
						// that.snowCtx.restore();
					}			

					snowing();
				});	
			}
			snowing();
			
		}
	}

	new Draw();


	

	

	


})();