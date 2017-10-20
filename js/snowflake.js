//下的雪花继承微粒类
class Snowflake extends Particle{
	constructor({x,y,minSize = 5,maxSize = 7.5,size,speed = 0.5,color = '#eee',opacity = 0.8} = {}){
		super({x,y,minSize,maxSize,size});
		this.opacity = opacity + (1 - opacity) * random();		
		this.speed = speed * (1 + random());
		this.direction = random() > 0.5 ? 0.5 : -0.5;
		this.color = color;
	}

	fall(){
		this.x += random() * this.direction;
		this.y += this.speed;
	}	

	draw(ctx){
		this.g = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size);
		this.g.addColorStop(0, `hsla(255,255%,255%,${this.opacity})`);
		this.g.addColorStop(1, 'hsla(255,255%,255%,0)');
		ctx.beginPath();
		// ctx.fillStyle = '#fff';
		ctx.fillStyle = this.g;
		ctx.arc(this.x,this.y,this.size,0,2 * Math.PI,false);
		ctx.fill();
	}


}