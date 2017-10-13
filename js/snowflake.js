const random = Math.random;

class Snowflake {
	constructor({x = 0,y = 0,minSize = 20,maxSize = 60,color = '#fff',speed = 1,opacity = 0.8,rotate = 0} = {}){
		this.size = minSize + ( maxSize - minSize ) * random();
		this.x = x ? x : (750 - this.size) * random(),
		this.y = y ? y : -this.size,
		this.opacity = opacity + (1 - opacity) * random();		
		this.speed = speed + speed * random();
		this.rotate = rotate;
		this.rotateDirection = random() > 0.5 ? 1 : -1;
		this.direction = random() > 0.5 ? 1 : -1;
	}

	drop(){
		this.x += Math.random() * 0.5 * this.direction;
		this.y += this.speed;
		this.rotate += this.speed * 0.2 * this.rotateDirection;
		this.opacity = this.opacity <= 0.4 ? 0.4 : this.opacity - 0.0005;
	}

	judge({height = 1334,width = 750} = {}){
		if(this.x >= -this.size && this.x <= width && this.y <= height && this.y >= -this.size){
			return false;
		}else{
			return true;
		}
	}	


}