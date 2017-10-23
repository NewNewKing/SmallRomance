import Particle from './particle'
class FireworkParticle extends Particle{
	constructor({x,y,size = 1,circle = 1,type}){
		super({x,y,size});
		this.rate = Math.random();
		this.angle = Math.PI * 2 * Math.random();
		this.vx = circle * Math.cos(this.angle) * this.rate;
		this.vy = circle * Math.sin(this.angle) * this.rate;

		this.type = type;
		if(this.type == 'words') this.wordsGo();
	}
	wordsGo(){
		this.time = 60;
	}

	go(){
		this.x += this.vx;
		this.y += this.vy; 
		this.vy += 0.02;
		this.vx *= 0.98;
		this.vy *= 0.98;
	}

	render(ctx){
		if(this.type == 'words'){
			(--this.time <= 0 ) && this.go();
		}else{
			this.go();
		}
		ctx.beginPath();
		ctx.arc(this.x,this.y,this.size,0,Math.PI * 2,false);
		ctx.fill();
	}
}


export default FireworkParticle