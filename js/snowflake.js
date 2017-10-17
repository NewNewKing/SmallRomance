const random = Math.random;

class Snowflake {
	constructor({x = 0,y = 0,minSize = 10,maxSize = 15,color = '#eee',speed = 1,opacity = 0.8,rotate = 0} = {}){
		this.size = minSize + ( maxSize - minSize ) * random();
		this.x = x ? x : (750 - this.size) * random(),
		this.y = y ? y : -this.size,
		this.opacity = opacity + (1 - opacity) * random();		
		this.speed = speed + 3 * random();
		this.rotate = rotate;
		this.rotateDirection = random() > 0.5 ? 1 : -1;
		this.direction = random() > 0.5 ? 1 : -1;
		this.color = color;
	}

	drop(){
		this.x += Math.random() * this.direction;
		this.y += this.speed;
		this.rotate += this.speed * 0.2 * this.rotateDirection;
		this.opacity = this.opacity <= 0.3 ? 0.3 : this.opacity - 0.0005;
	}

	judge({height = 1334,width = 750} = {}){
		if(this.x >= -this.size && this.x <= width && this.y <= height && this.y >= -this.size){
			return false;
		}else{
			return true;
		}
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