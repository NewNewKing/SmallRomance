import FireworkParticle from './fireworkParticle'
class FireworkWords extends FireworkParticle{
	constructor({x,y,size = 1,circle = 1,xStart,yStart}){
		super({x,y,size,circle});
		this.time = 60;
		this.dx = (x - xStart) / 50;
		this.dy = (y - yStart) / 50;
		this.xStart = xStart;
		this.yStart = yStart;
	}

	go(){
		this.x += this.vx;
		this.y += this.vy; 
		this.vy += 0.02;
		this.vx *= 0.98;
		this.vy *= 0.98;
	}

	show(){
		this.xStart += this.dx;
		this.yStart += this.dy;
	}

	render(ctx){
		this.show();
		(--this.time <= 0 ) && this.go();
		ctx.beginPath();
		ctx.arc(this.xStart,this.yStart,this.size,0,Math.PI * 2,false);
		ctx.fill();
	}
}


export default FireworkWords