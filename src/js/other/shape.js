class Shape{
	constructor(width = 375, height = 667) {
		// 缓存画布
		this.canvas = document.createElement('canvas');
		this.canvas.width = width;
		this.canvas.height = height;
		this.ctx = this.canvas.getContext('2d');

		this.ctx.fillStyle = 'red';
    	this.ctx.textBaseline = 'middle';
   	 	this.ctx.textAlign = 'center';
	}

	//写入想要渲染的字
	write({txt, size=50, fontFamily='Arial', x = this.canvas.width / 2, y = 100} = {}){
		this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
		this.ctx.font = `bold ${size}px ${fontFamily}`;
		this.ctx.fillText(txt,x,y);

		//记录的当前字的坐标
		this.x = x;
		this.y = y;
		this.size = size;
	}

	getPosition(){
		return {
			x: this.x,
			y: this.y
		}
	}

	//获取字的坐标点集合。
	getDots({mini=1,gap = 5} = {}){
		const data = this.ctx.getImageData(0,this.y - this.size / 2,this.canvas.width, this.size).data;
		let dots = [],x = 0, y = this.y - this.size / 2 ,count = 0;
		for(let i = 0,len = data.length;i <= len ;i+=(4*gap)){
			if(data[i+3] > 0){
				++count % mini == 0 && dots.push({x, y: y});	
			}
			x += gap;
			if(x >= this.canvas.width){
				x = 0;
				y += gap;
				i += (gap - 1) * 4 * this.canvas.width;
			}
		}
		return dots;
	}
}

export default Shape