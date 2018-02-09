import FireworkParticle from './fireworkParticle'
class FireworkWords extends FireworkParticle{
	constructor({x, y, size = 1, circle = 1, xStart, yStart}){
		super({x,y,size,circle});
		
		const e = 80;
		this.dx = (x - xStart) / e;
		this.dy = (y - yStart) / e;
		this.xStart = xStart;
		this.yStart = yStart;
	}

	go(){
		this.xStart += this.dx;
		this.yStart += this.dy;
	}

	render(ctx){
		this.go();
		ctx.beginPath();
		ctx.arc(this.xStart,this.yStart,this.size,0,Math.PI * 2,false);
		ctx.fill();
	}
}


export default FireworkWords