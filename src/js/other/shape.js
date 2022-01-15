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
	write({txt, size=50, fontFamily='Arial', x = this.canvas.width / 2, y = 100, bold = false} = {}){
		this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
		const font = `${bold ? 'bold ' : ''}${size}px ${fontFamily}`
		this.ctx.font = font;
		this.ctx.fillText(txt,x,y);
		//记录的当前字的坐标
		this.x = x;
		this.y = y;
		this.size = size;
		this.count = txt.length;

	}

	getPosition(){
		return {
			x: this.x,
			y: this.y
		}
	}

	//获取字的坐标点集合。
	getDots({mini=1,gap = 5} = {}){
		// const xs = this.x - this.count * this.size / 2 - 20;
		// const ys = this.y - this.size / 2;
		// const width = this.count * this.size + 40;
		// const height = this.size 
    const xs = 0;
    const ys = this.y - this.size / 2;
    const width = this.canvas.width;
    const height = this.size;
		const data = this.ctx.getImageData(xs, ys, width, height).data;
		let dots = [],x = xs, y = ys, count = 0;
		for(let i = 0,len = data.length; i <= len; i += ( 4 * gap )){
			if(data[i+3] > 0){
				++count % mini == 0 && dots.push({x, y});	
			}
			x += gap;
			if(x >= xs + width){
				y += gap;
				i += (gap - 1) * 4 * width - 4 * (x - xs - width) ;
				x = xs;
			}
		}
		return dots;
	}
}

export default Shape