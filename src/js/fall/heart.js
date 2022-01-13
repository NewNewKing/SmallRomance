const random = Math.random;
import Snowflake from './snowflake'

class Heart extends Snowflake{
	constructor({x = 0,y = 0,minSize = 15,maxSize = 20,size,speed = 1, color} = {}) {
		super({minSize,maxSize,x,y,size,speed});
		this.color = color || `hsla(${random() * 360}, 90%, 65%, 1)`; 
	}
	render(ctx){
		this.fall();
		if(this.outOfBounds()) return false;

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

		return true;
	}
}

export default Heart