/**
* version v0.1
*/

// 读取图片
import imgList from '../config/imgList'
import ImgLoader from './other/imgLoader'

import Canvas from './canvas'


(function(){
	//处理图片为需要的对象类型[] => {};
	function dealImgs(imgs){
		const obj = {};
		imgs.forEach(item => {
			obj[item.key] = item.img;
		});

		return obj;
	}
	window.onload = function() {
		//加载图片
		ImgLoader.load(imgList).then(imgs => {
			document.querySelector('#loadingText').style.display = 'none';
			const btn = document.querySelector('#loadingBtn')
			btn.style.display = 'block';
			btn.addEventListener('click', function() {
				document.querySelector('#loading').style.display = 'none';
				new Canvas(dealImgs(imgs));
			})
			
			//bg
			// this.imgs = this.dealImgs(imgs);
			// this.init();
		}).catch(err => {
			console.log(err);
		});	
	}
	

	
})();