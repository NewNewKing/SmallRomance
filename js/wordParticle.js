import Heart from './heart'

class WordParticle extends Heart{
	constructor({x,y,minSize,maxSize,size}){
		super({x,y,minSize,maxSize,size});
	}
	render(ctx){
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

export default WordParticle