const random = Math.random;

//微粒类
class Particles {
	constructor({x,y,minSize = 5,maxSize = 7.5} =  {}){
		this.size = minSize + ( maxSize - minSize ) * random();
		this.x = x ? x : (375 - this.size) * random();
		this.y = y ? y : -this.size;
	}

	outBoundary ({height = 667,width = 375} = {}){
		if(this.x >= -this.size && this.x <= width && this.y <= height && this.y >= -this.size){
			return false;
		}else{
			return true;
		}
	}
}


//下的雪花继承微粒类
class Snowflake extends Particles{
	constructor({x,y,minSize = 5,maxSize = 7.5,color = '#eee',speed = 0.5,opacity = 0.8} = {}){
		super({x,y,minSize,maxSize});
		this.opacity = opacity + (1 - opacity) * random();		
		this.speed = speed * (1 + random());
		this.direction = random() > 0.5 ? 0.5 : -0.5;
		this.color = color;
	}

	drop(){
		this.x += Math.random() * this.direction;
		this.y += this.speed;
	}	

	draw(ctx){
		this.g = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size);
		this.g.addColorStop(0, `hsla(255,255%,255%,${this.opacity})`);
		this.g.addColorStop(1, 'hsla(255,255%,255%,0)');
		ctx.save();
		ctx.beginPath();
		ctx.fillStyle = this.g;
		ctx.arc(this.x,this.y,this.size,0,2 * Math.PI,false);
		ctx.fill();
		ctx.restore();
	}


}