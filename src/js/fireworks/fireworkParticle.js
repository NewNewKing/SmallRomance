import Particle from '../fall/particle'

class FireworkParticle extends Particle{
	constructor({x,y,size = 1,circle}){
		super({x,y,size});
		this.rate = Math.random();
		this.angle = Math.PI * 2 * Math.random();
		this.vx = circle * Math.cos(this.angle) * this.rate;
		this.vy = circle * Math.sin(this.angle) * this.rate;
	}

	go(){
		this.x += this.vx;
		this.y += this.vy; 
		this.vy += 0.02;
		this.vx *= 0.98;
		this.vy *= 0.98;
	}

	render(ctx){
		this.go();
		ctx.beginPath();
		ctx.arc(this.x,this.y,this.size,0,Math.PI * 2,false);
		ctx.fill();
	}
}


export default FireworkParticle