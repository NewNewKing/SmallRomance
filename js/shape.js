import WordParticle from './wordParticle'
import FireworkWords from './fireworkWords'
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
	write({words,size=50,fontFamily='sans-serif',x = this.canvas.width / 2,y=100} = {}){
		this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
		this.ctx.font = `bold ${size}px ${fontFamily}`;
		this.ctx.fillText(words,x,y);
		//记录的当前字的坐标
		this.x = x;
		this.y = y;
	}


	//获取字的坐标点集合。
	getDots({mini=1,minSize=8,maxSize=10,size,gap = 5,type} = {}){
		const data = this.ctx.getImageData(0,50,this.canvas.width,150).data;
		let dots = [],x = 0, y = 50,count = 0;
		for(let i = 0,len = data.length;i <= len ;i+=(4*gap)){
			if(data[i+3] > 0){
				if(type == 'firework'){
					++count % mini == 0 && dots.push(new FireworkWords({x,y,type:'words',xStart:this.x,yStart:this.y}));
				}else{
					++count % mini == 0 && dots.push(new WordParticle({x,y,minSize,maxSize,size}));
				}		
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