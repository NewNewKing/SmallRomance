import Particle from '../fall/particle'

class FireworkParticle extends Particle{
	constructor({x,y,size = 1.5,radius}){
		super({x,y,size});
		this.rate = Math.random();
		this.angle = Math.PI * 2 * Math.random();

		// radius = (1 - Math.pow(Math.random(), 6)) * radius;

		this.vx = radius * Math.cos(this.angle) * this.rate;
		this.vy = radius * Math.sin(this.angle) * this.rate;
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