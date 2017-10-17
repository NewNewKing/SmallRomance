// const random = Math.random;

class HeartParticles {
	constructor({x = 0,y = 0,minSize = 20,maxSize = 30,speed = 1} = {}) {
		this.size = minSize + ( maxSize - minSize ) * random();
		this.x = x ? x : (750 - this.size) * random(),
		this.y = y ? y : -this.size,
		this.speed = speed + 2 * random();
		this.color = `hsla(${random() * 360}, 90%, 65%, 1)`;
		this.direction = random() > 0.5 ? 1 : -1;
	}

	drop(){
		this.x += Math.random() * this.direction;
		this.y += this.speed;
	}

	judge({height = 1334,width = 750} = {}){
		if(this.x >= -this.size && this.x <= width && this.y <= height && this.y >= -this.size){
			return false;
		}else{
			return true;
		}
	}

	draw(ctx){
		ctx.save();
		ctx.beginPath();

		ctx.fillStyle = this.color;
		ctx.moveTo(this.x + 0.5 * this.size, this.y + 0.3 * this.size);
		ctx.bezierCurveTo(this.x + 0.1 * this.size, this.y, this.x, 
                        this.y + 0.6 * this.size, this.x + 0.5 * 
                        this.size, this.y + 0.9 * this.size);
        ctx.bezierCurveTo(this.x + 1 * this.size, this.y + 0.6 * 
                        this.size, this.x + 0.9 * this.size, this.y, 
                        this.x + 0.5 * this.size,
                        this.y + 0.3 * this.size);
		ctx.closePath();

		ctx.fill();
		ctx.restore();
	}
}