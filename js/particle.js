const random = Math.random;

//微粒类
class Particle {
	constructor({x,y,minSize = 5,maxSize = 7.5,size} =  {}){
		this.size = size ? size : minSize + ( maxSize - minSize ) * random();
		this.x = x ? x : (375 - this.size) * random();
		this.y = y ? y : -this.size;
	}

	outOfBounds ({height = 667,width = 375} = {}){
		if(this.x >= -this.size && this.x <= width && this.y <= height && this.y >= -this.size){
			return false;
		}else{
			return true;
		}
	}
}