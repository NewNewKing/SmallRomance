import config from '../../config/global.js'
import util from '../../config/util.js'

//微粒类
class Particle {
	constructor({x,y,minSize = 5,maxSize = 7.5,size,opacity = 1} =  {}){
		this.size = size ? size : util.random(minSize, maxSize);
		this.x = x ? x : util.random(0, (config.width  - this.size));
		this.y = y ? y : -this.size;
		this.opacity = opacity;
	}

	outOfBounds (height = config.height,width = config.width){
		if(this.x >= -this.size && this.x <= width && this.y <= height && this.y >= -this.size) return false;

		return true;
	}

}

export default Particle