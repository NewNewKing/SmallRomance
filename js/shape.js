import Heart from './heart'
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
				++count % mini == 0 && dots.push(new Heart({x,y,minSize,maxSize,size}));
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

export default Shape