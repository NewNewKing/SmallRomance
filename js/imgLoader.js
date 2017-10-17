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