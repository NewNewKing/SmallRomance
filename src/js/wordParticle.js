import Heart from './heart'

class WordParticle extends Heart{
	constructor({x,y,minSize,maxSize,size}){
		super({x,y,minSize,maxSize,size});
		this.y0 = y;
		this.x0 = x;
	}
	render(ctx){
		ctx.save();
		ctx.beginPath();
		ctx.fillStyle = this.color;
		this.x0 = this.x + Math.sin(Math.PI * 2 * Math.random())*1;
		this.y0 = this.y + Math.sin(Math.PI * 2 * Math.random())*1;
		ctx.moveTo(this.x0 + 0.5 * this.size , this.y0 + 0.3 * this.size);
		ctx.bezierCurveTo(this.x0 + 0.1 * this.size, this.y0, this.x0, 
                        this.y0 + 0.6 * this.size, this.x0 + 0.5 * 
                        this.size, this.y0 + 0.9 * this.size);
        ctx.bezierCurveTo(this.x0 + 1 * this.size, this.y0 + 0.6 * 
                        this.size, this.x0 + 0.9 * this.size, this.y0, 
                        this.x0 + 0.5 * this.size,
                        this.y0 + 0.3 * this.size);
		ctx.closePath();
		ctx.fill();
		ctx.restore();

		return true;
	}
}

export default WordParticle