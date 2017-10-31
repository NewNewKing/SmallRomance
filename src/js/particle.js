import config from '../config/global.js'

//微粒类
class Particle {
	constructor({x,y,minSize = 5,maxSize = 7.5,size,opacity = 1} =  {}){
		this.size = size ? size : config.random({max:maxSize,min:minSize});
		this.x = x ? x : config.random({max:config.width  - this.size});
		this.y = y ? y : -this.size;
		this.opacity = opacity;
	}

	outOfBounds ({height = config.height,width = config.width} = {}){
		if(this.x >= -this.size && this.x <= width && this.y <= height && this.y >= -this.size){
			return false;
		}else{
			return true;
		}
	}

}

export default Particle