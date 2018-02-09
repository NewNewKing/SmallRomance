import Heart from './fall/heart'

class TitleParticle extends Heart{
	constructor({xStart, yStart, x, y, minSize, maxSize, size}){
		super({x:xStart, y:yStart, minSize, maxSize, size});
		this.yEnd = y;
		this.xEnd = x;
		this.e = 240;
		this.dx = (this.xEnd - this.x) / this.e;
		this.dy = (this.yEnd - this.y) / this.e;

		this.status = 1;
	}
	go(){
		if(--this.e < 0){
			this.x = this.xEnd;
			this.y = this.yEnd;
			return true;
		}
		this.x += this.dx;
		this.y += this.dy;
		return false
	}
	render(ctx){
		this.go();



		ctx.save();
		ctx.beginPath();
		ctx.fillStyle = this.color;
		ctx.moveTo(this.x + 0.5 * this.size , this.y + 0.3 * this.size);
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

export default TitleParticle