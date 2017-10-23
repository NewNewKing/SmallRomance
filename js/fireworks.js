import config from '../config/global'
import FireworkParticle from './fireworkParticle'
class Firework {
	constructor({ctx,color,x,y = config.height,xEnd,yEnd,size = 2,circle = 2,velocity = 3,opacity = 1,count=300,wait} = {}){

		this.x = x ? x : config.random({max:config.width * 7 / 8,min:config.width / 8});
		this.y = y;
		this.size = size;
		this.circle = circle;
		this.xEnd = xEnd ? xEnd : this.x;
		this.yEnd = yEnd ? yEnd : config.random({min:config.height/8,max:3*config.height/8});

		this.velocity = -Math.abs(velocity);
		this.status = 1;
		this.color = color ? color : `hsla(${360 * Math.random()},80%,60%,1)`;
		this.wait = wait ? wait : config.random({min:30,max:60});
		this.count = count;
		this.particles = [];

		this.ctx = ctx;
		this.createParticles();
	}
	createParticles(){
		for(let i = 0;i < this.count;++i){
			this.particles.push(new FireworkParticle({x:this.xEnd,y:this.yEnd,circle:this.circle}));
		}
	}
	render(ctx){
		switch (this.status){
			case 1:
				ctx.save();
				ctx.beginPath();
				ctx.globalCompositeOperation = 'lighter';
				ctx.globalAlpha = this.opacity;
				ctx.translate(this.x,this.y);
				ctx.scale(0.8,2.3);
				ctx.translate(-this.x,-this.y);
				ctx.fillStyle = this.color;
				ctx.arc(this.x,this.y,this.size,0,Math.PI * 2,false);
				ctx.fill();
				ctx.restore();
				this.rise();
				return true;
			break;

			case 2:
				if(--this.wait <= 0){
					this.opacity = 1;
					this.status = 3;
				}

				return true;
			break;

			case 3:
				ctx.save();
				ctx.globalCompositeOperation = 'lighter';
				ctx.globalAlpha = this.opacity;
				ctx.fillStyle = this.color;
				for(let i = 0;i < this.count;++i){
					this.particles[i].render(this.ctx);
				}
				ctx.restore();

				this.opacity -= 0.01;
				return this.opacity > 0;
			break;
		}
	}
	rise(){
		this.y += this.velocity;
		if(this.y - this.yEnd <= 50){
			this.opacity = (this.y - this.yEnd) / 50;
		}
		if(this.y <= this.yEnd){
			this.status = 2;
		}
	}
}

export default Firework