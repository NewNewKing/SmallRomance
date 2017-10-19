// const random = Math.random;

//下心心
class HeartParticles extends Snowflake{
	constructor({x = 0,y = 0,minSize = 15,maxSize = 20,speed = 1} = {}) {
		super({minSize,maxSize,x,y});
		this.speed = speed + 1 * random();
		this.color = `hsla(${random() * 360}, 90%, 65%, 1)`;
	}
	moveTo({x,y}){

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